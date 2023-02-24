import { useState, useEffect } from 'react';
import { useProductsContext } from '../context/ProductsContext'
import { Link } from 'react-router-dom';
import { Breadcrumbs } from "@material-tailwind/react";
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'
import renderAlergen from '../common/renderAlergens';
import Llegenda from '../components/Llegenda';
import Spinner from '../components/Spinner';

function Carta() {

  const { products , setProducts } = useProductsContext()

  console.log(products)

  const [t, i18n] = useTranslation("global");


  const renderProducte = (categoria) => { 
    return (
      products.filter(producte => producte.attributes.categoria === categoria).map( (item, id) => (
                  <div className='flex justify-between items-center border-b-2 border-dark/10 py-1' key={id}>
                    <div className='flex flex-col lg:flex-row items-start justify-start w-5/6'>
                      <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
                        { item.attributes.title }
                      </p>
                      <span>
                      {renderAlergen(item.attributes.alergens)}
                    </span>
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
  }, ['/carta']);

  return (
    
    <main className="pt-28 font-Roboto bg-gradient-to-b from-white to-light/50 w-full">

    <Breadcrumbs className='max-w-[900px] mx-auto'>
      <Link to="/" className="text-sm md:text-md lg:text-lg opacity-60 font-Roboto">
      {t("carta.breadcumb-1")}
      </Link>
      <Link href="#" className="text-sm md:text-md lg:text-lg font-Roboto font-bold">
      {t("carta.breadcumb-2")}
      </Link>
    </Breadcrumbs>

      <hr className='border-b-8 border-secondary/75' />

          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='foie_tartufo'>
              <h3 className='text-xl font-bold py-5 italic uppercase'>
              {t("carta.section-1")}
              </h3>
              { products.length !== 0 ? renderProducte('foie_tartufo') : <Spinner /> } 
          </div>            

          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='entrants'>
            <h3 className='text-xl font-bold py-5 italic uppercase'>
            {t("carta.section-2")}
            </h3>
            { products.length !== 0 ? renderProducte('entrants') : <Spinner /> }   
          </div>

          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='amanides'>
            <h3 className='text-xl font-bold py-5 italic uppercase'>
            {t("carta.section-3")}
            </h3>
            { products.length !== 0 ? renderProducte('amanides') : <Spinner /> }  
          </div>

          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='provolones'>
            <h3 className='text-xl font-bold py-5 italic uppercase'>
            {t("carta.section-4")}
            </h3>
            { products.length !== 0 ? renderProducte('provolones') : <Spinner /> }  
          </div>

          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='risottos'>
            <h3 className='text-xl font-bold py-5 italic uppercase'>
            {t("carta.section-5")}
            </h3>
            { products.length !== 0 ? renderProducte('risottos') : <Spinner /> }  
          </div>

          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='pastes'>
            <h3 className='text-xl font-bold py-5 italic uppercase'>
            {t("carta.section-6")}
            </h3>
            { products.length !== 0 ? renderProducte('pastes') : <Spinner /> }  
          </div>

          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='peix'>
            <h3 className='text-xl font-bold py-5 italic uppercase'>
            {t("carta.section-7")}
            </h3>
            { products.length !== 0 ? renderProducte('peix') : <Spinner /> }  
          </div>

          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='carn'>
            <h3 className='text-xl font-bold py-5 italic uppercase'>
            {t("carta.section-8")}
            </h3>
            { products.length !== 0 ? renderProducte('carn') : <Spinner /> }  
          </div>

          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='pizzes'>
            <h3 className='text-xl font-bold py-5 italic uppercase'>
            {t("carta.section-9")} </h3>
            { products.length !== 0 ? renderProducte('pizzes') : <Spinner /> }  
          </div>

          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='postres'>
            <h3 className='text-xl font-bold py-5 italic uppercase'>
            {t("carta.section-10")}
            </h3>
            { products.length !== 0 ? renderProducte('postres') : <Spinner /> } 
          </div>

          <Llegenda />

    <Footer />
    </main>  
  )
}

export default Carta