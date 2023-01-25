import Portada from '../assets/portada.jpg'
import LogoBlanc from '../assets/logos/logo_blanc.webp'

function Inici() {
  return (
    <div className='h-screen'>
        <header className="w-full h-screen bg-local flex flex-col items-start justify-start font-Roboto" style={{backgroundImage: `url(${Portada})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'left'}}>
          <div className='w-full h-screen text-end font-bold text-light px-2 py-40 lg:py-50 bg-gradient-to-t from-light/5 to-dark/50'>
            <div className='w-full lg:max-w-[1200px]'>
              <h1 className='text-5xl lg:text-6xl'>Restaurant <br/> Espai de la Carme</h1>
              <span className='block font-base text-lg lg:text-xl pt-1'>des del 2000, a Vilanova i la Geltrú</span>
            </div>
          </div>
        </header>       
      </div>
  )
}

export default Inici