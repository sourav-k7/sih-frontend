import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import FootBar from '../components/footBar'

const withMainLayout = (ChildComponent) => {
  const NewComponet=(mainProps)=>{
    return (
      <Box my={12} sx={{position:'relative',width:"100%",placeSelf:'Center'}} >
        <ChildComponent {...mainProps}/>
      </Box>
    )
  }
  return NewComponet
  
}

export default withMainLayout