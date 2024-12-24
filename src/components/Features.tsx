import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, RefreshCw, Newspaper, Zap } from 'lucide-react';

const features = [
  {
    title: 'Multi-Broker Integration',
    description: 'Connect and manage multiple trading accounts across different brokers from a single dashboard. Streamline your operations and reduce complexity.',
    icon: Users,
    image: '/undraw_followers_oy4u.svg',
    stats: ['100+ Brokers', '1-Click Setup', 'Real-time Sync']
  },
  {
    title: 'Copy Trading System',
    description: 'Automatically replicate successful traders\' strategies across your accounts. Learn from the best and optimize your returns.',
    icon: RefreshCw,
    image: '/undraw_mind-map_saei.svg',
    stats: ['Top Traders', 'Risk Management', 'Real-time Copying']
  },
  {
    title: 'News Feed Integration',
    description: 'Stay ahead with real-time market news and automated trading triggers. Never miss a trading opportunity.',
    icon: Newspaper,
    image: '/undraw_real-time-analytics_xu2g.svg',
    stats: ['<0.1s Latency', 'AI Analysis', 'Smart Alerts']
  },
  {
    title: 'One-Click Trading',
    description: 'Execute complex trading strategies across multiple accounts with a single click. Reduce slippage and improve execution speed.',
    icon: Zap,
    image: '/undraw_select_u1sa.svg',
    stats: ['Bulk Orders', 'Smart Routing', '10x Faster']
  }
];

export const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} id="features" className="py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-semibold text-indigo-600"
          >
            Advanced Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Everything you need to trade like a pro
          </motion.p>
        </div>

        <div className="mt-4 space-y-6">
          {features.map((feature, index) => {
            const translateProgress = useTransform(
              scrollYProgress,
              [0, 1],
              [20 * (index + 1), 0]
            );

            return (
              <div key={feature.title} className="relative">
                <motion.div
                  style={{ y: translateProgress }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center relative"
                >
                  <div className={`space-y-2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center space-x-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600">
                        <feature.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    
                    <p className="text-sm text-gray-600">{feature.description}</p>
                    
                    <div className="grid grid-cols-3 gap-2">
                      {feature.stats.map((stat, statIndex) => (
                        <div
                          key={statIndex}
                          className="bg-white rounded-md p-1.5 text-center shadow-sm"
                        >
                          <p className="text-xs font-medium text-indigo-600">{stat}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="relative rounded-lg overflow-hidden bg-white/50 p-2"
                    >
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto"
                      />
                    </motion.div>

                    {/* Animated Arched Arrow */}
                    {index < features.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="absolute -bottom-4 w-16"
                        style={{ 
                          [index % 2 === 0 ? 'right' : 'left']: '20%',
                          transform: `rotate(${index % 2 === 0 ? '90' : '-90'}deg)`
                        }}
                      >
                        <motion.img
                          src="/undraw_arched-arrow.svg"
                          alt="Next Feature"
                          className="w-12 h-12 transform -rotate-90"
                          animate={{
                            x: [0, 5, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          style={{
                            filter: 'drop-shadow(0 2px 4px rgba(79, 70, 229, 0.1))'
                          }}
                        />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};