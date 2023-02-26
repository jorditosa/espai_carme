import { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import SubHeading from "../components/SubHeading";
import LogoTakespai from '../assets/logos/logo_takespai.webp'
import { BsTelephone } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import SpinnerPizza from "../components/SpinnerPizza";
import TakespaiImg from '../assets/takespai.jpg'


function Takespai() {

  const [t, i18n] = useTranslation("global");

  const navigate = useNavigate();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, ['/takespai']);

  return (
    <div className="w-full h-screen px-4 pt-12 text-light text-md md:text-lg flex flex-col justify-center items-center gap-y-4" style={{backgroundImage: `url(${TakespaiImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '65%'}}>
      <img src={LogoTakespai} alt="logo Takespai" width={"200px"} className='bg-light rounded-full p-5'/>
      <h2 className="w-60 md:w-1/3 text-2xl">{t("takespai.title")} 
      </h2>
      <div className="flex items-center justify-start">
          <BsTelephone style={{ display: "block"}} size={35} />
          <a className="block pl-4 my-4 text-2xl text-light font-bold hover:text-light/50 bg-clip-text text-transparent bg-gradient-to-b from-light to-light/75" href='tel:938933308'> 
            93 893 33 08
          </a>
      </div>

      <SpinnerPizza />
      
      <div className="w-full max-w-[500px] mx-auto">
     
        <button className="block w-1/2 mx-auto cursor-pointer my-3 border-light border text-light hover:text-dark hover:bg-light rounded-full py-2 font-bold text-sm transition-all ease-in-out duration-200"
                onClick={() => navigate('/')}>
                {t("takespai.button")}
        </button>
      </div>
    </div>
  )
}

export default Takespai