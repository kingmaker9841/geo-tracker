import React from 'react'
import styled from 'styled-components'

const MainContentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  left: calc(60px + 306px);
  overflow-y: auto;
  position: absolute;
  right: 0;
  top: 0;
`
interface Props {
  children: React.ReactNode
}

const MainContent = (props: Props) => (
  <MainContentContainer>{props.children}</MainContentContainer>
)

export default MainContent
