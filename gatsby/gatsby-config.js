/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Bristol Inglés Profesional`,
    description: `Nos comprometemos con la calidad y la innovación, manteniéndonos a la vanguardia en la enseñanza de inglés. Contamos con docentes profesionales con los más altos grados académicos y certificaciones internacionales en lengua inglesa.`,
    keywords: `inglés, ingles, veracruz, xalapa, coatepec, adolescentes, niños, estudiar, aprender, cambridgem, esol, certificaciones, internacional, intercambios, universidad, bristol, english, canada, londres, london, england, inglaterra`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      },
    },
  ],
}
