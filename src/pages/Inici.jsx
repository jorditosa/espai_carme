import { lazy } from 'react'
import Portada from '../assets/portada.webp'
import LogoBlanc from '../assets/logos/logo_blanc.webp'
import Footer from '../components/Footer'
const About = lazy(() => import("./About"))
const IniciCartes = lazy(() => import("./IniciCartes"))
const Productes = lazy(() => import("./Productes"))

function Inici() {

  return (
    <div className='bg-gradient-to-b from-white to-light/50'>
          <header className="w-full h-screen bg-local flex flex-col items-start justify-start font-Roboto" style={{backgroundImage: `url(${Portada})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className='w-full h-screen text-light py-24 lg:py-50 bg-gradient-to-t from-light/5 to-dark/75'>
              <div className='w-full h-full lg:max-w-[900px] mx-auto flex justify-center md:justify-end items-center'>
                <img src={LogoBlanc} alt="logo Espai blanc" />
              </div>
            </div>
          </header> 

        <About />   

        <IniciCartes />

        <Productes />

        <Footer />
    </div>
  )
}

export default Inici