type Coordinates = [number, number]
interface Locations {
  locations: Coordinates[]
}

export function validateData(data: Locations) {
  if (!Array.isArray(data.locations)) return false
  for (const location of data.locations) {
    if (
      !Array.isArray(location) ||
      !isNumber(location[0]) ||
      !isNumber(location[1])
    ) {
      return false
    }
  }
  return true
}

function isNumber(value: number): value is number {
  return typeof value === 'number' && isFinite(value)
}
