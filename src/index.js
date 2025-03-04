/**
 * Dependencies
 */
import fs from 'fs';
import path from 'path';
import { replaceInFileSync } from 'replace-in-file';
import cliProgress from 'cli-progress';

/**
 * Lokalise to defaultMessages
 */
const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
const errorLog = [];
const successLog = [];
let errorCount = 0;
let successCount = 0;

export function toDefaultMessages(config) {
  let translations;
  try {
    translations = JSON.parse(fs.readFileSync(config.translationPath));
  } catch (e) {
    console.log('Failed to parse JSON of the translations file:\n', e);
    return;
  }

  const dataArray = Object.keys(translations).map((key) => ({
    key,
    value: translations[key],
  }));

  let dataArrayDiff;
  if (config.oldTranslationPath) {
    try {
      const ot = JSON.parse(fs.readFileSync(config.oldTranslationPath));
      dataArrayDiff = getKeysDiff(dataArray, ot);
    } catch (e) {
      console.log('Failed to parse JSON of the old translations file:\n', e);
      return;
    }
  }

  const data = dataArrayDiff || dataArray;

  console.log(`Checking ${data.length} values...\n`);
  progressBar.start(data.length, 0);

  data.forEach(filesForKey(config));

  progressBar.stop();

  logger(errorLog, successLog, config);
}

function filesForKey(config) {
  return ({ key, value }) => {
    const filesForKey = replaceInFileSync({
      files: config.filesPath,
      from: matcher(key, true, 'g'),
      to: '',
      hasChanged: true,
      dry: true,
    }).filter(({ hasChanged }) => hasChanged);

    if (config.checkDuplicates && filesForKey.length > 1) {
      errorLog.push(
        { message: 'Duplicate key found:', type: 'group' },
        `* key: ${key}`,
        `* value: ${value}`,
        {
          message: `* found ${filesForKey.length} affected files:`,
          type: 'group',
        },
        ...filesForKey.map(({ file }, index) => `${index + 1}. : ${path.relative(process.cwd(), file)}`),
        { message: '', type: 'groupEnd' },
        { message: '', type: 'groupEnd' },
      );
      errorCount += 1;
    }

    filesForKey.forEach(replaceContent(key, value));

    progressBar.increment();
  };
}

function replaceContent(key, value) {
  return ({ file }) => {
    const content = fs
      .readFileSync(file, 'utf8')
      .replace(/(\r\n|\n|\r)/gm, '')
      .replace(/ {2,10}/gm, ' ')
      .replace(/,\s*\}/g, '}');

    let oldValue;
    const matches = content.match(matcher(key, false, undefined));
    const match = matches?.[1] || matches?.[2] || matches?.[3];

    if (match) {
      oldValue = match;
    } else {
      errorLog.push(`* Value for id "${key}" was not found in file (${path.relative(process.cwd(), file)})`);
      errorCount += 1;
      return;
    }

    if (oldValue === value || !oldValue) {
      return;
    }

    const regex = new RegExp(
      `defaultMessage:((\n|\r|\r\n)? {1,10}('|"))` + oldValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + `('|")`,
      'gm',
    );

    try {
      const valueHasDoubleQuotes = value.includes(`"`);
      const valueHasSingleQuotes = value.includes(`'`);

      let formattedValue = `"${value}"`;
      if (valueHasSingleQuotes && valueHasDoubleQuotes) {
        formattedValue = `\`${value}\``;
      }
      if (valueHasDoubleQuotes) {
        formattedValue = `'${value}'`;
      }

      replaceInFileSync({
        files: file,
        from: regex,
        to: `defaultMessage: ${formattedValue}`,
        hasChanged: true,
      });
    } catch (e) {
      errorLog.push(`* Replacing failed:\n ${e}`);
      errorCount += 1;
      return;
    }

    successLog.push(`* Replaced defaultMessage "${oldValue}" with "${value}" from lokalise`);
    successCount += 1;
  };
}

function logger(errorLog, successLog, config) {
  const consoleMapper = (l) => {
    if (l.type) {
      console[l.type](l.message);
    } else {
      console.log(l);
    }
  };

  if (errorCount) {
    [`\n${errorCount} errors occured:`, '-------------------------------------------\n', ...errorLog].forEach(
      consoleMapper,
    );
  }

  if (successCount) {
    [
      `\nSuccessfully replaced ${successCount} defaultMessages:`,
      '-------------------------------------------\n',
      ...successLog,
    ].forEach(consoleMapper);
  }

  const errorTitle = `\n# ${errorCount} errors occured:`;
  const successTitle = `\n# Successfully replaced ${successCount} defaultMessages:`;

  const logString = [
    errorTitle,
    ...errorLog
      .filter((e) => e.type !== 'groupEnd')
      .map((e) => e.message || e)
      .map((m) => (m === 'Duplicate key found:' ? `\n**Duplicate key found:**` : m))
      .map((m) => (m.match(/\d{1,2}. : \w{1,}/) ? `  ${m.split(':')[0]}:<a>${m.split(':')[1]}</a>` : m)),
    !errorCount ? `No errors occurred, no action needed!\n` : undefined,
    successTitle,
    ...successLog,
    !successCount ? `No replacing needed, source files are in sync!` : undefined,
  ]
    .filter(Boolean)
    .join('\n');

  if (config.saveLog) {
    console.log('\nWriting to "lokalise_log.md"...');
    const logPath = process.cwd() + '/lokalise_log.md';
    fs.writeFileSync(logPath, logString);
  }
}

function getKeysDiff(data, ot) {
  const filteredData = data.filter(({ key, value }) => !ot[key] || (ot[key] && value !== ot[key]));

  return filteredData;
}

function matcher(key, partial, flags) {
  const whiteSpace = '(?:\\s|\t|\n|\r)*';
  const quotes = `(?:"|')`;
  const appendage = !partial
    ? `${whiteSpace}(?:(?:")([^"]+)(?:")|(?:')([^']+)(?:')|(?:\`)([^\`]+)(?:\`))${whiteSpace}}`
    : '';

  return new RegExp(`id:${whiteSpace}${quotes}${key}${quotes},${whiteSpace}defaultMessage:${appendage}`, flags);
}

export default {
  toDefaultMessages,
};
