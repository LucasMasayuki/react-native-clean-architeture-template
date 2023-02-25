import React from 'react'
import { Box, Text, Pressable, HStack, VStack, Spacer } from 'native-base'
import { Item } from '@/src/domain/models/item'

type Props = {
  item: Item
}

const ItemCard: React.FC<Props> = ({ item }) => {
  return (
    <Box w="100%">
      <Pressable
        onPress={() => console.log('You touched me')}
        _dark={{
          bg: 'coolGray.800',
        }}
        _light={{
          bg: 'white',
        }}
      >
        <Box pl="4" pr="5" py="2">
          <HStack alignItems="center" space={3}>
            <VStack>
              <Text
                color="coolGray.800"
                _dark={{
                  color: 'warmGray.50',
                }}
                bold
              >
                {item.name}
              </Text>
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
              >
                {item.name}
              </Text>
            </VStack>
            <Spacer />
            <Text
              fontSize="xs"
              color="coolGray.800"
              _dark={{
                color: 'warmGray.50',
              }}
              alignSelf="flex-start"
            >
              {item.name}
            </Text>
          </HStack>
        </Box>
      </Pressable>
    </Box>
  )
}

export default ItemCard
