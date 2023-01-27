import CopesVi from '../assets/copes_vi.webp'
import ArnauVi from '../assets/vi_cuso.webp'
import SubHeading from '../components/SubHeading'
import Footer from '../components/Footer'


function Celler() {
  return (
    <section className='bg-dark text-light'>
      <div className='h-screen'>
        <img src={CopesVi} alt="Copes de vi" className='block'/>

        <SubHeading>
          El Celler Cusó
        </SubHeading>
      </div>

      <div className='w-full lg:max-w-screen-xl mx-auto'>
         <div className='w-full lg:max-w-screen-lg mx-auto h-auto py-8 lg:py-12 flex flex-col md:flex-row items-center'>
            <div className='py-8 lg:py-3 md:w-1/2'>
              <SubHeading>Essències locals</SubHeading>
              <p className='px-10 text-lg'>
              Els vins més bons són capaços d'expressar un paisatge i transmetre la fascinació de la seva personalitat única. Hem volgut crear l'acompanyant perfecte per a tots els nostres pats, creant una versió en negre com en blanc.
              </p>
            </div>
            <img src={ArnauVi} alt="imatge Arnau Vi" className='block md:w-1/2 w-full shadow-xl order-2 md:order-none'/>
        </div>
    </div>

    <div className='bg-light'>
      <Footer />
    </div>

    </section>
  )
}

export default Celler