import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Layout from './components/Layout'
import Inici from './pages/Inici'
import Carta, {loader as productesCartaLoader } from './pages/Carta'
import Menus from './pages/IniciMenus'
import MenuEspai , { loader as menuEspaiLoader } from './pages/MenuEspai'
import MenuLab from './pages/MenuLab'
import Takespai from './pages/Takespai'
import Vins from './pages/Vins'
import CartaVins from './pages/CartaVins'
import IniciCartes from './pages/IniciCartes'
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
          element: <Carta />,
          loader: productesCartaLoader
        },
        {
          path: '/menus',
          element: <Menus />
        },
        {
          path: '/menu-espai',
          element: <MenuEspai />,
          loader: menuEspaiLoader
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
      ]
    }
  ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
