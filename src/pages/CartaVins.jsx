import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from "@material-tailwind/react";
import {  GiMolecule, GiWineGlass } from 'react-icons/gi'
import Spinner from '../components/Spinner';
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

function CartaVins() {

  const [t, i18n] = useTranslation("global");

  const [productesVins, setProductesVins] = useState([]);
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    getProducts();
  })

  const getProducts = () => {
    try{
      fetch(`${import.meta.env.VITE_API_URL}/vins?pagination[limit]=75`, { method: 'GET' })
      .then(res => {
      if ( res.ok) return res.json()
      if ( res.status === 401) window.location.reload()  
      })
      .then((data) => {
        setLoading(false);
        setProductesVins(data.data)});
    } catch(error) {
      window.location.reload()
    } finally {
      
    }
  }

   
  function renderProducte(categoria) { 
    if(loading) {
      return <Spinner />
    }
    return (
      productesVins.filter(producte => producte.attributes.categoria === categoria).map( (item, id) => (
                  <div className='flex justify-between items-center border-b-2 border-dark/10 py-1' key={id}>
                    <div className='flex flex-col lg:flex-row items-start lg:items-center justify-start w-5/6'>
                      <p className='inline mr-4 text-md lg:text-lg'>
                        { item.attributes.title }
                      </p>
                      <p className='mr-4 text-xs italic uppercase'>
                        { item.attributes.description }
                      </p>
                      <p className='mr-4 text-xs'>
                        { item.attributes.do }
                      </p>
                    </div>
                    <span className='text-sm'>
                        { (item.attributes.price).toFixed(2) } €
                    </span>
                  </div>
                ))
    )
  }



  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, ['/carta-vins']);

  return (
    <main className="pt-28 font-Roboto bg-gradient-to-b from-white to-light/50 w-full">

    <Breadcrumbs className='max-w-[900px] mx-auto'>
      <Link to="/" className="text-sm md:text-md lg:text-lg opacity-60 font-Roboto">
      {t("vins.breadcumb-1")}
      </Link>
      <Link href="#" className="text-sm md:text-md lg:text-lg font-Roboto font-bold">
      {t("vins.breadcumb-2")}
      </Link>
    </Breadcrumbs>

      <hr className='border-b-8 border-secondary/75' />

          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='negre'>
            <h3 className='text-xl font-bold py-5 italic uppercase'>
            {t("vins.negres")}
            </h3>
            { loading ? <Spinner /> : renderProducte('negre') } 
          </div>

          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='blanc'>
            <h3 className='text-xl font-bold py-5 italic uppercase'>
            {t("vins.blancs")}
            </h3>
            { loading ? <Spinner /> : renderProducte('blanc') }  
          </div>

          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='rosat'>
            <h3 className='text-xl font-bold py-5 italic uppercase'>
            {t("vins.rosats")}
            </h3>
            { loading ? <Spinner /> : renderProducte('rosat') } 
          </div>
          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='cava'>
            <h3 className='text-xl font-bold py-5 italic uppercase'>
            {t("vins.caves")}
            </h3>
            { loading ? <Spinner /> : renderProducte('cava') } 
          </div>
          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='sangria'>
            <h3 className='text-xl font-bold py-5 italic uppercase'>
            {t("vins.sangria")}
            </h3>
            { loading ? <Spinner /> : renderProducte('sangria') } 
          </div>
          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='lambursco'>
            <h3 className='text-xl font-bold py-5 italic uppercase'>
            {t("vins.lambruscos")}
            </h3>
            { loading ? <Spinner /> : renderProducte('lambrusco') } 
          </div>

          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto border-b-2 border-dark/10' id='copa casa'>
            <GiWineGlass size={35} style={{ display: "inline-block"}} />
            <h3 className='inline text-md lg:text-xl font-bold py-5 italic uppercase'>
            {t("vins.copa-casa")}
            </h3>
            <span className='inline-block text-md md:text-xl mx-4'>
              2,20€
            </span>
          </div>
          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto border-b-2 border-dark/10' id='lambursco'>
            <GiWineGlass size={35} style={{ display: "inline-block"}} />
            <h3 className='inline text-md lg:text-xl font-bold py-5 italic uppercase'>
            {t("vins.copa-criança")}
            </h3>
            <span className='inline-block text-md md:text-xl mx-4'>
              2,60€
            </span>
          </div>
          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto border-b-2 border-dark/10' id='lambursco'>
            <GiWineGlass size={35} style={{ display: "inline-block"}} />
            <h3 className='inline text-md lg:text-xl font-bold py-5 italic uppercase'>
            {t("vins.copa-cava")}
            </h3>
            <span className='inline-block text-md md:text-xl mx-4'>
              2,30€
            </span>
          </div>

<div className='w-full md:max-w-[900px] mx-auto my-8 px-5'>
          <h3 className='text-xl font-bold py-5 italic uppercase'> {t("carta.alergens-title")}</h3>
          <div className='flex gap-x-4 py-1'>
            < GiMolecule size={30} title='Sulfits' />
            <span>
            {t("carta.alergen-12")}
            </span>
          </div>
      </div>

    <Footer />
    </main>  
  )
}

export default CartaVins