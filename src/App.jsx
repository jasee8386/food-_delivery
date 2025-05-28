import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import CatalogPage from './Pages/CatalogPage';
import RoleCheck from './Components/RoleCheck';
function App() {
  return (
    <>
      <Header />

      <main className="p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/check-role" element={<RoleCheck />} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
