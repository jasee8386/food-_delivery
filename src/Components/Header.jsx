import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { CartContext } from '../context/CartContext';
import CartPage from '../Pages/CartPage';
function Header() {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.length;

  return (
    <header className="p-4 bg-warning text-white shadow">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-10 rounded-full">
            <img
              alt="Logo"
              src="src/assets/download.png"
            />
          </div>
          <Link to="/" className="text-2xl font-bold">Yummy_Cart</Link>
        </div>

        {/* Nav + Theme Toggle */}
        <div className="flex items-center gap-6">
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/catalog" className="hover:underline">Catalog</Link>
            <Link to="/cart" className="btn btn-sm btn-circle btn-warning-content relative">
              🛒 
              {cartCount > 0 && (
                <span className="badge badge-secondary absolute -top-2 -right-3">{cartCount}</span>
              )}
            </Link>
             <Link to="/check-role" className="btn btn-sm btn-warning-content">Login</Link>
          </nav>

          {/* Theme Toggle */}
         <label className="toggle text-base-content">
  <input type="checkbox" value="synthwave" className="theme-controller" />

  <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

</label>
        </div>
      </div>
    </header>
  );
}

export default Header;
