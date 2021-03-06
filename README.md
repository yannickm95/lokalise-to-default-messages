![CI / Create Release](https://github.com/yannickm95/lokalise-to-default-messages/workflows/CI%20/%20Create%20Release/badge.svg)

# Lokalise to defaultMessages

Utility to update defaultMessages in source code with values from translation json file. Can also check for duplicate keys and create a diff of keys from 2 different translations file.

# Index

- [Installation](#installation)
- [Prerequisites](#prerequisites)
- [Basic usage](#basic-usage)
  - [Replace values](#replace-values)
  - [Check duplicates](#check-duplicates)
  - [Key diff](#key-diff)
- [CLI usage](#cli-usage)
- [Version information](#version-information)
- [Roadmap](#roadmap)
- [License](#license)

## Installation

```shell
# Using npm, installing to local project
npm i --save lokalise-to-default-messages

# Using npm, installing globally for global cli usage
npm i -g lokalise-to-default-messages

# Using yarn
yarn add lokalise-to-default-messages
```

## Prerequisites

the translation files must consist of just key, value pairs:

```json
{
  "example_translation_key": "Example",
  "exmaple_translation_key_two": "Exmaple 2"
}
```

the source code `defaultMessages` should have this structure:

```js
const t = defineMessages({
  exampleTitle: {
    id: "example_title",
    defaultMessage: "Example title",
  },
  exampleTitleTwo: { id: "example_title_two", defaultMessage: "Example 2" },
});
```

## Basic usage

```js
//Load the library and specify options
const ltdm = require("lokalise-to-default-messages");
const options = {};
```

### Replace values (Not yet supported)

pass the following options to replace values:

```js
ltdm.toDefaultMessages({
  checkDuplicates: false,
  saveLog: false,
  filesPath: "/src/**/*.{ts,tsx,js,jsx}",
  translationsPath: "src/translations/en.json",
  oldTranslationPath: undefined,
});
```

The default options are filled in the example.

### Check duplicates

Not yet supported.

### Key diff

Not yet supported.

## CLI usage

```sh
ltdm
  [--duplicate-keys] | [-dk]
  [--save-log] | [-sl]
  [--files-path=src/**/*.{ts,tsx,js,jsx}] | [-fp]
  [--translation-file=src/translations/en.json] | [-tf]
  [--old-translation-file=src/translations/old-en.json] | [-otf]
```

You can pass the argument `--duplicate-keys` or `-dk` if you want to check for duplicate keys.
If this argument is passed the script will only look for duplicate keys and will dump errors to the terminal. if `--save-log` or `-sl` is present the will also be saved to `lokalise_log.md`

You can pass the argument `--file-paths` or `-fp` (default: `-fp=src/**/*.{ts,tsx,js,jsx}`).
This path determines what files to check for defaultMessages of `react-intl`.

You can pass the argument `--translation-file` or `-tf` (default: `-tf=src/translations/en.json`).
This will determine the path to the translations file that should be used to sync
the `defaultMessages` in the js/ts files.

You can pass the argument `--save-log` or `-sl`.
This will save a log file under `lokalise_log.md`

You can pass the argument `--old-translation-file` or `-otf`.
If this argument is passed only the changed keys or values will be checked.
This argument has no default value.

## Version information

From version 0.1.0 onwards, lokalise to default messages requires Node 10 or higher.

See the [Changelog](CHANGELOG.md) for more information.

## License

(MIT License)

Copyright 2020-2020, Yannick Maes, [License](LICENSE)
