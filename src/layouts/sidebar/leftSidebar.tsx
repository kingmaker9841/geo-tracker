import React from 'react'
import styled from 'styled-components'
import type { Theme } from 'src/styles/theme'

const Sidebar = styled.div`
  position: absolute;
  height: 100%;
  box-shadow: ${({ theme }: { theme: Theme }) => theme.elevation.depth8};
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.light};
`

const Leftbar = styled(Sidebar)`
  width: 60px;
  left: 0;
  top: 0;
  border: 1px solid red;
  padding: 8px;
`

const LeftSidebar = () => <Leftbar />

export default LeftSidebar
