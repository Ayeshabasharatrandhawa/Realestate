import React from 'react'


import PropertySlider from './PropertySlider'


import PropertyGrid from './PropertyGrid'

import PropertyBanner from '../Home/PropertyBanner'

import PropertyStats from '../Home/Propertystats'
import Banner from './Banner'



const Properties = () => {
  return (
    <div>
        <Banner/>
        <br></br><br></br>
        <PropertySlider/>
        <br></br>
        <PropertyGrid/>
        
        
        <br></br>
        <PropertyStats/>
        <PropertyBanner/>
        
    </div>
  )
}

export default Properties