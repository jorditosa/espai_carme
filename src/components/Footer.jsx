import { Link } from 'react-router-dom'
import LogoNegre from '../assets/logos/logo_negre.webp'
import { BsInstagram, BsFacebook, BsTwitter, BsFillTelephoneFill } from 'react-icons/bs'
import Contacte from '../pages/Contacte'


function Footer() {
  return (
    
    <footer className="h-full p-4 lg:p-8 font-Roboto bg-light">

        <hr className="my-4 border-gray-400 sm:mx-auto lg:my-8" />

        <div className="py-2 md:py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 mb-6 md:mb-0">
                <Link to="/" className="flex items-start">
                    <img src={LogoNegre} className="w-48 mx-auto" alt="Espai de la Carme Logo" />
                </Link>
                <Contacte />
                <div className='text-center md:text-start'>
                    <h2 className="mb-6 text-md font-bold text text-dark uppercase dark:text-white">Horari</h2>
                    <ul className='text-gray-800 lg:text-start'>
                        <li>Dilluns <span className='text-sm ml-2 text-gray-700'>Tancat</span></li>
                        <li>Dimarts <span className='text-sm ml-2 text-gray-700'>13-00-15:45, 20:00-22:45</span></li>
                        <li>Dimecres <span className='text-sm ml-2 text-gray-700'>13-00-15:45, 20:00-22:45</span></li>
                        <li>Dijous <span className='text-sm ml-2 text-gray-700'>13-00-15:45, 20:00-22:45</span></li>
                        <li>Divendres <span className='text-sm ml-2 text-gray-700'>13-00-15:45, 20:00-22:45</span></li>
                        <li>Dissabte <span className='text-sm ml-2 text-gray-700'>13-00-15:45, 20:00-22:45</span></li>
                        <li>Diumenge <span className='text-sm ml-2 text-gray-700'>13-00-15:45, 20:00-22:45</span></li>
                    </ul>
                    <div className="my-8">
                        <h2 className="mb-6 text-md font-bold text-dark uppercase dark:text-white">Segueix-nos</h2>
                        <div className='flex justify-between'>
                            <a href="#" className="text-gray-700 hover:text-secondary dark:hover:text-white">
                                <BsFacebook size={30} />
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="#" className="text-gray-700 hover:text-secondary dark:hover:text-white">
                                <BsInstagram size={30} />
                                <span className="sr-only">Instagram page</span>
                            </a>
                            <a href="#" className="text-gray-700 hover:text-secondary dark:hover:text-white">
                                <BsTwitter size={30} />
                                <span className="sr-only">Twitter page</span>
                            </a>
                            <a href="tel:+34938933358" className="text-gray-700 hover:text-secondary dark:hover:text-white" aria-label="Telèfon restaurant">
                                <BsFillTelephoneFill size={30} />
                                <span className="sr-only">Telèfon</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
        <div className="text-center md:text-start flex flex-col md:flex-row gap-y-4 md:items-start sm:justify-between">
            <div className='mx-10'>
                <ul className="text-gray-800">
                    <li className="mb-4">
                        <a href="#" className="font-bold text-md uppercase hover:underline">Política privacitat</a>
                    </li>
                </ul>
            </div>  
            <span className="text-md">© {new Date().getFullYear()} <a href="#" className="hover:underline">Espai de la Carme &copy;.</a> <span className='block'>Tots els drets reservats.</span>
            </span>
        </div>
    </footer>
  )
}

export default Footer