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
    <section id="cartes" className="bg-light text-start text-dark">
        <div className="h-screen w-full lg:max-w-[900px] mx-auto px-5 flex flex-col justify-center items-start">
            <SubHeading>
                Els nostres ingredients
            </SubHeading>
            <p className="text-md lg:text-xl">
            Hem incorporat una gran varietat de producte a la nostre cuina. La nostre aposta és per oferir-te un producte exquisit, que aporti una experiència nova i comprada a proveïdors locals.
          </p>
        </div>
        <div className="w-full h-screen flex flex-col md:flex-row text-center">
            <div className="h-full panel text-light" style={{backgroundImage: `url(${Mozarella})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="h-full w-full flex flex-col justify-start pt-2 md:pt-48 items-center bg-gradient-to-b from-dark/50">
                        <SubHeading>Mozzarella</SubHeading>
                        <p className="text-light font-bold text-sm md:text-lg mx-5">La mozzarella i mozzarella de búfala, suposa un producte exquisit per la nostre cuina.</p>
                    </div>
            </div>
            <div className="h-full panel text-light" style={{backgroundImage: `url(${Tofona})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="h-full w-full flex justify-start pt-2 md:pt-48 flex-col items-center bg-gradient-to-b from-dark/50">
                        <SubHeading>Tòfona</SubHeading>
                        <p className="text-light font-bold text-sm md:text-lg mx-5">La tòfona és un bolet d'hivern, que aporta un gust diferencial al producte sobre el qual és afegida.</p>
                    </div>
            </div>
            <div className="h-full panel text-light" style={{backgroundImage: `url(${Foie})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="h-full w-full flex justify-start pt-2 md:pt-48 flex-col items-center bg-gradient-to-b from-dark/50">
                        <SubHeading>Foie gras</SubHeading>
                        <p className="text-light font-bold text-sm md:text-lg mx-5">El foie gras és per excelència un producte exquisit francés, fet amb el fetge del ànec.</p>
                    </div>
            </div>
            <div className="h-full panel text-light" style={{backgroundImage: `url(${Parmigiano})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="h-full w-full flex justify-start pt-2 md:pt-48 flex-col items-center bg-gradient-to-b from-dark/50">
                        <SubHeading>Parmigiano</SubHeading>
                        <p className="text-light font-bold text-sm md:text-lg mx-5">El parmigiano reggiano és un famòs formatge de procedència italiana de consistència dura, madura i grasa.</p>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Productes