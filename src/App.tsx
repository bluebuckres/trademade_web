import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import { Customize } from './pages/Customize';
import { Login } from './components/Login';
import Register from './pages/Register';
import { VerifyEmail } from './pages/VerifyEmail';
import { HowToUse } from './components/HowToUse';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import ProtectedRoute from './components/auth/ProtectedRoute';
import DashboardLayout from './layouts/DashboardLayout';
import AddBroker from './pages/AddBroker';
import CompleteProfile from './pages/CompleteProfile';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-[#0D0D0D]">
          <Routes>
            {/* Public Routes with Navbar and Footer */}
            <Route
              element={
                <div className="min-h-screen flex flex-col">
                  <Navbar />
                  <main className="flex-grow">
                    <Outlet />
                  </main>
                  <Footer />
                </div>
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/how-to-use" element={<HowToUse />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/customize" element={<Customize />} />
            </Route>

            {/* Auth Layout - No Navbar/Footer */}
            <Route
              element={
                <div className="min-h-screen flex flex-col bg-[#0D0D0D]">
                  <main className="flex-grow">
                    <Outlet />
                  </main>
                </div>
              }
            >
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/verify-email" element={<VerifyEmail />} />
              <Route path="/complete-profile" element={<CompleteProfile />} />
            </Route>

            {/* Protected Dashboard Layout */}
            <Route element={<ProtectedRoute />}>
              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<div>Dashboard</div>} />
                <Route path="/add-broker" element={<AddBroker />} />
              </Route>
            </Route>

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;