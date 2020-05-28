module.exports = {
  siteMetadata: {
    // TODO: 正しいタイトルに変更する
    title: "SmartHR's recruit site",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'types/graphql-types.d.ts',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-MQXBBK9',
      },
    },
  ],
}
