import { useState, useEffect } from "react";
import {
  MobileNav,
  IconButton,
} from "@material-tailwind/react";
import { Outlet, Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa'
import { RiEBikeFill } from 'react-icons/ri'
import { MenuOutline, CloseOutline } from '@styled-icons/evaicons-outline'
import LogoNegre from '../assets/logos/logo_negre.webp'
 
export default function Layout() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 768 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="w-screen h-full lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-y-4 font-Roboto">
        <Link 
        className='text-lg lg:text-md font-bold block py-5 text-dark hover:text-secondary' 
        to='/takespai'
        onClick={() => setOpenNav(false)}
        >Takespai!
          <RiEBikeFill />
        </Link>
        <Link 
        className='text-lg lg:text-md font-bold block py-5 text-dark hover:text-secondary' 
        to='/'
        onClick={() => setOpenNav(false)}
        >Inici
        </Link>
        <Link 
        className='text-lg lg:text-md font-bold block py-5 text-dark hover:text-secondary' 
        to='/carta'
        onClick={() => setOpenNav(false)}
        >Carta
        </Link>
        <Link 
        className='text-lg lg:text-md font-bold block py-5 text-dark hover:text-secondary' 
        to='/celler'
        onClick={() => setOpenNav(false)}
        >Celler
        </Link>
     
        <div className='w-1/2 lg:w-1/6 flex justify-around py-3'>
          <a target='_blank' href='https://www.instagram.com/espaicarme/?hl=es'>
            <FaInstagram size={25} className='cursor-pointer text-dark hover:text-secondary' />
          </a>
          <a target='_blank' href='https://es-es.facebook.com/espai.carme/'>
            <FaFacebook size={25} className='cursor-pointer text-dark hover:text-secondary' />
          </a>
          <a target='_blank' href='mailto:reserves@espaidelacarme.com'>
            <FaEnvelope size={25} className='cursor-pointer text-dark hover:text-secondary' />
          </a>
        </div>
    </ul>
  );
 
  return (
    <>
      <nav className="w-screen fixed bg-light z-10 py-1 lg:py-0 shadow-lg shadow-dark">
        <div className="w-full flex items-center justify-between px-5">
          <div className="hidden lg:block">{navList}</div>
          <Link 
          to='/'
          onClick={() => setOpenNav(!openNav)}
          >
            <img className='w-[75px] rounded-sm' src={LogoNegre} alt="Logo Espai" />
          </Link>
          <button
            variant="text"
            className="text-secondary block"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <CloseOutline size={60} />
            ) : (
              <MenuOutline size={60} />
            )}
          </button>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </nav>
      <Outlet />
    </>
  );
}