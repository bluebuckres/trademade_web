import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          The Command Center for Professional Trading
        </h1>
        <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-500">
          In the world of professional trading, success is a function of speed, strategy, and seamless execution.
        </p>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none text-gray-600">
        <p>
          Yet, the modern trading landscape is fragmented. Traders and prop desks are forced to navigate a complex web of multiple brokers, disparate accounts, and siloed information streams. This fragmentation introduces latency, operational drag, and unnecessary risk—the very enemies of profitability.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
          TradeMade was born from a singular mission: to eliminate this fragmentation.
        </h2>

        <p>
          We built an institutional-grade platform that centralizes your entire trading operation. By unifying multiple broker accounts into a single, intuitive dashboard, TradeMade provides an unparalleled level of command and control. Our architecture is built on three pillars:
        </p>

        {/* Three Pillars */}
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Absolute Speed</h3>
            <p>
              We engineered our system for near-instantaneous execution. With one-click order placement across all accounts and smart routing technology, we enable you to execute complex strategies up to 10x faster. When opportunity arises, our sub-0.1s latency ensures you are always at the front of the line.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Intelligent Automation</h3>
            <p>
              Your strategy is your edge. Our platform empowers you to automate it seamlessly. From sophisticated multi-account trade copying to advanced risk management algorithms, TradeMade handles the operational heavy lifting, allowing you to focus on high-level decision-making.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Real-Time Insight</h3>
            <p>
              In today's markets, information is alpha. Our platform integrates a real-time, low-latency news feed with AI-powered analysis and smart alerts. We cut through the noise to deliver actionable intelligence directly into your workflow, ensuring you never miss a market-moving event.
            </p>
          </div>
        </div>

        {/* Built for the Elite */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Built for the Elite</h2>
          <p>
            TradeMade is not a retail platform. It is a precision instrument designed for:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Proprietary Trading Desks:</strong> Manage team-wide strategies, control risk centrally, and gain a competitive edge with superior infrastructure.</li>
            <li><strong>Professional Traders & Fund Managers:</strong> Seamlessly execute complex strategies across personal and client accounts, saving critical time and reducing operational costs by up to 30%.</li>
            <li><strong>Systematic & High-Frequency Traders:</strong> Leverage our robust infrastructure and API for automated, high-speed execution across multiple brokers without the development overhead.</li>
          </ul>
        </div>

        {/* Philosophy */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Philosophy</h2>
          <p>
            Our philosophy is simple. When #TimeIsMoney, every second matters. We believe a trader's focus should be on strategy, not on managing clunky software. Your alpha is generated through your decisions, and our job is to ensure those decisions are executed instantly and intelligently.
          </p>
          <p className="mt-4">
            Your #DecisionsShapeDestiny, and we provide the platform to make them count.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl font-semibold text-gray-900">
            Join the professionals who choose to trade smarter, not harder.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
