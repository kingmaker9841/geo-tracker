import React from 'react'
import { Feature } from 'ol'
import { fromLonLat, toLonLat } from 'ol/proj'
import { LocationsContext } from 'src/contexts/locationContext'
import { Point } from 'ol/geom'
import { RMap, ROSM, RLayerVector, RFeature, RStyle, ROverlay } from 'rlayers'

const center = fromLonLat([126.977, 37.566])
let unique_id = 0

function MapComponent(): JSX.Element {
  const { locations, setLocations } = React.useContext(LocationsContext)
  const [features, setFeatures] = React.useState(() =>
    locations.map(
      (location) =>
        new Feature({
          geometry: new Point(fromLonLat([location.lng, location.lat])),
          name: unique_id++,
          uid: unique_id++
        })
    )
  )
  const vectorRef = React.useRef() as React.RefObject<RLayerVector>

  React.useEffect(() => {
    if (locations) {
      setFeatures(
        locations.map(
          (location) =>
            new Feature({
              geometry: new Point(fromLonLat([location.lng, location.lat])),
              name: unique_id++,
              uid: unique_id++
            })
        )
      )
    }
  }, [locations])

  return (
    <RMap
      width={'100%'}
      height={'100%'}
      initial={{ center: center, zoom: 16 }}
      onClick={(e) => {
        const coords = e.map.getCoordinateFromPixel(e.pixel)
        const lonlat = toLonLat(coords)
        setLocations([...locations, { lng: lonlat[0], lat: lonlat[1] }])
        features.push(
          new Feature({
            geometry: new Point(coords),
            uid: unique_id++
          })
        )
        setFeatures([...features])
      }}>
      <ROSM />
      <RLayerVector ref={vectorRef}>
        {features?.map((f) => (
          <RFeature key={f.get('uid')} feature={f}>
            <RStyle.RStyle>
              <ROverlay>
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    border: '2px solid blue',
                    borderRadius: '50px'
                  }}
                />
              </ROverlay>
            </RStyle.RStyle>
          </RFeature>
        ))}
      </RLayerVector>
    </RMap>
  )
}

export default React.memo(MapComponent)
