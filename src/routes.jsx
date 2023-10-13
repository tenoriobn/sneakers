import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultPage from './components/DefaultPage';
import ProductPage from './pages/ProductPage';

export default function AppRouter() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<DefaultPage />}>
            <Route index element={<ProductPage />} />
          </Route>
        </Routes>
      </Router>
  )
}


      {/* <GlobalStyles />
      <Header />
      <Main>
        <Slide slidePhotos={productPhotos} />
        <ProductOverview />
      </Main> */}

/*
  - Analisar o projeto e tentar prever ao máximo as bibliotecas que serão utilizadas;
  
  - Analisar o projeto e traçar um planejamento para o desenvolvimento (Ex: por onde começa e termina, lógica
que será necessária para prever a funcionalidades que serão criadas);

  - Antes de codar ter um planejamento passo a passo (É possível usar 'fluxograma' e coisas visuais para
definir o caminho a ser percorrido e criar um para os algoritmos que se complementam e viram funcionalidade)

*/