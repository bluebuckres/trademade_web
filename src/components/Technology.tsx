import { Cpu, Network, Lock } from 'lucide-react';

const stats = [
  { label: 'Execution Speed', value: '<1ms', icon: Cpu },
  { label: 'Uptime', value: '99.99%', icon: Network },
  { label: 'Security Rating', value: 'A+', icon: Lock }
];

export function Technology() {
  return (
    <section id="technology" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built on cutting-edge technology
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Enterprise-grade infrastructure designed for reliability
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="relative p-8 bg-blue-600 rounded-2xl text-white">
              <div className="flex items-center justify-center mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}