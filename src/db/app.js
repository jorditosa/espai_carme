export async function obtenirCarta() {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/cartas`)
  const { data } = await respuesta.json()
  return data
}

export async function obtenirMenu() {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/menu-espais`)
  const { data } = await respuesta.json()
  return data
}