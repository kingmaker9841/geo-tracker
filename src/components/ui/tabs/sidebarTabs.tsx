import React from 'react'
import { theme } from 'src/styles/theme'
import styled from 'styled-components'
import type { SidebarTabsProps, TabsProps } from 'src/types/sidebar/tabs'

const Tabs = styled.div<TabsProps>`
  align-items: center;
  background-color: ${(props) => props.activeColor};
  border-radius: 5px;
  color: ${(props) => props.iconColor};
  cursor: pointer;
  display: flex;
  height: 44px;
  height: auto;
  justify-content: center;
  margin-bottom: 16px;
  width: 44px;

  img {
    height: 100%;
    objcet-fit: contain;
    padding: 10px;
    width: 100%;
  }
`

function SidebarTabs({
  tabs,
  handleTabClick,
  currentTab
}: SidebarTabsProps): JSX.Element {
  return (
    <React.Fragment>
      {tabs.map((tab, idx) => (
        <Tabs
          key={idx}
          activeColor={
            currentTab === idx ? tab.activeColor : theme.colors.light
          }
          iconColor={
            currentTab === idx
              ? theme.fontColors.light
              : theme.secondaryColors.light
          }
          onClick={() => handleTabClick(idx)}>
          <img
            src={tab.iconUrl}
            alt={tab.title}
            style={
              currentTab === idx
                ? { filter: 'brightness(1000%)' }
                : idx === 0 && currentTab !== 0
                ? { filter: 'invert(25%)' }
                : undefined
            }
          />
        </Tabs>
      ))}
    </React.Fragment>
  )
}

export default SidebarTabs
