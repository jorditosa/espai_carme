import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImgCartaVi from '../assets/raim.webp'
import ArnauVi from '../assets/vi_cuso.webp'
import SubHeading from '../components/SubHeading'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'


function Vins() {

  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, ['/celler']);

  return (
    <section className='text-dark bg-gradient-to-b from-light to-light/50'>
      <div className='h-[500px] md:h-full py-5'>
        <img src={ImgCartaVi} alt="Copes de vi" className='block mx-auto w-screen'/>
        <div className='mx-10 py-4 max-w-[900px] md:mx-auto'>
            <SubHeading>
            El Celler Cusó
            </SubHeading>
        </div>
        <hr className='border-b-8 border-secondary/50' />
      </div>

      <div className='w-full py-2 lg:py-60 grid grid-cols-1 md:grid-cols-2 items-center'>
          <img src={ArnauVi} alt="imatge vi negre Cuso" className='w-full shadow-md shadow-light rounded-br-[200px]'
             />
          <div className='px-10 w-full'>
            <SubHeading>{t("celler.title")}</SubHeading>
            <p className='py-4'>
            {t("celler.text")}
            </p>
            <Link to={'/carta-vins'}>
              <button type="submit" className="w-72 cursor-pointer text-light bg-secondary hover:text-dark hover:bg-primary rounded-full py-2 px-4 font-bold text-md lg:text-xl my-12 md:mt-12 transition-all ease-in-out duration-200">
              {t("celler.button")}
              </button>
            </Link>
          </div>
      </div>

    <div className='bg-gradient-to-b from-light/75 to-light'>
      <Footer />
    </div>

    </section>
  )
}

export default Vins