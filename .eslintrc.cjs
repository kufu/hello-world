module.exports = {
  env: {
    node: true,
    es2024: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:astro/all'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  globals: {
    dataLayer: false,
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      processor: 'astro/client-side-ts',
      rules: {
        'astro/no-set-html-directive': 'off',
      },
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
    },
  ],
};
