import SubHeading from '../components/SubHeading'
import Forn from '../assets/forn_llenya.webp'
import { useTranslation } from 'react-i18next'

// styled comp

function About() {

  const [t, i18n] = useTranslation("global");

  return (
    <section className="text-light dark h-screen bg-light bg-fixed" style={{backgroundImage: `url(${Forn})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top 40%'}} id="about">
      <div className='w-full h-full py-24 lg:py-50 px-10 font-Roboto bg-gradient-to-b from-dark/50 to-dark/25'>
        <div className="max-w-[900px] mx-auto h-full flex flex-col items-start justify-center text-md lg:text-xl">
          <SubHeading >
          {t("about.title")}
          </SubHeading>
          <p className='py-2'>
            {t("about.paragraph-1")}
          </p>
          <p className='py-2'>
          {t("about.paragraph-2")}
          </p>
          <p className='py-2'>
          {t("about.paragraph-3")}
          </p>
        </div>  
      </div>
    </section>
  )
}

export default About