import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/react'
import { AiOutlineRight } from 'react-icons/ai'

import { commodityAesthetics, lasso } from 'root/sitedefaults'
import { Container } from 'styles/CssHelpers'
import SvgCambridgeLogo from './Svg/SvgCambridgeLogo'
import SvgFooterBrand from './Svg/SvgFooterBrand'
import SocialLinks from './SocialLinks'
import Newsletter from './Newsletter'

export default function Footer() {
  return (
    <>
      <Newsletter />
      <footer css={footerStyles}>
        <Container
          css={theme =>
            css`
              @media (${theme.min720}) {
                display: flex;
              }
            `
          }
        >
          <div css={footerBrandsStyles}>
            <SvgFooterBrand fill='white' />
            <SvgCambridgeLogo fill='white' />
          </div>
          <div css={footerNavigation}>
            <h1>Mapa del sitio</h1>
            <ul css={footerNavigationList}>
              {siteNavigation.map(({ url, name, order }) => (
                <Li key={order} {...{ order }}>
                  {name !== 'Blog' ? (
                    <Link to={url}>
                      {name}
                      <AiOutlineRight />
                    </Link>
                  ) : (
                    <a href={url} rel='noopener noreferrer' target='_blank'>
                      {name}
                      <AiOutlineRight />
                    </a>
                  )}
                </Li>
              ))}
            </ul>
          </div>
        </Container>
      </footer>
      <div css={addressBox}>
        <address css={addressStyles}>
          <span>Bristol Inglés Profesional ©{new Date().getFullYear()}</span>
          <span>
            Made by&nbsp;
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={commodityAesthetics}
            >
              Commodity Aesthetics
            </a>{' '}
            &amp;{' '}
            <a target='_blank' rel='noreferrer' href={lasso}>
              Luis Lasso
            </a>
          </span>
        </address>
        <SocialLinks
          css={css`
            a {
              padding: 1.2rem;
            }
            svg {
              fill: white;
              width: 1.2rem;
            }
          `}
        />
      </div>
    </>
  )
}
const siteNavigation = [
  {
    url: '/',
    name: 'Home',
    order: '1',
  },
  {
    url: '/nosotros',
    name: 'Nosotros',
    order: '3',
  },
  {
    url: '/cursos',
    name: 'Inglés General',
    order: '2',
  },
  {
    url: '/educacion-continua',
    name: 'Educación Continua',
    order: '5',
  },
  {
    url: '/examenes',
    name: 'Exámenes Internacionales',
    order: '4',
  },
  {
    url: '/centro-examinador-cambridge',
    name: 'Centro Examinador Cambridge',
    order: '6',
  },
  {
    url: '/aviso-privacidad',
    name: 'Aviso de Privacidad',
    order: '7',
  },
  {
    url: 'https://blog.bristolingles.com.mx/',
    name: 'Blog',
    order: '8',
  },
]
// styles =============================================
const Li = props => (
  <li
    css={theme => css`
      svg {
        display: none;
      }

      @media (${theme.min848}) {
        order: ${props.order};
      }
      @media (${theme.max720}) {
        a {
          position: relative;
        }

        svg {
          display: block;
          position: absolute;
          width: 1.25rem;
          right: 1.25rem;
          font-size: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    `}
    {...props}
  />
)
const footerStyles = theme => css`
  background-color: ${theme.bristolBlue};
  padding-top: ${theme.newsletterOffset};

  * {
    color: white;
  }
`
const footerBrandsStyles = theme => css`
  margin: 3rem ${theme.gutter};
  display: inline-block;
  max-width: 360px;
  width: 72vw;

  @media (${theme.min640}) {
    margin-right: 0;
    padding-right: 5rem;
  }

  svg {
    &:first-of-type {
      margin-bottom: 2rem;
      width: 100%;

      + svg {
        width: 65%;
      }
    }
  }
`
const footerNavigation = theme => css`
  padding-bottom: ${theme.gutter};
  margin: 2rem -4vw 0;

  li:first-of-type a {
    border-top: none;
  }

  a {
    display: block;
    border-top: 1px solid white;
    padding: 1rem 8vw;
  }

  h1 {
    font-size: 1.125rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    padding-left: 8vw;
  }

  @media (${theme.min480}) {
    margin: 0;

    a {
      padding: ${theme.gutter};
    }

    h1 {
      padding-left: ${theme.gutter};
    }
  }

  @media (${theme.min640}) {
    padding-top: 6rem;
    flex-grow: 1;
  }
  @media (${theme.min720}) {
    h1 {
      padding-left: 0;
    }

    a {
      padding: 0.2rem 0;
      border-top: none;
    }
  }
  @media (${theme.min960}) {
    flex: 0 24rem;

    a {
      width: 11rem;
      border-top: none;
      white-space: nowrap;
      padding-top: 0.1rem;
      padding-bottom: 0.1rem;
    }
  }
`
const footerNavigationList = theme => css`
  @media (${theme.min960}) {
    display: flex;
    flex-wrap: wrap;
  }
`
const addressBox = theme => css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: start;
  min-height: 8rem;
  padding: 1rem ${theme.gutter};
  background-color: ${theme.blueLight};

  @media (${theme.min480}) {
    justify-content: space-between;
    align-items: center;
    min-height: 6rem;
    padding: 1rem ${theme.gutter} 5rem ${theme.gutter};
  }

  @media (${theme.min560}) {
    padding: 0 6rem 0 ${theme.gutter};
  }

  @media (${theme.min960}) {
    min-height: 0;
    height: 3rem;
  }
`
const addressStyles = theme => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  height: 4rem;
  color: white;

  @media (${theme.max480}) {
    margin-bottom: 1rem;
  }

  @media (${theme.min480}) {
    flex-basis: 0;
    flex-grow: 1;
    text-align: left;
    flex-direction: column;
  }

  @media (${theme.min960}) {
    flex-direction: row;
    height: auto;
    justify-content: space-between;
    flex-basis: 64%;
    flex-grow: 0;
  }

  span {
    display: block;
  }

  a {
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }
`
