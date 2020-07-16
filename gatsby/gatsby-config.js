module.exports = {
  plugins: [
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Bristol Escuela de Inglés`,
    //     short_name: `Bristol`,
    //     lang: `es`,
    //     start_url: `/`,
    //     background_color: `#0043CE`,
    //     theme_color: `#0043CE`,
    //     display: `standalone`,
    //     icon: `static/bristol.png`,
    //   },
    // },
    // `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-plugin-emotion`,
    //   options: {},
    // },
    {
        resolve: `gatsby-plugin-typography`,
        options: { pathToConfigModule: `./src/utils/typography` },
      },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
  ],
}
