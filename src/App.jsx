import GlobalStyles from "./components/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import Header from "./components/Header";
import Slide from "./components/Slide";
import photos from "./photos.json";
import { useState } from "react";
import ProductOverview from "./components/ProductOverview";

const Main = styled.main`

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 992px) {
    gap: 3rem;

    margin-top: 5.75rem;
    padding: 0 3rem;
  }

  @media (min-width: 1200px) {
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;

    box-sizing: border-box;
  }
`

function App() {
  const [productPhotos] = useState(photos);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Main>
        <Slide slidePhotos={productPhotos} />
        <ProductOverview />
      </Main>
    </ThemeProvider>
  )
}

export default App

/*
  - Analisar o projeto e tentar prever ao máximo as bibliotecas que serão utilizadas;
  
  - Analisar o projeto e traçar um planejamento para o desenvolvimento (Ex: por onde começa e termina, lógica
que será necessária para prever a funcionalidades que serão criadas);

  - Antes de codar ter um planejamento passo a passo (É possível usar 'fluxograma' e coisas visuais para
definir o caminho a ser percorrido e criar um para os algoritmos que se complementam e viram funcionalidade)

*/