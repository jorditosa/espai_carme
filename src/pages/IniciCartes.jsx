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
    <section id="cartes" className="bg-dark text-start text-light">
        <div className="py-24 w-full lg:max-w-[900px] mx-auto px-5">
            <SubHeading>La nostre gastronomia</SubHeading>
            <p className="text-md lg:text-xl font-bold">
           Us oferim que gaudiu de la nostre gastronomia en un format de carta, menús (laborables i Espai) i una magnífica carta de vins amb producció i celler propi
          </p>
        </div>
        <div className="w-full h-screen flex flex-col md:flex-row">
            <div className="h-full panel text-light/75" style={{backgroundImage: `url(${ImgCarta})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <Link
                to={'/carta'}>
                    <div className="h-full w-full flex justify-center items-center bg-gradient-to-b from-dark/75 to-light/5">
                        <SubHeading>Carta</SubHeading>
                    </div>
                </Link>
            </div>
            <div className="h-full panel text-light/75" style={{backgroundImage: `url(${ImgMenu})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <Link
                to={'/menus'}>
                    <div className="h-full w-full flex justify-center items-center bg-gradient-to-b from-dark/75 to-light/5">
                        <SubHeading>Menús</SubHeading>
                    </div>
                </Link>
            </div>
            <div className="h-full panel text-light/75" style={{backgroundImage: `url(${ImgCartaVi})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="h-full w-full flex justify-center items-center bg-gradient-to-b from-dark/75 to-light/5">
                    <SubHeading>Carta de Vins</SubHeading>
                </div>
            </div>
        </div>
    </section>
  )
}

export default IniciCartes