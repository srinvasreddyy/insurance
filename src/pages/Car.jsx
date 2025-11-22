import React, { useEffect } from 'react'
import CarHero from '../components/CarHero'
import BenefitsSection from '../components/BenefitsSection'
import PromoCard from '../components/PromoCard'
import PlanSelector from '../components/PlanSelector'
import AddExtras from '../components/AddExtras'
import CustomerReview from '../components/CustomerReview'
import FAQList from '../components/FAQList'
import Footer from '../components/Footer'
import CoverageExplainer from '../components/CoverageExplainer'

const Car = () => {
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch (e) {
      if (typeof window !== 'undefined') window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div>
        <CarHero/>
        <BenefitsSection/>
        <PromoCard/>
        <PlanSelector/>
        <AddExtras/>
        <CoverageExplainer/>
        <CustomerReview/>
        <FAQList/>
        <Footer/>
    </div>
  )
}

export default Car