import { Box, defineStyleConfig, extendTheme, Image, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import rank1_avatar from '../assets/rank1_avatar.png'

const RankTable = () => {

  const ThStyle = {
    textAlign: 'left',
    // padding: '12px 0px',
    color: 'white'
  }

  return (
    <TableContainer
      // bgColor="red"
      minWidth="800px" width="100%" maxWidth="1000px" padding="0px 24px">
      <Table variant="simple" width="100%" overflow="visible">
        <TableCaption>Employee Ranks</TableCaption>
        <Thead oveflow="visible" borderRadius="12px" width="100%">
          <Tr className="table_head">
            <Th style={ThStyle}>Ranking</Th>
            <Th style={ThStyle}>ID</Th>
            <Th style={ThStyle}>Name</Th>
            <Th style={ThStyle}>Department</Th>
            <Th style={ThStyle}>Position</Th>
            <Th style={ThStyle}>Exp</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td><Box display="flex" flexDirection="row" justifyContent={'center'} alignItems={'center'} gap="22px"><Text>1</Text><Image src={rank1_avatar} alt="avatar" /></Box></Td>
            <Td>6512345</Td>
            <Td>Geo</Td>
            <Td>Marketing</Td>
            <Td>General</Td>
            <Td>120 exp</Td>
          </Tr>
        </Tbody>
      </Table>

    </TableContainer>
  )
}

export default RankTable