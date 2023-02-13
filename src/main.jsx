import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout'
import Inici from './pages/Inici'
import Carta from './pages/Carta'
import Menus from './pages/IniciMenus'
import MenuEspai from './pages/MenuEspai'
import MenuLab from './pages/MenuLab'
import Takespai from './pages/Takespai'
import Vins from './pages/Vins'
import CartaVins from './pages/CartaVins'
import IniciCartes from './pages/IniciCartes'
import Landing from './pages/Landing'
import Welcome from './components/Welcome'
import ErrorPage from './components/ErrorPage'


const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, 
      children: [
        {
          index: true,
          element: <Inici />,
          errorElement: <ErrorPage />
        },
        {
          path: '/takespai',
          element: <Takespai />
        },
        {
          path: '/menuespai',
          element: <MenuEspai />
        },
        {
          path: '/menlab',
          element: <MenuLab />
        },
        {
          path: '/cartes',
          element: <IniciCartes />
        },
        {
          path: '/carta',
          element: <Carta />
        },
        {
          path: '/menus',
          element: <Menus />
        },
        {
          path: '/menu-espai',
          element: <MenuEspai />
        },
        {
          path: '/menu-laborable',
          element: <MenuLab />
        },
        {
          path: '/vins',
          element: <Vins />
        },
        {
          path: '/carta-vins',
          element: <CartaVins />
        },
        {
          path: '/landing',
          element: <Landing />
        },
      ]
    },
    {
      path: '/landing',
      element: <Landing />
    },
    {
      path: '/welcome',
      element: <Welcome />
    },
  ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
