module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
