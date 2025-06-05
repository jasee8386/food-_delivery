import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CatalogPage from './Pages/CatalogPage';
import RoleCheck from './Components/RoleCheck';
import AdminPage from './Pages/AdminPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  
  {
    path:"/catalog",
    element:<CatalogPage/>

  },
  {
    path:"/check-role",
    element:<RoleCheck/>

  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />

  </React.StrictMode>
);
