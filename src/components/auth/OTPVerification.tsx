import React, { useState } from 'react';
import { verifyOTP } from '../../api/auth';

interface OTPVerificationProps {
  uid: string;
  onSuccess: () => void;
  onResendOTP: () => void;
}

export const OTPVerification: React.FC<OTPVerificationProps> = ({
  uid,
  onSuccess,
  onResendOTP
}) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await verifyOTP({ otp, uid });
      if (response.success) {
        onSuccess();
      } else {
        setError(response.message || 'Failed to verify OTP');
      }
    } catch (err) {
      setError('Failed to verify OTP');
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verify your mobile number
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter the OTP sent to your mobile number
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
              Enter OTP
            </label>
            <div className="mt-1">
              <input
                id="otp"
                name="otp"
                type="text"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={onResendOTP}
              className="text-indigo-600 hover:text-indigo-500"
            >
              Didn't receive OTP? Resend
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
