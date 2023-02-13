import { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import SubHeading from "../components/SubHeading";
import LogoTakespai from '../assets/logos/logo_takespai.webp'
import { BsTelephone } from 'react-icons/bs'


function Takespai() {

  const navigate = useNavigate();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, ['/takespai']);

  return (
    <div className="w-full h-screen px-4 bg-gradient-to-t from-light/75 to-light text-dark text-md md:text-lg flex flex-col justify-center items-center gap-y-4">
      <img src={LogoTakespai} alt="logo Takespai" className="mt-48" width={"350px"} />
      <SubHeading>En construcció!</SubHeading>
      <span className="text-3xl">💛</span>
      <div className="w-full max-w-[900px] mx-auto">
        <p>Ben aviat podreu gaudir de les vostres comandes online. De moment, ja sabeu que podeu fer la vostre comanda per take away o domicili trucant al <a className="my-4 text-xl text-light text-center font-bold hover:text-light/50 bg-clip-text text-transparent bg-gradient-to-b from-dark to-dark/75" href='tel:938933308'> 
          93 893 33 08
          </a>.</p>
      </div>
      <button className="w-48 cursor-pointer text-light bg-dark hover:text-dark hover:bg-primary rounded-full py-2 px-4 font-bold text-md lg:text-xl mt-12 transition-all ease-in-out duration-200"
              onClick={() => navigate('/')}>
              Tornar al Inici
      </button>
    </div>
  )
}

export default Takespai