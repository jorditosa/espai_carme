import styled from 'styled-components'
import SubHeading from '../components/SubHeading'
import Forn from '../assets/forn_llenya.webp'
import Formatge from '../assets/formatge_gran.webp'
import Local from '../assets/local.webp'
import ViNegre from '../assets/vi_cuso.webp'

// styled comp

function About() {
  return (
    <section className="text-light dark h-screen " style={{backgroundImage: `url(${Forn})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'left'}} id="about">
      <div className='w-full lg:max-w-[900px] mx-auto h-full py-24 lg:py-50 px-5 font-Roboto'>
        <div className="h-full flex flex-col items-start justify-start text-md lg:text-xl font-bold">
          <SubHeading >
            L'autèntica cuina <br/>
            al forn de llenya
          </SubHeading>
          <p>
            Gaudeix dels nostres plats i productes frescos en una experiència gastronòmica que no et deixarà indiferent.
          </p>
          <p>
            Les nostres pizzes i plats amb fusió d'ingredients de la cuina catalana de tota la vida amb la cuina italiana.
          </p>
          <p>
            Deixa't sorpendre per al varietat del nostre menú, en un ambient acollidor ben aprop teu, amb producte local i de referència, a Vilanova i la Geltrú.
          </p>
        </div>  
      </div>
    </section>
  )
}

export default About