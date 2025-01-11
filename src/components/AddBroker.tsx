import React, { useState } from 'react';
import { Search, User, Building, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface BrokerOption {
  id: string;
  name: string;
  logo?: string;
}

const brokerOptions: BrokerOption[] = [
  { id: 'zerodha', name: 'Zerodha', logo: '/brokers/zerodha.png' },
  { id: 'upstox', name: 'Upstox', logo: '/brokers/upstox.png' },
  { id: 'angelone', name: 'Angel One', logo: '/brokers/angelone.png' },
  { id: 'fyers', name: 'Fyers', logo: '/brokers/fyers.png' },
  { id: 'icici', name: 'ICICI Direct', logo: '/brokers/icici.png' },
  { id: 'groww', name: 'Groww', logo: '/brokers/groww.png' },
];

interface FormData {
  brokerId: string;
  brokerName: string;
  clientId: string;
  clientName: string;
}

interface FormErrors {
  brokerName?: string;
  clientId?: string;
  clientName?: string;
}

export const AddBroker: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    brokerId: '',
    brokerName: '',
    clientId: '',
    clientName: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBrokers = brokerOptions.filter(broker =>
    broker.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.brokerName) {
      newErrors.brokerName = 'Broker name is required';
    }
    if (!formData.clientId) {
      newErrors.clientId = 'Client ID is required';
    }
    if (!formData.clientName) {
      newErrors.clientName = 'Client name is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  const handleBrokerSelect = (broker: BrokerOption) => {
    setFormData(prev => ({
      ...prev,
      brokerId: broker.id,
      brokerName: broker.name
    }));
    setSearchQuery(broker.name);
    setShowDropdown(false);
    setErrors(prev => ({ ...prev, brokerName: undefined }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-sm p-6 sm:p-8"
      >
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Add New Broker</h2>
          <p className="mt-1 text-sm text-gray-500">
            Connect a new broker account to your dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Broker Name Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Broker Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowDropdown(true);
                    }}
                    onFocus={() => setShowDropdown(true)}
                    className={`w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                      errors.brokerName ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Search broker..."
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery('');
                        setFormData(prev => ({ ...prev, brokerId: '', brokerName: '' }));
                      }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    </button>
                  )}
                </div>
                {errors.brokerName && (
                  <p className="mt-1 text-sm text-red-600">{errors.brokerName}</p>
                )}
                {showDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
                    <ul className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {filteredBrokers.map((broker) => (
                        <li
                          key={broker.id}
                          onClick={() => handleBrokerSelect(broker)}
                          className="cursor-pointer hover:bg-indigo-50 py-2 px-3 flex items-center"
                        >
                          {broker.logo && (
                            <img
                              src={broker.logo}
                              alt={broker.name}
                              className="w-6 h-6 mr-3"
                            />
                          )}
                          <span>{broker.name}</span>
                        </li>
                      ))}
                      {filteredBrokers.length === 0 && (
                        <li className="text-gray-500 py-2 px-3">No brokers found</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Client ID Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Client ID <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.clientId}
                  onChange={(e) =>
                    setFormData(prev => ({ ...prev, clientId: e.target.value }))
                  }
                  className={`w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                    errors.clientId ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your client ID"
                />
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              {errors.clientId && (
                <p className="mt-1 text-sm text-red-600">{errors.clientId}</p>
              )}
            </div>

            {/* Client Name Field */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Client Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.clientName}
                  onChange={(e) =>
                    setFormData(prev => ({ ...prev, clientName: e.target.value }))
                  }
                  className={`w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                    errors.clientName ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your name"
                />
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              {errors.clientName && (
                <p className="mt-1 text-sm text-red-600">{errors.clientName}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Broker
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AddBroker;
