import { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import SubHeading from "../components/SubHeading";
import { BsTelephone } from 'react-icons/bs'


function Takespai() {

  const navigate = useNavigate();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, ['/takespai']);

  return (
    <div className="w-full h-screen px-4 bg-gradient-to-t from-light to-secondary/25 text-dark text-xl flex flex-col justify-center items-center gap-y-4">
      <SubHeading>En construcció! 👷 </SubHeading>
      <p>Ben aviat podreu gaudir de les vostres comandes online.</p>
      <p>De moment, ja sabeu que podeu fer la vostre comanda per take away o domicili trucant al <a className="block my-4 text-2xl text-dark text-center font-bold hover:text-dark/50" href='tel:938933308'> 
        93 893 33 08
        </a>
      </p>
      <button className="w-48 cursor-pointer text-light bg-secondary hover:text-dark hover:bg-primary rounded-full py-2 px-4 font-bold text-md lg:text-xl mt-12 transition-all ease-in-out duration-200"
            onClick={() => navigate('/')}>
            Tornar al Inici
      </button>
    </div>
  )
}

export default Takespai