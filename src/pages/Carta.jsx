import Footer from '../components/Footer'
import SubHeading from '../components/SubHeading'
import { GiFlour, GiBigEgg , GiPeanut, GiCrabClaw, GiMilkCarton } from 'react-icons/gi'

function Carta() {
  return (
    <main className="pt-28 font-Roboto bg-gradient-to-b from-white to-secondary/50 px-5 w-full">
      <SubHeading >
        la Carta Espai
      </SubHeading>
      <div className='pt-12 w-full md:max-w-[900px] mx-auto'>

        <h3 className='text-2xl font-bold py-5 italic'>FOIE I TARTUFO!!!</h3>

        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Lasagna Octavi! pasta d’espinacs i bolognesa a la tartufata
            </p>
            < GiFlour size={25} title='Gluten' />
            < GiBigEgg size={25} title='Ou' />
            < GiPeanut size={25} title='Cacauet' />
            < GiCrabClaw size={25} title='Crustaci' />
            < GiMilkCarton size={25} title='Lactosa' />
          </div>
          <span className='text-md md:text-xl ml-4'>12,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Spaghetti “carbonara” tartufata
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>11,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Casarecci amb salsa de bolets i trufa
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>13,50€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Amanida Espai amb peça de foie poêlé, poma i ceba caramelitzada
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>13,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Pizza Florència, Tartufo, oli de tòfona, ou, tomàquet cherri, ceba i xampinyó
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>14,50€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Spaghettis al foie, amb ous de guatlla, salsa de foie, trufa negra i foie polé
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>16,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Provolone trufat amb patata gratinat al forn de llenya
            </p>
            < GiBigEgg size={25} title='Ou' />
          </div>
          <span className='text-md md:text-xl ml-4'>10,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Ravioli farcit de burrata amb salsa de nous al toc de trufa
            </p>
            < GiBigEgg size={25} title='Ou' />
          </div>
          <span className='text-md md:text-xl ml-4'>10,00€</span>
        </div>

        <h3 className='text-2xl font-bold py-5 italic'>ENTRANTS</h3>

        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Callos amb cigrons
            </p>
            < GiBigEgg size={25} title='Ou' />
          </div>
          <span className='text-md md:text-xl ml-4'>9,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Foccaccia
            </p>
            < GiBigEgg size={25} title='Ou' />
          </div>
          <span className='text-md md:text-xl ml-4'>6,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Carpaccio de vedella amb virutes de parmesà i oli d’oliva
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>11,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Canalons de l’àvia
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>11,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Carbassa de violí escalivada amb burrata, anchoves de l'Escala i pomodoro.
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>12,00€</span>
        </div>

        <h3 className='text-2xl font-bold py-5 italic'>AMANIDES</h3>

        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Amanida salmó fumat, alvocat i huevas de lumpo amb vinagreta
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>12,50€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Dolça, amb pernil de gla, figues massarades al Armanyac, codonyat i nous
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>12,50€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Amanida amb Burrata, pesto, pomodoros i entrabancs
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>11,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Farcellets de formatge de cabra al toc de mel i mostassa
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>9,50€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Gala, torradetes de formatge brie fos amb panses, pinyons i tomàquet <br/>
            confitat, tot sobre una base d’enciams amb vinagreta de mostassa i nata
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>9,70€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Espai de la Carme, bouquet d’enciams, foie tevi, poma caramelitzada, <br/>
            ceba confitada i vinagreta de mel i porro en témpura.
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>13,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Dalí, ruca, tomàquet natural, espàrrecs verds al dente, porro en témpura, <br/>
            tomàquet confitat, làmines de parmesà, amb vinagreta de festucs.
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>9,50€</span>
        </div>

        <h3 className='text-2xl font-bold py-5 italic'>PROVOLONES</h3>
        <span>(Tots els provolones porten base de crema de formatges i patata)</span>

        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Menorquina, sobrassada, ceba confitada i pomodorini
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>9,50€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            4 estacions, pomodorini, xampinyons, pernil dolç i carxofa saltejada
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>9,50€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Xoriç picant de Nàpols i guindilla
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>9,25€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Pesto
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>9,00€</span>
        </div>    

        <h3 className='text-2xl font-bold py-5 italic'>RISOTTOS</h3>

        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Espai, el de sempre fet dins la roda de Parmigiano Reggiano.
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>12,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            A la Catalana, espinacs, panses, pinyons al toc d'all
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>9,00€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            De bolets
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>10,50€</span>
        </div>
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            De calamars encebats amb ceba de Figueres
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>10,50€</span>
        </div>         
        <div className='flex justify-between items-center border-b-2 border-dark/10'>
          <div className='flex items-center'>
            <p className='inline mr-4 text-sm md:text-lg'>
            Negre amb sípia, músclos, gambeta i cloïsa
            </p>
            < GiFlour size={25} title='Gluten' />
          </div>
          <span className='text-md md:text-xl ml-4'>12,00€</span>
        </div>         

      </div>

    <Footer />
    </main>  
  )
}

export default Carta