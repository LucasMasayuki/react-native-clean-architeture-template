import React from 'react'
import {
  Box,
  Text,
  Pressable,
  HStack,
  VStack,
  Spacer,
  Icon,
  useToast,
} from 'native-base'
import { Item } from '@/src/domain/models/item'
import { FontAwesome } from '@expo/vector-icons'
import itemStore from '@/src/presentation/stores/item-store'
import { useHookstate } from '@hookstate/core'
import { useHomeScreenContext } from '@/src/main/factories/screens/home/home-screen-context'
import { RootStackParamList } from '@/src/main/routes'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import Toast, { ToastStatus } from '@/src/presentation/components/toast'

type Props = {
  item: Item
}

const ItemCard: React.FC<Props> = ({ item }) => {
  const state = useHookstate(itemStore)
  const toast = useToast()
  const { deleteItemCase } = useHomeScreenContext()
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  async function onPressDelete() {
    await deleteItemCase?.delete(item)
    state.set((items) => {
      const index = items.findIndex((it) => item.id === it.id)
      const clone = [...items]

      clone.splice(index, 1)
      return clone
    })

    toast.show({
      render: () => <Toast text="Item deleted" status={ToastStatus.Success} />,
    })
  }

  function onPressGoToEditPage() {
    navigation.navigate('EditItem')
  }

  return (
    <Box w="100%">
      <Pressable
        onPress={onPressGoToEditPage}
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
                {item.id}
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
            <Icon
              as={FontAwesome}
              name="close"
              color="red.600"
              onPress={onPressDelete}
            />
          </HStack>
        </Box>
      </Pressable>
    </Box>
  )
}

export default ItemCard
