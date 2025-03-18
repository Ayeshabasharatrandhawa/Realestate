import React from 'react'
import Banner from './Banner';
import './AboutSection';
import AboutSection from './AboutSection';
import './Services';
import Services from './Services';
import FAQ from './FAQ';
import './PropertyStats';
import PropertyStats from './PropertyStats';
import PropertyBanner from './PropertyBanner';

const About = () => {
  return (
    <div>
        <Banner/>
        <AboutSection/>
        <br></br>
        <Services/>
        <br></br>
<FAQ/>

<PropertyStats/>
<br></br>
<PropertyBanner/>

      
        

        </div>
  )
}

export default About