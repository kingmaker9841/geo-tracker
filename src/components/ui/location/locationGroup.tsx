import React from 'react'
import flagIcon from 'src/assets/svg/flag.svg'
import styled from 'styled-components'
import type { Location, Locations } from 'src/types/sidebar/location'
import { theme } from 'src/styles/theme'

const LocationDiv = styled.div`
  margin-bottom: 14px;

  .location-div {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 22px;
    padding-left: 23px;

    .flag-image {
      height: 17px;
      margin-right: 10px;
      width: 13px;
    }
  }

  .location-inputs {
    display: flex;
    flex-direction: column;
    margin-bottom: 14px;
    padding-left: 23px;

    .inputs-individual {
      align-items: center;
      display: flex;
      flex-direction: row;
      margin-bottom: 3px;
    }

    label {
      color: ${theme.colors.default};
      font-size: ${theme.fontSizes.small};
      font-style: normal;
      font-weight: 700;
      line-height: 19px;
      margin-right: 5px;
      min-width: 36px;
    }

    input {
      border-radius: 5px;
      border: 0.5px solid #c7c7c7;
      color: ${theme.colors.primary};
      font-family: ${theme.fontFamilies.roboto};
      font-size: ${theme.fontSizes.large};
      height: 33px;
      line-height: 21px;
      outline: none;
      padding: 6px 9px;
      width: 147px;
    }
  }
`
function LocationGroup({ locations }: Locations): JSX.Element {
  const [locationsArray, setLocationsArray] = React.useState<Location[]>([])

  React.useEffect(() => {
    if (Array.isArray(locations)) {
      setLocationsArray(locations)
    }
  }, [locations])

  return (
    <React.Fragment>
      {locationsArray.map((location, idx) => (
        <LocationDiv key={idx}>
          <div className="location-div">
            <img
              className="flag-image"
              src={flagIcon}
              alt={`Flag Icon for location ${idx}`}
            />
            <span>Location {idx + 1}</span>
          </div>

          <div className="location-inputs">
            <div className="inputs-individual">
              <label htmlFor="lat">Lat</label>
              <input type="text" value={location.lat} id="lat" readOnly />
            </div>
            <div className="inputs-individual">
              <label htmlFor="long">Long</label>
              <input type="text" value={location.lng} id="long" readOnly />
            </div>
          </div>
          <div
            style={{
              borderBottom: '1px solid #F4F4F4',
              marginBottom: '14px'
            }}
          />
        </LocationDiv>
      ))}
    </React.Fragment>
  )
}

export default LocationGroup
