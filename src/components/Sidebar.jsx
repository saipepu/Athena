import { Button, ButtonGroup, Container, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import dashboard from '../assets/dashboard.png'
import training from '../assets/training.png'
import avatar from '../assets/user.png'
import rewards from '../assets/wallet.png'
import settings from '../assets/setting.png'

const Sidebar = () => {

  const [hover, setHover] = useState(false);
  const [currentUrl, setCurrentURL] =  useState(window.location.href.split('/').slice(-1));

  const ButtonStyle = {
    transition: 'all 0.3s ease-in-out',
    borderRadius: '20px 0 0 20px',
    background: 'transparent',
  }
  const ButtonHoverStyle = {
    background: 'white',
    transition: 'all 0.3s ease-in-out',
    borderRadius: '20px 0 0 20px',
  }
  const ButtonTarget = {
    transition: 'all 0.3s ease-in-out',
    background: '#192125',
    borderRight: '5px solid #EE5253',
    color: 'white',
    borderRadius: '20px 0 0 20px',
  }

  return (
    <Container
      // display={{ base: 'none', md: 'block'}}
      // display={'none'}
      width={'340px'} height={'100%'} borderRight="1px solid #ddd">
      <ButtonGroup width={'full'} display="flex" flexDirection="column" alignItems='flex-end' padding="32px 0px" gap='22px'>
        <Button
          width={'90%'} padding={'12px 0px 12px 24px'} justifyContent="flex-start"
          onMouseOver={() => setHover('dashboard')} onMouseLeave={() => setHover("")}
          id="button" leftIcon={<Image src={dashboard}/>} bgColor="white" style={currentUrl == 'dashboard' ? ButtonTarget : hover == 'dashboard' ? ButtonHoverStyle : ButtonStyle}>
          <Text as="a" fontSize={'20px'} color={currentUrl == 'dashboard' ? 'white': 'black'}>
            Dashboard
          </Text>
        </Button>
        <Button
          width={'90%'} padding={'12px 0px 12px 24px'} justifyContent="flex-start"
          onMouseOver={() => setHover('training')} onMouseLeave={() => setHover("")}
          id="button" leftIcon={<Image src={training}/>} bgColor="white" style={currentUrl == 'training' ? ButtonTarget : hover == 'training' ? ButtonHoverStyle : ButtonStyle}>
          <Text as="a" fontSize={'20px'} color={currentUrl == 'training' ? 'white': 'black'}>
            Training
          </Text>
        </Button>
        <Button
          width={'90%'} padding={'12px 0px 12px 24px'} justifyContent="flex-start"
          onMouseOver={() => setHover('avatar')} onMouseLeave={() => setHover("")}
          id="button" leftIcon={<Image src={avatar}/>} bgColor="white" style={currentUrl == 'avatar' ? ButtonTarget : hover == 'avatar' ? ButtonHoverStyle : ButtonStyle}>
          <Text as="a" fontSize={'20px'} color={currentUrl == 'avatar' ? 'white': 'black'}>
            Avatar
          </Text>
        </Button>
        <Button
          width={'90%'} padding={'12px 0px 12px 24px'} justifyContent="flex-start"
          onMouseOver={() => setHover('rewards')} onMouseLeave={() => setHover("")}
          id="button" leftIcon={<Image src={rewards}/>} bgColor="white" style={currentUrl == 'rewards' ? ButtonTarget : hover == 'rewards' ? ButtonHoverStyle : ButtonStyle}>
          <Text as="a" fontSize={'20px'} color={currentUrl == 'rewards' ? 'white': 'black'}>
            Rewards
          </Text>
        </Button>
        <Button
          width={'90%'} padding={'12px 0px 12px 24px'} justifyContent="flex-start"
          onMouseOver={() => setHover('setting')} onMouseLeave={() => setHover("")}
          id="button" leftIcon={<Image src={settings}/>} bgColor="white" style={currentUrl == 'setting' ? ButtonTarget : hover == 'setting' ? ButtonHoverStyle : ButtonStyle}>
          <Text as="a" fontSize={'20px'} color={currentUrl == 'setting' ? 'white': 'black'}>
            Setting
          </Text>
        </Button>

      </ButtonGroup>
    </Container>
  )
}

export default Sidebar