import { createBrowserRouter } from "react-router-dom";

import Layout from '../components/Layout'
import Inici from '../pages/Inici'
import Carta from '../pages/Carta'
import Menus from '../pages/IniciMenus'
import MenuEspai from '../pages/MenuEspai'
import MenuLab from '../pages/MenuLab'
import Takespai from '../pages/Takespai'
import Vins from '../pages/Vins'
import CartaVins from '../pages/CartaVins'
import IniciCartes from '../pages/IniciCartes'
import Landing from '../pages/Landing'
import Welcome from '../components/Welcome'
import ErrorPage from '../components/ErrorPage'
import Politica from '../pages/Politica'


export const router = createBrowserRouter([
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
        errorElement: <ErrorPage />
      },
      {
        path: '/menus',
        element: <Menus />
      },
      {
        path: '/menu-espai',
        element: <MenuEspai />,
        errorElement: <ErrorPage />
      },
      {
        path: '/menu-laborable',
        element: <MenuLab />,
        errorElement: <ErrorPage />
      },
      {
        path: '/vins',
        element: <Vins />
      },
      {
        path: '/carta-vins',
        element: <CartaVins />,
        errorElement: <ErrorPage />
      },
      {
        path: '/landing',
        element: <Landing />
      },
      {
        path: '/politica',
        element: <Politica />
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