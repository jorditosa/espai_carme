import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from "@material-tailwind/react";
import { GiFlour, GiBigEgg , GiPeanut, GiCrabClaw, GiMilkCarton, GiDoubleFish, GiMolecule, GiBubblingBowl, GiPeas, GiSesame, GiAbstract094, GiAcorn, GiPlanks, GiMineralPearls } from 'react-icons/gi'
import Spinner from '../components/Spinner';
import Footer from '../components/Footer'

const headers = { 'Content-Type': 'application/json' };

function CartaVins() {

  const [productesVins, setProductesVins] = useState([]);
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/vins`, { headers, method: 'GET' })
    .then(res => res.json())
    .then((data) => {
      setLoading(false);
      setProductesVins(data.data);
    }
    )
    .catch((error) => {
      setLoading(false);
    })
  }, [])

   
  function renderProducte(categoria) { 
    if(loading) {
      return <Spinner />
    }
    return (
      productesVins.filter(producte => producte.attributes.categoria === categoria).map( (item, id) => (
                  <div className='flex justify-between items-center border-b-2 border-dark/10 py-1' key={id}>
                    <div className='flex flex-col lg:flex-row items-start justify-start w-5/6'>
                      <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
                        { item.attributes.title }
                      </p>
                    </div>
                    <span className='text-md md:text-xl w-1/6'>
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
        Inici
      </Link>
      <Link href="#" className="text-sm md:text-md lg:text-lg font-Roboto font-bold">
        Carta de Vins
      </Link>
    </Breadcrumbs>

      <hr className='border-b-8 border-secondary/75' />

          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='negre'>
            <h3 className='text-xl font-bold py-5 italic'>NEGRES</h3>
            { loading ? <Spinner /> : renderProducte('negre') } 
          </div>

          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='negre'>
            <h3 className='text-xl font-bold py-5 italic'>BLANCS</h3>
            { loading ? <Spinner /> : renderProducte('blanc') }  
          </div>

          <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='negre'>
            <h3 className='text-xl font-bold py-5 italic'>ROSATS</h3>
            { loading ? <Spinner /> : renderProducte('rosat') } 
          </div>

<div className='w-full md:max-w-[900px] mx-auto my-8 px-5'>
          <h3 className='text-xl font-bold py-5 italic'>Llegenda d'al·lèrgens</h3>
          <div className='flex gap-x-4 py-1'>
            < GiMolecule size={30} title='Sulfits' />
            <span>Conté Sulfits</span>
          </div>
      </div>

    <Footer />
    </main>  
  )
}

export default CartaVins