import { useEffect } from 'react'
import LogoNegre from '../assets/logos/logo_negre.webp'

function Welcome() {

  return (
    <section className="w-full h-screen bg-light flex flex-col gap-12 md:gap-24 justify-center items-center ">
      <img src={LogoNegre} alt="logo espai Carme" width={"150px"} />
        <h2 className="text-dark font-bold text-4xl md:text-6xl italic">Benvingut/da!</h2>
        <h2 className="text-dark font-bold text-4xl md:text-6xl italic">Bienvenido/a!</h2>
        <h2 className="text-dark font-bold text-4xl md:text-6xl italic">Welcome!</h2>
    </section>
  )
}

export default Welcome