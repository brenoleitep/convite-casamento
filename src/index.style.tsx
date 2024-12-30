import styled from 'styled-components';

export const BgContainer = styled.div`
  width: 100vw;
  height: 100dvh;
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
  color: #34745c;
  font-size: 24px;
  text-align: center;
  font-weight: 700;

  max-width: 300px;
  font-style: normal;

  span {
    z-index: 1000;
    color: #34745c;
    font-size: 32px;
    text-align: center;

    font-family: 'Dancing Script', cursive;
    font-optical-sizing: auto;
    font-style: normal;
  }
`;

export const TitleContainer = styled.h1`
  position: relative;
  margin: 0 auto;
  z-index: 1000;
  color: #34745c;
  font-size: 38px;
  text-align: center;

  font-family: 'Dancing Script', cursive;
  font-optical-sizing: auto;
  font-style: normal;
`;

export const VersicleText = styled.p`
  position: relative;
  margin: 0 auto;
  color: #34745c;
  font-weight: 700;
  text-align: center;
  max-width: 300px;
  font-size: 14px;
`;

export const Subtitle = styled.p`
  position: relative;
  margin: 0 auto;
  color: #34745c;
  font-weight: 700;
  text-align: center;
  max-width: 300px;
  font-size: 16px;
`;

export const CentralImage = styled.div`
  position: relative;
  margin: 0 auto;
  z-index: 1000;
`;

export const ButtonContainer = styled.button`
  position: relative;
  margin: 0 auto;
  z-index: 1000;
  padding: 12px 24px;

  background-color: #8b762e;
  color: white;
  font-size: 24px;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 1000;
  gap: 7px;
  color: #34745c;

  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const MonthYearContainer = styled.div`
  font-size: 32px;

  p {
    position: relative;
    display: inline-block;
    font-size: inherit;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      background-color: #34745c; /* Cor do traço */
    }

    &::before {
      top: -5px; /* Distância do traço superior */
    }

    &::after {
      bottom: -5px; /* Distância do traço inferior */
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1000;
  margin: 0 auto;
  align-items: center;
  gap: 8px;

  p {
    font-size: 12px;
    font-weight: 700;
    color: #34745c;
  }
`;

export const IconsJustify = styled.div`
  display: flex;
  flex-direction: row;

  ul {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  li {
    background-color: #34745c;
    position: relative;
    width: 82px;
    height: 82px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      position: absolute;
      top: 86px;
      color: #34745c;
      font-size: 12px;
      font-weight: bold;
      text-align: center;
    }
  }

  svg {
    font-size: 64px;
    border: 1px solid #fff;
    border-radius: 100%;
    padding: 6px;
    color: #fff;
  }
`;

export const DayContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 48px;
    font-weight: 700;
  }

  span {
    font-size: 18px;
    font-weight: 700;
  }
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
    font-family: "Poppins", serif;
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
