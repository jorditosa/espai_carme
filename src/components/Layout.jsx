import { useState, useEffect } from "react";
import {
  MobileNav,
  IconButton,
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
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 768 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="w-screen h-full lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-y-4 font-Roboto uppercase">
        <Link 
        className='text-lg lg:text-md font-bold block py-4 text-secondary hover:text-secondary/75' 
        to='/'
        onClick={() => setOpenNav(false)}
        >Espai de la carme
        </Link>
        <div className='w-1/2 lg:w-1/6 flex justify-around py-3'>
          <a target='_blank' href='tel:+34938933308'>
            <BsFillTelephoneFill size={25} className='cursor-pointer text-secondary hover:text-secondary/75' />
          </a>
          <a target='_blank' href='https://www.instagram.com/espaicarme/?hl=es'>
            <BsInstagram size={25} className='cursor-pointer text-secondary hover:text-secondary/75' />
          </a>
          <a target='_blank' href='https://es-es.facebook.com/espai.carme/'>
            <BsFacebook size={25} className='cursor-pointer text-secondary hover:text-secondary/75' />
          </a>
          <a target='_blank' href='mailto:reserves@espaidelacarme.com'>
            <BsTwitter size={25} className='cursor-pointer text-secondary hover:text-secondary/75' />
          </a>
        </div>
        <Link 
        className='flex justify-center items-center gap-2 text-lg lg:text-md font-bold py-3 text-secondary hover:text-secondary/75' 
        to='/takespai'
        onClick={() => setOpenNav(false)}
        >Takespai!
        <RiEBikeFill size={40} />
        </Link>
        <Link 
        className='text-lg lg:text-md font-bold block py-3 text-secondary hover:text-secondary/75' 
        to='/carta'
        onClick={() => setOpenNav(false)}
        >Carta
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
      <nav className="w-screen fixed bg-light z-10 shadow-lg shadow-dark">
        <div className="w-full flex items-center justify-between">
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