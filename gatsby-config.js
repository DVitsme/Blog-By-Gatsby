module.exports = {
  siteMetadata: {
    title: 'Derricks blog',
    description: 'A featured blog to help me collect my thoughts',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
  ],
};
