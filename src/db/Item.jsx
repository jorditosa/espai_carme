
function Item({producte}) {

    const { title, price, alergens, id} = producte

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
                >
                    Editar
                </button>
                <button
                type="button"
                className="text-error text-sm" 
                >
                    Eliminar
                </button>
            </td>
        </tr>

  )
}

export default Item