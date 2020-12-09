import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import CourseDescription from 'components/cursos/CourseDescription'
import TextIlustration from 'components/TextIlustration'

export default function CourseCatalog() {
  const data = useStaticQuery(COURSE_IMAGES_QUERY)

  return (
    <>
      <CourseDescription kids>
        <TextIlustration
          title='Cursos para Niños'
          subheader='Desde los 7 a 10 años'
          subtitle='Hacemos que el primer contacto de su hijo con el inglés sea una experiencia divertida, fácil y exitosa.'
          image={data.kids.childImageSharp.fluid}
        >
          <p>Queremos que su hijo empiece con el pie derecho en la adquisición del idioma inglés. Usted, como padre de familia, sabe que el dominio del inglés será una de los mejores herramientas para su futuro. Con nuestros cursos, sus hijos no sólo aprenderán inglés y lograrán una certificación internacional, sino que también desarrollarán estrategias de aprendizaje y de pensamiento así como conocerán de otras culturas.</p>
          <p>Nuestras clases están diseñadas para despertar el interés por aprender el idioma y buscamos establecer un ambiente cordial donde los niños se sientan cómodos y se diviertan aprendiendo.</p>
          <p>Sabemos además lo importante que es la participación de los padres de familia en el proceso de aprendizaje de sus hijos, por lo que tenemos una comunicación constante con ellos para mantenerlos informados de los avances de sus hijos así como de cómo pueden apoyarlos a ser más exitosos.</p>
        </TextIlustration>
      </CourseDescription>
      <CourseDescription bgWhite>
        <TextIlustration textRight
          title='Cursos para Adolescentes'
          subheader='Desde los 11 a 15 años'
          subtitle='Desarrolla tu habilidad comunicativa en inglés y prepárate para triunfar en el futuro.'
          image={data.teens.childImageSharp.fluid}
        >
          <p>Sabemos que la adolescencia es una excelente etapa para desarrollar la competencia lingüística y garantizar el éxito en la vida académica y profesional de nuestros alumnos.</p>
          <p>Nuestros cursos están diseñados para sentar bases sólidas en el uso comunicativo del inglés, y están encaminados a ayudar a nuestros alumnos a alcanzar las certificaciones de Cambridge Assessment English, válidas de por vida y reconocidas y solicitadas en todo el mundo. Nuestras clases buscan además desarrollar las habilidades del siglo XXI en nuestros alumnos,  con el fin de prepararlos para los retos a los que se enfrentarán a lo largo de su vida académica y profesional.</p>
          <p>Sabemos que es importante que los padres de familia estén informados sobre el desempeño y progreso de sus hijos en nuestros cursos,  por lo que mantenemos comunicación constante con ellos.</p>
        </TextIlustration>
      </CourseDescription>
      <CourseDescription last>
        <TextIlustration
          title='Cursos para Adultos'
          subheader='Mayores de 16 años'
          subtitle='Aprende a comunicarte eficazmente en inglés, disfruta más de tus viajes y garantiza el éxito en tu vida académica y profesional.'
          image={data.adultos.childImageSharp.fluid}
        >
          <p>En Bristol, nuestros alumnos aprenden de una manera sistemática pero divertida, en un ambiente cordial y en grupos pequeños, lo cual les permite participar más en clase y recibir una atención personalizada. Nuestros cursos están alineados con el Marco Común Europeo de Referencia para las Lenguas (CEFR por sus siglas en inglés) y el avance puede ser  comprobable mediante certificaciones de Cambridge Assessment English. Usamos una gran variedad de recursos y técnicas que facilitan el aprendizaje del idioma, a la vez que desarrollan otras habilidades y aprenden de otras culturas y temas. En Bristol aprendes más que inglés.</p>
        </TextIlustration>
      </CourseDescription>
      {/* <CourseDescription examen>
        <TextIlustration textRight
          title='Preparación de Exámenes Internacionales'
          subtitle='Obtén una certificación de Cambridge Assessment English y acredita tu nivel de inglés a nivel internacional.'
          image={data.examenesInternacionales.childImageSharp.fluid}
        >
          <p>Tenemos una experiencia de más de 25 años preparando con éxito a nuestros alumnos para las certificaciones de Cambridge Englis ¿Qué hemos logrado a lo largo de todos esos años? tener una metodología y materiales propios para la preparación de exámenes; contar con un grupo de maestros especialistas en la preparación de exámenes, muchos de ellos además son examinadores orales autorizados por Cambridge y forman parte del equipo académico de nuestro Centro Examinador Autorizado por Cambridge Assessment English. De manera consecutiva, hemos recibido de Cambridge Assessment English el diploma como Centro de Preparación de más de 200 candidatos al año.</p>
          <p>Con nosotros no sólo estudias inglés, aprendes como enfrentar con éxito el examen y desarrollas habilidades que podrás aplicar a otras áreas de conocimiento o a otros idiomas.</p>
          <p>No somos simplemente una escuela que sigue un libro de texto al pie de la letra para preparar a sus alumnos, SOMOS LOS EXPERTOS.</p>
          <p>Con nosotros puedes preparar todos los exámenes de Cambridge Assessment English: A2 Key (Ket), B1 Preliminary (PET), B2  First (FCE), C1 Advanced (CAE),C2  Proficiency (CPE) y ielts (General y Académico)</p>
        </TextIlustration>
      </CourseDescription> */}
    </>
  )
}
// query ==============================================
const COURSE_IMAGES_QUERY = graphql`
  fragment courseImageSharpFragment on File {
    childImageSharp {
      fluid(maxWidth: 447) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  query COURSE_IMAGES_QUERY {
    kids: file(relativePath: { eq: "image-kids.png" }) { ...courseImageSharpFragment }
    teens: file(relativePath: { eq: "image-teens.png" }) { ...courseImageSharpFragment }
    adultos: file(relativePath: { eq: "image-adultos.png" }) { ...courseImageSharpFragment }
    examenesInternacionales: file(relativePath: { eq: "image-examenes-internacionales.png" }) { ...courseImageSharpFragment }
  }
`