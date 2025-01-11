import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const Login = () => {
  const navigate = useNavigate();
  const { signInWithGoogle, signInWithEmail } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setError('');
      setLoading(true);
      await signInWithGoogle();
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to sign in with Google');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setError('');
      setLoading(true);
      await signInWithEmail(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to sign in');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D0D0D]">
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
          <h2 className="text-2xl font-bold text-white mb-2">Welcome Back!</h2>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        {/* Google Sign In Button */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 mb-4 bg-[#2A2A2A] hover:bg-[#333333] text-white rounded-lg transition-colors disabled:opacity-50"
        >
          <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
          {loading ? 'Signing in...' : 'Log in with Google'}
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 text-gray-500 bg-[#1A1A1A]">or log in with email</span>
          </div>
        </div>

        {/* Email Login Form */}
        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-[#2A2A2A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <div className="flex items-center justify-end">
            <Link to="/forgot-password" className="text-sm text-gray-400 hover:text-white">
              Forgot?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-[#6366F1] hover:bg-[#5558E6] text-white rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Log in'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to="/register" className="text-[#6366F1] hover:text-[#5558E6]">
            Sign Up
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
  );
};

export default Login;
