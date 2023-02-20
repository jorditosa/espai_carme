import { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import SubHeading from "../components/SubHeading";
import LogoTakespai from '../assets/logos/logo_takespai.webp'
import { BsTelephone } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import SpinnerPizza from "../components/SpinnerPizza";


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
    <div className="w-full h-full px-4 pt-24 to-light text-dark text-md md:text-lg flex flex-col justify-center items-center gap-y-4">
      <img src={LogoTakespai} alt="logo Takespai" width={"220px"} />
      <SubHeading>{t("takespai.title")} 
        <SpinnerPizza />
      </SubHeading>
      
      <div className="w-full max-w-[500px] mx-auto">
        <p className="text-sm px-10 md:px-1">
        {t("takespai.description")}
        </p>
        <div className="flex items-center justify-center">
          <BsTelephone style={{ display: "inline"}} size={35} />
          <a className="inline pl-4 my-4 text-3xl text-light text-center font-black hover:text-light/50 bg-clip-text text-transparent bg-gradient-to-b from-dark to-dark/75" href='tel:938933308'> 
            93 893 33 08
          </a>
        </div>
        <button className="w-full cursor-pointer my-2 text-light bg-dark hover:text-dark hover:bg-primary rounded-lg py-2 font-bold text-md lg:text-xl transition-all ease-in-out duration-200"
                onClick={() => navigate('/')}>
                {t("takespai.button")}
        </button>
      </div>
    </div>
  )
}

export default Takespai