import React from 'react'
import { locationsData } from 'src/mock/locations'
import { validateData } from 'src/utils/validateLocation'
import type { Location } from 'src/types/sidebar/location'
import type {
  LocationProviderProps,
  LocationContextTypeProps
} from 'src/types/sidebar/location'

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
  const [error] = React.useState<Error | null>(null)

  React.useEffect(() => {
    //[TODO]: after CORS issue fix
    // const fetchLocation = async () => {
    //   try {
    //     setLoading(true)
    //     const locations = await getLocation()
    //     if (!locations) {
    //       const validateLocationsData = validateData(locationsData)
    //       if (validateLocationsData){
    //         setLocations(locationsData)
    //       }
    //     }else{
    //       setLocations(locations)
    //     }
    //     setLoading(false)
    //   } catch (error) {
    //     if (error instanceof Error) {
    //       setError(error)
    //     } else {
    //       setError(new Error('Getting tab failed'))
    //     }
    //     setLoading(false)
    //   }
    // }
    // fetchLocation()

    const mockFetchLocations = async () => {
      setLoading(true)
      setTimeout(() => {
        const validateLocationsData = validateData(locationsData)
        if (validateLocationsData) {
          const transformedLocations: Location[] = locationsData.locations.map(
            (coordinates: number[]): Location => ({
              lat: coordinates[0],
              lng: coordinates[1]
            })
          )
          setLocations(transformedLocations)
        }
        setLoading(false)
      }, 2000)
    }

    mockFetchLocations()
  }, [])

  return (
    <LocationsContext.Provider
      value={{ locations, loading, error, setLocations }}>
      {props.children}
    </LocationsContext.Provider>
  )
}

export default LocationsProvider
