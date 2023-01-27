import CopesVi from '../assets/copes_vi.jpg'
import ArnauVi from '../assets/vi_cuso.jpg'
import SubHeading from '../components/SubHeading'

function Celler() {
  return (
    <section className='bg-dark h-full text-light'>
      <img src={CopesVi} alt="Copes de vi" />

      <SubHeading>
        El Celler Cusó
      </SubHeading>

      <div className='w-full lg:max-w-screen-xl mx-auto'>
         <div className='w-full lg:max-w-screen-xl mx-auto py-8 lg:py-12 text-secondary flex flex-col md:flex-row items-center'>
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
            <img src={ArnauVi} alt="imatge Arnau Vi" className='md:w-1/2 block shadow-xl order-2 md:order-none'/>
        </div>
    </div>

    </section>
  )
}

export default Celler