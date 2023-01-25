import Portada from '../assets/portada.jpg'
import LogoBlanc from '../assets/logos/logo_blanc.webp'
import About from './About'
import Footer from '../components/Footer'

function Inici() {
  return (
    <div className='bg-gradient-to-b from-white to-secondary/50'>
        <header className="w-full h-screen bg-local flex flex-col items-start justify-start font-Roboto" style={{backgroundImage: `url(${Portada})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className='w-full h-screen text-end font-bold text-light py-24 lg:py-50 bg-gradient-to-t from-light/5 to-dark/75'>
            <div className='w-full lg:max-w-[1200px] px-10 pt-12'>
              <h1 className='text-5xl lg:text-6xl text-center md:text-right'>Restaurant <br/> Espai de la Carme</h1>
              <span className='block text-center md:text-right font-base text-lg lg:text-xl pt-1'>des del 2000, a Vilanova i la Geltrú</span>
            </div>
          </div>
        </header>    

        <About />   

        <Footer />
    </div>
  )
}

export default Inici