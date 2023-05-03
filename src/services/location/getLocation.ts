import { LocationsAPI } from 'src/config/api/url'

async function getLocation() {
  try {
    const response = await fetch(LocationsAPI)
    const location = await response.json()
    return location
  } catch (error) {
    console.error(error)
  }
}

export { getLocation }
