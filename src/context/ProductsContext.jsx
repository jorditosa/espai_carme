import { createContext, useState, useEffect, useContext } from 'react'
import { useTranslation } from 'react-i18next'

export const ProductsContext = createContext()

const ProductsProvider = ({children}) => {
    
    const [ products, setProducts] = useState([]);
    const [t, i18n] = useTranslation("global");

    const getProducts = () => {
        try{
          fetch(`${import.meta.env.VITE_API_URL}/cartas?locale=${i18n.language}`, { method: 'GET' })
          .then(res => {
          if ( res.ok) return res.json()
          if ( res.status === 401) window.location.reload()  
          })
          .then((data) => {
            setProducts(data.data)});
        } catch(error) {
          window.location.reload()
        } 
      }

    useEffect(() => {
        getProducts();
      }, [i18n.language])

      console.log(products)


    return (
        <ProductsContext.Provider value={{ products , setProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider

export const useProductsContext = () => useContext(ProductsContext)






