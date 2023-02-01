import { useState, useEffect } from "react";
import {
  MobileNav,
  IconButton,
  Navbar,
  Typography
} from "@material-tailwind/react";
import { Outlet, Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsTwitter, BsFillTelephoneFill } from 'react-icons/bs'
import { RiEBikeFill } from 'react-icons/ri'
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
    <ul className={`${ openNav ? 'bg-light' : 'hidden'} w-full lg:px-24 flex flex-col items-center justify-between gap-y-3 font-Roboto uppercase`}>
         <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link 
        className='text-lg lg:text-md font-bold block py-4 text-secondary hover:text-secondary/75' 
        to='/'
        onClick={() => setOpenNav(false)}
        >Espai de la carme
        </Link>
      </Typography>
        
        <Link 
        className='flex justify-center items-center gap-2 text-lg lg:text-md font-bold py-3 text-secondary hover:text-secondary/75' 
        to='/takespai/#'
        onClick={() => setOpenNav(false)}
        >Takespai!
        <RiEBikeFill size={40} />
        </Link>
        <div className='w-1/2 lg:w-1/6 flex justify-around py-3'>
          <a target='_blank' href='https://www.instagram.com/espaicarme/?hl=es'>
            <BsInstagram size={25} className='cursor-pointer text-secondary hover:text-secondary/75' />
          </a>
          <a target='_blank' href='https://es-es.facebook.com/espai.carme/'>
            <BsFacebook size={25} className='cursor-pointer text-secondary hover:text-secondary/75' />
          </a>
          <a target='_blank' href='https://twitter.com/espaicarme'>
            <BsTwitter size={25} className='cursor-pointer text-secondary hover:text-secondary/75' />
          </a>
        </div>
        <Link 
        className='text-lg lg:text-md font-bold block py-3 text-secondary hover:text-secondary/75' 
        to='/#cartes'
        onClick={() => setOpenNav(false)}
        >Cartes
        </Link>
        <Link 
        className='text-lg lg:text-md font-bold block py-3 text-secondary hover:text-secondary/75'
        to='/celler'
        onClick={() => setOpenNav(false)}
        >Celler
        </Link>
    </ul>
  );
 
  return (
    <>
      <nav className="w-full fixed bg-light z-10 shadow-lg shadow-primary/75">
        <div className="w-full flex items-center justify-between px-4 lg:px-12">
          <Link 
          to='/'
          onClick={() => setOpenNav(!openNav)}
          >
            <img className='w-[75px] rounded-sm p-1' src={LogoNegre} alt="Logo Espai" />
          </Link>
          <div className="flex items-center gap-x-8">
            <a target='_blank' href='tel:+34938933308'>
              <BsFillTelephoneFill size={30} className='cursor-pointer text-secondary hover:text-secondary/75' />
            </a>
            <span 
            className="font-bold text-secondary hover:text-secondary/75 text-xl cursor-pointer"
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
              className="text-secondary block"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <CloseOutline size={50} />
              ) : (
                <MenuOutline size={50} />
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