import React from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { OTPVerification } from './OTPVerification';
import useAuth from '../../hooks/useAuth';

interface LoginProps {
  onSuccess: () => void;
  onRegisterClick: () => void;
}

interface RegisterProps {
  onSuccess: (uid: string) => void;
  onLoginClick: () => void;
}

interface OTPProps {
  uid: string;
  onSuccess: () => void;
  onResendOTP: () => void;
}

interface AuthContainerProps {
  initialView?: 'login' | 'register' | 'otp';
  uid?: string;
}

export const AuthContainer: React.FC<AuthContainerProps> = ({ initialView = 'login', uid }) => {
  const [view, setView] = React.useState(initialView);
  const { user } = useAuth();

  const handleLoginSuccess = () => {
    setView('otp');
  };

  const handleRegisterSuccess = (newUid: string) => {
    setView('otp');
  };

  const handleOTPSuccess = () => {
    // Navigate to dashboard or home
  };

  const handleResendOTP = () => {
    // Implement resend OTP logic
  };

  if (user) {
    return <div>Already logged in</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {view === 'login' ? 'Sign in to your account' : view === 'register' ? 'Create your account' : 'Verify your phone'}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {view === 'login' && (
            <LoginForm 
              onSuccess={handleLoginSuccess}
              onRegisterClick={() => setView('register')}
            />
          )}
          {view === 'register' && (
            <RegisterForm
              onSuccess={handleRegisterSuccess}
              onLoginClick={() => setView('login')}
            />
          )}
          {view === 'otp' && uid && (
            <OTPVerification
              uid={uid}
              onSuccess={handleOTPSuccess}
              onResendOTP={handleResendOTP}
            />
          )}
        </div>
      </div>
    </div>
  );
};
