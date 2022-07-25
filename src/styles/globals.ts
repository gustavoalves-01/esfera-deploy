import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@font-face {
font-family: 'Nexa';
src: url('/fonts/Nexa/Nexa-Light.otf');
font-weight: 400;
font-style: normal;
}

@font-face {
font-family: 'Nexa';
src: url('/fonts/Nexa/Nexa-Bold.otf');
font-weight: 600;
font-style: normal;
}


:root {
  --gray-200: #f5f5f5;
  --pink-300: #F8B3C5;
  --pink-500: #f5426c;
  --pink-600: #BB2F55;
  --gray-500: #4F5150;
  --gray-900: #181818;
}

* {
  padding: 0;
  margin: 0;
}
html{
  scroll-behavior: smooth;
}


html,
body,
button,
input, 
text-area, 
a {
  font-family: "Nexa", "Open Sans", sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

h2.titleBlog {
  color: var(--pink-500);
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 27px;
}

@media (max-width: 768px) {
  h2.titleBlog {
    text-align: center;
    font-size: 1.125rem;
    line-height: 25px;
  }
}
`;
