#!/usr/bin/env node
'use strict';

/**
 * Dependencies
 */
const lokalise = require('../lib/lokalise-to-default-messages');

/**
 * Main routine
 */
function main() {
  // Arguments

  const args = process.argv.slice(2);
  const checkDuplicates =
    args.includes('--duplicate-keys') || args.includes('-dk');

  const saveLog = args.includes('--save-log') || args.includes('-sl');

  const filesArg = args.find(
    (a) => a.includes('--files-path') || a.includes('-fp')
  );
  const filesPath = filesArg
    ? process.cwd() + `/${filesArg.split('=')[1]}`
    : process.cwd() + '/src/**/*.{ts,tsx,js,jsx}';

  const translationArg = args.find(
    (a) => a.includes('--translation-file') || a.includes('-tf')
  );
  const translationPath = translationArg
    ? process.cwd() + `/${translationArg.split('=')[1]}`
    : process.cwd() + '/src/translations/en.json';

  const oldTranslationPathArg = args.find(
    (a) => a.includes('--old-translation-file') || a.includes('-otf')
  );

  const oldTranslationPath = oldTranslationPathArg
    ? process.cwd() + `/${oldTranslationPathArg.split('=')[1]}`
    : undefined;

  //Lokalise
  lokalise.toDefaultMessages({
    checkDuplicates,
    saveLog,
    filesPath,
    translationPath,
    oldTranslationPath,
  });
}

//Call main routine
main();
