export interface Location {
  lat: number
  lng: number
}

export interface Locations {
  locations: Location[]
}

export interface LocationContextProps {
  locations: Locations
  error: Error | null
  loading: boolean
}

export interface LocationProviderProps {
  children: React.ReactNode
}

export interface LocationContextTypeProps {
  locations: Location[]
  loading: boolean
  error: Error | null
  setLocations: React.Dispatch<React.SetStateAction<Location[]>>
}
