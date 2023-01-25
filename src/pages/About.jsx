import styled from 'styled-components'
import forn from '../assets/forn_llenya.jpg'

// styled comp
const SectionAbout = styled.section`
    background-image: url(${forn});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 75vw;
    color: #fff;
    font-family: 'Roboto Slab', serif;
`

function About() {
  return (
    <SectionAbout>
        <div className='w-full lg:max-w-[750px] ml-10 h-full flex flex-col items-center lg:items-start justify-center gap-y-10'>
            <h2 className='font-bold text-5xl lg:text-6xl'>L'autèntica cuina al forn de llenya</h2>
            <p className='text-lg'>
            Gaudeix dels nostres plats i productes frescos en una experiència gastronòmica que no et deixarà indiferent.

            Les nostres pizzes i plats amb fusió d'ingredients de la cuina catalana de tota la vida amb la cuina italiana.

            Deixa't sorpendre per al varietat del nostre menú, en un ambient acollidor ben aprop teu, amb producte local i de referència, a Vilanova i la Geltrú.
            </p>
        </div>
    </SectionAbout>
  )
}

export default About