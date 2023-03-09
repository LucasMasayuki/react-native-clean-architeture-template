import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MakeHomeScreen from './factories/screens/home/home-screen-factory'
import MakeAddItemScreen from './factories/screens/add-item/add-item-screen-factory'
import MakeEditItemScreen from './factories/screens/edit-item/edit-item-screen-factory'
import ColorModeButton from '../presentation/components/color-mode-button'
import { ColorModeProvider } from './factories/contexts/color-mode-context'
import makeLocalGetColorMode from './factories/usecases/color-modes/local-get-color-mode-factory'
import makeLocalToogleColorMode from './factories/usecases/color-modes/local-toogle-color-mode-factory'

const Stack = createNativeStackNavigator()

export type RootStackParamList = {
  Home: undefined
  AddItem: undefined
  EditItem: { id: number }
}

const Routes = () => {
  return (
    <NavigationContainer>
      <ColorModeProvider
        getColorModeCase={makeLocalGetColorMode()}
        toogleColorModeCase={makeLocalToogleColorMode()}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={MakeHomeScreen}
            options={{
              title: 'Home',
              headerRight: () => <ColorModeButton />,
            }}
          />
          <Stack.Screen
            name="AddItem"
            component={MakeAddItemScreen}
            options={{
              title: 'Add new item',
              headerRight: () => <ColorModeButton />,
            }}
          />
          <Stack.Screen
            name="EditItem"
            component={MakeEditItemScreen}
            options={{
              title: 'Edit item',
              headerRight: () => <ColorModeButton />,
            }}
          />
        </Stack.Navigator>
      </ColorModeProvider>
    </NavigationContainer>
  )
}

export default Routes
