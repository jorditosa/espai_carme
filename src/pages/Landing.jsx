import { useEffect, useState } from "react"
import Welcome from "../components/Welcome"
import SubHeading from "../components/SubHeading"
import ImgCarta from '../assets/plat_xato.webp'
import ImgMenu from '../assets/formatge_gran.webp'
import ImgCartaVi from '../assets/raim.webp'
import { Link } from 'react-router-dom'

function Landing() {

    const [ welcome, setWelcome ] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setWelcome(false)
        }, 3000);
    })


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
    <section id="cartes" className="bg-light text-start pt-10">

        {
            welcome ? <Welcome /> : (
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
                <Link
                to={'/carta-vins'}>
                    <div className="h-full w-full text-light flex justify-center items-center ">
                        <SubHeading>Carta de Vins</SubHeading>
                    </div>
                </Link>
                </div>
            </div>
            )
        }
       
    </section>
  )
}

export default Landing