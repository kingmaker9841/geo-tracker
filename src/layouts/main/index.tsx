import React from 'react'
import styled from 'styled-components'

const MainContentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid green;
  height: 100%;
  left: calc(60px + 306px);
  overflow-y: auto;
  position: absolute;
  right: 0;
  top: 0;
`

const MainContent = () => (
  <MainContentContainer>
    {/* Your main content components go here */}
  </MainContentContainer>
)

export default MainContent
