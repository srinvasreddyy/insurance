import React from 'react'

import Hero from './components/Hero'
import CustomerReview from './components/CustomerReview'
import FeatureList from './components/FeatureList'
import CoverageOptions from './components/CoverageOptions'
import UKDrivingGuide from './components/UKDrivingGuide'
import InfoSection from './components/InfoSection'
import FAQList from './components/FAQList'
import PolicyInformation from './components/PolicyInformation'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="w-full overflow-x-hidden">
     
      <Hero/>
      <CustomerReview/>
      <FeatureList/>
      <CoverageOptions/>
      <UKDrivingGuide/>
      <InfoSection/>
      <FAQList/>
      <PolicyInformation/>
      <Footer/>
    </div>
  )
}

export default App