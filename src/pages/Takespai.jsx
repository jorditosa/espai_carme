import { useEffect } from "react";

function Takespai() {

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, ['/takespai']);

  return (
    <div className="w-full h-screen px-4 bg-gradient-to-b from-primary to-secondary/75 text-dark text-xl flex flex-col justify-center items-center gap-y-4">
      <h2 className="font-bold text-3xl">En construcció! 👷 </h2>
      <p>Ben aviat podreu gaudir de les vostres comandes online.</p>
      <p>De moment, ja sabeu que podeu fer la vostre comanda per take away o domicili trucant al <a className="text-dark font-bold hover:text-dark/50" href='tel:938933308'>93 893 33 08</a></p>
    </div>
  )
}

export default Takespai