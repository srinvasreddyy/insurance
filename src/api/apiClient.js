const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

let _token = localStorage.getItem('token') || null;

const setToken = (token) => {
  _token = token;
  if (token) localStorage.setItem('token', token);
  else localStorage.removeItem('token');
};

const request = async (path, options = {}) => {
  const url = `${API_BASE}/api${path}`;
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {})
  };

  if (_token) headers['Authorization'] = `Bearer ${_token}`;

  const res = await fetch(url, {
    ...options,
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined
  });

  let data;
  try {
    data = await res.json();
  } catch (e) {
    // Non-JSON response
    if (!res.ok) throw new Error(`Network error: ${res.status}`);
    return null;
  }

  if (!res.ok) {
    const msg = data && (data.message || data.error || JSON.stringify(data));
    const err = new Error(msg || `Request failed: ${res.status}`);
    err.status = res.status;
    err.payload = data;
    throw err;
  }

  return data;
};

const auth = {
  login: async (email, password) => {
    const data = await request('/auth/login', { method: 'POST', body: { email, password } });
    if (data.token) setToken(data.token);
    return data;
  },
  register: async (email, password) => {
    const data = await request('/auth/register', { method: 'POST', body: { email, password } });
    return data;
  },
  verifyOTP: async (email, code) => {
    const data = await request('/auth/verify-otp', { method: 'POST', body: { email, code } });
    if (data.token) setToken(data.token);
    return data;
  },
  resendVerification: async (email) => {
    return await request('/auth/resend-verification', { method: 'POST', body: { email } });
  },
  logout: () => {
    setToken(null);
    localStorage.removeItem('user');
  }
};

const vehicle = {
  search: async (vrm) => {
    return await request('/vehicle/search', { method: 'POST', body: { vrm } });
  },
  save: async (vehicleBody) => {
    return await request('/vehicle/save', { method: 'POST', body: vehicleBody });
  },
  history: async () => {
    return await request('/vehicle/history', { method: 'GET' });
  }
};

const quote = {
  start: async (vehicleDetails) => {
    return await request('/quote/start', { method: 'POST', body: { vehicleDetails } });
  },
  get: async (quoteId) => {
    return await request(`/quote/${quoteId}`, { method: 'GET' });
  },
  updateStep: async (quoteId, stepPath, body) => {
    // stepPath examples: 'vehicle-info', 'driver-info', 'license-info', 'history-info', 'usage-info', 'payment-info'
    return await request(`/quote/${quoteId}/${stepPath}`, { method: 'POST', body });
  }
};

export { auth, vehicle, quote, setToken };
