
function Spinner() {
  return (
    <section className="py-2 flex flex-col gap-y-2 justify-center items-start skeleton">
      <div className="skeleton-bar"></div>
      <div className="skeleton-bar"></div>
      <div className="skeleton-bar"></div>
      <div className="skeleton-bar"></div>
      <div className="skeleton-bar"></div>
    </section>
  )
}

export default Spinner