import { Input, Textarea } from "@material-tailwind/react";
import SubHeading from "../components/SubHeading";

function Contacte() {
  return (
    <section className="bg-dark/50 w-full h-full my-10 py-12">

        <form action="https://getform.io/f/a8caeb14-6d9c-4672-9931-5d23131bd367" method='POST' className="  flex flex-col justify-center items-center text-light">
            <SubHeading>
                Si no ens has posat 5 ⭐ a les ressenyes, ens dius perquè?
            </SubHeading>
            <p className="block w-2/3 md:w-1/3 text-xs">Així ens ajudaràs a donar un millor servei a la propera vegada que tornis.</p>
            <div className="w-full md:w-1/3 px-10 md:px-0 py-2">
                <Input 
                variant="outlined" 
                size="lg" 
                name="nom"
                id="name"
                label="El teu nom"
                className="text-dark pl-4 my-3 border-3 rounded-lg border-dark shadow-dark shadow-md outline-dark" />
            </div>
            <div className="w-full md:w-1/3 px-10 md:px-0 py-2">
                <Input 
                variant="outlined" 
                size="lg" 
                name="email"
                id="email"
                label="El teu email"
                className="text-dark pl-4 my-3 border-3 rounded-lg border-dark/50 shadow-dark shadow-md outline-dark" />
            </div>
            <div className="w-full md:w-1/3 px-10 md:px-0 py-2">
                <Textarea 
                variant="outlined" 
                size="lg" 
                name="missatge"
                id="message"
                label="El teu missatge"
                color="dark"
                className="text-dark pl-4 my-3 border-3 rounded-lg border-dark/50 shadow-dark shadow-md outline-dark" />
            </div>
            <button type="submit" className="w-40 cursor-pointer block text-dark bg-light hover:text-light hover:bg-secondary rounded-full py-2 px-4 font-bold text-md lg:text-xl my-4 transition-all duration-200">Opina!</button>
            
        </form>
        
    </section>
  )
}

export default Contacte