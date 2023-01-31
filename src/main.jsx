import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout'
import Gestio from './db/Gestio'
import Producte, { loader as productesLoader } from './db/Producte'
import NouProducte from './db/NouProducte'
import Inici from './pages/Inici'
import Carta from './pages/Carta'
import MenuEspai from './pages/MenuEspai'
import MenuLab from './pages/MenuLab'
import Takespai from './pages/Takespai'
import Celler from './pages/Celler'


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
      ]
    },
    {
      path: '/gestio',
      element: <Gestio />,
      children: [
        {
          path: '/gestio/producte',
          element: <Producte />,
          loader: productesLoader
        },
        {
          path: '/gestio/nouproducte',
          element: <NouProducte />,
        },
      ]
    },
  ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
