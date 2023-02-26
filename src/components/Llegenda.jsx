import { GiFlour, GiBigEgg , GiPeanut, GiCrabClaw, GiMilkCarton, GiDoubleFish, GiMolecule, GiBubblingBowl, GiPeas, GiSesame, GiAbstract094, GiAcorn, GiPlanks, GiMineralPearls } from 'react-icons/gi'
import { useTranslation } from 'react-i18next'

function Llegenda() {

  const [t, i18n] = useTranslation("global");
  
  return (
    <div className='w-full md:max-w-[900px] mx-auto my-8 px-5'>
            <h3 className='text-xl font-bold py-5 italic uppercase'>
            {t("carta.alergens-title")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3">

              <div className='flex gap-x-4 py-1'>
                < GiFlour size={30} title='Gluten' />
                <span>
                {t("carta.alergen-1")}
                </span>
              </div>
              <div className='flex gap-x-4 py-1'>
                < GiBigEgg size={30} title='Ou' />
                <span>
                {t("carta.alergen-2")}
                </span>
              </div>
              <div className='flex gap-x-4 py-1'>
                < GiPeanut size={30} title='Cacauet' />
                <span>
                {t("carta.alergen-3")}
                </span>
              </div>
              <div className='flex gap-x-4 py-1'>
                < GiAcorn size={30} title='Fruits secs' />
                <span>
                {t("carta.alergen-4")}
                </span>
              </div>
              <div className='flex gap-x-4 py-1'>
                < GiMineralPearls size={30} title='Lupins' />
                <span>
                {t("carta.alergen-5")}
                </span>
              </div>
              <div className='flex gap-x-4 py-1'>
                < GiPeas size={30} title='Soja' />
                <span>
                {t("carta.alergen-6")}
                </span>
              </div>
              <div className='flex gap-x-4 py-1'>
                < GiPlanks size={30} title='Api' />
                <span>
                {t("carta.alergen-7")}
                </span>
              </div>
              <div className='flex gap-x-4 py-1'>
                < GiCrabClaw size={30} title='Crustaci' />
                <span>
                {t("carta.alergen-8")}
                </span>
              </div>
              <div className='flex gap-x-4 py-1'>
                < GiAbstract094 size={30} title='Molusc' />
                <span>
                {t("carta.alergen-9")}
                </span>
              </div>
              <div className='flex gap-x-4 py-1'>
                < GiDoubleFish size={30} title='Peix' />
                <span>
                {t("carta.alergen-10")}
                </span>
              </div>
              <div className='flex gap-x-4 py-1'>
                < GiMilkCarton size={30} title='Lactosa' />
                <span>
                {t("carta.alergen-11")}
                </span>
              </div>
              <div className='flex gap-x-4 py-1'>
                < GiMolecule size={30} title='Sulfits' />
                <span>
                {t("carta.alergen-12")}
                </span>
              </div>
              <div className='flex gap-x-4 py-1'>
                < GiBubblingBowl size={30} title='Mostassa' />
                <span>
                {t("carta.alergen-13")}
                </span>
              </div>
              <div className='flex gap-x-4 py-1'>
                < GiSesame size={30} title='Sesam' />
                <span>
                {t("carta.alergen-14")}
                </span>
              </div>
            </div>
        </div>
  )
}

export default Llegenda