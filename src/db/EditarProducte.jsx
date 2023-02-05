import { obtenirProducte, actualizarProducte } from "./app"
import { Form , useNavigate , useLoaderData, redirect } from 'react-router-dom'
import Formulariodb from './FormularioDB'

export async function loader({params}) {
  const producte = await obtenirProducte(params.producteId);
  if(Object.values(producte).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'No hi han resultats'
    })
  }

  return producte
}

export async function action({request, params}) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  
  // Actualizar Producto
  await actualizarProducte(params.producteId, datos)

  return redirect('/gestio/productes')
}

function EditarProducte() {
  
  const navigate = useNavigate();
  const producte = useLoaderData()

  return (
  <>
    <h1 className="font-black text-secondary text-4xl">Editar Producte</h1>
    <span>Modifica les dades del producte</span>

    <div className="flex justify-end">
      <button 
      className="bg-secondary text-light px-3 py-1 font-bold uppercase rounded-md"
      onClick={() => navigate('/gestio/productes')}
      >
        Tornar
      </button>

    </div>

    <div className="bg-light shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">

      <Form
      method='post'
      >
        <Formulariodb
        producte={producte}
        />

        <input 
        type="submit"
        value="Actualitzar Producte" 
        className='mt-5 w-full bg-secondary p-3 uppercase text-light text-lg cursor-pointer rounded-md hover:bg-secondary/50'
        />
      </Form>
    </div>
  </>
  )
}

export default EditarProducte