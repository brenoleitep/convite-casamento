import styled from 'styled-components';

export const BgContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 16px;
`;

export const ImageBgContainer = styled.img`
  position: absolute;
  width: 100%;
  height: 100vh;
`;

export const TextContainer = styled.div`
  position: relative;
  margin: 0 auto;
  z-index: 1000;
  color: black;
  font-size: 18px;

  font-family: 'Dancing Script', cursive;
  font-optical-sizing: auto;
  font-style: normal;
`;

export const VersicleText = styled.div`
  position: relative;
  margin: 0 auto;
  color: black;
  font-weight: 700;
  text-align: center;
  max-width: 300px;
`;

export const CentralImage = styled.div`
  position: relative;
  margin: 0 auto;
  z-index: 1000;
`;

// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
  /* Reset básico */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Estilos globais */
  html {
    font-size: 16px; /* Define o tamanho da fonte base */
    scroll-behavior: smooth; /* Rola a página de forma suave */
  }

  body {
  font-family: "Cormorant Garamond", serif;
    line-height: 1.5; /* Altura de linha */
    -webkit-font-smoothing: antialiased; /* Suavização de fontes no macOS */
  }

  a {
    text-decoration: none; /* Remove o sublinhado */
    color: inherit; /* Usa a mesma cor do texto */
    transition: color 0.2s; /* Transição suave ao mudar a cor */
  }

  button {
    font-family: inherit; /* Usa a mesma fonte do body */
    cursor: pointer;
    border: none;
    outline: none;
  }

  ul, ol {
    list-style: none; /* Remove marcadores de listas */
  }

  img {
    max-width: 100%; /* Garante que imagens respeitem o tamanho do container */
    height: auto;
  }
`;

export default GlobalStyles;
