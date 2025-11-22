import React, { useEffect } from 'react'
import VanHero from '../components/VanHero'
import VanDriverBenefits from '../components/VanDriverBenefits'
import VanCoverageDetails from '../components/VanCoverageDetails'
import VanPolicy from '../components/VanPolicy'
import VanInsuranceDetails from '../components/VanInsuranceDetails'
import VanFaq from '../components/VanFaq'
import Footer from '../components/Footer'
import PolicyInformation from '../components/PolicyInformation'

const Van = () => {
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch (e) {
      if (typeof window !== 'undefined') window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div>
        <VanHero/>
        <VanDriverBenefits/>
        <VanCoverageDetails/>
        <VanPolicy/>
        <VanInsuranceDetails/>
        <VanFaq/>
        <PolicyInformation/>
        <Footer/>
    </div>
  )
}

export default Van