import SubHeading from "../components/SubHeading"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import ImgCarta from '../assets/imatge_carta.jpg'
  import { Link } from 'react-router-dom'

function IniciCartes() {
  return (
    <section className="text-secondary w-full lg:max-w-screen-xl mx-auto">
        <SubHeading>
            Vine a descobrir la nostre gastronomia
        </SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 content-center">
        <Card className="w-96 mx-auto">
            <CardHeader color="blue" className="relative h-56">
                <img
                src={ImgCarta}
                alt="Plat canalons"
                className="h-full w-full rounded-t-lg shadow-lg"
                />
            </CardHeader>
            <CardBody className="text-center">
                <Link to="/carta" className="block text-secondary bg-light/75 hover:text-secondary/75 hover:bg-light/50 rounded-full py-2 px-4 font-bold text-md lg:text-2xl my-4">
                La nostre Carta
                </Link>
                <Typography className='text-start'>
                The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
                
            </CardFooter>
        </Card>
        </div>
    </section>
  )
}

export default IniciCartes