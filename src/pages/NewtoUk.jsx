import React, { useEffect } from 'react'
import NewToUkHero from '../components/NewToUkHero'
import NewToUkAd from '../components/NewToUkAd'
import CarHero from '../components/CarHero'
import InsuranceBenefits from '../components/InsuranceBenefits'
import CustomerReview from '../components/CustomerReview'
import CoverDetails from '../components/CoverDetails'
import InsuranceOfferDetails from '../components/InsuranceOfferDetails'
import DrivingTips from '../components/DrivingTips'
import ArticleList from '../components/ArticleList'
import FAQList from '../components/FAQList'
import PolicyInformation from '../components/PolicyInformation'
import Footer from '../components/Footer'
const NewtoUk = () => {
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch (e) {
      if (typeof window !== 'undefined') window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div>
        <NewToUkHero/>
        <NewToUkAd/>
        <InsuranceBenefits/>
        <CustomerReview/>
        <CoverDetails/>
        <InsuranceOfferDetails/>
        <DrivingTips/>
        <ArticleList/>
        <FAQList/>
        <PolicyInformation/>
        <Footer/>
    </div>
  )
}

export default NewtoUk