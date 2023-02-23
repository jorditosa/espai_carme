import { GiFlour, GiBigEgg , GiPeanut, GiCrabClaw, GiMilkCarton, GiDoubleFish, GiMolecule, GiBubblingBowl, GiPeas, GiSesame, GiAbstract094, GiAcorn, GiPlanks, GiMineralPearls } from 'react-icons/gi'

export default function renderAlergen(alergen) {

  switch (alergen) {
    case 'gluten':
      return <GiFlour size={30} title={"gluten"} />;
    case 'huevo':
      return <GiBigEgg size={30} title={"huevo"} />;
    case 'crustaceo':
      return <GiCrabClaw size={30} title={"crustaceo"} />;
    case 'pescado':
      return <GiDoubleFish size={30} title={"pescado"} />;
    case 'cacahuete':
      return <GiPeanut size={30} title={"cacahuete"} />;
    case 'cascara':
      return <GiAcorn size={30} title={"cascara"} />;
    case 'soja':
      return <GiPeas size={30} title={"soja"} />;
    case 'lacteo':
      return <GiMilkCarton size={30} title={"lacteo"} />;
    case 'apio':
      return <GiPlanks size={30} title={"apio"} />;
    case 'mostaza':
      return <GiBubblingBowl size={30} title={"mostaza"} />;
    case 'sesamo':
      return <GiSesame size={30} title={"sesamo"} />;
    case 'sulfito':
      return <GiMolecule size={30} title={"sulfito"} />;
    case 'altramuce':
      return <GiMineralPearls size={30} title={"altramuce"} />;
    case 'molusco':
      return <GiAbstract094 size={30} title={"molusco"} />;
  }
}