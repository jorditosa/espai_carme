import LogoNegre from '../assets/logos/logo_negre.webp'
import { BsInstagram, BsFacebook, BsTwitter, BsFillTelephoneFill } from 'react-icons/bs'

function Footer() {
  return (
    
    <footer className="h-auto p-6 font-Roboto">
        <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
        <div className="md:flex md:justify-between py-8">
            <div className="mb-6 md:mb-0">
                <a href="#" className="flex items-center">
                    <img src={LogoNegre} className="w-32" alt="Espai de la Carme Logo" />
                </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-dark uppercase dark:text-white">Recursos</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-dark uppercase dark:text-white">Follow us</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                        </li>
                        <li>
                            <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-dark uppercase dark:text-white">Legal</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
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