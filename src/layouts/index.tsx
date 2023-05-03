import React, { useContext } from 'react'
import { LocationsContext } from 'src/contexts/locationContext'
import { TabsContext } from 'src/contexts/tabsContext'
import MainContent from 'src/layouts/main'
import Sidebar from 'src/layouts/sidebar'

interface Props {
  children: React.ReactNode
}

const BaseLayout = (props: Props) => {
  const { tabs, loading, error } = useContext(TabsContext)
  const {
    locations,
    loading: locationsLoading,
    error: locationsError
  } = useContext(LocationsContext)
  return (
    <React.Fragment>
      <Sidebar
        {...{
          tabs,
          loading,
          error,
          locations,
          locationsLoading,
          locationsError
        }}
      />
      <MainContent>{props.children}</MainContent>
    </React.Fragment>
  )
}

export default BaseLayout
