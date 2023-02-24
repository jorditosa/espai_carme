import { createContext, useState, useEffect, useContext } from 'react'

export const ProductsContext = createContext()

const ProductsProvider = ({children}) => {
    
    const [ products, setProducts] = useState([]);

    const getProducts = () => {
        try{
          fetch(`${import.meta.env.VITE_API_URL}/cartas`, { method: 'GET' })
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
      }, [])

      console.log(products)


    return (
        <ProductsContext.Provider value={{ products , setProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider

export const useProductsContext = () => useContext(ProductsContext)






