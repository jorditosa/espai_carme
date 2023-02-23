import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from "@material-tailwind/react";
import { GiFlour, GiBigEgg , GiPeanut, GiCrabClaw, GiMilkCarton, GiDoubleFish, GiMolecule, GiBubblingBowl, GiPeas, GiSesame, GiAbstract094, GiAcorn, GiPlanks, GiMineralPearls } from 'react-icons/gi'
import Spinner from '../components/Spinner';
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'
import renderAlergen from '../common/renderAlergens';
import Llegenda from '../components/Llegenda';

function MenuLab() {

  const [t, i18n] = useTranslation("global");

  const [productesMenuLab, setProductesMenuLab] = useState([]);
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    getProducts();
  }, [i18n.language])
 
  const getProducts = () => {
    try{
      fetch(`${import.meta.env.VITE_API_URL}/menu-labs?locale=${i18n.language}`, { method: 'GET' })
      .then(res => {
      if ( res.ok) return res.json()
      if ( res.status === 401) window.location.reload()  
      })
      .then((data) => {
        setLoading(false);
        setProductesMenuLab(data.data)});
    } catch(error) {
      window.location.reload()
    } 
  }
  
     
    function renderProducte(categoria) { 
      return (
        productesMenuLab.filter(producte => producte.attributes.categoria === categoria).map( (item, id) => (
                    <div className='flex justify-between items-end border-b-2 border-dark/10 py-1' key={id}>
                      <div className='flex flex-col lg:flex-row items-start justify-start w-5/6'>
                        <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
                          { item.attributes.title }
                        </p>
                      </div>
                      <span>
                        {renderAlergen(item.attributes.alergens)}
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
  }, ['/menu-espai']);

  return (
    <main className="pt-28 font-Roboto bg-gradient-to-b from-white to-light/50 w-full">

    <Breadcrumbs className='max-w-[900px] mx-auto'>
      <Link to="/" className="text-sm md:text-md lg:text-lg opacity-60 font-Roboto">
      {t("menu.breadcumb-1")}
      </Link>
      <Link to="/menus" className="text-sm md:text-md lg:text-lg opacity-60 font-Roboto">
      {t("menu.breadcumb-2")}
      </Link>
      <Link href="#" className="text-sm md:text-md lg:text-lg font-Roboto font-bold">
      {t("menu.breadcumb-lab")}
      </Link>
    </Breadcrumbs>

      <hr className='border-b-8 border-secondary/75' />


      <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='primers'>
        <h3 className='text-xl font-bold py-5 italic'>  {t("menu.primers")}</h3>
        { loading ? <Spinner /> : renderProducte('primers') } 
      </div>            

      <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='segons'>
        <h3 className='text-xl font-bold py-5 italic'>{t("menu.segons")}</h3>
        { loading ? <Spinner /> : renderProducte('segons') } 
      </div>
      <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='segons'>
        <h3 className='text-xl font-bold py-5 italic'>{t("menu.postres")}</h3>
        { loading ? <Spinner /> : renderProducte('postres') } 
      </div>

      <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto'>
        <h3 className='text-xl font-bold py-5 italic'>
        {t("menu.precio")} <span className='text-3xl '>15,30 €</span></h3>
        <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
        {t("menu.precio-text-lab")}
          <span className='block'> {t("menu.precio-supl")} </span> 
          <span className='block font-bold'>
          {t("menu.precio-text-vino")}</span> 
          <span className='block'>  {t("menu.precio-iva")}</span> 
        </p>
      </div>
      <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto'>
        <h3 className='text-xl font-bold py-5 italic'>Preu Menú <span className='text-3xl '>8,50 €</span></h3>
        <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
        {t("menu.precio-text-lab-ind")}    
          <span className='block'>  {t("menu.precio-iva")}</span> 
        </p>
      </div>

      <Llegenda />

    <Footer />
    </main>  
  )
}

export default MenuLab