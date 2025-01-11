import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';

export const VerifyEmail = () => {
  const { isEmailLink, completeSignInWithLink } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const verifyEmail = async () => {
      // Get the email from localStorage
      const email = localStorage.getItem('pendingEmail') || localStorage.getItem('emailForSignIn');
      
      if (!email) {
        setError('No email found. Please try signing in again.');
        setLoading(false);
        return;
      }

      if (isEmailLink(window.location.href)) {
        try {
          await completeSignInWithLink(email, window.location.href);
          // Clear the stored email
          localStorage.removeItem('pendingEmail');
          localStorage.removeItem('emailForSignIn');
          // Redirect to complete profile or dashboard
          navigate('/complete-profile');
        } catch (error: any) {
          console.error('Error verifying email:', error);
          setError(error.message || 'Failed to verify email. Please try again.');
        }
      } else {
        setError('Invalid verification link. Please try signing in again.');
      }
      setLoading(false);
    };

    verifyEmail();
  }, [completeSignInWithLink, isEmailLink, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="flex justify-center">
              <svg className="animate-spin h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <p className="mt-4 text-center text-sm text-gray-600">
              Verifying your email...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="rounded-md bg-red-50 p-4">
              <div className="text-sm text-red-700">{error}</div>
            </div>
            <div className="mt-6">
              <Button
                onClick={() => navigate('/login')}
                className="w-full justify-center"
              >
                Back to Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default VerifyEmail;
