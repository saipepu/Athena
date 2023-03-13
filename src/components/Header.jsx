import { Box, Container, Image } from '@chakra-ui/react'
import logo from '../assets/athena_logo.png'
import React from 'react'

const Header = () => {
  return (
    <Container maxW='full' minHeight={'100'} padding="0px 64px" bgColor={'white'} display='flex' flexDirection='row' justifyContent='space-between' alignItems='center' boxShadow="0px 2px 6px rgba(0, 0, 0, 0.06)">
      <Box justifyContent='center' alignItems='center'>
        <Image src={logo} alt="athena-logo" objectFit={'contain'}/>
      </Box>
      <Box justifyContent='center' alignItems='center' color="black">
        profile 
        {/* put more content */}
      </Box>
    </Container>
  )
}

export default Header