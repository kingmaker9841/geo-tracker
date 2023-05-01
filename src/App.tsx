import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'src/styles/GlobalStyles'
import { theme } from 'src/styles/theme'
import type { ThemeType } from 'src/styles/theme'
import BaseLayout from 'src/layouts'
import { AppErrorBoundary } from 'src/components/error/fallback'

function App(): JSX.Element {
  const [currentTheme] = React.useState<ThemeType>('default')

  return (
    <AppErrorBoundary>
      <ThemeProvider theme={theme[currentTheme] as typeof theme}>
        <GlobalStyles />
        {/* Rest of your app components go here */}
        <BaseLayout />
      </ThemeProvider>
    </AppErrorBoundary>
  )
}

export default App
