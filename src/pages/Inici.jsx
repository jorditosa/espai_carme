import { useEffect } from 'react'
import Portada from '../assets/portada.webp'
import LogoBlanc from '../assets/logos/logo_blanc.webp'
import About from './About'
import IniciCartes from './IniciCartes'
import Productes from './Productes'
import Footer from '../components/Footer'
import Cookies from '../components/Cookies'

function Inici() {

  useEffect(() => {
    // "document.documentElement.scrollTo"
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, ['/']);

  return (
    <div className='bg-light'>
          <header className="w-full h-screen flex flex-col items-start justify-start font-Roboto" style={{backgroundImage: `url(${Portada})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '20%'}}>
            <div className='w-full h-screen text-light py-24 lg:py-50 bg-gradient-to-b from-dark/50 to-dark/50'>
              <div className='w-full h-full lg:max-w-[250px] mx-auto flex justify-center items-center'>
                <img src={LogoBlanc} alt="logo Espai blanc"/>
              </div>
            </div>
          </header> 

        <Cookies />
         
        <About />   

        <IniciCartes />

        <Productes />

        
        <Footer />
    </div>
  )
}

export default Inici