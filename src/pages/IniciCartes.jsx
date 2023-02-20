import { useEffect } from "react"
import SubHeading from "../components/SubHeading"
import ImgCarta from '../assets/plat_xato.webp'
import ImgMenu from '../assets/formatge_gran.webp'
import ImgCartaVi from '../assets/raim.webp'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function IniciCartes() {

    const [t, i18n] = useTranslation("global");

    useEffect(() => {
    const panels = document.querySelectorAll('.panel')

    panels.forEach((panel) => {
        panel.addEventListener('mouseover', () => {
            removeActiveClasses();
            panel.classList.add('active');
        })
    })

    function removeActiveClasses() {
        panels.forEach((panel) => {
            panel.classList.remove('active')
        })
    }   
    }, [])

  return (
    <section id="cartes" className="bg-light text-start">
        <div className="h-full lg:h-screen w-full lg:max-w-[900px] mx-auto px-10 py-24 lg:py-0 flex flex-col justify-center items-start">
            <SubHeading>
                {t("cartas.title")}
            </SubHeading>
            <p className="text-md lg:text-xl py-2">
            {t("cartas.description-1")}
            </p>
            <p className="text-md lg:text-xl py-2">
            {t("cartas.description-2")}
            </p>
        </div>
        <div className="w-full h-screen flex flex-col md:flex-row">
            <div className="h-full panel  hover:bg-primary" style={{backgroundImage: `url(${ImgCarta})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <Link
                to={'/carta'}>
                    <div className="h-full w-full text-light flex justify-center items-center ">
                        <SubHeading>{t("cartas.slide-carta")}</SubHeading>
                    </div>
                </Link>
            </div>
            <div className="h-full panel" style={{backgroundImage: `url(${ImgMenu})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <Link
              to={'/menus'}>
                    <div className="h-full w-full text-light flex justify-center items-center ">
                        <SubHeading>{t("cartas.slide-menu")}</SubHeading>
                    </div>
                </Link>
            </div>
            <div className="h-full panel" style={{backgroundImage: `url(${ImgCartaVi})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <Link
              to={'/carta-vins'}>
                <div className="h-full w-full text-light flex justify-center items-center ">
                    <SubHeading>{t("cartas.slide-vi")}</SubHeading>
                </div>
            </Link>
            </div>
        </div>
    </section>
  )
}

export default IniciCartes