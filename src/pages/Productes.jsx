import { useEffect } from "react"
import SubHeading from "../components/SubHeading"
import Mozarella from '../assets/mozzarella.webp'
import Tofona from '../assets/truffle.webp'
import Foie from '../assets/foie-gras.webp'
import Parmigiano from '../assets/parmigiano.webp'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Productes() {

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
    <section id="productes" className="bg-light text-start text-dark">
        <div className="h-full lg:h-screen w-full lg:max-w-[900px] mx-auto px-5 py-24 lg:py-0 flex flex-col justify-center items-start">
            <SubHeading>
            {t("productes.title")}
            </SubHeading>
            <p className="text-md lg:text-xl py-2">
            {t("productes.description-1")}
            </p>
            <p className="text-md lg:text-xl py-2">
            {t("productes.description-2")}
            </p>
        </div>
        <div className="w-full h-screen flex flex-col lg:flex-row text-center overflow-hidden">
            <div className="h-full panel text-light" style={{backgroundImage: `url(${Mozarella})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="h-full w-full flex flex-col justify-start pt-2 lg:pt-48 items-center bg-gradient-to-b from-dark/50 to-dark/25">
                        <SubHeading>{t("productes.slide-mozzarella-title")}</SubHeading>
                        <p className="text-light font-bold text-md md:text-lg mx-5">
                        {t("productes.slide-mozzarella-description")}
                        </p>
                    </div>
            </div>
            <div className="h-full panel text-light" style={{backgroundImage: `url(${Tofona})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="h-full w-full flex justify-start pt-2 lg:pt-48 flex-col items-center bg-gradient-to-b from-dark/50 to-dark/25">
                        <SubHeading>{t("productes.slide-tofona-title")}</SubHeading>
                        <p className="text-light font-bold text-md md:text-lg mx-5">
                        {t("productes.slide-tofona-description")}
                        </p>
                    </div>
            </div>
            <div className="h-full panel text-light" style={{backgroundImage: `url(${Foie})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="h-full w-full flex justify-start pt-2 lg:pt-48 flex-col items-center bg-gradient-to-b from-dark/50 to-dark/25">
                        <SubHeading>{t("productes.slide-foie-title")}</SubHeading>
                        <p className="text-light font-bold text-md md:text-lg mx-5">
                        {t("productes.slide-foie-description")}
                        </p>
                    </div>
            </div>
            <div className="h-full panel text-light" style={{backgroundImage: `url(${Parmigiano})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="h-full w-full flex justify-start pt-2 lg:pt-48 flex-col items-center bg-gradient-to-b from-dark/50 to-dark/25">
                        <SubHeading>{t("productes.slide-parmigiano-title")}</SubHeading>
                        <p className="text-light font-bold text-md md:text-lg mx-5">
                        {t("productes.slide-parmigiano-description")}
                        </p>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Productes