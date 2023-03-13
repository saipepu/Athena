import { Card, CardBody, CardHeader, Container, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import red_clock from '../assets/red_clock.png'
import token from '../assets/token.png'
import book from '../assets/book.png'
import RankTable from '../components/RankTable'
import { useMediaQuery } from '@chakra-ui/react'

const Dashboard = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 758px)")
  return (
    <Container maxW='full' height={'100vh'} bgColor="white">
      <Header />
      <HStack spacing={0} height={'100%'} alignItems='flex-start'>
        {isSmallScreen ? <></>:<Sidebar />}
        <VStack
          // bgColor="blue"
          className="scroll_container"
          style={{ color: 'black'}} height="100%" width={'100%'} justifyContent={'flex-start'} alignItems={'flex-start'} overflow="scroll">
          <HStack spacing={'50'} min-width="100%" padding="32px">
            <Card bgColor="white" flex="1" minWidth="280px" direction={'row'} alignItems='center' justifyContent='flex-start' padding="12px 24px" borderRadius="8px" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
              <Image src={red_clock} objectFit="contain" alt="red_clock"/>
                <CardBody padding="12px">
                  <Heading fontSize={'16px'} fontWeight="normal" color="#A3AED0" whiteSpace="none !important">Hours of Training</Heading>
                  <Text as="p" fontSize={'36px'} lineHeight="100%" whiteSpace="none">12.1</Text>
                </CardBody>
            </Card>
            <Card bgColor="white" flex="1" minWidth="280px" direction={'row'} alignItems='center' justifyContent='flex-start' padding="12px 24px" borderRadius="8px" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
              <Image src={token} objectFit="contain" alt="red_clock"/>
                <CardBody padding="12px">
                  <Heading fontSize={'16px'} fontWeight="normal" color="#A3AED0" whiteSpace="none">Tokens</Heading>
                  <Text as="p" fontSize={'36px'} lineHeight="100%" whiteSpace="none">5</Text>
                </CardBody>
            </Card>
            <Card bgColor="white" flex="1" minWidth="280px" direction={'row'} alignItems='center' justifyContent='flex-start' padding="12px 24px" borderRadius="8px" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
              <Image src={book} objectFit="contain" alt="red_clock"/>
                <CardBody padding="12px">
                  <Heading fontSize={'16px'} fontWeight="normal" color="#A3AED0" whiteSpace="none">xp</Heading>
                  <Text as="p" fontSize={'36px'} lineHeight="100%" whiteSpace="none">3</Text>
                </CardBody>
            </Card>
          </HStack>
          <RankTable />
        </VStack>
      </HStack>
    </Container>
  )
}

export default Dashboard