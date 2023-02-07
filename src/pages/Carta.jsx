import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom'
import Footer from '../components/Footer'
import SubHeading from '../components/SubHeading'
import { GiFlour, GiBigEgg , GiPeanut, GiCrabClaw, GiMilkCarton } from 'react-icons/gi'

export async function loader() {

  const respuesta = await fetch("http://localhost:1337/api/cartas");
  const resultado = await respuesta.json();
  const productes = resultado.data

  console.log(productes)

  return productes
}

function Carta() {

  // Con useLoaderData, lo que esté en la función loader será cargado aqui
  const productes = useLoaderData();

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

      <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto'>

        <h3 className='text-xl font-bold py-5 italic'>FOIE I TARTUFO!!!</h3>

          { productes.map( (producte, id) => (
          <div className='flex justify-between items-center border-b-2 border-dark/10 py-1' key={id}>
            <div className='flex flex-col lg:flex-row items-start justify-start'>
              <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
                { producte.attributes.title }
              </p>
            </div>
            <span className='text-md md:text-xl ml-4'>
            { producte.attributes.price } €
            </span>
          </div>
          ))}

        </div>            

      <hr />

      <div className='w-full md:max-w-[900px] mx-auto mt-10 px-5'>
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

export default Carta