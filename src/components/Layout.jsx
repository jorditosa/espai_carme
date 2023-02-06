import { useState, useEffect } from "react";
import {
  MobileNav,
  IconButton,
  Navbar,
  Typography
} from "@material-tailwind/react";
import { Outlet, Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsTwitter, BsFillTelephoneFill } from 'react-icons/bs'
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
            <BsInstagram size={25} className='cursor-pointer text-secondary hover:translate-y-1 hover:text-primary transition ease-in-out duration-300' />
          </a>
          <a target='_blank' href='https://es-es.facebook.com/espai.carme/'>
            <BsFacebook size={25} className='cursor-pointer text-secondary hover:translate-y-1 hover:text-primary transition ease-in-out duration-300' />
          </a>
          <a target='_blank' href='https://twitter.com/espaicarme'>
            <BsTwitter size={25} className='cursor-pointer text-secondary hover:translate-y-1 hover:text-primary transition ease-in-out duration-300' />
          </a>
        </div>
        <Link 
        className='text-lg lg:text-md font-bold block py-3 text-secondary hover:translate-y-1 hover:text-primary transition ease-in-out duration-300' 
        to='/cartes'
        onClick={() => setOpenNav(false)}
        >Cartes
        </Link>
        <Link 
        className='text-lg lg:text-md font-bold block py-3 text-secondary hover:translate-y-1 hover:text-primary transition ease-in-out duration-300'
        to='/celler'
        onClick={() => setOpenNav(false)}
        >Celler
        </Link>
    </ul>
  );
 
  return (
    <>
      <nav className={`w-full ${ openNav ? 'bg-light h-[64px]' : ''} fixed z-20 shadow-lg `}>
        <div className={`bg-light ${ openNav ? 'scale-[15] md:scale-[25] lg:scale-[30] z-20' : ''} w-12 h-12 rounded-full absolute right-0 top-0 z-0 border border-primary transition ease-in-out duration-500`}></div>
        <div className="absolute z-20 bg-light w-full flex items-center justify-between px-4 lg:px-12 font-Roboto">
          <Link 
          className='flex justify-center items-center gap-x-1 text-lg font-bold py-3 text-secondary hover:translate-y-1 hover:text-primary transition ease-in-out duration-300' 
          to='/takespai/#'
          onClick={() => setOpenNav(false)}
          >Takespai!
          <MdDeliveryDining size={40} />
          </Link>
          <div className="flex items-center gap-x-8">
            <a target='_blank' href='tel:+34938933308'>
              <BsFillTelephoneFill size={30} className='cursor-pointer text-secondary hover:translate-y-1 hover:text-primary transition ease-in-out duration-300' />
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
            >
              {openNav ? (
                <CloseOutline size={40} />
              ) : (
                <MenuOutline size={40} />
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