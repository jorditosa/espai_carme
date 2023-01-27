import CopesVi from '../assets/copes_vi.webp'
import ArnauVi from '../assets/vi_cuso.webp'
import SubHeading from '../components/SubHeading'
import Footer from '../components/Footer'


function Celler() {
  return (
    <section className='text-light bg-dark'>
      <div className='h-[500px] md:h-screen py-5'>
        <img src={CopesVi} alt="Copes de vi" className='block mx-auto w-screen'/>
        <SubHeading>
          El Celler Cusó
        </SubHeading>
        <hr className='border-b-8' />
      </div>

      <div className='w-full lg:max-w-screen-xl mx-auto py-8 lg:py-10 mb-40 flex flex-col md:flex-row items-center'>
          <img src={ArnauVi} alt="imatge forn llenya" className='block md:w-1/4 order-2 md:order-none -24 rounded-r-lg shadow-lg shadow-light'
             />
          <div className='p-0 w-full'>
              <SubHeading>L'essència familiar al teu paladar</SubHeading>
          <p className='px-10 py-4'>
              Les vinyes situades a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, inventore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores reiciendis ea voluptatum, modi non illum veniam amet culpa animi fugit!
          </p>
          </div>
      </div>

    <div className='bg-gradient-to-b from-light/75 to-light'>
      <Footer />
    </div>

    </section>
  )
}

export default Celler