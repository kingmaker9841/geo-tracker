import { createGlobalStyle } from 'styled-components'
import { theme } from 'src/styles/theme'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: ${theme.fontSizes.medium};
    font-family: ${theme.font.family};
    color: ${theme.font.color};
  }
`

export default GlobalStyle
