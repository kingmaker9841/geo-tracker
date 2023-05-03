import React from 'react'
import { getTabs } from 'src/services/tabs/getTabs'
import type {
  Tab,
  TabsProviderProps,
  TabContextType
} from 'src/types/sidebar/tabs'

export const TabsContext = React.createContext<TabContextType>({
  tabs: [],
  loading: true,
  error: null
})

function TabsProvider(props: TabsProviderProps) {
  const [tabs, setTabs] = React.useState<Tab[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<Error | null>(null)

  React.useEffect(() => {
    const fetchTabs = async () => {
      try {
        setLoading(true)
        const tabs = await getTabs()
        setTabs(tabs)
        setLoading(false)
      } catch (error) {
        if (error instanceof Error) {
          setError(error)
        } else {
          setError(new Error('Getting tab failed'))
        }
        setLoading(false)
      }
    }
    fetchTabs()
  }, [])

  return (
    <TabsContext.Provider value={{ tabs, loading, error }}>
      {props.children}
    </TabsContext.Provider>
  )
}

export default TabsProvider
