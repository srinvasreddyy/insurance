import React, { useEffect, useState } from 'react';
import { useAuthModal } from '../context/AuthModalContext';
import GetQuoteHero from '../components/GetQuoteHero';
import QuoteHeader from '../components/QuoteHeader';
import VehicleDetails from '../components/VehicleDetails';
import VehicleInfo from '../components/VehicleInfo';
import DriverInfo from '../components/DriverInfo';
import LicenseInfo from '../components/LicenseInfo';
import HistoryInfo from '../components/HistoryInfo';
import UsageInfo from '../components/UsageInfo';
import Payment from '../components/Payment';
import QuoteDisplay from '../components/QuoteDisplay';
import Spinner from '../components/Spinner';

// Mock data
const mockVehicleData = {
  plate: 'EF13GZJ',
  manufacturer: 'HYUNDAI',
  model: 'i40 ACTIVE BLUE DRIVE CRDI',
  trim: '4dr saloon 1.7 crdi blue drive dpf ss 136 eu5 active 6spd',
  year: '2013',
  transmission: 'Manual',
  fuelType: 'Diesel',
  engineSize: '1685',
  value: '£2,200',
  isImport: 'No',
  driveSide: 'Right',
  seats: '5',
};

// Mock API call
const fetchVehicleDetails = (plate) => {
  console.log('API call for:', plate);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockVehicleData);
    }, 1500); // 1.5 second delay
  });
};

// Define step names
const STEPS = {
  SEARCH: 'search',
  DETAILS: 'details',
  VEHICLE_INFO: 'vehicleInfo',
  DRIVER_INFO: 'driverInfo',
  LICENSE: 'license',
  HISTORY: 'history',
  USAGE: 'usage',
  PAYMENT: 'payment',
  QUOTE: 'quote',
};

const GetaQuote = () => {
  const { openLoginModal } = useAuthModal();
  const [step, setStep] = useState(STEPS.SEARCH);
  const [vehicleData, setVehicleData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [quotePrice, setQuotePrice] = useState(null);

  const [quoteData, setQuoteData] = useState({});

  useEffect(() => {
    const navBar = document.querySelector('nav');
    if (navBar) navBar.style.display = 'none';

    const token = localStorage.getItem('token');
    if (!token) {
      openLoginModal();
    }

    return () => {
      if (navBar) navBar.style.display = 'block';
    };
  }, [openLoginModal]);

  const handleFindVehicle = async (plate) => {
    setIsLoading(true);
    setApiError(null);
    try {
      const data = await fetchVehicleDetails(plate);
      setVehicleData(data);
      setStep(STEPS.DETAILS);
    } catch (err) {
      setApiError('Could not find vehicle details. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeVehicle = () => {
    setVehicleData(null);
    setStep(STEPS.SEARCH);
  };

  const handleDetailsContinue = () => {
    setStep(STEPS.VEHICLE_INFO);
  };

  const handleVehicleInfoSubmit = (info) => {
    setQuoteData((prev) => ({ ...prev, vehicleInfo: info }));
    console.log('Vehicle Info Submitted:', info);
    setStep(STEPS.DRIVER_INFO);
  };

  const handleDriverInfoSubmit = (info) => {
    setQuoteData((prev) => ({ ...prev, driverInfo: info }));
    console.log('Driver Info Submitted:', info);
    setStep(STEPS.LICENSE);
  };

  const handleLicenseInfoSubmit = (info) => {
    setQuoteData((prev) => ({ ...prev, licenseInfo: info }));
    console.log('License Info Submitted:', info);
    setStep(STEPS.HISTORY);
  };

  const handleHistoryInfoSubmit = (info) => {
    setQuoteData((prev) => ({ ...prev, historyInfo: info }));
    console.log('History Info Submitted:', info);
    setStep(STEPS.USAGE);
  };

  const handleUsageInfoSubmit = (info) => {
    setQuoteData((prev) => ({ ...prev, usageInfo: info }));
    console.log('Usage Info Submitted:', info);
    setStep(STEPS.PAYMENT);
  };

  const handlePaymentInfoSubmit = (info) => {
    const finalData = { ...quoteData, paymentInfo: info };
    setQuoteData(finalData);
    console.log('--- ALL QUOTE DATA ---', finalData);

    setIsLoading(true);
    const randomPrice = (Math.random() * (300 - 200) + 200).toFixed(2);
    setQuotePrice(randomPrice);

    setTimeout(() => {
      setIsLoading(false);
      setStep(STEPS.QUOTE);
    }, 1500);
  };

  // --- LOGIC FOR PROGRESS BAR ---
  // The 5 steps where the progress bar should be visible
  const fiveFormSteps = [
    STEPS.VEHICLE_INFO,
    STEPS.DRIVER_INFO,
    STEPS.LICENSE,
    STEPS.HISTORY,
    STEPS.USAGE,
  ];
  
  // This is true only when the current step is one of the 5 above
  const showProgressBar = fiveFormSteps.includes(step);

  // This tells the header which step to light up
  const getActiveStepId = () => {
    switch (step) {
      case STEPS.VEHICLE_INFO:
        return 'vehicle';
      case STEPS.DRIVER_INFO:
        return 'drivers';
      case STEPS.LICENSE:
        return 'license';
      case STEPS.HISTORY:
        return 'history';
      case STEPS.USAGE:
        return 'usage';
      // For steps before/after, we still need to know where to highlight
      case STEPS.SEARCH:
      case STEPS.DETAILS:
        return 'vehicle'; // Default to first step
      case STEPS.PAYMENT:
      case STEPS.QUOTE:
        return 'usage'; // Default to last step
      default:
        return 'vehicle';
    }
  };
  // --- END LOGO/PROGRESS BAR FIX ---

  const renderStep = () => {
    if (isLoading && step !== STEPS.SEARCH) {
      return <Spinner />;
    }

    switch (step) {
      case STEPS.SEARCH:
        return (
          <GetQuoteHero
            onFindVehicle={handleFindVehicle}
            onSearchByMakeModel={() => console.log('Search by make/model')}
            isLoading={isLoading}
            apiError={apiError}
          />
        );
      case STEPS.DETAILS:
        return (
          <VehicleDetails
            vehicleData={vehicleData}
            onChangeVehicle={handleChangeVehicle}
            onContinue={handleDetailsContinue}
          />
        );
      case STEPS.VEHICLE_INFO:
        return (
          <VehicleInfo
            vehicleData={vehicleData}
            onSubmit={handleVehicleInfoSubmit}
            onBack={() => setStep(STEPS.DETAILS)}
          />
        );
      case STEPS.DRIVER_INFO:
        return (
          <DriverInfo
            onSubmit={handleDriverInfoSubmit}
            onBack={() => setStep(STEPS.VEHICLE_INFO)}
          />
        );
      case STEPS.LICENSE:
        return (
          <LicenseInfo
            onSubmit={handleLicenseInfoSubmit}
            onBack={() => setStep(STEPS.DRIVER_INFO)}
          />
        );
      case STEPS.HISTORY:
        return (
          <HistoryInfo
            onSubmit={handleHistoryInfoSubmit}
            onBack={() => setStep(STEPS.LICENSE)}
          />
        );
      case STEPS.USAGE:
        return (
          <UsageInfo
            onSubmit={handleUsageInfoSubmit}
            onBack={() => setStep(STEPS.HISTORY)}
          />
        );
      case STEPS.PAYMENT:
        return (
          <Payment
            onSubmit={handlePaymentInfoSubmit}
            onBack={() => setStep(STEPS.USAGE)}
            isLoading={isLoading}
          />
        );
      case STEPS.QUOTE:
        return (
          <QuoteDisplay
            price={quotePrice}
            onBack={() => setStep(STEPS.PAYMENT)}
          />
        );
      default:
        return (
          <GetQuoteHero
            onFindVehicle={handleFindVehicle}
            onSearchByMakeModel={() => console.log('Search by make/model')}
            isLoading={isLoading}
            apiError={apiError}
          />
        );
    }
  };

  const getPageBackground = () => {
    switch (step) {
      case STEPS.SEARCH:
      case STEPS.DETAILS:
        return 'bg-white';
      default:
        return 'bg-background-light'; // Use new light background for all form steps
    }
  };

  return (
    <div className={`min-h-screen ${getPageBackground()}`}>
      <QuoteHeader
        activeStepId={getActiveStepId()}
        showProgressBar={showProgressBar} // <-- Pass the prop here
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderStep()}
      </main>
    </div>
  );
};

export default GetaQuote;