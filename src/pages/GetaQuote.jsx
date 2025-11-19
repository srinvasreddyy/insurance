import React, { useEffect, useState } from 'react';
import { useAuthModal } from '../context/AuthModalContext';
import { vehicle as vehicleApi, quote as quoteApi } from '../api/apiClient';
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
// const mockVehicleData = {
//   plate: 'EF13GZJ',
//   manufacturer: 'HYUNDAI',
//   model: 'i40 ACTIVE BLUE DRIVE CRDI',
//   trim: '4dr saloon 1.7 crdi blue drive dpf ss 136 eu5 active 6spd',
//   year: '2013',
//   transmission: 'Manual',
//   fuelType: 'Diesel',
//   engineSize: '1685',
//   value: '£2,200',
//   isImport: 'No',
//   driveSide: 'Right',
//   seats: '5',
// };

// API call via backend
const fetchVehicleDetails = async (plate) => {
  return await vehicleApi.search(plate);
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
  const [quoteId, setQuoteId] = useState(() => localStorage.getItem('quoteId') || null);

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
      const res = await fetchVehicleDetails(plate);
      // API returns { success, source, data }
      const data = res && (res.data || res);
      setVehicleData(data);
      setStep(STEPS.DETAILS);
    } catch (err) {
      setApiError(err.message || 'Could not find vehicle details. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeVehicle = () => {
    setVehicleData(null);
    setStep(STEPS.SEARCH);
  };

  const handleDetailsContinue = () => {
    // Advance the UI immediately so the user can fill the next form.
    setStep(STEPS.VEHICLE_INFO);

    // Create the quote in background; we'll persist the returned id when available.
    (async () => {
      setApiError(null);
      try {
        const res = await quoteApi.start(vehicleData);
        const created = res && (res.data || res);
        const id = (created && (created._id || created.id)) || null;
        if (id) {
          setQuoteData(prev => ({ ...prev, quoteId: id }));
          setQuoteId(id);
          localStorage.setItem('quoteId', id);
        }
      } catch (err) {
        // Don't block the user — just surface an error message
        console.error('Failed to start quote:', err);
        setApiError(err.message || 'Failed to start quote');
      }
    })();
  };

  const handleVehicleInfoSubmit = (info) => {
    // Advance UI immediately
    setStep(STEPS.DRIVER_INFO);

    // Send data to backend in background (don't block user)
    (async () => {
      try {
        setIsLoading(true);
        setApiError(null);
        const qid = quoteId || quoteData.quoteId;
        if (!qid) throw new Error('No quote ID available');
        const res = await quoteApi.updateStep(qid, 'vehicle-info', info);
        const updated = res && (res.data || res);
        setQuoteData((prev) => ({ ...prev, vehicleInfo: info, quote: updated }));
      } catch (err) {
        setApiError(err.message || 'Failed to save vehicle info');
      } finally {
        setIsLoading(false);
      }
    })();
  };

  const handleDriverInfoSubmit = (info) => {
    // Advance UI immediately
    setStep(STEPS.LICENSE);

    (async () => {
      try {
        setIsLoading(true);
        setApiError(null);
        const qid = quoteId || quoteData.quoteId;
        if (!qid) throw new Error('No quote ID available');
        const res = await quoteApi.updateStep(qid, 'driver-info', info);
        const updated = res && (res.data || res);
        setQuoteData((prev) => ({ ...prev, driverInfo: info, quote: updated }));
      } catch (err) {
        setApiError(err.message || 'Failed to save driver info');
      } finally {
        setIsLoading(false);
      }
    })();
  };

  const handleLicenseInfoSubmit = (info) => {
    // Advance UI immediately
    setStep(STEPS.HISTORY);

    (async () => {
      try {
        setIsLoading(true);
        setApiError(null);
        const qid = quoteId || quoteData.quoteId;
        if (!qid) throw new Error('No quote ID available');
        const res = await quoteApi.updateStep(qid, 'license-info', info);
        const updated = res && (res.data || res);
        setQuoteData((prev) => ({ ...prev, licenseInfo: info, quote: updated }));
      } catch (err) {
        setApiError(err.message || 'Failed to save license info');
      } finally {
        setIsLoading(false);
      }
    })();
  };

  const handleHistoryInfoSubmit = (info) => {
    // Advance UI immediately
    setStep(STEPS.USAGE);

    (async () => {
      try {
        setIsLoading(true);
        setApiError(null);
        const qid = quoteId || quoteData.quoteId;
        if (!qid) throw new Error('No quote ID available');
        const res = await quoteApi.updateStep(qid, 'history-info', info);
        const updated = res && (res.data || res);
        setQuoteData((prev) => ({ ...prev, historyInfo: info, quote: updated }));
      } catch (err) {
        setApiError(err.message || 'Failed to save history info');
      } finally {
        setIsLoading(false);
      }
    })();
  };

  const handleUsageInfoSubmit = (info) => {
    // Advance UI immediately
    setStep(STEPS.PAYMENT);

    (async () => {
      try {
        setIsLoading(true);
        setApiError(null);
        const qid = quoteId || quoteData.quoteId;
        if (!qid) throw new Error('No quote ID available');
        const res = await quoteApi.updateStep(qid, 'usage-info', info);
        const updated = res && (res.data || res);
        setQuoteData((prev) => ({ ...prev, usageInfo: info, quote: updated }));
      } catch (err) {
        setApiError(err.message || 'Failed to save usage info');
      } finally {
        setIsLoading(false);
      }
    })();
  };

  const handlePaymentInfoSubmit = (info) => {
    (async () => {
      setIsLoading(true);
      setApiError(null);
      try {
        const qid = quoteId || quoteData.quoteId;
        if (!qid) throw new Error('No quote ID available');
        const res = await quoteApi.updateStep(qid, 'payment-info', info);
        const updated = res && (res.data || res);
        const finalData = { ...quoteData, paymentInfo: info, quote: updated };
        setQuoteData(finalData);

        // Quote completed — show price (backend does not calculate price here, so keep UI random)
        const randomPrice = (Math.random() * (300 - 200) + 200).toFixed(2);
        setQuotePrice(randomPrice);
        setStep(STEPS.QUOTE);
      } catch (err) {
        setApiError(err.message || 'Failed to save payment info');
      } finally {
        setIsLoading(false);
      }
    })();
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
    const map = {
      [STEPS.SEARCH]: 'vehicle',
      [STEPS.DETAILS]: 'vehicle',
      [STEPS.VEHICLE_INFO]: 'vehicle',
      [STEPS.DRIVER_INFO]: 'drivers',
      [STEPS.LICENSE]: 'license',
      [STEPS.HISTORY]: 'history',
      [STEPS.USAGE]: 'usage',
      [STEPS.PAYMENT]: 'usage',
      [STEPS.QUOTE]: 'usage'
    };

    return map[step] || 'vehicle';
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