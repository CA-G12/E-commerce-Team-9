import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import ProductPage from './components/productDetails/ProductPage';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import CategoryFilter from './components/landingPage/Filter/CategoryFilter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/products',
    element: <LandingPage />,
    children: [{
      path: '/products/:category',
      element: <CategoryFilter />,
    }],
  },
  {
    path: '/product/:productId/details',
    element: <ProductPage />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
