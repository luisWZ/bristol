module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        sourceMap: false,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: { pathToConfigModule: `./src/utils/typography` },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
