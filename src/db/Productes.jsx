import { useLoaderData } from 'react-router-dom'
import Item from './Item'

export function loader() {

    const productes = [
                {
                    "id": "001",
                    "title": "Lasagna Octavi! pasta d’espinacs i bolognesa a la tartufata",
                    "price": "12,00",
                    "alergens": "gluten"
                },
                {
                    "id": "002",
                    "title": "Spaghetti carbonara tartufata",
                    "price": "11,00",
                    "alergens": "egg"
                },
    ]

    return productes;
}

function Productes() {

    // Con useLoaderData, lo que esté en la función loader será cargado aqui
    const productesList = useLoaderData();

  return (
    <>
        <h1 className="font-black text-secondary text-4xl">Productes</h1>
        <span>Administrar els productes i begudes</span>

        {productesList.length ? (
            <table className='w-full bg-light shadow mt-5 table-auto'>
                <thead className="bg-secondary text-light">
                    <tr>
                        <th className="p-2">Producte</th>
                        <th className="p-2">Preu</th>
                        <th className="p-2">Al·lèrgens</th>
                        <th className="p-2">Accions</th>
                    </tr>
                </thead>

                <tbody className=''>
                    {productesList.map((producte) => (
                        <Item 
                            producte={producte}
                            key={producte.id}
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