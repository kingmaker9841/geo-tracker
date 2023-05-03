import { TabsAPI } from 'src/config/api/url'

async function getTabs() {
  try {
    const response = await fetch(TabsAPI)
    const tabs = await response.json()
    return tabs
  } catch (error) {
    console.error(error)
  }
}

export { getTabs }
