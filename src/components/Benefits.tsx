import { DollarSign, Clock, TrendingUp } from 'lucide-react';

const benefits = [
  {
    title: 'Reduce Costs',
    description: 'Save up to 30% on trading costs through unified execution and smart order routing.',
    icon: DollarSign
  },
  {
    title: 'Save Time',
    description: 'Execute complex trading strategies 10x faster with automated workflows.',
    icon: Clock
  },
  {
    title: 'Improve Performance',
    description: 'Achieve better execution prices with advanced order types and real-time analytics.',
    icon: TrendingUp
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why choose TradeMade?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Maximize your trading efficiency and reduce operational costs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="relative p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}