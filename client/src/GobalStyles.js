import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Global styles */

  /* Computer */
  @media screen and (min-width: 1024px) {
    /* Styles for screens wider than 1024px */
    html, body {
        margin: 0;
        margin-top: 0;
    }
    h1 {
      font-size: 2.5rem;
      font-family: 'Open Sans', sans-serif;
    }
    h2 {
      font-size: 2rem;
      font-family: 'Open Sans', sans-serif;
    }
    p {
      font-size: 1.2rem;
      font-family: 'Open Sans', sans-serif;
    }
    img {
      max-width: 100%;
    }
    input,
    select,
    textarea {
      font-size: 1.2rem;
      padding: 8px;
      border-radius: 5px;
      border: 1px solid #ccc;
      box-sizing: border-box;
      font-family: 'Open Sans', sans-serif;
    }
    label {
      font-size: 1.2rem;
      margin-bottom: 8px;
      font-family: 'Open Sans', sans-serif;
    }
    form {
      margin: 0 auto;
      max-width: 800px;
      font-family: 'Open Sans', sans-serif;
    }
  }

  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    /* Styles for screens between 768px and 1023px wide */
    body {
      font-size: 16px;
      margin: 0;
    }
    h1 {
      font-size: 2.2rem;
      font-family: 'Open Sans', sans-serif;
    }
    h2 {
      font-size: 1.8rem;
      font-family: 'Open Sans', sans-serif;
    }
    p {
      font-size: 1rem;
      font-family: 'Open Sans', sans-serif;
    }
    img {
      max-width: 100%;
    }
    input,
    select,
    textarea {
      font-size: 1rem;
      padding: 6px;
      border-radius: 5px;
      border: 1px solid #ccc;
      box-sizing: border-box;
      font-family: 'Open Sans', sans-serif;
    }
    label {
      font-size: 1rem;
      margin-bottom: 6px;
      font-family: 'Open Sans', sans-serif;
    }
    form {
      margin: 0 auto;
      max-width: 600px;
      font-family: 'Open Sans', sans-serif;
    }
  }

  /* Phone */
  @media screen and (max-width: 767px) {
    /* Styles for screens narrower than 767px */
    body {
      font-size: 14px;
      margin: 0;
    }
    h1 {
      font-size: 2rem;
      font-family: 'Open Sans', sans-serif;
    }
    h2 {
      font-size: 1.5rem;
      font-family: 'Open Sans', sans-serif;
    }
    p {
      font-size: 0.9rem;
      font-family: 'Open Sans', sans-serif;
    }
    img {
      max-width: 100%;
    }
    input,
    select,
    textarea {
      font-size: 0.9rem;
      padding: 4px;
      border-radius: 5px;
      border: 1px solid #ccc;
      box-sizing: border-box;
      font-family: 'Open Sans', sans-serif;
    }
    label {
      font-size: 0.9rem;
      margin-bottom: 4px;
      font-family: 'Open Sans', sans-serif;
    }
    form {
      margin: 0 auto;
      max-width: 400px;
      font-family: 'Open Sans', sans-serif;
    }
  }
`;

export default GlobalStyles;

