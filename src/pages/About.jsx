import styled from 'styled-components'
import SubHeading from '../components/SubHeading'
import Forn from '../assets/forn_llenya.jpg'
import Formatge from '../assets/formatge_gran.jpg'
import Local from '../assets/local.jpg'
import ViNegre from '../assets/vi_cuso.jpg'

// styled comp

function About() {
  return (
    <section className='w-full lg:max-w-screen-xl mx-auto'>
         <div className='w-full lg:max-w-screen-xl mx-auto h-full py-8 lg:py-24 text-secondary flex flex-col md:flex-row items-center'>
            <div className='py-8 lg:py-3 md:w-1/2'>
              <SubHeading>L'autèntica cuina al forn de llenya</SubHeading>
              <p className='px-10 text-lg'>
              Gaudeix dels nostres plats i productes frescos en una experiència gastronòmica que no et deixarà indiferent.
              </p>
              <p className='px-10 text-lg'>
              Les nostres pizzes i plats amb fusió d'ingredients de la cuina catalana de tota la vida amb la cuina italiana.

              Deixa't sorprendre per al varietat del nostre menú, en un ambient acollidor ben a prop teu, amb producte local i de referència, a Vilanova i la Geltrú.
              </p>
            </div>
            <img src={Forn} alt="imatge forn llenya" className='md:w-1/2 block shadow-xl order-2 md:order-none'/>
        </div>
        <div className='w-full lg:max-w-screen-xl mx-auto h-full py-8 lg:py-24 text-secondary flex flex-col md:flex-row items-center'>
            <img src={Formatge} alt="imatge forn llenya" className='md:w-1/2 block shadow-xl order-2 md:order-none'/>
            <div className='py-8 lg:py-3 md:w-1/2'>
              <SubHeading>El plaer del millor formatge</SubHeading>
              <p className='px-10 text-lg'>
              Tant al risotto, a la pizza, a la pasta, treballem amb els millors proveïdors de formatge, per dur-te una experiència més enriquidora.
              </p>

            </div>
        </div>
        <div className='w-full lg:max-w-screen-xl mx-auto h-full py-8 lg:py-24 text-secondary flex flex-col md:flex-row items-center'>
            <div className='py-8 lg:py-3 md:w-1/2'>
              <SubHeading>Un local amb encant</SubHeading>
              <p className='px-10 text-lg'>
              No només volem cuidar el treball en la gastronomia, sino que volem que vinguis a assaborir-ho en un local preparat perque estiguis a gust i ho gaudeixis.
              </p>
            </div>
            <img src={Local} alt="imatge forn llenya" className='md:w-1/2 block shadow-xl order-2 md:order-none'/>
        </div>
    </section>
  )
}

export default About