import { useNavigate, Form, useActionData } from 'react-router-dom'
import Formulario from './FormularioDB'
import Error from '../components/Error'

export async function action({request}) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);

  // Validacion
  const errores = [];
  if(Object.values(datos).includes('')) {
    errores.push('Tots els camps són obligatoris')
  }
  console.log('submit')

  // Retornar dades si hi ha errors
  if(Object.keys(errores).length){
    return errores
  }
  console.log('submit')


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
        >
          <Formulario />

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