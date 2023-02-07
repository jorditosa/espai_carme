export async function obtenirProducte(id) {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
  const resultado = await respuesta.json()
  return resultado
}

export async function agregarProducte(datos) {
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    await respuesta.json()

  } catch (error) {

  }
}

export async function actualizarProducte(id, datos) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    await respuesta.json()

  } catch (error) {

  }
}

export async function eliminarProducte(id) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/:${id}`, {
      method: 'DELETE'
    });
    await respuesta.json()

  } catch (error) {

  }
}