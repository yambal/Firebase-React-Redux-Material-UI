import theme from 'styled-theming'
import { createMuiTheme } from '@material-ui/core'

const SPACING = 8

const backgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000',
})

const fontFamily = theme('lang', {
  'ja': "'Noto Sans JP', sans-serif;",
  'en': "'Roboto', sans-serif;",
})

export const themes = {
  colors: {
    backGround: backgroundColor
  },
  fontFamily,
  fontSize: '16px',
  spacing: SPACING
}

export const muiTheme = createMuiTheme({
  typography: {
    fontFamily: 'inherit', //"'Noto Sans JP', sans-serif;",
    fontWeightLight: 300,
    fontWeightMedium: 400,
    fontWeightRegular: 500,
    fontWeightBold: 700
  },
  spacing: SPACING,
});
