import { Input, Textarea } from "@material-tailwind/react";
import SubHeading from "../components/SubHeading";

function Contacte() {
  return (
    <section className="w-full">

        <form action="https://getform.io/f/a8caeb14-6d9c-4672-9931-5d23131bd367" method='POST' className="flex flex-col justify-center items-center text-dark mx-2 md:mx-0 font-Roboto">
            <h2 className="font-bold uppercase text-lg text-center">
                Volem millorar!
            </h2>
            <p>Ens agradarien les 5⭐. Ens ajudes?</p>
            <div className="w-full py-4">
                <label htmlFor="name"></label>
                <Input 
                name="nom"
                id="name"
                placeholder="El teu nom"
                className="text-dark pl-4 my-2 py-3 border-3 rounded-lg shadow-secondary/75 shadow-md" />
            </div>
            <div className="w-full py-4">
                <Input 
                name="email"
                id="email"
                placeholder="El teu email (opcional)"
                className="text-dark pl-4 my-2 py-3 border-3 rounded-lg shadow-secondary/75 shadow-md" />
            </div>
            <div className="w-full py-4">
                <Textarea 
                name="missatge"
                id="message"
                placeholder="Deixan's la teva opinió"
                className="text-dark pl-4 my-2 py-3 border-3 rounded-lg shadow-secondary/75 shadow-md border-none" />
            </div>
            <button type="submit" className="w-48 cursor-pointer text-light bg-secondary hover:text-dark hover:bg-primary rounded-full py-2 px-4 font-bold text-md lg:text-xl mt-12 transition-all ease-in-out duration-200">Opina!</button>
            
        </form>
        
    </section>
  )
}

export default Contacte