import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from "@material-tailwind/react";
import { GiFlour, GiBigEgg , GiPeanut, GiCrabClaw, GiMilkCarton, GiDoubleFish, GiMolecule, GiBubblingBowl, GiPeas, GiSesame, GiAbstract094, GiAcorn, GiPlanks, GiMineralPearls } from 'react-icons/gi'
import Spinner from '../components/Spinner';
import Footer from '../components/Footer'

const parseJSON = (resp) => (resp.json ? resp.json() : resp);
const headers = { 'Content-Type': 'application/json' };

function MenuLab() {

  const [productesMenuLab, setProductesMenuLab] = useState([]);
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/menu-labs?pagination[limit]=50`, { headers, method: 'GET' })
    .then(parseJSON)
    .then(({data}) => setProductesMenuLab(data))
    .then(setLoading(false))
    .catch((error) => console.log(error))
    
  }, [])
  
  function renderProducte(categoria) { 
    return (
      productesMenuLab.filter(producte => producte.attributes.categoria === categoria).map( (item, id) => (
                  <div className='flex justify-between items-center border-b-2 border-dark/10 py-1' key={id}>
                    <div className='flex flex-col lg:flex-row items-start justify-start w-5/6'>
                      <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
                        { item.attributes.title }
                      </p>
                    </div>
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
        Inici
      </Link>
      <Link href="#" className="text-sm md:text-md lg:text-lg font-Roboto font-bold">
        Menú Laborable
      </Link>
    </Breadcrumbs>

      <hr className='border-b-8 border-secondary/75' />


      <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='primers'>
        <h3 className='text-xl font-bold py-5 italic'>Primers a escollir</h3>
        { loading ? <Spinner /> : renderProducte('primers') } 
      </div>            

      <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='segons'>
        <h3 className='text-xl font-bold py-5 italic'>Segons a escollir</h3>
        { loading ? <Spinner /> : renderProducte('segons') } 
      </div>

      <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto'>
        <h3 className='text-xl font-bold py-5 italic'>Preu Menú <span className='text-3xl '>15,30 €</span></h3>
        <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
          Primer, Segon, 1 beguda + 1 panet + Postres o cafè
          <span className='block'>(café supl. 1,60€ - cigaló o trifàsic 2€) 
          <span className='block'> (IVA Inclòs)</span> 
          </span>  
        </p>
      </div>
      <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto'>
        <h3 className='text-xl font-bold py-5 italic'>Preu Menú <span className='text-3xl '>8,50 €</span></h3>
        <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
          Primer + 1 Beguda    
          <span className='block'> (IVA Inclòs)</span> 
        </p>
      </div>

      <div className='w-full md:max-w-[900px] mx-auto my-8 px-5'>
          <h3 className='text-xl font-bold py-5 italic'>Llegenda d'al·lèrgens</h3>
          <div className='flex gap-x-4 py-1'>
            < GiFlour size={30} title='Gluten' />
            <span>Conté Gluten</span>
          </div>
          <div className='flex gap-x-4 py-1'>
            < GiBigEgg size={30} title='Ou' />
            <span>Conté Ou</span>
          </div>
          <div className='flex gap-x-4 py-1'>
            < GiPeanut size={30} title='Cacauet' />
            <span>Conté Traces de cacahuet</span>
          </div>
          <div className='flex gap-x-4 py-1'>
            < GiAcorn size={30} title='Fruits secs' />
            <span>Conté Fruits secs</span>
          </div>
          <div className='flex gap-x-4 py-1'>
            < GiMineralPearls size={30} title='Lupins' />
            <span>Conté Lupins</span>
          </div>
          <div className='flex gap-x-4 py-1'>
            < GiPeas size={30} title='Soja' />
            <span>Conté Soja</span>
          </div>
          <div className='flex gap-x-4 py-1'>
            < GiPlanks size={30} title='Api' />
            <span>Conté Api</span>
          </div>
          <div className='flex gap-x-4 py-1'>
            < GiCrabClaw size={30} title='Crustaci' />
            <span>Conté Crustaci</span>
          </div>
          <div className='flex gap-x-4 py-1'>
            < GiAbstract094 size={30} title='Molusc' />
            <span>Conté Molusc</span>
          </div>
          <div className='flex gap-x-4 py-1'>
            < GiDoubleFish size={30} title='Peix' />
            <span>Conté Peix</span>
          </div>
          <div className='flex gap-x-4 py-1'>
            < GiMilkCarton size={30} title='Lactosa' />
            <span>Conté Lactosa</span>
          </div>
          <div className='flex gap-x-4 py-1'>
            < GiMolecule size={30} title='Sulfits' />
            <span>Conté Sulfits</span>
          </div>
          <div className='flex gap-x-4 py-1'>
            < GiBubblingBowl size={30} title='Mostassa' />
            <span>Conté Mostassa</span>
          </div>
          <div className='flex gap-x-4 py-1'>
            < GiSesame size={30} title='Sesam' />
            <span>Conté Sèsam</span>
          </div>
      </div>

    <Footer />
    </main>  
  )
}

export default MenuLab