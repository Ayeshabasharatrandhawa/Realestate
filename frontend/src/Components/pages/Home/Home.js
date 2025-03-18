import React from 'react'
import Banner from './Banner'

import Agents from './agents'
import PropertyBanner from './PropertyBanner'
import PropertyCards from './PropertyCards'
import PropertyStats from './Propertystats'
import RealEstateCard from './Realestate'
import Testimonial from './Testimonials'
import FAQ from './FAQ'

const Home = () => {
  return (
    <div>
        <Banner/>

       
        <PropertyCards/>
        <RealEstateCard/>
    

        <FAQ/>
        <PropertyStats/>
        <Testimonial/>
        <Agents/>
        <PropertyBanner/>
    </div>
  )
}

export default Home