import React from 'react'
import { Helmet } from 'react-helmet'

const title = `Bristol Inglés Profesional`
const description = `Nos comprometemos con la calidad y la innovación, manteniéndonos a la vanguardia en la enseñanza de inglés. Contamos con docentes profesionales con los más altos grados académicos y certificaciones internacionales en lengua inglesa.`
const keywords = `inglés, ingles, veracruz, xalapa, coatepec, adolescentes, niños, estudiar, aprender, cambridgem, esol, certificaciones, internacional, intercambios, universidad, bristol, english, canada, londres, london, england, inglaterra`

export default function SEO({ children }) {
  return (
    <Helmet htmlAttributes={{ lang: 'es-MX' }}>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      {children}
    </Helmet>
  )
}
