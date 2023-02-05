import { useNavigate, Form, redirect } from 'react-router-dom'
import { eliminarProducte } from './app'

export async function action({params}) {

    await eliminarProducte(params.producteId)
    return redirect('/gestio/productes')
}

function Item({producte}) {

    const { title, price, alergens, description, id} = producte

    const navigate = useNavigate();

  return (
        <tr className="border-b">
            <td className='p-3 space-y-2'>
                <p className="text-lg text-dark">
                    {title}
                </p>
            </td>
            <td className="p-3">
                <p className="text-gray-600 font-bold text-xl">
                    {price} €
                </p>
            </td>
            <td>

            </td>
            <td className="p-3 flex gap-3">
                <button
                type="button"
                className="text-secondary text-sm" 
                onClick={() => navigate(`/gestio/productes/${id}/editar`) }
                >
                    Editar
                </button>

                <Form
                method='POST'
                action={`/gestio/productes/${id}/eliminar`}
                onSubmit={(e) => {
                    if(!confirm('Vols eliminar aquest Producte?')) {
                        e.preventDefault()
                    }
                }}
                >
                    <button
                    type="submit"
                    className="text-error text-sm" 
                    >
                        Eliminar
                    </button>
                </Form>
            </td>
        </tr>

  )
}

export default Item