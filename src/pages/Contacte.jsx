import { Input, Textarea } from "@material-tailwind/react";
import SubHeading from "../components/SubHeading";

function Contacte() {
  return (
    <section className="w-full h-full">

        <form action="https://getform.io/f/a8caeb14-6d9c-4672-9931-5d23131bd367" method='POST' className="flex flex-col justify-center items-center text-dark mx-8 md:mx-0 font-Roboto">
            <h2 className="font-bold uppercase text-lg text-center">
                Volem millorar! Ens agradarien les 5⭐. Ens ajudes?
            </h2>
            <div className="w-full py-2">
                <Input 
                variant="outlined" 
                size="lg" 
                name="nom"
                id="name"
                label="El teu nom"
                className="text-dark pl-4 my-3 border-3 rounded-lg shadow-secondary/75 shadow-md" />
            </div>
            <div className="w-full py-2">
                <Input 
                variant="outlined" 
                size="lg" 
                name="email"
                id="email"
                label="El teu email (opcional)"
                className="text-dark pl-4 my-3 border-3 rounded-lg shadow-secondary/75 shadow-md" />
            </div>
            <div className="w-full py-2">
                <Textarea 
                variant="outlined" 
                size="lg" 
                name="missatge"
                id="message"
                label="Deixan's la teva opinió"
                className="text-dark pl-4 my-3 border-3 rounded-lg shadow-secondary/75 shadow-md border-none" />
            </div>
            <button type="submit" className="w-40 cursor-pointer block text-light bg-secondary hover:text-dark hover:bg-primary rounded-full py-2 px-4 font-bold text-md lg:text-xl my-4 transition-all duration-200">Opina!</button>
            
        </form>
        
    </section>
  )
}

export default Contacte