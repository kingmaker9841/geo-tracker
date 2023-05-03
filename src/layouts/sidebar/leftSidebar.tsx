import React from 'react'
import { LeftTab } from 'src/types/sidebar/enums'
import SidebarTabs from 'src/components/ui/tabs/sidebarTabs'
import styled from 'styled-components'
import type { LeftSidebarProps } from 'src/types/sidebar/sidebar'
import type { Theme } from 'src/styles/theme'

const Sidebar = styled.div`
  box-shadow: ${({ theme }: { theme: Theme }) => theme.elevation.depth8};
  height: 100%;
  position: absolute;
`

const Leftbar = styled(Sidebar)`
  background-clor: ${({ theme }: { theme: Theme }) => theme.fontColors.light};
  display: flex;
  flex-direction: column;
  left: 0;
  overflow-y: auto;
  padding: 8px;
  top: 0;
  width: 60px;
`

const LeftSidebar = ({
  tabs,
  leftError,
  leftLoading,
  getCurrentTab
}: LeftSidebarProps) => {
  const [currentTab, setCurrentTab] = React.useState<number>(LeftTab.location)

  const handleTabClick = (curTab: number) => {
    getCurrentTab(curTab)
    setCurrentTab(curTab)
  }

  if (leftLoading) return <></>

  if (leftError) return <>Error loading tabs {leftError.message}</>

  return (
    <Leftbar>
      <SidebarTabs {...{ tabs, handleTabClick, currentTab }} />
    </Leftbar>
  )
}

export default LeftSidebar
