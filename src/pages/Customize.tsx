import React from 'react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ArrowRight } from 'lucide-react';
import TradingChakra from '../components/TradingChakra';

export const Customize = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleStartCustomizing = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Your Trading Ideas. Automated to Perfection.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Streamline your trading strategy with tools, execution, and insights tailored just for you.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button 
                onClick={handleStartCustomizing}
                className="bg-black hover:bg-gray-800"
              >
                Start Customizing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Chakra Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TradingChakra />
        </div>
      </div>

      {/* Feature Cards */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature, index) => (
              <div
                key={index}
                className="relative group bg-white p-6 rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <p className="text-sm text-gray-500">
                    {feature.hoverDetails}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to automate your trading?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Let us help you automate, optimize, and monitor your trading with precision and professionalism.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button 
                onClick={handleStartCustomizing}
                className="bg-white text-black hover:bg-gray-100"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const featureCards = [
  {
    title: "Strategy Development",
    description: "Build, automate, and refine trading strategies for any market or style.",
    hoverDetails: "From concept to execution, we craft trading strategies tailored to your needs."
  },
  {
    title: "Multi-Broker Execution",
    description: "Trade across multiple brokers and accounts seamlessly.",
    hoverDetails: "Compatible with all leading Indian brokers. Scale your trading operations effortlessly."
  },
  {
    title: "Real-Time Market Testing",
    description: "Validate your strategies in live markets.",
    hoverDetails: "Test ideas under real-world conditions and adjust for precision."
  },
  {
    title: "Backtesting",
    description: "Validate past performance before going live.",
    hoverDetails: "Run your strategies through historical data, even without automation."
  },
  {
    title: "Telegram Alerts",
    description: "Stay in control anywhere.",
    hoverDetails: "Get instant notifications for buy/sell signals, trailing SL, and more."
  },
  {
    title: "Lifetime Support",
    description: "We're always with you.",
    hoverDetails: "Whether it's bug fixes or technical issues, we ensure your system stays up and running."
  }
];

export default Customize;
