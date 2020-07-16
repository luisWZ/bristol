module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        // sourceMap: false,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: { pathToConfigModule: `./src/utils/typography` },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bristol Escuela de Inglés`,
        short_name: `Bristol`,
        lang: `es-MX`,
        start_url: `/`,
        background_color: `#0043CE`,
        theme_color: `#0043CE`,
        display: `standalone`,
        icon: `static/bristol.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
