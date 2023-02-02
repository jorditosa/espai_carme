import { useEffect } from "react"
import SubHeading from "../components/SubHeading"
import ImgMenuLab from '../assets/menu_laborable.webp'
import ImgMenuEspai from '../assets/menu_espai.webp'
import { Link } from 'react-router-dom'

function IniciMenus() {

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
    <section id="cartes" className="text-center lg:text-start text-secondary">

    <div className="w-full h-screen flex flex-col md:flex-row">
        <div className="h-full panel text-light/75" style={{backgroundImage: `url(${ImgMenuEspai})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <Link
            to={'/menuespai'}>
                <div className="h-full w-full flex justify-center items-center bg-gradient-to-t from-secondary/50 to-dark/50">
                    <SubHeading>Menú Espai</SubHeading>
                </div>
            </Link>
        </div>
        <div className="h-full panel text-light/75" style={{backgroundImage: `url(${ImgMenuLab})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <Link
            to={'/menulaborable'}>
                <div className="h-full w-full flex justify-center items-center bg-gradient-to-t from-secondary/50 to-dark/50">
                    <SubHeading>Menú laborables</SubHeading>
                </div>
            </Link>
        </div>

    </div>
  
</section>
  )
}

export default IniciMenus