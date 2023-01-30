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
    <section id="cartes" className="text-center lg:text-start text-secondary w-full lg:max-w-screen-xl mx-auto my-4 lg:my-8">
        <SubHeading>
            Vine a descobrir la nostre gastronomia
        </SubHeading>
        <div className="grid grid-cols-1 lg:grid-cols-3 content-center gap-y-6 gap-2 mx-2">

            <Card className="w-[300px] mx-auto shadow-2xl rounded-lg bg-primary/50">
                <CardHeader color="blue" className="relative h-56">
                    <img
                    src={ImgCarta}
                    alt="Plat canalons"
                    className="h-full w-full rounded-t-lg shadow-lg"
                    />
                </CardHeader>
                <CardBody className="text-center">
                    <Link to="/carta" className="block text-dark bg-light hover:text-light hover:bg-secondary rounded-full py-2 px-4 font-bold text-lg lg:text-2xl my-4 transition-all duration-200">
                    <span className="text-lg">El nostre Menu</span> 
                    </Link>
                    <Typography className='text-start text-gray-600'>
                    Lorem ipsum dolor sit amet  onsectetur adipisicing elit. Molestiae praesentium dolores ut aspernatur, explicabo perspiciatis accusantium doloribus, deleniti reiciendis autem, veritatis modi earum. Veniam, maxime culpa distinctio eveniet hic tempore?
                    </Typography>
                </CardBody>
                <CardFooter divider className="flex items-center justify-between py-3">
                    
                </CardFooter>
            </Card>
            
            <Card className="w-[300px] mx-auto shadow-2xl rounded-lg bg-primary/50">
                <CardHeader color="blue" className="relative h-56">
                    <img
                    src={ImgMenu}
                    alt="Plat canalons"
                    className="h-full w-full rounded-t-lg shadow-lg"
                    />
                </CardHeader>
                <CardBody className="text-center">
                    <Link to="/carta" className="block text-dark bg-light hover:text-light hover:bg-secondary rounded-full py-2 px-4 font-bold text-lg lg:text-2xl my-4 transition-all duration-200">
                    <span className="text-lg">La nostra Carta</span>
                    </Link>
                    <Typography className='text-start text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae praesentium dolores ut aspernatur, explicabo perspiciatis accusantium doloribus, deleniti reiciendis autem, veritatis modi earum. Veniam, maxime culpa distinctio eveniet hic tempore?
                    </Typography>
                </CardBody>
                <CardFooter divider className="flex items-center justify-between py-3">
                    
                </CardFooter>
            </Card>

            <Card className="w-[300px] mx-auto shadow-2xl rounded-lg bg-primary/50">
                <CardHeader color="blue" className="relative h-56">
                    <img
                    src={ImgMenuLab}
                    alt="Plat canalons"
                    className="h-full w-full rounded-t-lg shadow-lg"
                    />
                </CardHeader>
                <CardBody className="text-center">
                    <Link to="/carta" className="block text-dark bg-light hover:text-light hover:bg-secondary rounded-full py-2 px-4 font-bold text-lg lg:text-2xl my-4 transition-all duration-200 ">
                    <span className="text-lg">El nostre Menu Laborable</span> 
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