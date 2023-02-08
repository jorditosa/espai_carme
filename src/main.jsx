import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Layout from './components/Layout'
import Gestio from './db/Gestio'
import Productes, { loader as productesLoader } from './db/Productes'
import NouProducte, { action as nouProducteAction } from './db/NouProducte'
import EditarProducte, { loader as editarProducteLoader, action as editarProducteAction } from './db/EditarProducte'
import EliminarProducte, { action as eliminarProducteAction } from './db/Item'
import Inici from './pages/Inici'
import Carta , { loader as cartaLoader } from './pages/carta'
import Menus from './pages/IniciMenus'
import MenuEspai , { loader as menuEspaiLoader } from './pages/MenuEspai'
import MenuLab from './pages/MenuLab'
import Takespai from './pages/Takespai'
import Celler from './pages/Celler'
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
          path: '/carta',
          element: <Carta />,
          loader: cartaLoader
        },
        {
          path: '/menus',
          element: <Menus />
        },
        {
          path: '/menuespai',
          element: <MenuEspai />,
          loader: menuEspaiLoader
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
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/gestio/productes',
          element: <Productes />,
          loader: productesLoader
        },
        {
          path: '/gestio/nouproducte',
          element: <NouProducte />,
          action: nouProducteAction
        },
        {
          path: '/gestio/productes/:producteId/editar',
          element: <EditarProducte />,
          loader: editarProducteLoader,
          action: editarProducteAction,
        },
        {
          path: '/gestio/productes/:producteId/eliminar',
          action: eliminarProducteAction
        },
      ]
    },
  ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
