import React from 'react'
import HeroContent from 'components/HeroContent'
import CourseDescription from 'components/cursos/CourseDescription'
import TextIlustration from 'components/TextIlustration'

import Ilustration from 'svgs/ilustracion-sitting-girl.svg'

export default function Cursos() {
  return (
    <>
      <HeroContent
        mainText={'Una de las principales fortalezas de Bristol es su personal académico.'}
        image={Ilustration}
      />
      <CourseDescription kids>
        <TextIlustration
          title='Kids'
          subheader='Desde los 7 a 10 años'
          subtitle='Hacemos que el primer contacto de su hijo con el inglés sea una experiencia divertida, fácil y exitosa.'
        >
          <p>Queremos que su hijo empiece con el pie derecho en la adquisición del idioma inglés. Usted, como padre de familia, sabe que el dominio del inglés será una de los mejores herramientas para su futuro. Con nuestros cursos, sus hijos no sólo aprenderán inglés y lograrán una certificación internacional, sino que también desarrollarán estrategias de aprendizaje y de pensamiento así como conocerán de otras culturas.</p>
          <p>Nuestras clases están diseñadas para despertar el interés por aprender el idioma y buscamos establecer un ambiente cordial donde los niños se sientan cómodos y se diviertan aprendiendo.</p>
          <p>Sabemos además lo importante que es la participación de los padres de familia en el proceso de aprendizaje de sus hijos, por lo que tenemos una comunicación constante con ellos para mantenerlos informados de los avances de sus hijos así como de cómo pueden apoyarlos a ser más exitosos.</p>
        </TextIlustration>
      </CourseDescription>
      <CourseDescription bgWhite border>
        <TextIlustration textRight
          title='Teens'
          subheader='Desde los 11 a 15 años'
          subtitle='Desarrolla tu habilidad comunicativa en inglés y prepárate para triunfar en el futuro.'
        >
          <p>Sabemos que la adolescencia es una excelente etapa para desarrollar la competencia lingüística y garantizar el éxito en la vida académica y profesional de nuestros alumnos.</p>
          <p>Nuestros cursos están diseñados para sentar bases sólidas en el uso comunicativo del inglés, y están encaminados a ayudar a nuestros alumnos a alcanzar las certificaciones de Cambridge Assessment English, válidas de por vida y reconocidas y solicitadas en todo el mundo. Nuestras clases buscan además desarrollar las habilidades del siglo XXI en nuestros alumnos,  con el fin de prepararlos para los retos a los que se enfrentarán a lo largo de su vida académica y profesional.</p>
          <p>Sabemos que es importante que los padres de familia estén informados sobre el desempeño y progreso de sus hijos en nuestros cursos,  por lo que mantenemos comunicación constante con ellos.</p>
        </TextIlustration>
      </CourseDescription>
      <CourseDescription bgWhite>
        <TextIlustration
          title='Adultos'
          subheader='Mayores de 16 años'
          subtitle='Aprende a comunicarte eficazmente en inglés, disfruta más de tus viajes y garantiza el éxito en tu vida académica y profesional.'
        >
          <p>En Bristol, nuestros alumnos aprenden de una manera sistemática pero divertida, en un ambiente cordial y en grupos pequeños, lo cual les permite participar más en clase y recibir una atención personalizada. Nuestros cursos están alineados con el Marco Común Europeo de Referencia para las Lenguas (CEFR por sus siglas en inglés) y el avance puede ser  comprobable mediante certificaciones de Cambridge Assessment English. Usamos una gran variedad de recursos y técnicas que facilitan el aprendizaje del idioma, a la vez que desarrollan otras habilidades y aprenden de otras culturas y temas. En Bristol aprendes más que inglés.</p>
        </TextIlustration>
      </CourseDescription>
      <CourseDescription examen>
        <TextIlustration textRight
          title='Preparación de Exámenes Internacionales'
          subtitle='Obtén una certificación de Cambridge Assessment English y acredita tu nivel de inglés a nivel internacional.'
        >
          <p>Sabemos que la adolescencia es una excelente etapa para desarrollar la competencia lingüística y garantizar el éxito en la vida académica y profesional de nuestros alumnos.</p>
          <p>Nuestros cursos están diseñados para sentar bases sólidas en el uso comunicativo del inglés, y están encaminados a ayudar a nuestros alumnos a alcanzar las certificaciones de Cambridge Assessment English, válidas de por vida y reconocidas y solicitadas en todo el mundo. Nuestras clases buscan además desarrollar las habilidades del siglo XXI en nuestros alumnos,  con el fin de prepararlos para los retos a los que se enfrentarán a lo largo de su vida académica y profesional.</p>
          <p>Sabemos que es importante que los padres de familia estén informados sobre el desempeño y progreso de sus hijos en nuestros cursos,  por lo que mantenemos comunicación constante con ellos.</p>
        </TextIlustration>
      </CourseDescription>
    </>
  )
}