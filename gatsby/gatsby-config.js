require('dotenv').config({
  path: `.env.site`,
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
const { title, description, keywords, lang, short_name } = require('./sitedefaults')
const { bristolBlue } = require('./src/styles/CssVariables')

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
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        once: false,
      },
    },
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
          styles: `src/styles`,
          svgs: `src/inline-svg`,
          components: `src/components`,
          utils: `src/utils`,
          root: `./`,
        }
      }
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
          endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: [
          `FACEBOOK_APPID`,
          `FACEBOOK_PAGE_ID`,
        ]
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: process.env.HOTJAR_ID,
        sv: process.env.HOTJAR_SV,
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      }
    }
  ],
}
