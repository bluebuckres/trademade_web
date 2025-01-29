import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Turnstile } from '../components/Turnstile';

export const Register = () => {
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>('');

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await signInWithGoogle();
      
      if (result && result.success && result.data?.user) {
        // After successful Google login, redirect to complete profile
        navigate('/complete-profile', { 
          state: { 
            provider: 'google',
            email: result.data.user.email,
            firstName: result.data.user.displayName?.split(' ')[0] || '',
            lastName: result.data.user.displayName?.split(' ').slice(1).join(' ') || ''
          } 
        });
      }
    } catch (error) {
      console.error('Google login error:', error);
      setError('Failed to sign in with Google. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null);
      setIsLoading(true);

      // Validate turnstile token
      if (!turnstileToken) {
        setError('Please complete the CAPTCHA verification');
        setIsLoading(false);
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

      // Add +91 to the phone number before submitting
      const fullPhoneNumber = `+91${formData.phone}`;

      // Implement registration logic here
      console.log('Register with:', { 
        ...formData, 
        phone: fullPhoneNumber,
        turnstileToken 
      });
      
      // After successful registration
      navigate('/verify-email', { 
        state: { 
          email: formData.email,
          phone: fullPhoneNumber
        } 
      });
    } catch (error) {
      console.error('Registration error:', error);
      setError('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
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
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <img
              src="/trademadelogo.jpeg"
              alt="TradeMade"
              className="h-16 w-auto mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-white mb-2">Create Your Account</h2>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg">
              <p className="text-red-500 text-sm text-center">{error}</p>
            </div>
          )}

          {/* Google Sign In Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 mb-4 bg-[#2A2A2A] hover:bg-[#333333] text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
            {isLoading ? 'Connecting...' : 'Continue with Google'}
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-gray-500 bg-[#1A1A1A]">or register with email</span>
            </div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-xs mb-1">* First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#2A2A2A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <label className="block text-gray-400 text-xs mb-1">* Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#2A2A2A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-400 text-xs mb-1">* Email</label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 bg-[#2A2A2A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                disabled={isLoading}
              />
            </div>

            {/* Phone Field */}
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
                  disabled={isLoading}
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
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#2A2A2A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-gray-400 text-xs mb-1">* Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Enter Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#2A2A2A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  disabled={isLoading}
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
                  setError(null); // Clear any previous errors
                }}
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg">
                <p className="text-red-500 text-sm text-center">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || !turnstileToken}
              className="w-full py-3 px-4 bg-[#6366F1] hover:bg-[#5558E6] text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-[#6366F1] hover:text-[#5558E6]">
              Log in
            </Link>
          </div>

          <div className="mt-6 text-center text-xs text-gray-600">
            By clicking access code you are agreeing to the{' '}
            <Link to="/terms" className="text-gray-500 hover:text-white">Terms of Service</Link>
            {' '}and{' '}
            <Link to="/privacy" className="text-gray-500 hover:text-white">Privacy Policy</Link>
            <br />and you will also be added to our email list.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;