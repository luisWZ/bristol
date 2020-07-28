module.exports = {
  siteMetadata: {
    title: `Bristol Inglés Profesional`,
    description: `Nos comprometemos con la calidad y la innovación, manteniéndonos a la vanguardia en la enseñanza de inglés. Contamos con docentes profesionales con los más altos grados académicos y certificaciones internacionales en lengua inglesa.`,
    keywords: `inglés, ingles, veracruz, xalapa, coatepec, adolescentes, niños, estudiar, aprender, cambridgem, esol, certificaciones, internacional, intercambios, universidad, bristol, english, canada, londres, london, england, inglaterra`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-layout',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./src/utils/typography`,
        // omitGoogleFont: true,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     classes: false,
    //     events: false,
    //     google: {
    //       families: [
    //         'Roboto',
    //         'Poppins:700',
    //       ],
    //     },
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-scroll-reveal`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Bristol Escuela de Inglés`,
    //     short_name: `Bristol`,
    //     lang: `es-MX`,
    //     start_url: `/`,
    //     background_color: `#0043CE`,
    //     theme_color: `#0043CE`,
    //     display: `standalone`,
    //     icon: `static/bristol.png`,
    //   },
    // },
    // `gatsby-plugin-offline`,
  ],
}
