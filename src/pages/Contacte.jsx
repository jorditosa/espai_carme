import { Input, Textarea } from "@material-tailwind/react";
import SubHeading from "../components/SubHeading";

function Contacte() {
  return (
    <section className="bg-dark/50 w-full h-full my-10 py-12">

        <form action="https://getform.io/f/a8caeb14-6d9c-4672-9931-5d23131bd367" method='POST' className="  flex flex-col justify-center items-center text-light">
            <SubHeading>
                Perque no ens posaries 5 estrelles a les ressenyes?
            </SubHeading>
            <div className="w-2/3 md:w-1/3 py-2">
                <Input 
                variant="outlined" 
                size="lg" 
                name="nom"
                id="name"
                label="El teu nom"
                className="text-dark pl-4 my-3 border-3 rounded-lg border-primary shadow-primary shadow-md outline-primary" />
            </div>
            <div className="w-2/3 md:w-1/3 py-2">
                <Input 
                variant="outlined" 
                size="lg" 
                name="email"
                id="email"
                label="El teu email"
                className="text-dark pl-4 my-3 border-3 rounded-lg border-primary/50 shadow-primary shadow-md outline-primary" />
            </div>
            <div className="w-2/3 md:w-1/3 py-2">
                <Textarea 
                variant="outlined" 
                size="lg" 
                name="missatge"
                id="message"
                label="La teva opinió"
                color="primary"
                className="text-dark pl-4 my-3 border-3 rounded-lg border-primary/50 shadow-primary shadow-md outline-primary" />
            </div>
            <button type="submit" className="w-40 cursor-pointer block text-dark bg-light hover:text-light hover:bg-secondary rounded-full py-2 px-4 font-bold text-md lg:text-xl my-4 transition-all duration-200">Opina!</button>
            
        </form>
        
    </section>
  )
}

export default Contacte