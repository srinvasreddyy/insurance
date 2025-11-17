import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useAuthModal } from '../context/AuthModalContext';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import OTPModal from './OTPModal';

const AuthenticationModal = () => {
  const { modalState, closeModal } = useAuthModal();

  if (!modalState.isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={closeModal} />
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md mx-4 relative pointer-events-auto">
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <FaTimes size={24} />
          </button>

          {/* FIX: Use modalState.type to match the context provider */}
          {modalState.type === 'login' && <LoginModal />}
          {modalState.type === 'register' && <RegisterModal />}
          {modalState.type === 'otp' && <OTPModal />}
        </div>
      </div>
    </>
  );
};

export default AuthenticationModal;