import React, { useState, useRef, useEffect } from 'react';
import { useAuthModal } from '../context/AuthModalContext';
import { auth } from '../api/apiClient';

const OTPModal = () => {
  const { modalState, closeModal, setLoading, setError } = useAuthModal();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(0);
  const inputRefs = useRef([]);

  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const otpCode = otp.join('');

    if (otpCode.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Send email + code (backend expects both)
      const data = await auth.verifyOTP(modalState.email, otpCode);

      if (data && data.success) {
        // Save token + user
        if (data.token) {
          localStorage.setItem('token', data.token);
        }
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
        }
        closeModal();
        setOtp(['', '', '', '', '', '']);
      } else {
        setError((data && (data.message || data.data)) || 'Invalid OTP');
      }
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setError('');

    try {
      const data = await auth.resendVerification(modalState.email);
      if (data && data.success) {
        setResendTimer(60);
        setOtp(['', '', '', '', '', '']);
        inputRefs.current[0]?.focus();
      } else {
        setError((data && (data.message || data.data)) || 'Failed to resend OTP');
      }
    } catch (err) {
      setError(err.message || 'An error occurred');
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Verify Your Email</h2>
        <p className="text-gray-600 mt-2">
          We've sent a 6-digit code to <br />
          <span className="font-semibold text-gray-900">{modalState.email}</span>
        </p>
      </div>

      {modalState.error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm font-semibold">{modalState.error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex gap-3 justify-center">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={el => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-14 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors bg-gray-50"
              placeholder="-"
              disabled={modalState.loading}
              autoComplete="off"
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={modalState.loading || otp.join('').length !== 6}
          className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg transition-colors disabled:opacity-50"
        >
          {modalState.loading ? 'Verifying...' : 'Verify OTP'}
        </button>
      </form>

      <div className="text-center">
        <p className="text-gray-600 text-sm mb-3">Didn't receive the code?</p>
        <button
          onClick={handleResendOTP}
          disabled={resendTimer > 0}
          className="text-blue-600 hover:text-blue-700 font-semibold disabled:text-gray-400"
        >
          {resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Resend OTP'}
        </button>
      </div>

      <p className="text-center text-xs text-gray-600">
        By verifying your email, you agree to our{' '}
        <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
          Terms of Service
        </a>
      </p>
    </div>
  );
};

export default OTPModal;
