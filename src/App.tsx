import React from 'react'
import { AppErrorBoundary } from 'src/components/error/fallback'
import { theme } from 'src/styles/theme'
import { ThemeProvider } from 'styled-components'
import BaseLayout from 'src/layouts'
import GlobalStyles from 'src/styles/GlobalStyles'
import HomePage from 'src/pages/home'
import LocationsProvider from 'src/contexts/locationContext'
import TabsProvider from 'src/contexts/tabsContext'
import type { ThemeType } from 'src/styles/theme'

function App(): JSX.Element {
  const [currentTheme] = React.useState<ThemeType>('default')

  return (
    <AppErrorBoundary>
      <ThemeProvider theme={theme[currentTheme] as typeof theme}>
        <GlobalStyles />
        <TabsProvider>
          <LocationsProvider>
            <BaseLayout>
              <React.Fragment>
                <HomePage />
              </React.Fragment>
            </BaseLayout>
          </LocationsProvider>
        </TabsProvider>
      </ThemeProvider>
    </AppErrorBoundary>
  )
}

export default App
