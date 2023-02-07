import { lazy } from 'react'
import Portada from '../assets/local.webp'
import LogoBlanc from '../assets/logos/logo_blanc.webp'
import Footer from '../components/Footer'
const About = lazy(() => import("./About"))
const IniciCartes = lazy(() => import("./IniciCartes"))
const Productes = lazy(() => import("./Productes"))

function Inici() {

  return (
    <div className='bg-gradient-to-t from-secondary to-light'>
          <header className="w-full h-screen bg-fixed flex flex-col items-start justify-start font-Roboto" style={{backgroundImage: `url(${Portada})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className='w-full h-screen text-light py-24 lg:py-50 bg-gradient-to-b from-secondary/50 to-light/5'>
              <div className='w-full h-full lg:max-w-[250px] mx-auto flex justify-center items-start'>
                <img src={LogoBlanc} alt="logo Espai negre" />
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