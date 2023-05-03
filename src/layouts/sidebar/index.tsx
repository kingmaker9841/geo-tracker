import React from 'react'
import LeftSidebar from 'src/layouts/sidebar/leftSidebar'
import RightSidebar from 'src/layouts/sidebar/rightSidebar'
import styled from 'styled-components'
import type { SidebarProps } from 'src/types/sidebar/sidebar'

const SidebarContainer = styled.div`
  display: flex;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
`

const Sidebar = ({
  tabs,
  error: leftError,
  loading: leftLoading,
  locations,
  locationsError,
  locationsLoading
}: SidebarProps) => {
  const [activeTab, setActiveTab] = React.useState<number>(0)

  const getCurrentTab = (cur: number) => {
    setActiveTab(cur)
  }
  return (
    <SidebarContainer>
      <LeftSidebar {...{ tabs, leftError, leftLoading, getCurrentTab }} />
      <RightSidebar
        {...{ locations, locationsError, locationsLoading, activeTab }}
      />
    </SidebarContainer>
  )
}

export default Sidebar
