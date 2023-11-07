import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultPage from './components/DefaultPage';
import ProductPage from './pages/ProductPage';
import DevelopmentPage from './pages/DevelopmentPage';

export default function AppRouter() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<DefaultPage />}>
            <Route index element={<ProductPage />} />
            <Route path='*' element={<DevelopmentPage />} />
          </Route>
        </Routes>
      </Router>
  )
}