import SubHeading from "../components/SubHeading"
import ImgCarta from '../assets/imatge_carta.webp'
import ImgMenu from '../assets/formatge_gran.webp'
import ImgCartaVi from '../assets/copes_vi.webp'
import { Link } from 'react-router-dom'

function IniciCartes() {


    const panels = document.querySelectorAll('.panel')

    function removeActiveClasses() {
        panels.forEach((panel) => {
            panel.classList.remove('active')
        })
    }

    panels.forEach((panel) => {
        panel.addEventListener('mouseover', () => {
            removeActiveClasses();
            panel.classList.add('active');
        })
    })

    

   

  return (
    <section id="cartes" className="bg-dark text-center lg:text-start text-secondary">

        <div className="w-full h-screen flex flex-col md:flex-row">
            <div className="h-full panel text-light/75" style={{backgroundImage: `url(${ImgCarta})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="h-full w-full flex justify-center items-center bg-gradient-to-b from-dark/75 to-light/10">
                    <SubHeading>Carta</SubHeading>
                </div>
            </div>
            <div className="h-full panel text-light/75" style={{backgroundImage: `url(${ImgMenu})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="h-full w-full flex justify-center items-center bg-gradient-to-b from-dark/75 to-light/10">
                    <SubHeading>Menús</SubHeading>
                </div>
            </div>
            <div className="h-full panel text-light/75" style={{backgroundImage: `url(${ImgCartaVi})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="h-full w-full flex justify-center items-center bg-gradient-to-b from-dark/75 to-light/10">
                    <SubHeading>Carta de Vins</SubHeading>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default IniciCartes