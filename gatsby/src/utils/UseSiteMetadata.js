import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            keywords
            lang
          }
        }
      }
    `
  )
  return site.siteMetadata
}

// graphql`
//   query SiteMetaData {
//     site {
//       siteMetadata {
//         title
//         siteUrl
//         headline
//         description
//         image
//         video
//         twitter
//         name
//         logo
//       }
//     }
//   }
// `