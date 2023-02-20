import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from "@material-tailwind/react";
import { GiFlour, GiBigEgg , GiPeanut, GiCrabClaw, GiMilkCarton, GiDoubleFish, GiMolecule, GiBubblingBowl, GiPeas, GiSesame, GiAbstract094, GiAcorn, GiPlanks, GiMineralPearls } from 'react-icons/gi'
import Spinner from '../components/Spinner';
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

function MenuLab() {

  const [t, i18n] = useTranslation("global");

  const [productesMenuLab, setProductesMenuLab] = useState([]);
  const [ loading, setLoading ] = useState(true)
  const [ lang, setLang ] = useState('')

  useEffect(() => {
    setLang(i18n.language);
    getProducts();
  })
 
  const getProducts = () => {
    try{
      fetch(`${import.meta.env.VITE_API_URL}/menu-labs?pagination[limit]=50&locale=${lang}`, { method: 'GET' })
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

    function renderAlergen(alergen) {
      
      switch (alergen) {
       case 'gluten':
       return <GiFlour size={30} title={"gluten"}/>;
       case 'huevo':
       return <GiBigEgg size={30} title={"huevo"}/>;
       case 'crustaceo':
       return <GiCrabClaw size={30} title={"crustaceo"}/>;
       case 'pescado':
       return <GiDoubleFish size={30} title={"pescado"}/>;
       case 'cacahuete':
       return <GiPeanut size={30} title={"cacahuete"}/>;
       case 'cascara':
       return <GiAcorn size={30} title={"cascara"}/>;
       case 'soja':
       return <GiPeas size={30} title={"soja"}/>;
       case 'lacteo':
       return <GiMilkCarton size={30} title={"lacteo"} />;
       case 'apio':
       return <GiPlanks size={30} title={"apio"}/>;
       case 'mostaza':
       return <GiBubblingBowl size={30} title={"mostaza"}/>;
       case 'sesamo':
       return <GiSesame size={30} title={"sesamo"}/>;
       case 'sulfito':
       return <GiMolecule size={30} title={"sulfito"}/>;
       case 'altramuce':
       return <GiMineralPearls size={30} title={"altramuce"}/>;
       case 'molusco':
       return <GiAbstract094 size={30} title={"molusco"}/>;
      }
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

      <div className='w-full md:max-w-[900px] mx-auto my-8 px-5'>
            <h3 className='text-xl font-bold py-5 italic uppercase'>
            {t("carta.alergens-title")}
            </h3>
            <div className='flex gap-x-4 py-1'>
              < GiFlour size={30} title='Gluten' />
              <span>
              {t("carta.alergen-1")}
              </span>
            </div>
            <div className='flex gap-x-4 py-1'>
              < GiBigEgg size={30} title='Ou' />
              <span>
              {t("carta.alergen-2")}
              </span>
            </div>
            <div className='flex gap-x-4 py-1'>
              < GiPeanut size={30} title='Cacauet' />
              <span>
              {t("carta.alergen-3")}
              </span>
            </div>
            <div className='flex gap-x-4 py-1'>
              < GiAcorn size={30} title='Fruits secs' />
              <span>
              {t("carta.alergen-4")}
              </span>
            </div>
            <div className='flex gap-x-4 py-1'>
              < GiMineralPearls size={30} title='Lupins' />
              <span>
              {t("carta.alergen-5")}
              </span>
            </div>
            <div className='flex gap-x-4 py-1'>
              < GiPeas size={30} title='Soja' />
              <span>
              {t("carta.alergen-6")}
              </span>
            </div>
            <div className='flex gap-x-4 py-1'>
              < GiPlanks size={30} title='Api' />
              <span>
              {t("carta.alergen-7")}
              </span>
            </div>
            <div className='flex gap-x-4 py-1'>
              < GiCrabClaw size={30} title='Crustaci' />
              <span>
              {t("carta.alergen-8")}
              </span>
            </div>
            <div className='flex gap-x-4 py-1'>
              < GiAbstract094 size={30} title='Molusc' />
              <span>
              {t("carta.alergen-9")}
              </span>
            </div>
            <div className='flex gap-x-4 py-1'>
              < GiDoubleFish size={30} title='Peix' />
              <span>
              {t("carta.alergen-10")}
              </span>
            </div>
            <div className='flex gap-x-4 py-1'>
              < GiMilkCarton size={30} title='Lactosa' />
              <span>
              {t("carta.alergen-11")}
              </span>
            </div>
            <div className='flex gap-x-4 py-1'>
              < GiMolecule size={30} title='Sulfits' />
              <span>
              {t("carta.alergen-12")}
              </span>
            </div>
            <div className='flex gap-x-4 py-1'>
              < GiBubblingBowl size={30} title='Mostassa' />
              <span>
              {t("carta.alergen-13")}
              </span>
            </div>
            <div className='flex gap-x-4 py-1'>
              < GiSesame size={30} title='Sesam' />
              <span>
              {t("carta.alergen-14")}
              </span>
            </div>
        </div>

    <Footer />
    </main>  
  )
}

export default MenuLab