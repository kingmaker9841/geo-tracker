import React from 'react'
import { validateData } from 'src/utils/validateLocation'
import type { Location } from 'src/types/sidebar/location'
import type {
  LocationProviderProps,
  LocationContextTypeProps
} from 'src/types/sidebar/location'
import { getLocation } from 'src/services/location/getLocation'

export const LocationsContext = React.createContext<LocationContextTypeProps>({
  locations: [],
  loading: true,
  error: null,
  setLocations: function (): void {
    throw new Error('Function not implemented.')
  }
})

function LocationsProvider(props: LocationProviderProps) {
  const [locations, setLocations] = React.useState<Location[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<Error | null>(null)

  React.useEffect(() => {
    const fetchLocation = async () => {
      try {
        setLoading(true)
        const locations = await getLocation()
        const validateLocationsData = validateData(locations)
        if (validateLocationsData) {
          const arr: Location[] = locations.locations.map(
            (item: [number, number]) => ({
              lat: item[0],
              lng: item[1]
            })
          )
          setLocations(arr)
        }
        setLoading(false)
      } catch (error) {
        if (error instanceof Error) {
          setError(error)
        } else {
          setError(new Error('Getting tab failed'))
        }
        setLoading(false)
      }
    }
    fetchLocation()
  }, [])

  return (
    <LocationsContext.Provider
      value={{ locations, loading, error, setLocations }}>
      {props.children}
    </LocationsContext.Provider>
  )
}

export default LocationsProvider
