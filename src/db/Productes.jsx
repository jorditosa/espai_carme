import { lazy } from 'react'
import { useLoaderData } from 'react-router-dom'
import Item from './Item'

export async function loader() {

    const respuesta = await fetch("http://localhost:1337/api/cartas");
    const resultado = await respuesta.json();
    const productes = resultado.data

    return productes
}

function Productes() {

    // Con useLoaderData, lo que esté en la función loader será cargado aqui
    const productes = useLoaderData();

  return (
    <>
        <h1 className="font-black text-secondary text-4xl">Productes</h1>
        <span>Administrar els productes i begudes</span>

        {productes.length ? (
            <table className='w-full bg-light shadow mt-5 table-auto'>
                <thead className="bg-secondary text-light">
                    <tr>
                        <th className="p-2">Producte</th>
                        <th className="p-2">Preu</th>
                        <th className="p-2">Al·lèrgens</th>
                        <th className="p-2">Accions</th>
                    </tr>
                </thead>

                <tbody>
                    {productes.map((productes) => (
                        <Item 
                            producte={productes}
                            key={productes.id}
                        />
                    ))}
                </tbody>
            </table>
        ) : (
            <p className='text-center mt-10'>No hi ha cap producte</p>
        )}
    </>
  )
}

export default Productes