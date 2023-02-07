const IniciCartes = lazy(() => import("./IniciCartes"))


function Cartes() {
  return (
    <section className="h-screen bg-dark">
        <IniciCartes />
    </section>
  )
}

export default Cartes