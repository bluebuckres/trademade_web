import React, { useState, useEffect } from 'react';
import { coreTools, brokers } from './ChakraLogos';

interface ChakraNodeProps {
  icon: React.ReactNode;
  label: string;
  description?: string;
  angle: number;
  radius: number;
  size?: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isNeighbor: boolean;
}

interface FeatureCardProps {
  title: string;
  description: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  gradient: string;
}

const MobileFeatureCards: React.FC = () => {
  const features = [
    {
      icon: "⚡",
      title: "Lightning-Fast",
      description: "Execute trades in milliseconds",
      gradient: "rgba(79, 70, 229, 0.9), rgba(147, 51, 234, 0.9)"
    },
    {
      icon: "🔄",
      title: "Multi-Broker",
      description: "Trade across multiple platforms",
      gradient: "rgba(59, 130, 246, 0.9), rgba(37, 99, 235, 0.9)"
    },
    {
      icon: "🛡️",
      title: "Risk Control",
      description: "Auto stop-loss & risk limits",
      gradient: "rgba(236, 72, 153, 0.9), rgba(219, 39, 119, 0.9)"
    },
    {
      icon: "📊",
      title: "Live Analytics",
      description: "Real-time P&L tracking",
      gradient: "rgba(14, 165, 233, 0.9), rgba(6, 182, 212, 0.9)"
    },
    {
      icon: "🔌",
      title: "Easy Connect",
      description: "Simple broker API setup",
      gradient: "rgba(168, 85, 247, 0.9), rgba(147, 51, 234, 0.9)"
    },
    {
      icon: "📱",
      title: "Telegram Alerts",
      description: "Instant trade notifications",
      gradient: "rgba(236, 72, 153, 0.9), rgba(219, 39, 119, 0.9)"
    },
    {
      icon: "☁️",
      title: "Cloud Ready",
      description: "AWS, GCP & Azure support",
      gradient: "rgba(59, 130, 246, 0.9), rgba(37, 99, 235, 0.9)"
    },
    {
      icon: "📈",
      title: "Data Feeds",
      description: "Multiple vendor support",
      gradient: "rgba(14, 165, 233, 0.9), rgba(6, 182, 212, 0.9)"
    }
  ];

  return (
    <div className="lg:hidden w-full mt-8">
      <div className="grid grid-cols-2 gap-3 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl p-4 shadow-lg transform transition-all duration-300 active:scale-95 hover:shadow-xl"
            style={{
              background: `linear-gradient(135deg, ${feature.gradient})`,
            }}
          >
            <div className="flex items-start space-x-3">
              <span className="text-2xl">{feature.icon}</span>
              <div>
                <h3 className="font-bold text-white text-sm mb-1">{feature.title}</h3>
                <p className="text-white/90 text-xs leading-tight">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DesktopFeatureCard: React.FC<FeatureCardProps> = ({ title, description, position, gradient }) => {
  const positionClasses = {
    'top-left': '-translate-x-full -translate-y-1/2 left-0 top-1/4 -rotate-6',
    'top-right': 'translate-x-full -translate-y-1/2 right-0 top-1/4 rotate-6',
    'bottom-left': '-translate-x-full translate-y-1/2 left-0 bottom-1/4 rotate-6',
    'bottom-right': 'translate-x-full translate-y-1/2 right-0 bottom-1/4 -rotate-6',
  };

  return (
    <div 
      className={`absolute w-64 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 
        ${positionClasses[position]}
        hidden lg:block`}
      style={{ 
        background: `linear-gradient(135deg, ${gradient})`,
        backdropFilter: 'blur(10px)',
      }}
    >
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/90">{description}</p>
    </div>
  );
};

const ChakraNode: React.FC<ChakraNodeProps> = ({ 
  icon, 
  label, 
  description, 
  angle, 
  radius,
  size = 16,
  onMouseEnter,
  onMouseLeave,
  isNeighbor
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  const scale = isHovered ? 1.5 : isNeighbor ? 1.2 : 1;
  const zIndex = isHovered ? 50 : isNeighbor ? 40 : 30;

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        zIndex: zIndex
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        onMouseEnter();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onMouseLeave();
      }}
    >
      <div className="relative">
        <div 
          className={`rounded-full shadow-lg p-2 transition-all duration-300 overflow-hidden
            ${isHovered ? 'shadow-xl shadow-purple-500/20' : 'shadow-md shadow-gray-300/20'}`}
          style={{ 
            width: `${size}px`, 
            height: `${size}px`,
            transform: `scale(${scale})`,
            background: isHovered ? 'linear-gradient(135deg, #ffffff 0%, #f0f0ff 100%)' : 'white',
          }}
        >
          {icon}
        </div>
        {isHovered && (
          <div className="absolute z-50 bg-gradient-to-br from-white to-purple-50 rounded-lg shadow-xl p-3 transform -translate-x-1/2 mt-2 left-1/2 text-center min-w-[120px]">
            <h3 className="font-semibold text-gray-900">{label}</h3>
            {description && (
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const TradingChakra: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredType, setHoveredType] = useState<'tool' | 'broker' | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getBaseSize = () => {
    if (window.innerWidth < 640) return { broker: 40, tool: 45 };
    if (window.innerWidth < 768) return { broker: 60, tool: 65 };
    return { broker: 80, tool: 90 };
  };

  const { broker: brokerBaseSize, tool: toolBaseSize } = getBaseSize();

  const getRadius = () => {
    if (window.innerWidth < 640) return { inner: 120, outer: 180 };
    if (window.innerWidth < 768) return { inner: 160, outer: 220 };
    return { inner: 200, outer: 280 };
  };

  const { inner: innerRadius, outer: outerRadius } = getRadius();

  const getNeighborIndices = (index: number, totalItems: number) => {
    const prev = (index - 1 + totalItems) % totalItems;
    const next = (index + 1) % totalItems;
    return [prev, next];
  };

  const isNeighbor = (index: number, type: 'tool' | 'broker') => {
    if (hoveredIndex === null || hoveredType !== type) return false;
    const neighbors = getNeighborIndices(
      hoveredIndex, 
      type === 'tool' ? coreTools.length : brokers.length
    );
    return neighbors.includes(index);
  };

  const desktopFeatures = [
    {
      title: "Lightning-Fast Execution",
      description: "Execute trades in milliseconds with our high-performance engine",
      gradient: "rgba(79, 70, 229, 0.9) 0%, rgba(147, 51, 234, 0.9) 100%"
    },
    {
      title: "Multi-Broker Trading",
      description: "Trade seamlessly across multiple brokers from one platform",
      gradient: "rgba(59, 130, 246, 0.9) 0%, rgba(37, 99, 235, 0.9) 100%"
    },
    {
      title: "Risk Management",
      description: "Advanced risk controls with automated stop-loss",
      gradient: "rgba(236, 72, 153, 0.9) 0%, rgba(219, 39, 119, 0.9) 100%"
    },
    {
      title: "Live Analytics",
      description: "Real-time P&L tracking and performance metrics",
      gradient: "rgba(14, 165, 233, 0.9) 0%, rgba(6, 182, 212, 0.9) 100%"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="relative w-full max-w-[700px] aspect-square mx-auto overflow-visible">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 rounded-full opacity-50" />
        
        {/* Desktop Feature Cards */}
        {desktopFeatures.map((feature, index) => (
          <DesktopFeatureCard
            key={index}
            position={['top-left', 'top-right', 'bottom-left', 'bottom-right'][index] as any}
            title={feature.title}
            description={feature.description}
            gradient={feature.gradient}
          />
        ))}

        {/* Background circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full aspect-square border-2 border-purple-200/50 rounded-full animate-pulse" />
          <div className="absolute w-3/4 aspect-square border-2 border-blue-200/50 rounded-full" />
        </div>

        {/* Center logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full 
            bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 
            flex items-center justify-center shadow-xl">
            <div className="text-white text-center">
              <div className="font-bold text-xl sm:text-2xl md:text-3xl">TradeMate</div>
              <div className="text-sm sm:text-base md:text-lg font-light">AI-Powered</div>
              <div className="text-xs sm:text-sm md:text-sm font-medium">Trading Engine</div>
            </div>
          </div>
        </div>

        {/* Inner circle tools */}
        <div className="absolute inset-0">
          {coreTools.map((tool, index) => (
            <ChakraNode
              key={`tool-${index}`}
              icon={tool.icon}
              label={tool.label}
              description={tool.description}
              angle={(360 / coreTools.length) * index}
              radius={innerRadius}
              size={toolBaseSize}
              onMouseEnter={() => {
                setHoveredIndex(index);
                setHoveredType('tool');
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setHoveredType(null);
              }}
              isNeighbor={isNeighbor(index, 'tool')}
            />
          ))}
        </div>

        {/* Outer circle brokers */}
        <div className="absolute inset-0">
          {brokers.map((broker, index) => (
            <ChakraNode
              key={`broker-${index}`}
              icon={broker.icon}
              label={broker.label}
              angle={(360 / brokers.length) * index}
              radius={outerRadius}
              size={brokerBaseSize}
              onMouseEnter={() => {
                setHoveredIndex(index);
                setHoveredType('broker');
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setHoveredType(null);
              }}
              isNeighbor={isNeighbor(index, 'broker')}
            />
          ))}
        </div>
      </div>

      {/* Mobile Feature Cards */}
      <MobileFeatureCards />
    </div>
  );
};

export default TradingChakra;
