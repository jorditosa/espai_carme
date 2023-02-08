import styled from "styled-components"

// styled comp

const Heading = styled.h2`
  text-shadow: 0.1rem 0.1rem 0.1rem #000;
`

function SubHeading({children}) {
  return (
    <Heading className='py-3 font-bold text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-Roboto leading-normal drop-shadow-xl}'>
        {children}
    </Heading>
  )
}

export default SubHeading