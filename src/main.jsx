import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next'
import ProductsProvider from './context/ProductsContext';

import global_ca from './translations/ca/global.json'
import global_es from './translations/es/global.json'

i18next.init({
  interpolation: { escapeValue: false},
  lng: 'ca',
  resources: {
    ca: {
      global: global_ca
    },
    es: {
      global: global_es
    }
  }
})



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <ProductsProvider>
          <RouterProvider router={router} />
        </ProductsProvider>
      </I18nextProvider>
  </React.StrictMode>,
)
