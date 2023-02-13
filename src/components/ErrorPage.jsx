import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError();

    function refreshPage() {
        window.location.reload(false);
      }

    return (
        <div className='space-y-8 pt-24 text-center w-full h-screen'>
            <h2 className='text-3xl'>Oops! Error detectat 😒  </h2>

            <p>{error.message}</p>
    
            <button className="w-1/2 cursor-pointer text-light bg-secondary hover:text-dark hover:bg-primary rounded-full py-2 px-4 font-bold text-md lg:text-xl mt-12 transition-all ease-in-out duration-200"
            onClick={refreshPage}
            >Refrescar la pàgina
            </button>
            
        </div>
    )
}

export default ErrorPage