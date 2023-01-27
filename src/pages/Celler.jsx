import { useEffect } from 'react'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import CopesVi from '../assets/copes_vi.webp'
import ArnauVi from '../assets/vi_cuso.webp'
import SubHeading from '../components/SubHeading'
import Footer from '../components/Footer'
import ViBlanc from '../assets/vi_blanc.jpg'
import ViNegre from '../assets/vi_negre.jpg'


function Celler() {

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, ['/celler']);

  return (
    <section className='text-light bg-dark'>
      <div className='h-[500px] md:h-screen py-5'>
        <img src={CopesVi} alt="Copes de vi" className='block mx-auto w-screen'/>
        <SubHeading>
          El Celler Cusó
        </SubHeading>
        <hr className='border-b-8' />
      </div>

      <div className='w-full lg:max-w-screen-lg mx-auto py-8 lg:py-40 flex flex-col md:flex-row items-center'>
          <img src={ArnauVi} alt="imatge forn llenya" className='block md:w-1/4 order-2 md:order-none  rounded-lg shadow-lg shadow-light'
             />
          <div className='p-0 w-full'>
              <SubHeading>L'essència familiar al teu paladar</SubHeading>
          <p className='px-10 py-4'>
              Les vinyes situades a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, inventore! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores reiciendis ea voluptatum, modi non illum veniam amet culpa animi fugit!
          </p>
          </div>
      </div>

      { /* Carta vins Cards */ }
      <div id="cartes_vins" className="text-light w-full lg:max-w-screen-lg mx-auto my-10 lg:my-24">
        <SubHeading>
            Descobreix la nostra bodega
        </SubHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 content-center gap-y-10">
        <Card className="w-80 mx-auto shadow-lg shadow-light rounded-lg bg-gray-900">
            <CardHeader color="blue" className="relative h-56">
                <img
                src={ViBlanc}
                alt="Vi blanc cuso"
                className="h-full w-full rounded-t-lg shadow-lg"
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography className='text-start text-gray-100'>
                Vi Blanc. The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
                
            </CardFooter>
        </Card>
        
        <Card className="w-80 mx-auto shadow-lg shadow-light rounded-lg bg-gray-900">
            <CardHeader color="blue" className="relative h-56">
                <img
                src={ViNegre}
                alt="Vi negre cuso"
                className="h-full w-full rounded-t-lg shadow-lg"
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography className='text-start text-gray-100'>
                Vi Negre. The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
                
            </CardFooter>
        </Card>

        </div>
    </div>

    <div className='bg-gradient-to-b from-light/75 to-light'>
      <Footer />
    </div>

    </section>
  )
}

export default Celler