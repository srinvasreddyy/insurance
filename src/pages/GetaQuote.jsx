import React, { useEffect } from 'react'
import GetQuoteHero from '../components/GetQuoteHero'
import { useAuthModal } from '../context/AuthModalContext'

const GetaQuote = () => {
  // Destructure the stable function directly
  const { openLoginModal } = useAuthModal();

  useEffect(() => {
    // Hide the NavBar on this page
    const navBar = document.querySelector('nav');
    if (navBar) {
      navBar.style.display = 'none';
    }
    
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      // User is not authenticated, open login modal
      openLoginModal();
    }
    
    // Cleanup: show the NavBar again when leaving this page
    return () => {
      if (navBar) {
        navBar.style.display = 'block';
      }
    };
  }, [openLoginModal]); // <-- FIX: Dependency changed to the stable function

  return (
    <div className="-mt-20 md:mt-0">
        <GetQuoteHero />
    </div>
  )
}

export default GetaQuote