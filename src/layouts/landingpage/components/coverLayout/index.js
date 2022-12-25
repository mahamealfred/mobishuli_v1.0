import { Box } from '@mui/material'
import React from 'react'
import coverimage from '../../../../assets/images/coverimage.jpg'
const index = () => {
  return (
    <Box
    
    >
  <Box
    position="absolute"
    width="100%"
    minHeight="100vh"
    sx={{
      backgroundImage: 
        ` url(${coverimage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    </Box>
    </Box>

    
  )
}

export default index