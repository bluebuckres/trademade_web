import React, { useState, useRef, useEffect } from 'react';
import { Bell, User, ChevronDown, AlertCircle, LogOut, Crown, Clock, Users, Settings, HelpCircle } from 'lucide-react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface PlanLimits {
  [key: string]: {
    accounts: number;
  };
}

const planLimits: PlanLimits = {
  Free: {
    accounts: 1
  },
  Basic: {
    accounts: 2
  },
  Pro: {
    accounts: 'Unlimited'
  }
};

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // Sample user data - in real app, this would come from your auth context
  const userData = {
    name: user?.displayName || 'John Doe',
    plan: 'Free',
    trialDaysLeft: 5,
    accountsUsed: 2,
    accountsLimit: planLimits[userData.plan]
  };

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handleUpgrade = async (plan: 'Basic' | 'Pro') => {
    const res = await loadRazorpay();
    
    if (!res) {
      alert('Razorpay SDK failed to load. Please check your internet connection.');
      return;
    }

    const planPricing = {
      Basic: 1499,
      Pro: 2999
    };

    // Initialize Razorpay checkout
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: planPricing[plan] * 100, // Amount in paise
      currency: 'INR',
      name: 'TradeMade',
      description: `Upgrade to ${plan} Plan`,
      handler: async function(response: any) {
        try {
          // Send payment verification to your backend
          const verifyUrl = `${import.meta.env.VITE_API_URL}/verify-payment`;
          const { data } = await fetch(verifyUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              plan: plan
            })
          }).then(res => res.json());

          if (data.success) {
            alert('Payment successful! Your plan has been upgraded.');
            // Refresh user data or redirect as needed
            window.location.reload();
          }
        } catch (error) {
          console.error('Payment verification failed:', error);
          alert('Payment verification failed. Please contact support.');
        }
      },
      prefill: {
        name: userData.name,
        contact: user?.phoneNumber || ''
      },
      theme: {
        color: '#4F46E5'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // Sample data - in real app, this would come from an API
  const accounts = [
    {
      brokerName: 'Zerodha',
      brokerId: 'PIA343',
      accountAlias: 'Main Trading',
      status: 'Active',
      copyTrading: false,
      validity: '2025-01-15',
      api: 'Paid',
      planCost: 500
    },
    {
      brokerName: 'Shoonya',
      brokerId: 'FA6473',
      accountAlias: 'Copy Trading',
      status: 'Inactive',
      copyTrading: true,
      validity: null,
      api: 'Free',
      planCost: 500
    },
    {
      brokerName: 'Flatrade',
      brokerId: 'FT4564',
      accountAlias: 'Copy Trading',
      status: 'Active',
      copyTrading: true,
      validity: '2025-01-20',
      api: 'Free',
      planCost: 500
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Brand Logo */}
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src="/logo.png" alt="TradeMade" />
            </div>

            {/* User Profile and Notifications */}
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 relative">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
              </button>

              {/* User dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center space-x-3 hover:bg-gray-50 rounded-lg p-2 transition-colors duration-200"
                >
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-5 w-5 text-gray-500" />
                  </div>
                  <span className="hidden md:inline-block">{userData.name}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showDropdown ? 'transform rotate-180' : ''}`} />
                </button>

                {/* Dropdown menu */}
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{userData.name}</p>
                    </div>
                    
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/dashboard/profile');
                      }}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <User className="h-4 w-4 mr-3 text-gray-400" />
                      Profile Settings
                    </a>

                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/dashboard/settings');
                      }}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <Settings className="h-4 w-4 mr-3 text-gray-400" />
                      Account Settings
                    </a>

                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/dashboard/help');
                      }}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <HelpCircle className="h-4 w-4 mr-3 text-gray-400" />
                      Help & Support
                    </a>

                    <div className="border-t border-gray-100">
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="h-4 w-4 mr-1.5" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>
        <Outlet />
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* User Account Info Panel */}
          <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {/* Left side - User Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">{userData.name}</h2>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center">
                    <Crown className={`h-4 w-4 mr-1.5 ${
                      userData.plan === 'Pro' ? 'text-yellow-500' : 
                      userData.plan === 'Basic' ? 'text-blue-500' : 
                      'text-gray-400'
                    }`} />
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      userData.plan === 'Pro' ? 'bg-yellow-50 text-yellow-700' :
                      userData.plan === 'Basic' ? 'bg-blue-50 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {userData.plan} Plan
                    </span>
                  </div>
                  {userData.plan === 'Free' && (
                    <div className="flex items-center text-orange-600 text-xs">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      <span>{userData.trialDaysLeft} days left in trial</span>
                    </div>
                  )}
                </div>
                {userData.plan !== 'Pro' && (
                  <div className="flex gap-3">
                    {userData.plan === 'Free' && (
                      <button 
                        onClick={() => handleUpgrade('Basic')}
                        className="px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                      >
                        Upgrade to Basic (₹1499)
                      </button>
                    )}
                    <button 
                      onClick={() => handleUpgrade('Pro')}
                      className="px-3 py-1.5 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors text-sm"
                    >
                      Upgrade to Pro (₹2999)
                    </button>
                  </div>
                )}
                <button 
                  onClick={handleLogout}
                  className="flex items-center text-red-600 hover:text-red-700 text-sm"
                >
                  <LogOut className="h-4 w-4 mr-1.5" />
                  Logout
                </button>
              </div>

              {/* Right side - Account Usage */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 flex items-center mb-3">
                    <Users className="h-4 w-4 mr-1.5 text-gray-500" />
                    Account Usage
                  </h3>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-gray-600">Connected Accounts</span>
                      <span className="text-sm font-medium text-gray-900">{userData.accountsUsed} / {
                        typeof userData.accountsLimit === 'string' 
                          ? userData.accountsLimit 
                          : userData.accountsLimit.accounts
                      }</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded h-1.5">
                      <div 
                        className={`h-1.5 rounded ${
                          userData.plan === 'Pro' ? 'bg-yellow-500' :
                          userData.plan === 'Basic' ? 'bg-blue-500' :
                          'bg-gray-500'
                        }`}
                        style={{ 
                          width: `${Math.min(
                            typeof userData.accountsLimit === 'string'
                              ? 100
                              : (userData.accountsUsed / userData.accountsLimit.accounts * 100),
                            100
                          )}%` 
                        }}
                      />
                    </div>
                  </div>
                </div>

                {userData.plan === 'Free' && (
                  <div className="p-3 bg-orange-50 rounded border border-orange-100">
                    <h4 className="text-sm font-medium text-orange-800 mb-2">Free Trial Benefits</h4>
                    <ul className="space-y-1 text-sm text-orange-700">
                      <li className="flex items-center">
                        <span className="mr-2">•</span>
                        7 days to explore all features
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">•</span>
                        Connect 1 trading account
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">•</span>
                        Basic support included
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Connected Accounts Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 sm:p-6 flex justify-between items-center border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Connected Accounts</h2>
              <button 
                onClick={() => navigate('/dashboard/add-broker')}
                className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors"
              >
                Add New Account
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Broker Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Broker ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Alias</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Copy Trading</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Validity (Plan)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">API</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Extend (Plan)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {accounts.map((account, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{account.brokerName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{account.brokerId}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{account.accountAlias}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-medium rounded-full ${
                          account.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {account.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{account.copyTrading ? 'Yes' : 'No'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{account.validity}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-sm ${
                          account.api === 'Paid' ? 'text-green-600' : 'text-gray-500'
                        }`}>
                          {account.api}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className={`px-3 py-1 text-xs font-medium rounded ${
                          account.api === 'Paid' 
                            ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
                            : 'bg-red-100 text-red-700 hover:bg-red-200'
                        }`}>
                          Extend (₹500)
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Info Cards */}
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Basic Plan Info */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">Basic Plan Features</h3>
                    <ul className="mt-2 text-sm text-gray-600 space-y-1">
                      <li>• One Main Trading Account</li>
                      <li>• One Free Copy Trading Account</li>
                      <li>• 30 Days Validity per Extension</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Plan Info */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">Pro Plan Features</h3>
                    <ul className="mt-2 text-sm text-gray-600 space-y-1">
                      <li>• Multiple Copy Trading Accounts</li>
                      <li>• ₹500 per Account Extension</li>
                      <li>• Priority Support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* API Info */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">API Information</h3>
                    <ul className="mt-2 text-sm text-gray-600 space-y-1">
                      <li>• Zerodha: Paid API (₹1000)</li>
                      <li>• Shoonya: Free API</li>
                      <li>• Flatrade: Free API</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Important Notes</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <ul className="list-disc list-inside">
                    <li>Only one account can be designated as Main Trading</li>
                    <li>API charges are separate from plan costs</li>
                    <li>Each plan extension provides 30 days of validity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
