# Authentication System Documentation

## Overview
This is a complete JWT-based authentication system with OTP email verification using Framer Motion animations and Tailwind CSS styling.

## Component Structure

### 1. **AuthModalContext.jsx** (`src/context/AuthModalContext.jsx`)
Central state management for authentication modals.

**Exports:**
- `AuthModalProvider` - Context provider wrapper
- `useAuthModal()` - Hook to access auth state and functions

**State:**
```javascript
{
  isOpen: boolean,
  currentModal: 'login' | 'register' | 'otp',
  email: string,
  loading: boolean,
  error: string
}
```

**Functions:**
- `openRegisterModal()` - Opens registration form
- `openLoginModal()` - Opens login form
- `openOTPModal(email)` - Opens OTP verification form
- `closeModal()` - Closes current modal
- `setLoading(boolean)` - Set loading state
- `setError(string)` - Set error message

---

### 2. **RegisterModal.jsx** (`src/components/RegisterModal.jsx`)
User registration component with email and password validation.

**Features:**
- Email validation (RFC standard)
- Password strength check (minimum 6 characters)
- Confirm password validation
- Form validation with error messages
- Loading state during submission
- Toggle to login form

**API Call:**
```javascript
POST /api/auth/register
Body: { email, password }
Response: { success, token, user: { id, email, isVerified } }
```

**Flow:**
1. User enters email and password
2. Form validation
3. API call to register endpoint
4. Token saved to localStorage
5. Redirects to OTP verification

---

### 3. **LoginModal.jsx** (`src/components/LoginModal.jsx`)
User login component with email and password fields.

**Features:**
- Email and password validation
- Remember me checkbox (UI only)
- Forgot password link
- Social login buttons (UI only - for future integration)
- Loading state during submission
- Toggle to registration form

**API Call:**
```javascript
POST /api/auth/login
Body: { email, password }
Response: { success, token, user: { id, email, isVerified } }
```

**Flow:**
1. User enters email and password
2. Form validation
3. API call to login endpoint
4. Token saved to localStorage
5. Check if user is verified:
   - If verified → Close modal
   - If not verified → Open OTP modal

---

### 4. **OTPModal.jsx** (`src/components/OTPModal.jsx`)
Email OTP verification component.

**Features:**
- 6-digit OTP input fields (auto-focus on input)
- Automatic field advancement
- Backspace navigation between fields
- Resend OTP button with 60-second cooldown
- Error handling and display
- Loading state

**API Calls:**

**Verify OTP:**
```javascript
POST /api/auth/verify-otp
Headers: { Authorization: `Bearer ${token}` }
Body: { code: '123456' }
Response: { success, message }
```

**Resend OTP:**
```javascript
POST /api/auth/send-otp
Headers: { Authorization: `Bearer ${token}` }
Response: { success, message }
```

**Flow:**
1. User enters 6-digit OTP
2. API call to verify OTP endpoint
3. On success:
   - Update user verified status in localStorage
   - Close modal
   - User redirected to quote page

---

### 5. **AuthenticationModal.jsx** (`src/components/AuthenticationModal.jsx`)
Main modal wrapper that controls which form to display.

**Features:**
- Animated backdrop and modal
- Close button (X)
- Click outside to close (backdrop click)
- Smooth transitions between forms
- Responsive design

**Conditional Rendering:**
```
- currentModal === 'login' → LoginModal
- currentModal === 'register' → RegisterModal
- currentModal === 'otp' → OTPModal
```

---

## Integration Guide

### 1. **Update __root.jsx**
```jsx
import { AuthModalProvider } from '../context/AuthModalContext'
import AuthenticationModal from '../components/AuthenticationModal'

function RootComponent() {
  return (
    <AuthModalProvider>
      <NavBar/>
      <AuthenticationModal />
      <div className="pt-20 md:pt-0 w-full overflow-x-hidden">
        <Outlet />
      </div>
    </AuthModalProvider>
  )
}
```

### 2. **Update GetaQuote.jsx**
```jsx
import { useAuthModal } from '../context/AuthModalContext'

const GetaQuote = () => {
  const { openLoginModal } = useAuthModal();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      openLoginModal();
    }
  }, [openLoginModal]);

  return <GetQuoteHero />
}
```

### 3. **Use in Other Components**
```jsx
import { useAuthModal } from '../context/AuthModalContext'

function MyComponent() {
  const { openLoginModal, openRegisterModal } = useAuthModal();

  return (
    <>
      <button onClick={openLoginModal}>Sign In</button>
      <button onClick={openRegisterModal}>Sign Up</button>
    </>
  )
}
```

---

## User Flow Diagram

```
User visits GetaQuote page
        ↓
Check localStorage for token
        ↓
    No token? → Open LoginModal
        ↓
    [User has 2 options]
    ├─ Already have account? → Login
    └─ New user? → Click "Create an account" → RegisterModal
        ↓
[Registration Flow]
    ├─ Enter email + password
    ├─ API: POST /api/auth/register
    ├─ Save token to localStorage
    └─ Open OTPModal
        ↓
[Login Flow]
    ├─ Enter email + password
    ├─ API: POST /api/auth/login
    ├─ Save token to localStorage
    ├─ Check isVerified flag
    └─ If false → Open OTPModal
        ↓
[OTP Verification]
    ├─ Enter 6-digit OTP
    ├─ API: POST /api/auth/verify-otp
    ├─ Update user.isVerified = true
    └─ Close modal → User can access quote
```

---

## Local Storage Keys

```javascript
// After successful login/registration
localStorage.setItem('token', 'jwt_token_here')
localStorage.setItem('user', JSON.stringify({
  id: 'user_id',
  email: 'user@example.com',
  isVerified: false  // Updated after OTP verification
}))

// To access:
const token = localStorage.getItem('token')
const user = JSON.parse(localStorage.getItem('user'))
```

---

## API Endpoints Expected

### Authentication Endpoints

**1. Register**
```
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure_password"
}

Response:
{
  "success": true,
  "token": "jwt_token",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "isVerified": false
  }
}
```

**2. Login**
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure_password"
}

Response:
{
  "success": true,
  "token": "jwt_token",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "isVerified": true/false
  }
}
```

**3. Verify OTP**
```
POST /api/auth/verify-otp
Authorization: Bearer jwt_token
Content-Type: application/json

{
  "code": "123456"
}

Response:
{
  "success": true,
  "message": "Email verified successfully"
}
```

**4. Resend OTP**
```
POST /api/auth/send-otp
Authorization: Bearer jwt_token
Content-Type: application/json

Response:
{
  "success": true,
  "message": "OTP sent to email"
}
```

---

## Styling Features

- **Color Scheme**: Teal/Blue primary with gray accents
- **Responsive**: Works on mobile, tablet, desktop
- **Animations**: Smooth modal entrance/exit with Framer Motion
- **Accessibility**: Proper labels, keyboard navigation, error messages
- **Loading States**: Disabled buttons, loading text during API calls

---

## Error Handling

All components include:
- Field-level validation errors
- API error handling
- Loading states
- User-friendly error messages
- Error clearing on user input

---

## Future Enhancements

- [ ] Social login integration (Google, Facebook, GitHub, Microsoft)
- [ ] Password reset flow
- [ ] Two-factor authentication
- [ ] Biometric login
- [ ] Session management
- [ ] Auto-logout on token expiry
- [ ] Remember me functionality
- [ ] Terms & conditions acceptance

---

## Security Notes

1. **Token Storage**: Currently using localStorage. Consider using httpOnly cookies for production.
2. **HTTPS**: Ensure all API calls are over HTTPS in production.
3. **CORS**: Configure CORS properly on backend.
4. **Token Validation**: Validate token on component mount before allowing access.
5. **Rate Limiting**: Implement rate limiting on OTP resend endpoint.

---

## Troubleshooting

### Modal won't close
- Check if `closeModal()` is being called
- Verify backdrop click handler is not prevented

### OTP not sending
- Verify backend email configuration
- Check authorization header includes valid token
- Check CORS settings

### Token not persisting
- Verify localStorage is enabled in browser
- Check browser privacy/incognito mode

### Form validation errors
- Check regex patterns match your requirements
- Verify error clearing on user input

---

## Testing Demo Credentials

For testing purposes, your backend should support:
```
Email: demo@example.com
Password: demo123456
```

---

## Support

For issues or questions about the authentication system, refer to:
1. Backend API documentation
2. Component inline comments
3. Error messages in browser console
