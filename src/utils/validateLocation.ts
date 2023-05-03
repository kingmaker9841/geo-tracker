import type { Locations } from 'src/types/sidebar/location'

export function validateData(data: any): data is Locations {
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

function isNumber(value: any): value is number {
  return typeof value === 'number' && isFinite(value)
}
