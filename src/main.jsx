import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CartPage from './Pages/CartPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CatalogPage from './Pages/CatalogPage';
import RoleCheck from './Components/RoleCheck';
import AdminPage from './Pages/AdminPage';
import { CartProvider } from './context/CartContext'; 
import Root from "./routes/root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  
   children: [
      {
        path: "/",
        element: <App />,
      },   
  {
    path:"/catalog",
    element:<CatalogPage/>

  },
  {
    path:"/check-role",
    element:<RoleCheck/>

  },
   { path: "/cart", element: <CartPage /> },
   {path:"/admin", element:<AdminPage />}
 ],},

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
     <RouterProvider router={router} />
</CartProvider>
  </React.StrictMode>
);
