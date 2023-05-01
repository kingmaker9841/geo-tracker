import React from 'react'
import LeftSidebar from 'src/layouts/sidebar/leftSidebar'
import RightSidebar from 'src/layouts/sidebar/rightSidebar'
import styled from 'styled-components'

const SidebarContainer = styled.div`
  display: flex;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
`

const Sidebar = () => (
  <SidebarContainer>
    <LeftSidebar />
    <RightSidebar />
  </SidebarContainer>
)

export default Sidebar
