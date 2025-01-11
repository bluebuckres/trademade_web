import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';
import OTPVerification from '../components/auth/OTPVerification';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import { useAuth } from '../contexts/AuthContext';

// Lazy load dashboard components
const Dashboard = React.lazy(() => import('../components/Dashboard'));

const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Public routes */}
      <Route
        path="/login"
        element={user ? <Navigate to="/dashboard" /> : <LoginForm />}
      />
      <Route
        path="/register"
        element={user ? <Navigate to="/dashboard" /> : <RegisterForm />}
      />
      <Route path="/verify-otp" element={<OTPVerification />} />

      {/* Protected routes */}
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <React.Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
              </div>
            }>
              <Dashboard />
            </React.Suspense>
          </ProtectedRoute>
        }
      />

      {/* Default redirect */}
      <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
