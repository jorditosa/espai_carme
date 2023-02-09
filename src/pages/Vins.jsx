import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CopesVi from '../assets/copes_vi.webp'
import ArnauVi from '../assets/vi_cuso.webp'
import SubHeading from '../components/SubHeading'
import Footer from '../components/Footer'
import ViBlanc from '../assets/vi_blanc.jpg'
import ViNegre from '../assets/vi_negre.jpg'


function Vins() {

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, ['/celler']);

  return (
    <section className='text-light bg-dark'>
      <div className='h-[500px] md:h-full py-5'>
        <img src={CopesVi} alt="Copes de vi" className='block mx-auto w-screen'/>
        <div className='mx-10'>
            <SubHeading>
            El Celler Cusó
            </SubHeading>
        </div>
        <hr className='border-b-8' />
      </div>

      <div className='w-full lg:max-w-screen-lg mx-auto py-8 lg:py-24 flex flex-col md:flex-row items-center'>
          <img src={ArnauVi} alt="imatge forn llenya" className='block md:w-1/4 order-2 md:order-none  rounded-lg shadow-lg shadow-light'
             />
          <div className='px-10 w-full'>
              <SubHeading>L'essència familiar al teu paladar</SubHeading>
          <p className='py-4'>
              Les vinyes situades a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, inventore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores reiciendis ea voluptatum, modi non illum veniam amet culpa animi fugit!
          </p>
          <Link to={'/carta-vins'}>
            <button type="submit" className="w-72 cursor-pointer text-light bg-secondary hover:text-dark hover:bg-primary rounded-full py-2 px-4 font-bold text-md lg:text-xl mt-12 transition-all ease-in-out duration-200">Ves a la Carta de Vins</button>
          </Link>
          </div>
      </div>

    <div className='bg-gradient-to-b from-light/75 to-light'>
      <Footer />
    </div>

    </section>
  )
}

export default Vins