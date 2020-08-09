import React from 'react'
import { Container } from '../styles/CssHelpers'
import ContainerWhite from '../styles/ContainerWhite'
import IlustracionBicicleta from '../../inline-svg/ilustracion-bicicleta.svg'
import PictogramaFilosofiaInstitucional from '../../inline-svg/pictograma-filosofia-institucional.svg'
import PictogramaConversacion from '../../inline-svg/pictograma-conversacion.svg'
import PictogramaAlumno from '../../inline-svg/pictograma-alumno.svg'
import PictogramaEducacionOnline from '../../inline-svg/pictograma-educacion-online.svg'
import PictogramaMedia from '../../inline-svg/pictograma-media.svg'
import PictogramaDesarrollo from '../../inline-svg/pictograma-desarrollo.svg'
import PictogramaExcelencia from '../../inline-svg/pictograma-excelencia.svg'
import PictogramaEscuela from '../../inline-svg/pictograma-escuela.svg'
import LogoSep from '../../inline-svg/logo-sep.svg'
import LogoCambridgeAssesmentEnglish from '../../inline-svg/logo-cambridge-assesment-english.svg'
import LogoCambridgePreparationCentre from '../../inline-svg/logo-cambridge-preparation-centre.svg'
import LogoTheAnglo from '../../inline-svg/logo-the-anglo.svg'
import LogoGreatPlaceToWork from '../../inline-svg/logo-great-place-to-work.svg'
import Diagram from '../../images/cefr-diagram-december-2020.png'

export default function NosotrosPage() {
  return (
    <>
      <section>
        <h1>
          Una de las principales fortalezas de Bristol es su personal académico
        </h1>
        <IlustracionBicicleta />
      </section>
      <Container>
        <div>
          <h1 className='h3'>
            El prestigio ganado a lo largo de más de 25 años ha hecho de Bristol
            Inglés Profesional un referente de calidad y excelencia en la
            enseñanza del inglés.
          </h1>
          <p>
            Más importante aún, es el resultado de los miles de alumnos que han
            pasado por nuestras aulas que no sólo aprendieron inglés, sino que
            aprendieron de otras culturas, desarrollaron otras habilidades e
            hicieron amistades estrechas y duraderas.
          </p>
        </div>
        <img src='' alt='' />
        <h1 className='h3'>Beneficios de nuestros cursos</h1>
        <div>
          <div>
            <PictogramaFilosofiaInstitucional />
            <p>
              Una filosofía institucional basada en valores y que busca ayudar a
              nuestros alumnos a alcanzar objetivos académicos y profesionales a
              través del cumplimiento con estándares internacionales de dominio
              del inglés.
            </p>
          </div>
          <div>
            <PictogramaConversacion />
            <p>
              Un sistema de gestión de la calidad con el fin de asegurar
              resultados y una excelente atención a nuestros alumnos, padres de
              familia y público en general.
            </p>
          </div>
          <div>
            <PictogramaAlumno />
            <p>
              Un Modelo educativo y diseño curricular propios, orientados a
              preparar a nuestros alumnos para los retos del siglo XXI.
            </p>
          </div>
          <div>
            <PictogramaEducacionOnline />
            <p>
              Una calidad en el servicio que busca ofrecer una atención amable,
              considerada y personalizada y respuesta inmediata a las
              necesidades y requerimientos de todos nuestros alumnos y padres de
              familia.
            </p>
          </div>
          <div>
            <PictogramaMedia />
            <p>
              Una orientación hacia la mejora continua y la innovación que nos
              permita cada vez ser mejores en lo que hacemos.
            </p>
          </div>
          <div>
            <PictogramaDesarrollo />
            <p>
              Un Sistema de Desarrollo Profesional para todo nuestro personal.
            </p>
          </div>
        </div>
      </Container>
      <ContainerWhite>
        <div>
          <h1>Cursos generales</h1>
          <p>
            Nuestros cursos están basados en el Marco Común Europeo de
            Referencia para las Lenguas (Common European Framework of Reference
            - CEFR) cuyos 6 niveles (A1 a C2) establecen los diferentes grados
            de desarrollo de las habilidades lingüísticas para los principales
            idiomas que se hablan en el mundo.
          </p>
        </div>
        <Diagram />
        <img src='' alt='' />
        <div>
          <h1>Nuestros docentes</h1>
          <p>
            Todos nuestros docentes son profesionales de la enseñanza del inglés
            con estudios de posgrado además de contar con una amplia experiencia
            en el salón de clases.
          </p>
          <p>
            Además muchos de nuestros docentes son invigilators, supervisors y
            examinadores orales autorizados por Cambridge Assessment English, lo
            cual significa que cuentan con una sólida formación académica además
            de recibir capacitación constante por parte de dicha Institución en
            el conocimiento y la evaluación de los distintos niveles de dominio
            del idioma.
          </p>
          <p>
            Sabemos que la capacitación continua es un factor muy importante
            para mantenernos a la vanguardia en la enseñanza del inglés, por lo
            que Bristol cuenta con un programa de Desarrollo Profesional y un
            sistema de supervisión y observación de clases que nos permiten
            mantener un alto estándar de calidad en nuestros servicios.
          </p>
        </div>
      </ContainerWhite>
      <ContainerWhite>
        <h1>Acreditaciones, Reconocimientos y Alianzas</h1>
        <div>
          <LogoSep />
          <p>
            Desde su fundación, los cursos de inglés General para jóvenes y
            adultos cuentan con REVOE de la Secretaría de Educación (SEP).
          </p>
        </div>
        <div>
          <LogoCambridgeAssesmentEnglish />
          <p>
            Desde 2008, Bristol recibió la distinción de ser nombrado Centro
            Examinador Autorizado (MX098) por Cambridge Assessment English y
            atendemos a candidatos independientes e instituciones educativas,
            desde primarias hasta universidades, en el Estado de Veracruz y
            parte del Estado de Tamaulipas.
          </p>
        </div>
        <div>
          <LogoCambridgePreparationCentre />
          <p>
            Desde 2012, año tras año, hemos recibido el Certificado de
            Preparation Centre por parte de Cambridge Assessment English por
            lograr certificar a más de 200 de nuestros alumnos por año. Somos de
            las pocas instituciones en el Estado que lo logran de manera
            consecutiva.
          </p>
        </div>
        <div>
          <LogoTheAnglo />
          <p>
            Bristol es representante de The Anglo para el Estado de Veracruz.
            The Anglo es reconocido como la mejor escuela de inglés en México.
          </p>
        </div>
        <div>
          <LogoGreatPlaceToWork />
          <p>
            Contamos con la acreditación de A Great Place to Work y hemos
            logrado ocupar el segundo lugar en en el raking de las mejores
            empresas para trabajar de la región Centro-Sureste del país.
          </p>
        </div>
        <div>
          <PictogramaExcelencia />
          <p>
            En dos ocasiones hemos recibido la distinción por la excelencia en
            la calidad en el servicio por parte de Cambridge Assessment English.
          </p>
        </div>
        <div>
          <PictogramaEscuela />
          <p>
            Durante 20 años, Bristol ha establecido alianzas con escuelas de
            prestigio en Canadá e Inglaterra para ofrecer a nuestros alumnos
            cursos de inmersión en ambos países.
          </p>
        </div>
      </ContainerWhite>
    </>
  )
}
