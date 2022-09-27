import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Header from './components/landingPage/Header';
import LandingPage from './components/landingPage/LandingPage';
import './style/card.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    children: [{
      path: '/',
      element: <Header />,
    },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
