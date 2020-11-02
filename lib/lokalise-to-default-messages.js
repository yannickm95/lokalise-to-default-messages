/**
 * Dependencies
 */
const fs = require("fs");
const path = require("path");
const replace = require("replace-in-file");
const cliProgress = require("cli-progress");

/**
 * Lokalise to defaultMessages
 */
const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
let errorLog = [];
let errorCount = 0;
let successLog = [];
let successCount = 0;

function toDefaultMessages(config) {
  let t;
  try {
    t = JSON.parse(fs.readFileSync(config.translationPath));
  } catch (e) {
    console.log("Failed to parse JSON translation file:\n", e);
    return;
  }

  const dataArray = Object.keys(t).map((key) => ({ key, value: t[key] }));

  console.log(`Checking ${dataArray.length} values...\n`);
  bar.start(dataArray.length, 0);

  dataArray.forEach(filesForKey(config));

  bar.stop();

  logger(errorLog, successLog, config);
}

function filesForKey(config) {
  return ({ key, value }) => {
    const regex = new RegExp(`'${key}'`, "g");
    const filesForKey = replace
      .sync({
        files: config.filesPath,
        from: regex,
        to: "",
        hasChanged: true,
        dry: true,
      })
      .filter(({ hasChanged }) => hasChanged);

    if (config.checkDuplicates && filesForKey.length > 1) {
      errorLog.push(
        { message: "Duplicate key found:", type: "group" },
        `* key: ${key}`,
        `* value: ${value}`,
        {
          message: `* found ${filesForKey.length} affected files:`,
          type: "group",
        },
        ...filesForKey.map(
          ({ file }, index) =>
            `${index + 1}. : ${path.relative(process.cwd(), file)}`
        ),
        { message: "", type: "groupEnd" },
        { message: "", type: "groupEnd" }
      );
      errorCount += 1;
    }

    filesForKey.forEach(replaceContent(key, value));

    bar.increment();
  };
}

function replaceContent(key, value) {
  return ({ file }) => {
    const content = fs
      .readFileSync(file, "utf8")
      .replace(/(\r\n|\n|\r)/gm, "")
      .replace(/ {2,10}/gm, " ")
      .replace(/, \}/g, " }");

    // Current solution, can't get split working with a regex
    const doubleQuote = `id: '${key}', defaultMessage: "`;
    const singleQuote = `id: '${key}', defaultMessage: '`;
    const hasDoubleQuotes = content.includes(doubleQuote);

    let oldValue;
    try {
      oldValue = content
        .split(hasDoubleQuotes ? doubleQuote : singleQuote)[1]
        .split(hasDoubleQuotes ? `" }` : `' }`)[0];
    } catch (e) {
      errorLog.push("* Value for id was not found in file.");
      errorCount += 1;
      return;
    }

    if (oldValue === value || !oldValue) return;

    const regex = new RegExp(
      `defaultMessage:((\n|\r|\r\n)? {1,10}('|"))` +
        oldValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
        `('|")`,
      "gm"
    );

    try {
      replace.sync({
        files: file,
        from: regex,
        to: `defaultMessage: "${value}"`,
        hasChanged: true,
      });
    } catch (e) {
      errorLog.push(`* Replacing failed:\n ${e}`);
      errorCount += 1;
      return;
    }

    successLog.push(
      `* Replaced defaultMessage "${oldValue}" with "${value}" from lokalise`
    );
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
    [
      `\n${errorCount} errors occured:`,
      "-------------------------------------------\n",
      ...errorLog,
    ].forEach(consoleMapper);
  }

  if (successCount) {
    [
      `\nSuccessfully replaced ${successCount} defaultMessages:`,
      "-------------------------------------------\n",
      ...successLog,
    ].forEach(consoleMapper);
  }

  const errorTitle = `\n# ${errorCount} errors occured:`;
  const successTitle = `\n# Successfully replaced ${successCount} defaultMessages:`;

  const logString = [
    errorTitle,
    ...errorLog
      .filter((e) => e.type !== "groupEnd")
      .map((e) => e.message || e)
      .map((m) =>
        m === "Duplicate key found:" ? `\n**Duplicate key found:**` : m
      )
      .map((m) =>
        m.match(/\d{1,2}. : \w{1,}/)
          ? `  ${m.split(":")[0]}:<a>${m.split(":")[1]}</a>`
          : m
      ),
    !errorCount ? `No errors occurred, no action needed!\n` : undefined,
    successTitle,
    ...successLog,
    !successCount
      ? `No replacing needed, source files are in sync!`
      : undefined,
  ]
    .filter(Boolean)
    .join("\n");

  if (config.saveLog) {
    console.log('\nWriting to "lokalise_log.md"...');
    const logPath = process.cwd() + "/lokalise_log.md";
    fs.writeFileSync(logPath, logString);
  }
}

function lokalise() {}

lokalise.toDefaultMessages = toDefaultMessages;

module.exports = lokalise;
