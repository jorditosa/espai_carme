import LogoNegre from '../assets/logos/logo_negre.webp'
import { BsInstagram, BsFacebook, BsTwitter, BsFillTelephoneFill } from 'react-icons/bs'


function Footer() {
  return (
    
    <footer className="h-auto p-6 font-Roboto">

        

        <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
        <div className="md:flex md:justify-between py-8">
            <div className="mb-6 md:mb-0">
                <a href="index.html" className="flex items-center">
                    <img src={LogoNegre} className="w-32 mx-auto" alt="Espai de la Carme Logo" />
                </a>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 text-center">
                <div>
                    <h2 className="mb-6 text-sm font-bold text-dark uppercase dark:text-white">Horari</h2>
                    <ul className='text-gray-800 lg:text-start'>
                        <li>Dilluns <span className='text-sm ml-2 text-gray-600'>Tancat</span></li>
                        <li>Dimarts <span className='text-sm ml-2 text-gray-600'>13-00-15:45, 20:00-22:45</span></li>
                        <li>Dimecres <span className='text-sm ml-2 text-gray-600'>13-00-15:45, 20:00-22:45</span></li>
                        <li>Dijous <span className='text-sm ml-2 text-gray-600'>13-00-15:45, 20:00-22:45</span></li>
                        <li>Divendres <span className='text-sm ml-2 text-gray-600'>13-00-15:45, 20:00-22:45</span></li>
                        <li>Dissabte <span className='text-sm ml-2 text-gray-600'>13-00-15:45, 20:00-22:45</span></li>
                        <li>Diumenge <span className='text-sm ml-2 text-gray-600'>13-00-15:45, 20:00-22:45</span></li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-bold text-dark uppercase dark:text-white">Segueix-nos</h2>
                    <ul className="text-gray-800">
                        <li className="mb-4">
                            <a href="https://www.instagram.com/espaicarme/?hl=es" className="hover:underline ">Instagram</a>
                        </li>
                        <li>
                            <a href="https://twitter.com/espaicarme" className="hover:underline">Twitter</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-bold text-dark uppercase dark:text-white">Legal</h2>
                    <ul className="text-gray-800">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Política privacitat</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Condicions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
        <div className="text-center md:text-start sm:flex sm:items-center sm:justify-between">
            <span className="text-md hover:text-secondary:text-gray-400">© {new Date().getFullYear()} <a href="#" className="hover:underline">Espai de la Carme &copy;.</a> <span className='block md:inline'>Tots els drets reservats.</span>
            </span>
            <div className="flex mt-4 space-x-6 justify-center sm:mt-0">
                <a href="#" className="hover:text-secondary dark:hover:text-white">
                    <BsFacebook size={25} />
                    <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="hover:text-secondary dark:hover:text-white">
                    <BsInstagram size={25} />
                    <span className="sr-only">Instagram page</span>
                </a>
                <a href="#" className="hover:text-secondary dark:hover:text-white">
                    <BsTwitter size={25} />
                    <span className="sr-only">Twitter page</span>
                </a>
                <a href="tel:+34938933308" className="hover:text-secondary dark:hover:text-white">
                    <BsFillTelephoneFill size={25} />
                    <span className="sr-only">Telèfon</span>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer