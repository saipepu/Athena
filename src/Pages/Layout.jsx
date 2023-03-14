import { Card, CardBody, CardHeader, Container, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import red_clock from '../assets/red_clock.png'
import token from '../assets/token.png'
import book from '../assets/book.png'
import RankTable from '../components/RankTable'
import { useMediaQuery } from '@chakra-ui/react'

const Dashboard = ({children}) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 758px)")
  return (
    <Container maxW='full' height={'100vh'} bgColor="white" p="0" overflow="hidden">
      <Header />
      <HStack spacing={0} display="flex" width="100%" height="full" alignItems='flex-start'>
        {isSmallScreen ? <></>:<Sidebar />}
        <div style={{ flex: 1, maxWidth: '100%', height: '100%', position: 'relative', display: 'flex' }}>
          {children}
        </div>
      </HStack>
    </Container>
  )
}

export default Dashboard