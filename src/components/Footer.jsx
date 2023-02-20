import { Link } from 'react-router-dom'
import LogoNegre from '../assets/logos/logo_negre.webp'
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs'
import { AiFillHome, AiFillPhone, AiFillEnvironment } from 'react-icons/ai'
import Contacte from '../pages/Contacte'
import { useTranslation } from 'react-i18next'


function Footer() {
    const [t, i18n] = useTranslation("global");

  return (
    
    <footer className="h-full p-4 lg:p-8 font-Roboto bg-light">

        <hr className="my-4 border-gray-400 sm:mx-auto lg:my-8" />

        <div className="py-2 md:py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
                <Link to="/" className="flex items-start">
                    <img src={LogoNegre} className="w-48 mx-auto" alt="Espai de la Carme Logo" />
                </Link>
                <Contacte />
                <div className='text-center md:text-start'>
                    <h2 className="mb-6 text-md font-bold text-dark uppercase dark:text-white">
                    {t("footer.time-title")}
                    </h2>
                    <ul className='text-gray-800 font-bold text-start pl-6 lg:pl-0'>
                        <li>{t("footer.time-monday")} <span className='text-sm ml-2 text-gray-700'>{t("footer.time-closed")}</span></li>
                        <li>{t("footer.time-tuesday")} <span className='text-sm ml-2 text-gray-700'>13-00-15:45, 20:00-22:45</span></li>
                        <li>{t("footer.time-wednesday")} <span className='text-sm ml-2 text-gray-700'>13-00-15:45, 20:00-22:45</span></li>
                        <li>{t("footer.time-thursday")} <span className='text-sm ml-2 text-gray-700'>13-00-15:45, 20:00-22:45</span></li>
                        <li>{t("footer.time-friday")} <span className='text-sm ml-2 text-gray-700'>13-00-15:45, 20:00-22:45</span></li>
                        <li>{t("footer.time-saturday")} <span className='text-sm ml-2 text-gray-700'>13-00-15:45, 20:00-22:45</span></li>
                        <li>{t("footer.time-sunday")} <span className='text-sm ml-2 text-gray-700'>13-00-15:45, 20:00-22:45</span></li>
                    </ul>
                    <div className="my-8 mx-6 lg:mx-0">
                        <h2 className="mb-6 text-md font-bold text-dark uppercase">
                        {t("footer.follow-us")}
                        </h2>
                        <div className='w-full lg:w-[250px] flex justify-between'>
                            <a href="https://es-es.facebook.com/espai.carme/" className="text-gray-700 hover:text-secondary dark:hover:text-white" target="_blank">
                                <BsFacebook size={30} />
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="https://www.instagram.com/espaicarme/?hl=es" className="text-gray-700 hover:text-secondary dark:hover:text-white" target="_blank">
                                <BsInstagram size={30} />
                                <span className="sr-only">Instagram page</span>
                            </a>
                            <a href="https://twitter.com/espaicarme" className="text-gray-700 hover:text-secondary dark:hover:text-white" target="_blank">
                                <BsTwitter size={30} />
                                <span className="sr-only">Twitter page</span>
                            </a>
                            <a href="tel:+34938933358" className="text-gray-700 hover:text-secondary dark:hover:text-white" aria-label="Telèfon restaurant">
                                <AiFillPhone size={30} />
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
                <ul className="text-gray-800 flex flex-col items-center justify-center lg:flex-row gap-2 lg:gap-12">
                    <li>
                        <Link to="/politica" className="block font-bold text-md uppercase hover:underline">{t("footer.politica")}</Link>
                    </li>
                    <div className='flex gap-5 md:flex-row'>
                        <li>
                            <Link to={'/'} className="text-gray-700 hover:text-secondary dark:hover:text-white" aria-label="Situació restaurant">
                                <AiFillHome size={30} />
                            </Link>
                        </li>
                        <li>
                            <a href="https://goo.gl/maps/PZ2xRmxxfKb2K3qJ9" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-secondary dark:hover:text-white" aria-label="Situació restaurant">
                                <AiFillEnvironment size={30} />
                            </a>
                        </li>
                    </div>
                </ul>
            </div>  
            <span className="text-md">{new Date().getFullYear()} <a href="#" className="hover:underline">Espai de la Carme &copy;.</a> <span className='block'>
            {t("footer.copyrights")}
            </span>
            </span>
        </div>
    </footer>
  )
}

export default Footer