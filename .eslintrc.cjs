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
        'astro/semi': 'off',
      },
    },
    {
      files: ['*.cjs'],
      rules: {
        'astro/semi': 'off',
      },
    },
  ],
}
