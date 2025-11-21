import React, { createContext, useContext, useState, useCallback } from 'react';
import { auth } from '../api/apiClient';

const AuthModalContext = createContext(null);

export const AuthModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: null,   // <-- FIXED
    email: '',
    loading: false,
    error: ''
  });

  const openLoginModal = useCallback(() => {
    // openLoginModal
    setModalState({
      isOpen: true,
      type: 'login',   // <-- FIXED
      email: '',
      loading: false,
      error: ''
    });
  }, []);

  const openRegisterModal = useCallback(() => {
    // openRegisterModal
    setModalState({
      isOpen: true,
      type: 'register',  // <-- FIXED
      email: '',
      loading: false,
      error: ''
    });
  }, []);

  const openOTPModal = useCallback((email) => {
    // openOTPModal
    setModalState({
      isOpen: true,
      type: 'otp',  // <-- FIXED
      email,
      loading: false,
      error: ''
    });
  }, []);

  const closeModal = useCallback(() => {
    // closeModal
    setModalState({
      isOpen: false,
      type: null,   // <-- FIXED
      email: '',
      loading: false,
      error: ''
    });
  }, []);

  const setLoading = useCallback((loading) => {
    setModalState(prev => ({
      ...prev,
      loading
    }));
  }, []);

  const setError = useCallback((error) => {
    setModalState(prev => ({
      ...prev,
      error
    }));
  }, []);

  const value = {
    modalState,
    openLoginModal,
    openRegisterModal,
    openOTPModal,
    closeModal,
    setLoading,
    setError
  };

  return (
    <AuthModalContext.Provider value={value}>
      {children}
    </AuthModalContext.Provider>
  );
};

export const useAuthModal = () => {
  const context = useContext(AuthModalContext);
  if (!context) {
    throw new Error("useAuthModal must be used within AuthModalProvider");
  }
  return context;
};
