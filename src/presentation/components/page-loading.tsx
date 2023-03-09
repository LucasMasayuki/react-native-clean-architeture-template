import React from 'react'
import { Box, Spinner } from 'native-base'

const PageLoading: React.FC = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      display="grid"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner></Spinner>
    </Box>
  )
}

export default PageLoading
