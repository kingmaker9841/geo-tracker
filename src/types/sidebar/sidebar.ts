import type { Tab } from 'src/types/sidebar/tabs'
import type { Location } from 'src/types/sidebar/location'

export interface SidebarProps {
  tabs: Tab[]
  error: null | Error
  loading: boolean
  locations: Location[]
  locationsLoading: boolean
  locationsError: null | Error
}

export interface LeftSidebarProps {
  tabs: Tab[]
  leftError: null | Error
  leftLoading: boolean
  getCurrentTab: (tab: number) => void
}

export interface RightSidebarProps {
  locations: Location[]
  locationsLoading: boolean
  locationsError: null | Error
  activeTab: number
}
