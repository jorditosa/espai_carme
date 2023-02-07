import { Outlet,  Link, useLocation } from 'react-router-dom'

function Gestio() {

    const location = useLocation()

  return (
    
    <div className="md:flex md:min-h-screen font-Roboto">
        <aside className="md:w-1/4 bg-secondary px-5 py-10">
            <h2 className="text-3xl font-bold text-center text-light">Espai de la Carme</h2>
            <span className="block font-bold text-center text-light">Gestor productes</span>

            <nav className="mt-10">
                <Link className={`${location.pathname === 'http://localhost:5173/gestio/productes' ? 'text-primary' : 'text-light'} text-xl block mt-2 hover:text-primary`} to="/gestio/productes">Productes</Link>
                <Link className='text-xl block mt-2 hover:text-primary text-light' to="http://localhost:5173/gestio/nouproducte">Nou Producte</Link>
            </nav>
        </aside>

        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
       
            <Outlet />
        </main>
    </div>
  )
}

export default Gestio