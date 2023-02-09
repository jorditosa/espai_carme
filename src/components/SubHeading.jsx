import styled from "styled-components"

// styled comp

const Heading = styled.h2`
  text-shadow: 0.05rem 0.05rem #000;
`

function SubHeading({children}) {
  return (
    <Heading className='py-3 font-bold text-3xl md:text-5xl font-Roboto leading-normal drop-shadow-xl}'>
        {children}
    </Heading>
  )
}

export default SubHeading