import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import ProductPage from './components/productDetails/ProductPage';
import Cart from './components/cart/Cart';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';

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
    path: '/product/:productId/details',
    element: <ProductPage />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
