import { useRouteError } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function ErrorPage() {
    const error = useRouteError();

    const [t, i18n] = useTranslation("global");

    function refreshPage() {
        window.location.reload(false);
      }

    return (
        <div className='space-y-8 pt-48 px-6 text-center w-full h-screen'>
            <h2 className='text-3xl'> {t("error.title")} 🤦 </h2>

            <p className='font-bold text-xl'>
            {t("error.text")}
            </p>
    
            <button className="w-full md:w-1/2 cursor-pointer text-light bg-secondary hover:text-dark hover:bg-primary rounded-lg py-2 font-bold text-md lg:text-xl mt-12 transition-all ease-in-out duration-200"
            onClick={refreshPage}
            >  {t("error.button")}
            </button>

            <p>{error.message}</p>
            
            
        </div>
    )
}

export default ErrorPage