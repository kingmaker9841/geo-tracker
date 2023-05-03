import React from 'react'
import { LeftTab } from 'src/types/sidebar/enums'
import LocationGroup from 'src/components/ui/location/locationGroup'
import styled from 'styled-components'
import type { Location } from 'src/types/sidebar/location'
import type { RightSidebarProps } from 'src/types/sidebar/sidebar'
import type { Theme } from 'src/styles/theme'

const Sidebar = styled.div`
  box-shadow: ${({ theme }: { theme: Theme }) => theme.elevation.depth8};
  height: 100%;
  left: 60px;
  position: absolute;
  top: 0;
`

const Rightbar = styled(Sidebar)`
  background-clor: ${({ theme }: { theme: Theme }) =>
    theme.fontColors.background};
  overflow-y: auto;
  padding-top: 10px;
  width: 306px;
`

const RightSidebar = ({
  locations,
  locationsLoading,
  locationsError,
  activeTab
}: RightSidebarProps) => {
  const [locationsArray, setLocationsArray] = React.useState<Location[]>([])

  React.useEffect(() => {
    if (Array.isArray(locations) && locations.length > 0) {
      setLocationsArray(locations)
    }
  }, [locations])

  if (locationsError) return <></>
  if (locationsLoading) return <></>

  return (
    <Rightbar>
      {activeTab === LeftTab.location && (
        <LocationGroup locations={locationsArray} />
      )}
    </Rightbar>
  )
}

export default RightSidebar
