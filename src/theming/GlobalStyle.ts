import { createGlobalStyle } from 'styled-components'

import { themes } from './theme'

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    font-size:${themes.fontSize}
  }
  body {
    margin: 0;
    font-family:${themes.fontFamily};
    background-color:${themes.colors.backGround};
  }
`