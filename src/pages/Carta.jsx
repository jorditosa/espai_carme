import { useEffect } from 'react';
import Footer from '../components/Footer'
import SubHeading from '../components/SubHeading'
import { GiFlour, GiBigEgg , GiPeanut, GiCrabClaw, GiMilkCarton } from 'react-icons/gi'
import db from '../db/db.json'

function Carta() {

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, ['/carta']);

  console.log(db)

  return (
    <main className="pt-28 font-Roboto bg-gradient-to-b from-white to-light/50 w-full">

      <hr className='border-b-8 border-primary/50' />

      <div className='pt-6 px-5 w-full md:max-w-[900px] mx-auto'>

        <h3 className='text-xl font-bold py-5 italic'>FOIE I TARTUFO!!!</h3>

        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start justify-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            {db.carta.category.sample.title}
            </p>
            <div className='flex'>              
              < GiFlour size={20} title='Gluten' />
              < GiBigEgg size={20} title='Ou' />
              < GiPeanut size={20} title='Cacauet' />
              < GiCrabClaw size={20} title='Crustaci' />
              < GiMilkCarton size={20} title='Lactosa' />
            </div>
          </div>
          <span className='text-md md:text-xl ml-4'>
          {db.carta.category.sample.price} €
          </span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Spaghetti “carbonara” tartufata
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>11,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Casarecci amb salsa de bolets i trufa
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>13,50€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Amanida Espai amb peça de foie poêlé, poma i ceba caramelitzada
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>13,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Pizza Florència, Tartufo, oli de tòfona, ou, tomàquet cherri, ceba i xampinyó
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>14,50€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Spaghettis al foie, amb ous de guatlla, salsa de foie, trufa negra i foie polé
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>16,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Provolone trufat amb patata gratinat al forn de llenya
            </p>
            <div className='flex'>
              < GiBigEgg size={20} title='Ou' />
  
</div>          </div>
          <span className='text-md md:text-xl ml-4'>10,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Ravioli farcit de burrata amb salsa de nous al toc de trufa
            </p>
            <div className='flex'>
              < GiBigEgg size={20} title='Ou' />
  
</div>          </div>
          <span className='text-md md:text-xl ml-4'>10,00€</span>
        </div>

        <h3 className='text-xl font-bold py-5 italic'>ENTRANTS</h3>

        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Callos amb cigrons
            </p>
            <div className='flex'>
              < GiBigEgg size={20} title='Ou' />
  
</div>          </div>
          <span className='text-md md:text-xl ml-4'>9,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Foccaccia
            </p>
            <div className='flex'>
              < GiBigEgg size={20} title='Ou' />
  
</div>          </div>
          <span className='text-md md:text-xl ml-4'>6,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Carpaccio de vedella amb virutes de parmesà i oli d’oliva
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>11,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Canalons de l’àvia
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>11,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Carbassa de violí escalivada amb burrata, anchoves de l'Escala i pomodoro.
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>12,00€</span>
        </div>

        <h3 className='text-xl font-bold py-5 italic'>AMANIDES</h3>

        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Amanida salmó fumat, alvocat i huevas de lumpo amb vinagreta
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>12,50€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Dolça, amb pernil de gla, figues massarades al Armanyac, codonyat i nous
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>12,50€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Amanida amb Burrata, pesto, pomodoros i entrabancs
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>11,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Farcellets de formatge de cabra al toc de mel i mostassa
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>9,50€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Gala, torradetes de formatge brie fos amb panses, pinyons i tomàquet <br/>
            confitat, tot sobre una base d’enciams amb vinagreta de mostassa i nata
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>9,70€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Espai de la Carme, bouquet d’enciams, foie tevi, poma caramelitzada, <br/>
            ceba confitada i vinagreta de mel i porro en témpura.
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>13,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Dalí, ruca, tomàquet natural, espàrrecs verds al dente, porro en témpura, <br/>
            tomàquet confitat, làmines de parmesà, amb vinagreta de festucs.
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>9,50€</span>
        </div>

        <h3 className='text-xl font-bold py-5 italic'>PROVOLONES</h3>
        <span>(Tots els provolones porten base de crema de formatges i patata)</span>

        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Menorquina, sobrassada, ceba confitada i pomodorini
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>9,50€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            4 estacions, pomodorini, xampinyons, pernil dolç i carxofa saltejada
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>9,50€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Xoriç picant de Nàpols i guindilla
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>9,20€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Pesto
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>9,00€</span>
        </div>    

        <h3 className='text-xl font-bold py-5 italic'>RISOTTOS</h3>

        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Espai, el de sempre fet dins la roda de Parmigiano Reggiano.
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>12,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            A la Catalana, espinacs, panses, pinyons al toc d'all
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>9,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            De bolets
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>10,50€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            De calamars encebats amb ceba de Figueres
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>10,50€</span>
        </div>         
        <div className='flex justify-between items-center border-b-2 border-dark/10 py-1'>
          <div className='flex flex-col lg:flex-row items-start'>
            <p className='inline mr-4 text-sm md:text-md lg:text-lg'>
            Negre amb sípia, músclos, gambeta i cloïsa
            </p>
            <div className='flex'>
              < GiFlour size={20} title='Gluten' />
            </div>  
          </div>
          <span className='text-md md:text-xl ml-4'>12,00€</span>
        </div>         
      </div>

      <hr />

      <div className='w-full md:max-w-[900px] mx-auto mt-10 px-5'>
          <h3 className='font-bold py-4 underline'>Llegenda d'al·lèrgens</h3>
          <div className='flex gap-x-4'>
            < GiFlour size={30} title='Gluten' />
            <span>Conté Gluten</span>
          </div>
          <div className='flex gap-x-4'>
            < GiBigEgg size={30} title='Ou' />
            <span>Conté Ou</span>
          </div>
          <div className='flex gap-x-4'>
            < GiPeanut size={30} title='Cacauet' />
            <span>Conté Traces de cacahuet</span>
          </div>
          <div className='flex gap-x-4'>
            < GiCrabClaw size={30} title='Crustaci' />
            <span>Conté Crustaci</span>
          </div>
          <div className='flex gap-x-4'>
            < GiMilkCarton size={30} title='Lactosa' />
            <span>Conté Lactosa</span>
          </div>
        </div>

    <Footer />
    </main>  
  )
}

export default Carta