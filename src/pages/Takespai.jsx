import { useEffect } from "react";
import SubHeading from "../components/SubHeading";
import { BsTelephone } from 'react-icons/bs'


function Takespai() {

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, ['/takespai']);

  return (
    <div className="w-full h-screen px-4 bg-gradient-to-t from-dark to-secondary text-light text-xl flex flex-col justify-center items-center gap-y-4">
      <SubHeading>En construcció! 👷 </SubHeading>
      <p>Ben aviat podreu gaudir de les vostres comandes online.</p>
      <p>De moment, ja sabeu que podeu fer la vostre comanda per take away o domicili trucant al <a className="block my-4 text-2xl text-light text-center font-bold hover:text-light/50" href='tel:938933308'> 
        93 893 33 08
        </a>
        </p>
    </div>
  )
}

export default Takespai