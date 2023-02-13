import { useEffect } from 'react'
import Portada from '../assets/local.webp'
import LogoBlanc from '../assets/logos/logo_blanc.webp'
import About from './About'
import IniciCartes from './IniciCartes'
import Productes from './Productes'
import Footer from '../components/Footer'
import  CookieConsent from 'react-cookie-consent';
import { BiCookie } from 'react-icons/bi'

function Inici() {

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, ['/']);

  return (
    <div className='bg-gradient-to-t from-secondary to-light'>
          <header className="w-full h-screen flex flex-col items-start justify-start font-Roboto" style={{backgroundImage: `url(${Portada})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className='w-full h-screen text-light py-24 lg:py-50 bg-gradient-to-b from-dark/50 to-dark/50'>
              <div className='w-full h-full lg:max-w-[250px] mx-auto flex justify-center items-center'>
                <img src={LogoBlanc} alt="logo Espai blanc" width="250px"/>
              </div>
            </div>
          </header> 

        <CookieConsent 
        debug={true} 
        style={{ background: "#00000088", textAlign: "left", padding: "10px 0" }}
        buttonStyle={{ background: "#A68A6D", color: "#fff", borderRadius: "50px", padding: "6px 24px"}}
        buttonText="Accepto"
        expires={365}
        >
          <BiCookie size={40} />
           En aquest web fem servir cookies (pròpies i de tercers) amb les finalitats de treure mètriques per a que funcioni correctament, per mesurar l’audiència i oferir-te continguts personalitzats.
        </CookieConsent>  
         

        <About />   

        <IniciCartes />

        <Productes />

        <Footer />
    </div>
  )
}

export default Inici