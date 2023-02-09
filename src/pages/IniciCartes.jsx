import { useEffect } from "react"
import SubHeading from "../components/SubHeading"
import ImgCarta from '../assets/imatge_carta.webp'
import ImgMenu from '../assets/formatge_gran.webp'
import ImgCartaVi from '../assets/copes_vi.webp'
import { Link } from 'react-router-dom'

function IniciCartes() {


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
        <div className="h-screen w-full lg:max-w-[900px] mx-auto px-5 flex flex-col justify-center items-start">
            <SubHeading>
                Les nostres  experiències gastronòmiques
            </SubHeading>
            <p className="text-md lg:text-xl">
            Oferim i treballem en diverses possiblitats per poder venir i degustar els nostres plats i especialitats.
          </p>
        </div>
        <div className="w-full h-screen flex flex-col md:flex-row">
            <div className="h-full panel  hover:bg-primary" style={{backgroundImage: `url(${ImgCarta})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <Link
                to={'/carta'}>
                    <div className="h-full w-full text-light flex justify-center items-center ">
                        <SubHeading>Carta</SubHeading>
                    </div>
                </Link>
            </div>
            <div className="h-full panel" style={{backgroundImage: `url(${ImgMenu})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <Link
              to={'/menus'}>
                    <div className="h-full w-full text-light flex justify-center items-center ">
                        <SubHeading>Menús</SubHeading>
                    </div>
                </Link>
            </div>
            <div className="h-full panel" style={{backgroundImage: `url(${ImgCartaVi})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="h-full w-full text-light flex justify-center items-center ">
                    <SubHeading>Carta de Vins</SubHeading>
                </div>
            </div>
        </div>
    </section>
  )
}

export default IniciCartes