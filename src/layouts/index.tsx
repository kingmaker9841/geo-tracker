import React from 'react'
import Sidebar from 'src/layouts/sidebar'
import MainContent from 'src/layouts/main'

const BaseLayout = () => (
  <React.Fragment>
    <Sidebar />
    <MainContent />
  </React.Fragment>
)

export default BaseLayout
