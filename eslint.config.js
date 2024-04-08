import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        process: 'readonly',
        console: 'readonly',
      },
      sourceType: 'module',
    },

    rules: {
      'prefer-const': 'error',
      'no-unused-vars': ['error', { caughtErrorsIgnorePattern: '^_' }],
    },
  },
];
