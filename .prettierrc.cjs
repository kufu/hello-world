module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
