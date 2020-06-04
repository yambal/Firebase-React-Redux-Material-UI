import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle'
import { muiTheme } from './theme'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

interface iThemeWrapper {
  mode: 'light',
  lang: 'ja' | 'en'
}

export const ThemeWrapper: React.FC<iThemeWrapper> = props => {
  return (
    <ThemeProvider theme={{mode: props.mode, lang: props.lang}}>
      <MuiThemeProvider theme={muiTheme}>
        <GlobalStyle/>
        {props.children}
      </MuiThemeProvider>
    </ThemeProvider>
  )
}
