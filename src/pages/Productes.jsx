import { useEffect } from "react"
import SubHeading from "../components/SubHeading"
import Mozarella from '../assets/mozzarella.jpg'
import Tofona from '../assets/truffle.jpg'
import Foie from '../assets/foie-gras.jpg'
import Parmigiano from '../assets/parmigiano.jpg'
import { Link } from 'react-router-dom'

function Productes() {


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
            <SubHeading>El nostre producte</SubHeading>
            <p className="text-md lg:text-xl font-bold">
            Apostem per oferir-te un producte exquisit, amb proveïdors locals
          </p>
        </div>
        <div className="w-full h-screen flex flex-col md:flex-row text-center">
            <div className="h-full panel text-light" style={{backgroundImage: `url(${Mozarella})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="h-full w-full flex flex-col justify-start pt-2 md:pt-48 items-center bg-gradient-to-b from-dark to-light/5">
                        <SubHeading>Mozzarella</SubHeading>
                        <p className="text-sm md:text-lg mx-5">La mozzarella i mozzarella de búfala, suposa un producte exquisit per la nostre cuina.</p>
                    </div>
            </div>
            <div className="h-full panel text-light" style={{backgroundImage: `url(${Tofona})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="h-full w-full flex justify-start pt-2 md:pt-48 flex-col items-center bg-gradient-to-b from-dark to-light/5">
                        <SubHeading>Tòfona</SubHeading>
                        <p className="text-sm md:text-lg mx-5">La tòfona és un bolet d'hivern, que aporta un gust diferencial al producte sobre el qual és afegida.</p>
                    </div>
            </div>
            <div className="h-full panel text-light" style={{backgroundImage: `url(${Foie})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="h-full w-full flex justify-start pt-2 md:pt-48 flex-col items-center bg-gradient-to-b from-dark to-light/5">
                        <SubHeading>Foie gras</SubHeading>
                        <p className="text-sm md:text-lg mx-5">El foie gras és per excelència un producte exquisit francés, fet amb el fetge del ànec.</p>
                    </div>
            </div>
            <div className="h-full panel text-light" style={{backgroundImage: `url(${Parmigiano})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="h-full w-full flex justify-start pt-2 md:pt-48 flex-col items-center bg-gradient-to-b from-dark to-light/5">
                        <SubHeading>Parmigiano</SubHeading>
                        <p className="text-sm md:text-lg mx-5">El parmigiano reggiano és un famòs formatge de procedència italiana de consistència dura, madura i grasa.</p>
                    </div>
            </div>
        </div>
        <div className="w-full h-12 bg-gradient-to-b from-dark/50 to-light">

        </div>
    </section>
  )
}

export default Productes