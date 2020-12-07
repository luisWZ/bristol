import React from 'react'

import { Section, Container, ButtonSaberMas } from 'styles/CssHelpers'
import { Body2 } from 'styles/FontStyles'
import TextIlustration from 'components/TextIlustration'
import { Grid_3_Columns, Column } from './Grid_3_Columns'
import { css } from '@emotion/core'

export default function CoursesAbroad({ data }) {
  return (
    <>
      <Section css={theme => css`border-bottom: 1px solid ${theme.gray};`}>
        <Container>
          <TextIlustration textRight translateY
            title='Cursos de inglés en el extranjero'
            subtitle='¿Te interesa vivir la experiencia de estudiar en el extranjero y a la vez mejorar tu nivel de inglés y conocer otras culturas? Tenemos varias opciones para ti'
            image={data.childImageSharp.fluid}
          >
            <Body2>Cursos de verano en Inglaterra y Canadá</Body2>
            <p>Vivir día a día en un país angloparlante es una experiencia enriquecedora que sin duda influirá positivamente en tu desarrollo personal y profesional. Te permite aprender la cultura y las costumbres, no sólo del país que visites, si no de muchas otras culturas a través de la convivencia diaria con compañeros de todo el mundo.</p>
            <p>Esta experiencia te llevará a acostumbrarte a otra forma de vida, sus horarios, opiniones y pensamientos, y contribuirá a que adquieras una personalidad abierta y un carácter tolerante a diversas maneras de pensar, actitudes que son actualmente indispensables en un mundo cada vez más globalizado. Bristol te ofrece vivir una experiencia inolvidable en Canadá o Inglaterra y estudiar inglés en escuelas de prestigio internacional especializadas en la enseñanza de inglés a extranjeros.</p>
            <ButtonSaberMas />
          </TextIlustration>
        </Container>
      </Section>
      <Section>
        <Grid_3_Columns>
          <Column pictogram='colegios' title='Cursos especiales para colegios'>
            <p>Ofrecemos cursos y talleres a la medida de las necesidades de capacitación y desarrollo profesional de los docentes de inglés de su colegio o universidad.</p>
            <p>Solicite una visita o llamada y permítanos apoyarle con nuestra experiencia en la enseñanza del inglés.</p>
          </Column>
          <Column pictogram='docente' title='Cursos de formación de docentes de inglés'>
            <p>Tenemos los cursos ideales tanto para quienes quieren iniciarse en la docencia del inglés, como para los docentes que quieren mantenerse actualizados o mejorar sus habilidades docentes.</p>
          </Column>
          <Column pictogram='tkt' title='TKT'
            subtitle='Teaching Knowledge Test'>
            <p>Este curso de 40 horas tiene como objetivo la preparación para la certificación TKT (Teaching Knowledge Test) de Cambridge Assessment English, con validez internacional.</p>
            <p>Te preparamos para los tres módulos básicos.</p>
            <ul>
              <li>Module 1: Background to language learning and teaching.</li>
              <li>Module 2: Lesson planning and use of resources for language teaching.</li>
              <li>Module 3: Managing the teaching and learning process.</li>
            </ul>
          </Column>
        </Grid_3_Columns>
      </Section>
    </>
  )
}
