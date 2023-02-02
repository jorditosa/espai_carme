import { useState, useEffect } from 'react'
import Portada from '../assets/portada.webp'
import LogoBlanc from '../assets/logos/logo_blanc.webp'
import About from './About'
import Footer from '../components/Footer'
import IniciCartes from './IniciCartes'
import Productes from './Productes'
import Contacte from './Contacte'

function Inici() {
  const [loading, setLoading] = useState(false);
  
  // Loading effect
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className='bg-gradient-to-b from-white to-light/50'>
      { loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
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
        </>
      )}
       

        
    </div>
  )
}

export default Inici