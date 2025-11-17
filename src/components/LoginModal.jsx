import React, { useState } from 'react';
import { useAuthModal } from '../context/AuthModalContext';

const LoginModal = () => {
  const { modalState, openRegisterModal, openOTPModal, closeModal, setLoading, setError } = useAuthModal();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) newErrors.email = 'Email required';
    if (!password) newErrors.password = 'Password required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        if (data.user.isVerified) {
          closeModal();
        } else {
          openOTPModal(email);
        }

        setEmail('');
        setPassword('');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Log In</h2>
        <p className="text-gray-600 mt-2">
          New user?{' '}
          <button
            type="button"
            onClick={openRegisterModal}
            className="text-blue-600 font-semibold hover:text-blue-700"
          >
            Create an account
          </button>
        </p>
      </div>

      {modalState.error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm font-semibold">{modalState.error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors(prev => ({ ...prev, email: '' }));
            }}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors bg-gray-50 ${
              errors.email ? 'border-red-500' : 'border-gray-300 focus:border-blue-600'
            }`}
            placeholder="you@example.com"
            disabled={modalState.loading}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors(prev => ({ ...prev, password: '' }));
            }}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors bg-gray-50 ${
              errors.password ? 'border-red-500' : 'border-gray-300 focus:border-blue-600'
            }`}
            placeholder="••••••••"
            disabled={modalState.loading}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <button
          type="submit"
          disabled={modalState.loading}
          className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg transition-colors disabled:opacity-50"
        >
          {modalState.loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>

      <p className="text-center text-xs text-gray-600">
        By signing in, you agree to our{' '}
        <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

export default LoginModal;
