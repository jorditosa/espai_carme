import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom'
import Footer from '../components/Footer'
import SubHeading from '../components/SubHeading'
import { GiFlour, GiBigEgg , GiPeanut, GiCrabClaw, GiMilkCarton } from 'react-icons/gi'
import BounceLoader  from "react-spinners/BounceLoader";

export async function loader() {

  const respuesta = await fetch(import.meta.env.VITE_API_URL_MENU);
  const resultado = await respuesta.json();
  const menuEspai = resultado.data

  return menuEspai
}

function MenuEspai() {

  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 1500)
  }, [])


  // Con useLoaderData, lo que esté en la función loader será cargado aqui
  const productesMenuEspai = useLoaderData();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, ['/carta']);

  return (
    <main className="pt-28 font-Roboto bg-gradient-to-b from-white to-light/50 w-full">

      <hr className='border-b-8 border-primary/50' />

      <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='primers'>
        <h3 className='text-xl font-bold py-5 italic'>Primers</h3>

    	    { loading ? 
          <BounceLoader 
          color={"#b08e6b"}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
          /> :  
          <>
            { productesMenuEspai.filter(producte => producte.attributes.categoria === 'primers').map( (item, id) => (
              <div className='flex justify-between items-center border-b-2 border-dark/10 py-1' key={id}>
                <div className='flex flex-col lg:flex-row items-start justify-start'>
                  <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
                    { item.attributes.title }
                  </p>
                </div>
                <span className='text-md md:text-xl block ml-4'>
                { item.attributes.price }€
                </span>
              </div>
            ))}
          </>
        } 
      </div>            

      <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto' id='segons'>
        <h3 className='text-xl font-bold py-5 italic'>Segons</h3>

        { loading ? 
          <BounceLoader 
          color={"#b08e6b"}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
          /> :  
          <>
            { productesMenuEspai.filter(producte => producte.attributes.categoria === 'segons').map( (item, id) => (
              <div className='flex justify-between items-center border-b-2 border-dark/10 py-1' key={id}>
                <div className='flex flex-col lg:flex-row items-start justify-start'>
                  <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
                    { item.attributes.title }
                  </p>
                </div>
                <span className='text-md md:text-xl block ml-4'>
                { item.attributes.price }€
                </span>
              </div>
            ))}
          </>
        } 
      </div>

      <div className='w-full md:max-w-[900px] mx-auto my-8 px-5'>
          <h3 className='font-bold py-4 underline'>Llegenda d'al·lèrgens</h3>
          <div className='flex gap-x-4'>
            < GiFlour size={30} title='Gluten' />
            <span>Conté Gluten</span>
          </div>
          <div className='flex gap-x-4'>
            < GiBigEgg size={30} title='Ou' />
            <span>Conté Ou</span>
          </div>
          <div className='flex gap-x-4'>
            < GiPeanut size={30} title='Cacauet' />
            <span>Conté Traces de cacahuet</span>
          </div>
          <div className='flex gap-x-4'>
            < GiCrabClaw size={30} title='Crustaci' />
            <span>Conté Crustaci</span>
          </div>
          <div className='flex gap-x-4'>
            < GiMilkCarton size={30} title='Lactosa' />
            <span>Conté Lactosa</span>
          </div>
      </div>

    <Footer />
    </main>  
  )
}

export default MenuEspai