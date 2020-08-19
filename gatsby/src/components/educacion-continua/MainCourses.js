import React from 'react'

import { Grid_3_Columns, Column } from './Grid_3_Columns'

export default function MainCourses() {
  return (
    <Grid_3_Columns>
      <Column pictogram='one-to-one' title='One to One' subtitle='Curso Individual'
        subheader='Para ti que tienes necesidades especiales y que deseas que el curso se adapte a tu ritmo'>
        <p>Los cursos One-To-One están pensados para aquellas personas que necesitan cubrir necesidades especiales de aprendizaje del idioma ya sea por requerimientos académicos o profesionales;  necesitan alcanzar el objetivo en un corto tiempo, o bien, les gusta que el curso se adapte a su ritmo y no sentirse presionado por el avance de un grupo.</p>
        <p>Ideales también para niños o adolescentes que requieren de un apoyo escolar. El contenido y la duración del curso se planean con base en el análisis de necesidades del alumno.</p>
      </Column>
      <Column pictogram='flex-english' title='Flex your english'
        subheader='¿Sólo quieres practicar inglés y a la vez mejorar tu nivel y divertirte? Este curso es para ti'>
        <p>Si ya has alcanzado por lo menos un nivel intermedio superior y no tienes tiempo o no deseas tomar un curso con tareas, exámenes ni horario fijo, te ofrecemos este curso en el cual el énfasis es la práctica oral.</p>
        <p>Practicarás el idioma de una forma divertida y aprenderás de muchos temas interesantes en una sesión de dos horas a la semana, en el día y el horario que mejor se acomode a tus necesidades.</p>
      </Column>
      <Column pictogram='50-plus' title='50 Plus'
        subheader='Si tienes más de 50 años y quieres aprender inglés para viajar o simplemente para hacer amigos de tu edad y pasar un rato divertido y aprendiendo algo nuevo a la vez, este curso es para ti'>
        <p>En nuestro curso 50+ te divertirás y al mismo tiempo podrás aprender inglés con personas de tu edad sin las presiones de exámenes o tareas. El objetivo es que desarrolles las habilidades lingüísticas que te permitan comunicarte con facilidad cuando viajes de vacaciones al extranjero o simplemente darte el gusto de aprender algo nuevo!</p>
      </Column>
    </Grid_3_Columns>
  )
}