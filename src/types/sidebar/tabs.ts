export interface Tab {
  path: string
  title: string
  iconUrl: string
  activeColor: string
}

export interface TabsProps {
  activeColor: string
  iconColor: string
}

export interface SidebarTabsProps {
  tabs: Tab[]
  handleTabClick: (_val: number) => void
  currentTab: number
}

export interface TabsProviderProps {
  children: React.ReactNode
}

export interface TabContextType {
  tabs: Tab[]
  loading: boolean
  error: Error | null
}
