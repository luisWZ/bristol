require('dotenv').config({
  path: `.env.contentful`,
})
const loadOnProduction = () => {
  if (!process.env !== 'development') {
    return {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        classes: false,
        events: false,
        google: {
          families: [
            'Roboto',
            'Poppins:700',
          ],
        },
      },
    }
  }
  return null
}
const { title, description, keywords, lang, short_name } = require('./siteConfig')
const { bristolBlue } = require('./src/components/styles/CssVariables')

module.exports = {
  siteMetadata: {
    title,
    description,
    keywords,
    lang,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
        name: 'data',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-layout',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./src/utils/typography`,
        omitGoogleFont: process.env.NODE_ENV !== 'development',
      },
    },
    loadOnProduction(),
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name,
        lang,
        start_url: `/`,
        background_color: bristolBlue,
        theme_color: bristolBlue,
        display: `standalone`,
        icon: `static/bristol.png`,
      },
    },
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /inline-svg/,
          // include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          styles: `src/components/styles`,
          svgs: `src/inline-svg`,
          components: `src/components`,
        }
      }
    },
  ],
}
