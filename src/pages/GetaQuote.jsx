import React, { useEffect } from 'react'
import GetQuoteHero from '../components/GetQuoteHero'

const GetaQuote = () => {
  useEffect(() => {
    // Hide the NavBar on this page
    const navBar = document.querySelector('nav');
    if (navBar) {
      navBar.style.display = 'none';
    }
    
    // Cleanup: show the NavBar again when leaving this page
    return () => {
      if (navBar) {
        navBar.style.display = 'block';
      }
    };
  }, []);

  return (
    <div>
        <GetQuoteHero />
    </div>
  )
}

export default GetaQuote