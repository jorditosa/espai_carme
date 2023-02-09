import { useRouteError, useNavigate } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className='space-y-8 pt-24 text-center w-full h-screen'>
            <h2 className='text-3xl'>Error detectat ⚠ </h2>

            <p>{error.message}</p>
    
            <button className="w-48 cursor-pointer text-light bg-secondary hover:text-dark hover:bg-primary rounded-full py-2 px-4 font-bold text-md lg:text-xl mt-12 transition-all ease-in-out duration-200"
            onClick={() => navigate('/')}
            >Opina!
            </button>
            
        </div>
    )
}

export default ErrorPage