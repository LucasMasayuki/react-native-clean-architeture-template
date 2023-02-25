import { extendTheme } from 'native-base'
const newColorTheme = {
  brand: {
    900: '#8287af',
  },
}

const componentsTheme = {
  Button: {
    baseStyle: {
      rounded: 'full',
      w: 'full',
    },
  },
}

export const theme = extendTheme({
  colors: newColorTheme,
  components: componentsTheme,
})
