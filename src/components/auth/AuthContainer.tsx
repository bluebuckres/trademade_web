import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import OTPVerification from './OTPVerification';
import useAuth from '../../hooks/useAuth';

type AuthView = 'login' | 'register' | 'otp';

const AuthContainer: React.FC = () => {
  const [currentView, setCurrentView] = useState<AuthView>('login');
  const [pendingUserId, setPendingUserId] = useState<string>('');
  const { user } = useAuth();

  const handleRegisterSuccess = (uid: string) => {
    setPendingUserId(uid);
    setCurrentView('otp');
  };

  const handleLoginSuccess = () => {
    // Handle successful login (e.g., redirect to dashboard)
    console.log('Login successful');
  };

  const handleOTPSuccess = () => {
    // Handle successful OTP verification
    setCurrentView('login');
  };

  if (user) {
    return <div>Already logged in</div>;
  }

  return (
    <div>
      {currentView === 'login' && (
        <LoginForm
          onSuccess={handleLoginSuccess}
          onRegisterClick={() => setCurrentView('register')}
        />
      )}
      {currentView === 'register' && (
        <RegisterForm
          onSuccess={handleRegisterSuccess}
          onLoginClick={() => setCurrentView('login')}
        />
      )}
      {currentView === 'otp' && pendingUserId && (
        <OTPVerification
          uid={pendingUserId}
          onSuccess={handleOTPSuccess}
          onResendOTP={() => {
            // Implement resend OTP logic
            console.log('Resend OTP');
          }}
        />
      )}
    </div>
  );
};

export default AuthContainer;
