import React from 'react'
import { Box, Center, Text } from 'native-base'

type Props = {
  text: string
}

const EmptyView: React.FC<Props> = ({ text }) => {
  return (
    <Center>
      <Text bold fontSize="xl">
        {text}
      </Text>
    </Center>
  )
}

export default EmptyView
