import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header'
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';

function App() {
  return (
    <>
      <Header />

      <main className="p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
