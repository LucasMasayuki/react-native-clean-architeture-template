import React, { useEffect, useState } from 'react'
import { Fab, Icon, ScrollView, Skeleton, VStack } from 'native-base'
import { Item } from '@/src/domain/models/item'
import ItemCard from './components/item-card'
import EmptyView from '../../components/empty-view'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useHomeScreenContext } from '@/src/main/factories/screens/home/home-screen-context'
import { RootStackParamList } from '@/src/main/routes'

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState<Item[]>([])
  const { getItemsCase } = useHomeScreenContext()
  const navigation = useNavigation()

  useEffect(() => {
    const getItems = async () => {
      setIsLoading(true)

      try {
        const response = await getItemsCase?.get('items')

        setItems(response?.items ?? [])
      } catch (error) {
        console.log(error)
      }

      setIsLoading(false)
    }

    void getItems()
  }, [getItemsCase])

  function onPressGoToAddPage() {
    // navigation.navigate('AddItem' as keyof RootStackParamList)
  }

  return (
    <VStack>
      {items.length <= 0 && !isLoading ? (
        <EmptyView text="Has not any registred item" />
      ) : null}
      <ScrollView w="100%" h="100vh">
        {isLoading ? <Skeleton.Text px="4" /> : null}
        {items.map((it) => {
          return <ItemCard item={it} key={it.name} />
        })}
      </ScrollView>
      <Fab
        onPress={onPressGoToAddPage}
        renderInPortal={false}
        shadow={2}
        size="sm"
        icon={<Icon color="white" name="plus" as={AntDesign} size="sm" />}
      />
    </VStack>
  )
}

export default HomeScreen
