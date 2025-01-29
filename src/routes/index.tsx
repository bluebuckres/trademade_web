import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { VerifyEmail } from '../pages/VerifyEmail';
import Overview from '../pages/dashboard/Overview';
import DashboardLayout from '../layouts/DashboardLayout';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import { Customize } from '../pages/Customize';
import { useAuth } from '../contexts/AuthContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/verify-email',
    element: <VerifyEmail />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Overview />,
      },
      {
        path: 'customize',
        element: <Customize />,
      },
    ],
  },
]);

const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  return (
    <RouterProvider router={router} />
  );
};

export default AppRoutes;
