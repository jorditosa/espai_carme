import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError()

    return (
        <div className='space-y-8 pt-24 text-center w-full h-screen'>
            <h2 className='text-3xl'>Error detectat ⚠ </h2>
    
            <p>{error.message}</p>
        </div>
    )
}