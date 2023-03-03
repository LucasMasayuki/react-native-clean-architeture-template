import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MakeHomeScreen from './factories/screens/home/home-screen-factory'
import MakeAddItemScreen from './factories/screens/add-item/add-item-screen-factory'

const Stack = createNativeStackNavigator()

export type RootStackParamList = {
  Home: undefined
  AddItem: undefined
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
