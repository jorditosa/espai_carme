import { useEffect } from "react"
import SubHeading from "../components/SubHeading"
import Mozarella from '../assets/mozzarella.webp'
import Tofona from '../assets/truffle.webp'
import Foie from '../assets/foie-gras.webp'
import Parmigiano from '../assets/parmigiano.webp'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Swal from 'sweetalert2'

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
                    <div className="h-full w-full flex flex-col justify-center items-center bg-gradient-to-b from-dark/50 to-dark/25">
                        <SubHeading>
                            <button
                            onClick={() => Swal.fire(`${t("productes.slide-mozzarella-description")}`)}
                            >
                            {t("productes.slide-mozzarella-title")}
                            </button>
                        </SubHeading>
                    </div>
            </div>
            <div className="h-full panel text-light" style={{backgroundImage: `url(${Tofona})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="h-full w-full flex justify-center flex-col items-center bg-gradient-to-b from-dark/50 to-dark/25">
                    <SubHeading>
                            <button
                            onClick={() => Swal.fire(`${t("productes.slide-tofona-description")}`)}
                            >
                            {t("productes.slide-tofona-title")}
                            </button>
                    </SubHeading>
                    </div>
            </div>
            <div className="h-full panel text-light" style={{backgroundImage: `url(${Foie})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="h-full w-full flex justify-center flex-col items-center bg-gradient-to-b from-dark/50 to-dark/25">
                    <SubHeading>
                            <button
                            onClick={() => Swal.fire(`${t("productes.slide-foie-description")}`)}
                            >
                            {t("productes.slide-foie-title")}
                            </button>
                    </SubHeading>
                    </div>
            </div>
            <div className="h-full panel text-light" style={{backgroundImage: `url(${Parmigiano})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="h-full w-full flex justify-center flex-col items-center bg-gradient-to-b from-dark/50 to-dark/25">
                    <SubHeading>
                            <button
                            onClick={() => Swal.fire(`${t("productes.slide-parmigiano-description")}`)}
                            >
                            {t("productes.slide-parmigiano-title")}
                            </button>
                    </SubHeading>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Productes