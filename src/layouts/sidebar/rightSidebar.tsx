import React from 'react'
import styled from 'styled-components'
import type { Theme } from 'src/styles/theme'

const Sidebar = styled.div`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.light};
  box-shadow: ${({ theme }: { theme: Theme }) => theme.elevation.depth8};
  height: 100%;
  left: 60px;
  position: absolute;
  top: 0;
`

const Rightbar = styled(Sidebar)`
  border: 1px solid blue;
  width: 306px;
  padding-top: 10px;
  padding-left: 23px;
`

const RightSidebar = () => <Rightbar />

export default RightSidebar
