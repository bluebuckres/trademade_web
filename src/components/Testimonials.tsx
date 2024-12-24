const testimonials = [
  {
    quote: "TradeMade has revolutionized our trading operations. The unified execution platform has significantly reduced our operational overhead.",
    author: "Sarah Chen",
    role: "Head of Trading",
    company: "Quantum Capital"
  },
  {
    quote: "The microsecond latency and reliable infrastructure have given us a competitive edge in the market.",
    author: "Michael Rodriguez",
    role: "CTO",
    company: "Alpha Trading Systems"
  },
  {
    quote: "Outstanding platform with enterprise-grade security. It's exactly what we needed for our institutional clients.",
    author: "David Park",
    role: "Managing Director",
    company: "Summit Securities"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by leading firms
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our clients say about TradeMade
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="relative p-6 bg-white rounded-2xl shadow-sm">
              <blockquote className="text-gray-600 mb-4">"{testimonial.quote}"</blockquote>
              <div className="mt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="text-sm text-blue-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}