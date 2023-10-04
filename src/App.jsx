import GlobalStyles from "./components/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Header from "./components/Header";
import Slide from "./components/Slide";
import photos from "./photos.json";
import { useState } from "react";

function App() {
  const [productPhotos] = useState(photos);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Slide
        slidePhotos={productPhotos}
      />
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