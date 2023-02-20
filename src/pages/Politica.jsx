import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Breadcrumbs } from "@material-tailwind/react";
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

function Politica() {

  const [ t , i18n ] = useTranslation("global")

    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
          top: 0,
          left: 0,
        });
      }, ['/politica']);

  return (
    <section className="pt-28 font-Roboto bg-gradient-to-b from-white to-light/50 w-full">
    <Breadcrumbs className='max-w-[900px] mx-auto'>
            <Link to="/" className="text-sm md:text-md lg:text-lg opacity-60 font-Roboto">
                {t("politica.breadcumb-1")}
            </Link>
            <Link href="#" className="text-sm md:text-md lg:text-lg font-Roboto font-bold">
                {t("politica.breadcumb-2")}
            </Link>
    </Breadcrumbs>

      <hr className='border-b-8 border-secondary/75' />
        <ol className='pt-6 px-5 w-full md:max-w-[900px] mx-auto'>
            <li className='text-md md:text-lg py-4'>
            1. {t("politica.section-1")}
            </li>
            <li className='text-md md:text-lg py-4'>
            2. {t("politica.section-2")}
            </li>
            <li className='text-md md:text-lg py-4'>
            3. {t("politica.section-3")}
            </li>
            <li className='text-md md:text-lg py-4'>
            4. {t("politica.section-4")}
            </li>
            <li className='text-md md:text-lg py-4'>
            5. {t("politica.section-5")}
            </li>
            <li className='text-md md:text-lg py-4'>
            6. {t("politica.section-6")}
            </li>
            <li className='text-md md:text-lg py-4'>
            7. {t("politica.section-7")}
            </li>
            <li className='text-md md:text-lg py-4'>
            8. {t("politica.section-8")}
            </li>
            <li className='text-md md:text-lg py-4'>
            9. {t("politica.section-9")}
            </li>
            <li className='text-md md:text-lg py-4'>
            10. {t("politica.section-10")}
            </li>
            <li className='text-md md:text-lg py-4'>
            11. {t("politica.section-11")}
            </li>
        </ol>
        <Footer />

    </section>
  )
}

export default Politica