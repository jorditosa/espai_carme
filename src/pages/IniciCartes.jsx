import SubHeading from "../components/SubHeading"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import ImgCarta from '../assets/imatge_carta.webp'
  import ImgMenu from '../assets/formatge_gran.webp'
  import ImgMenuLab from '../assets/imatge_menulab.webp'
  import { Link } from 'react-router-dom'

function IniciCartes() {
  return (
    <section id="cartes" className="text-secondary w-full lg:max-w-screen-xl mx-auto">
        <SubHeading>
            Vine a descobrir la nostre gastronomia
        </SubHeading>
        <div className="grid grid-cols-1 lg:grid-cols-3 content-center gap-y-6">
        <Card className="w-full lg:w-96 mx-auto shadow-2xl rounded-lg bg-primary/25">
            <CardHeader color="blue" className="relative h-56">
                <img
                src={ImgCarta}
                alt="Plat canalons"
                className="h-full w-full rounded-t-lg shadow-lg"
                />
            </CardHeader>
            <CardBody className="text-center">
                <Link to="/carta" className="block text-dark bg-light hover:text-light hover:bg-secondary rounded-full py-2 px-4 font-bold text-lg lg:text-2xl my-4 transition-all duration-200">
                <span className="text-lg">El nostre</span> Menu
                </Link>
                <Typography className='text-start text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae praesentium dolores ut aspernatur, explicabo perspiciatis accusantium doloribus, deleniti reiciendis autem, veritatis modi earum. Veniam, maxime culpa distinctio eveniet hic tempore?
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
                
            </CardFooter>
        </Card>
        
        <Card className="w-full lg:w-96 mx-auto shadow-2xl rounded-lg bg-primary/25">
            <CardHeader color="blue" className="relative h-56">
                <img
                src={ImgMenu}
                alt="Plat canalons"
                className="h-full w-full rounded-t-lg shadow-lg"
                />
            </CardHeader>
            <CardBody className="text-center">
                <Link to="/carta" className="block text-dark bg-light hover:text-light hover:bg-secondary rounded-full py-2 px-4 font-bold text-lg lg:text-2xl my-4 transition-all duration-200">
                <span className="text-lg">La nostra</span> Carta
                </Link>
                <Typography className='text-start text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae praesentium dolores ut aspernatur, explicabo perspiciatis accusantium doloribus, deleniti reiciendis autem, veritatis modi earum. Veniam, maxime culpa distinctio eveniet hic tempore?
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
                
            </CardFooter>
        </Card>

        <Card className="w-full lg:w-96 mx-auto shadow-2xl rounded-lg bg-primary/25">
            <CardHeader color="blue" className="relative h-56">
                <img
                src={ImgMenuLab}
                alt="Plat canalons"
                className="h-full w-full rounded-t-lg shadow-lg"
                />
            </CardHeader>
            <CardBody className="text-center">
                <Link to="/carta" className="block text-dark bg-light hover:text-light hover:bg-secondary rounded-full py-2 px-4 font-bold text-lg lg:text-2xl my-4 transition-all duration-200 ">
                 <span className="text-lg">El nostre</span> Menu Laborable
                </Link>
                <Typography className='text-start text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae praesentium dolores ut aspernatur, explicabo perspiciatis accusantium doloribus, deleniti reiciendis autem, veritatis modi earum. Veniam, maxime culpa distinctio eveniet hic tempore?
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