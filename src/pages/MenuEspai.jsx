import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from "@material-tailwind/react";
import { GiFlour, GiBigEgg , GiPeanut, GiCrabClaw, GiMilkCarton, GiDoubleFish, GiMolecule, GiBubblingBowl, GiPeas, GiSesame, GiAbstract094, GiAcorn, GiPlanks, GiMineralPearls } from 'react-icons/gi'
import Spinner from '../components/Spinner';
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'
import renderAlergen from '../common/renderAlergens';
import Llegenda from '../components/Llegenda';

function MenuEspai() {

  const [t, i18n] = useTranslation("global");

  const [productesMenuEspai, setProductesMenuEspai] = useState([]);
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    getProducts();
  }, [i18n.language])
  
  const getProducts = () => {
    try{
      fetch(`${import.meta.env.VITE_API_URL}/menu-espais?locale=${i18n.language}`, { method: 'GET' })
      .then(res => {
      if ( res.ok) return res.json()
      if ( res.status === 401) window.location.reload()  
      })
      .then((data) => {
        setLoading(false);
        setProductesMenuEspai(data.data)});
    } catch(error) {
      window.location.reload()
    } finally {
      
    }
  }

  function renderProducte(categoria) { 
    return (
      productesMenuEspai.filter(producte => producte.attributes.categoria === categoria).map( (item, id) => (
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
      {t("menu.breadcumb-espai")}
      </Link>
    </Breadcrumbs>

      <hr className='border-b-8 border-secondary/75' />


      <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='primers'>
        <h3 className='text-xl font-bold py-5 italic'>
        {t("menu.primers")}
        </h3>
        { loading ? <Spinner /> : renderProducte('primers') } 
      </div>            

      <Llegenda />

    <Footer />
    </main>  
  )
}

export default MenuEspai