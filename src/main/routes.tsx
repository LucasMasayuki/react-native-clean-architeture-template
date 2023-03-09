import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MakeHomeScreen from './factories/screens/home/home-screen-factory'
import MakeAddItemScreen from './factories/screens/add-item/add-item-screen-factory'
import MakeEditItemScreen from './factories/screens/edit-item/edit-item-screen-factory'

const Stack = createNativeStackNavigator()

export type RootStackParamList = {
  Home: undefined
  AddItem: undefined
  EditItem: { id: number }
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MakeHomeScreen} />
        <Stack.Screen
          name="AddItem"
          component={MakeAddItemScreen}
          options={{ title: 'Add new item' }}
        />
        <Stack.Screen
          name="EditItem"
          component={MakeEditItemScreen}
          options={{ title: 'Edit item' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
