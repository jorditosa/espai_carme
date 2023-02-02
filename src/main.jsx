import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout'
import Gestio from './db/Gestio'
import Productes, { loader as productesLoader } from './db/Productes'
import NouProducte, { action as productesAction } from './db/NouProducte'
import Inici from './pages/Inici'
import Carta from './pages/Carta'
import Menus from './pages/IniciMenus'
import MenuEspai from './pages/MenuEspai'
import MenuLab from './pages/MenuLab'
import Takespai from './pages/Takespai'
import Celler from './pages/Celler'
import IniciCartes from './pages/IniciCartes'


const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, 
      children: [
        {
          index: true,
          element: <Inici />,
        },
        {
          path: '/takespai',
          element: <Takespai />
        },
        {
          path: '/carta',
          element: <Carta />,
        },
        {
          path: '/menuespai',
          element: <MenuEspai />
        },
        {
          path: '/celler',
          element: <Celler />
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
          path: '/menus',
          element: <Menus />
        },
        {
          path: '/menuespai',
          element: <MenuEspai />
        },
        {
          path: '/menulaborable',
          element: <MenuLab />
        },
      ]
    },
    {
      path: '/gestio',
      element: <Gestio />,
      children: [
        {
          path: '/gestio/productes',
          element: <Productes />,
          loader: productesLoader
        },
        {
          path: '/gestio/nouproducte',
          element: <NouProducte />,
          action: productesAction
        },
      ]
    },
  ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
