import { useNavigate, Form, useActionData, redirect } from 'react-router-dom'
import Formulariodb from './FormularioDB'
import Error from '../components/Error'
import { agregarProducte } from './app';

export async function action({request}) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  
  // Agregar Producto
  await agregarProducte(datos)

  return redirect('/gestio/productes')

}

function NouProducte() {
  const errores = useActionData()
  const navigate = useNavigate()

  return (
    <>
      <h1 className="font-black text-secondary text-4xl">Nou Producte</h1>
      <span>Omple tots els camps per a registrar un nou producte</span>

      <div className="flex justify-end">
        <button 
        className="bg-secondary text-light px-3 py-1 font-bold uppercase rounded-md"
        onClick={() => navigate('/gestio/productes')}
        >
          Tornar
        </button>

      </div>

      <div className="bg-light shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">

        {errores?.length && errores.map( (error, i) => {
          <Error key={i}>
            {error}
          </Error>
        } )}
        <Form
        method='post'
        noValidate
        >
          <Formulariodb
          />

          <input 
          type="submit"
          value="Registrar Producte" 
          className='mt-5 w-full bg-secondary p-3 uppercase text-light text-lg cursor-pointer rounded-md'
          />
        </Form>
      </div>
    </>
  )
}

export default NouProducte