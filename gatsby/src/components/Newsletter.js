import React from "react";
// import styled from '@emotion/styled'
// import styled from 'styled-components'
// TO BE REMOVED
import styles from "../assets/styles/bristol.module.scss";

export default function Newsletter() {
  return (
    <section className={styles.container}>
      <h4>Suscríbete a nuestro newsletter</h4>
      <form action="">
        {/* <label for="newsletter">Email</label> */}
        {/* <input style="display:none;" id="newsletter" type="text" placeholder="Escribe tu correo electrónico" /> */}
        <button type="submit" ariaLabel="Suscríbir a newsletter">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29.241 13.9242C28.3926 13.0947 27.5349 12.2847 26.6692 11.4936C23.9172 8.98143 20.9604 6.32186 17.8006 3.51489C17.0048 2.80687 15.7973 2.83196 15.0305 3.57212L14.4362 4.14607C13.627 4.92622 13.6035 6.21445 14.3821 7.02518L19.7059 12.5623C19.2927 12.5623 18.8787 12.5599 18.4655 12.5599C13.6184 12.5599 8.77203 12.6023 3.92411 12.6885C2.85621 12.7081 2 13.5487 2 14.5781V15.8334C2 16.8637 2.85621 17.7042 3.92411 17.723C8.77203 17.8093 13.6184 17.8524 18.4655 17.8524C19.0645 17.8524 19.6643 17.8493 20.2642 17.8485L14.3805 23.9752C13.6027 24.7867 13.627 26.0742 14.4354 26.8543L15.0297 27.4283C15.7973 28.1684 17.0048 28.1928 17.8006 27.4847C20.9596 24.6738 23.9164 22.0103 26.6692 19.495C27.5349 18.7039 28.3926 17.8932 29.241 17.0636C29.2528 17.0527 29.2645 17.0409 29.2763 17.0291C30.1239 16.162 30.1082 14.7718 29.241 13.9242Z"
              fill="#FA4D56"
            />
          </svg>
        </button>
      </form>
    </section>
  );
}
