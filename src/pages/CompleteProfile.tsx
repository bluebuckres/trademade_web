import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { Turnstile } from '../components/Turnstile';

interface LocationState {
  provider: string;
  email: string;
  firstName: string;
  lastName: string;
}

const CompleteProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { provider, email, firstName: initialFirstName, lastName: initialLastName } = location.state as LocationState;

  const [formData, setFormData] = useState({
    firstName: initialFirstName || '',
    lastName: initialLastName || '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [turnstileToken, setTurnstileToken] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate turnstile token
    if (!turnstileToken) {
      setError('Please complete the CAPTCHA verification');
      return;
    }

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validate Indian phone number format (10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('Please enter a valid 10-digit Indian mobile number');
      return;
    }

    try {
      // Add +91 to the phone number before submitting
      const fullPhoneNumber = `+91${formData.phone}`;

      // Here you would typically update the user's profile
      console.log('Updating profile:', { 
        ...formData, 
        phone: fullPhoneNumber,
        turnstileToken 
      });

      // Navigate to email verification
      navigate('/verify-email', { 
        state: { 
          email,
          phone: fullPhoneNumber,
          provider 
        } 
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Failed to update profile. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Remove any non-digit characters
      const phoneValue = value.replace(/\D/g, '');
      // Limit to 10 digits
      if (phoneValue.length <= 10) {
        setFormData(prev => ({
          ...prev,
          phone: phoneValue
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="fixed inset-0 min-h-screen w-full bg-[#0D0D0D] overflow-y-auto">
      <div className="min-h-screen w-full flex items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md p-8 rounded-2xl bg-[#1A1A1A] shadow-xl"
        >
          <div className="text-center mb-8">
            <img src="/logo.svg" alt="TradeMade" className="h-8 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Complete Your Profile</h2>
            <p className="text-gray-400 text-sm">
              Please provide additional information to complete your registration
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field (Read-only) */}
            <div>
              <label className="block text-gray-400 text-xs mb-1">Email</label>
              <input
                type="email"
                value={email}
                disabled
                className="w-full p-3 bg-[#2A2A2A] text-gray-400 rounded-lg cursor-not-allowed"
              />
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-xs mb-1">* First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#2A2A2A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-xs mb-1">* Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#2A2A2A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-gray-400 text-xs mb-1">* Phone number</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">+91</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 pl-12 bg-[#2A2A2A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Enter 10-digit mobile number without country code</p>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-400 text-xs mb-1">* Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#2A2A2A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-gray-400 text-xs mb-1">* Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#2A2A2A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Turnstile CAPTCHA */}
            <div className="w-full flex justify-center">
              <Turnstile
                siteKey="0x4AAAAAAA46-QFERfpGKcDt"
                onVerify={(token) => {
                  setTurnstileToken(token);
                  setError(''); // Clear any previous errors
                }}
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={!turnstileToken}
              className="w-full py-3 px-4 bg-[#6366F1] hover:bg-[#5558E6] text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Complete Registration
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-gray-600">
            By continuing, you agree to our{' '}
            <a href="/terms" className="text-gray-500 hover:text-white">Terms of Service</a>
            {' '}and{' '}
            <a href="/privacy" className="text-gray-500 hover:text-white">Privacy Policy</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export { CompleteProfile };
export default CompleteProfile;
