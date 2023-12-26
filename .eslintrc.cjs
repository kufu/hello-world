module.exports = {
  extends: ['plugin:astro/all', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'astro/no-set-html-directive': 'off',
      },
    },
    {
      files: ['*.cjs'],
      rules: {
        'astro/no-set-html-directive': 'off',
      },
    },
  ],
};
