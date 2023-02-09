import { useState, useEffect } from "react";
import {
  MobileNav,
  IconButton,
  Navbar,
  Typography
} from "@material-tailwind/react";
import { Outlet, Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsTwitter, BsFillGeoAltFill } from 'react-icons/bs'
import { MdOutlineWifiCalling3 } from 'react-icons/md'
import { MdDeliveryDining } from 'react-icons/md'
import { MenuOutline, CloseOutline } from '@styled-icons/evaicons-outline'
import LogoNegre from '../assets/logos/logo_negre.webp'
import styled from 'styled-components'


// styled comp
const BikeTake = styled.div`
display: inline;
`
 
export default function Layout() {
  const [openNav, setOpenNav] = useState(false);

  // Idiomes
  const [ language, setLanguage] = useState('Cat')
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1024 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className={`${ openNav ? '' : 'hidden'} absolute w-full lg:px-24 flex flex-col items-end justify-between gap-y-3 pr-12 font-Roboto uppercase mt-24`}>
         <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link 
        className='text-lg lg:text-md font-bold block py-4 text-secondary hover:translate-y-1 hover:text-primary transition ease-in-out duration-300' 
        to='/'
        onClick={() => setOpenNav(false)}
        >Espai de la carme
        </Link>
      </Typography>
        
        <div className='w-[200px] flex justify-around py-3'>
          <a target='_blank' href='https://www.instagram.com/espaicarme/?hl=es'>
            <BsInstagram size={30} className='cursor-pointer text-secondary hover:translate-y-1 hover:text-primary transition ease-in-out duration-300' aria-label="Icono Instagram" />
          </a>
          <a target='_blank' href='https://es-es.facebook.com/espai.carme/'>
            <BsFacebook size={30} className='cursor-pointer text-secondary hover:translate-y-1 hover:text-primary transition ease-in-out duration-300' aria-label="Icono Facebook" />
          </a>
          <a target='_blank' href='https://twitter.com/espaicarme'>
            <BsTwitter size={30} className='cursor-pointer text-secondary hover:translate-y-1 hover:text-primary transition ease-in-out duration-300' aria-label="Icono Twitter"/>
          </a>
        </div>
        <Link 
        className='text-lg lg:text-md font-bold block py-3 text-secondary hover:translate-y-1 hover:text-primary transition ease-in-out duration-300' 
        to='/carta'
        onClick={() => setOpenNav(false)}
        >La Carta
        </Link>
        <Link 
        className='text-lg lg:text-md font-bold block py-3 text-secondary hover:translate-y-1 hover:text-primary transition ease-in-out duration-300' 
        to='/menus'
        onClick={() => setOpenNav(false)}
        >Els Menus
        </Link>
        <Link 
        className='text-lg lg:text-md font-bold block py-3 text-secondary hover:translate-y-1 hover:text-primary transition ease-in-out duration-300'
        to='/vins'
        onClick={() => setOpenNav(false)}
        >El Celler
        </Link>
        <li>
          <a href="https://goo.gl/maps/PZ2xRmxxfKb2K3qJ9" target="_blank" rel="noopener noreferrer" className="block text-secondary hover:translate-y-1 hover:text-primary transition ease-in-out duration-300" aria-label="Situació restaurant">
            <BsFillGeoAltFill size={30} />
          </a>
        </li>
    </ul>
  );
 
  return (
    <>
      <nav className={`w-full ${ openNav ? 'bg-light h-[64px]' : ''} fixed z-20 shadow-lg `}>
        <div className={`bg-light ${ openNav ? 'scale-[22] md:scale-[30] lg:scale-[35] z-20' : ''} w-12 h-12 rounded-full absolute right-5 top-0 z-0 border border-secondary transition ease-in-out duration-500`}></div>
        <div className="absolute z-20 bg-light w-full flex items-center justify-between px-4 lg:px-12 font-Roboto shadow-lg">
          <Link 
          className='flex justify-center items-center gap-x-1 text-lg font-bold py-3 text-secondary hover:translate-y-1 hover:text-primary transition ease-in-out duration-300' 
          to='/takespai/#'
          onClick={() => setOpenNav(false)}
          >Takespai!
          <MdDeliveryDining size={40} />
          </Link>
          <div className="flex items-center gap-x-8">
            <a target='_blank' href='tel:+34938933308'>
              <MdOutlineWifiCalling3 size={35} className='cursor-pointer text-secondary hover:translate-y-1 hover:text-primary transition ease-in-out duration-300' aria-label="Telèfon restaurant" />
            </a>
            <span 
            className="font-bold text-secondary hover:translate-y-1 hover:text-primary transition ease-in-out duration-300 text-lg cursor-pointer"
            onClick={() => {
              if( language === 'Cat') {
                setLanguage('Esp')
              } else if( language === 'Esp') {
                setLanguage('Eng')
              } else if( language === 'Eng') {
                setLanguage('Cat')
              } 
            } }
            >
              {language}
            </span>
            <button
              variant="text"
              className="text-secondary hover:text-primary transition ease-in-out duration-300 block"
              onClick={() => setOpenNav(!openNav)}
              aria-label="boton Navegacion"
            >
              {openNav ? (
                <CloseOutline size={45} />
              ) : (
                <MenuOutline size={45} />
              )}
            </button>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </nav>
      <Outlet />
    </>
  );
}