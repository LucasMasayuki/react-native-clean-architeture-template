/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react'
import { Fab, Icon, ScrollView, Skeleton, VStack } from 'native-base'
import ItemCard from './components/item-card'
import EmptyView from '../../components/empty-view'
import { AntDesign } from '@expo/vector-icons'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useHomeScreenContext } from '@/src/main/factories/screens/home/home-screen-context'
import { RootStackParamList } from '@/src/main/routes'
import itemStore from '../../stores/item-store'
import { useHookstate } from '@hookstate/core'

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { getItemsCase } = useHomeScreenContext()
  const state = useHookstate(itemStore)

  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  useEffect(() => {
    const getItems = async () => {
      setIsLoading(true)

      try {
        const response = await getItemsCase?.get()

        state.set(response?.items ?? [])
      } catch (error) {
        console.log(error)
      }

      setIsLoading(false)
    }

    void getItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getItemsCase])

  function onPressGoToAddPage() {
    navigation.navigate('AddItem')
  }

  const items = state.get()

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
