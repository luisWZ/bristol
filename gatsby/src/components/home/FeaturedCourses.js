import React from "react";
import { Link } from 'gatsby'

import { css } from '@emotion/core'
// import styled from '@emotion/styled'
import styled from 'styled-components'

import imgCursos from '../../assets/imgs/home-cursos-generales.webp'
import imgExamenes from '../../assets/imgs/home-examenes-internacionales.webp'

const Cursos = styled.div({
  flexBasis: '46%',
  height: '350px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
},
props => ({backgroundImage: `url(${props.img})`})
)

export default function FeaturedCourses() {
  return (
    <section
      css={css`
        display: flex;
        justify-content: space-between;
        padding-top: 2rem;
      `}
    >
      {["Cursos Generales", "Exámenes Internacionales"].map((title, index) => {
        const { link, img } =
          index === 0
            ? { link: "cursos", img: imgCursos }
            : { link: "examenes", img: imgExamenes };
        return (
          <Cursos img={img} key={`main_products${index}`}>
            <div
              css={css`
                width: 50%;
              `}
            >
              <h1>{title}</h1>
              <Link className="bristol-btn" to={`/${link}`}>
                Conoce más
              </Link>
            </div>
          </Cursos>
        );
      })}
    </section>
  );
}
