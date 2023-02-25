import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import Routes from './src/main/routes'
import { theme } from './src/presentation/theme/theme'

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar style="auto" />
      <Routes />
    </NativeBaseProvider>
  )
}
