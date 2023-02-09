import Portada from '../assets/local.webp'
import LogoBlanc from '../assets/logos/logo_blanc.webp'
import About from './About'
import IniciCartes from './IniciCartes'
import Productes from './Productes'
import Footer from '../components/Footer'


function Inici() {

  return (
    <div className='bg-gradient-to-t from-secondary to-light'>
          <header className="w-full h-screen flex flex-col items-start justify-start font-Roboto" style={{backgroundImage: `url(${Portada})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
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