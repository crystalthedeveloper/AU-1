import { Award, Gem, Gauge, Shield } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const reasons = [
  {
    icon: Award,
    title: 'Certified Experts',
    description: 'Our team of ASE-certified technicians and luxury brand specialists bring decades of precision automotive experience.',
  },
  {
    icon: Gem,
    title: 'Premium Products',
    description: 'We exclusively use OEM and top-tier aftermarket components, ensuring every detail meets the highest standard.',
  },
  {
    icon: Gauge,
    title: 'Performance Focused',
    description: 'Every service and upgrade is designed to enhance driving dynamics, from engine tuning to aerodynamic optimization.',
  },
  {
    icon: Shield,
    title: 'Trusted Experience',
    description: 'With over 15 years serving discerning clients, our reputation is built on transparency and exceptional results.',
  },
];

export default function WhyChooseUs() {
  const ref = useReveal();

  return (
    <section className="py-24 bg-carbon-900 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent-blue/3 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-blue text-xs font-semibold uppercase tracking-[0.2em]">
            Why Velocity Auto
          </span>
          <h2 className="font-display font-800 text-4xl sm:text-5xl text-white mt-3 tracking-tight">
            The Standard in
            <br />
            Automotive Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="reveal group glass-card gradient-border rounded-2xl p-8 hover-lift text-center"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-blue/20 transition-colors duration-300">
                <reason.icon size={26} className="text-accent-blue" />
              </div>
              <h3 className="font-display font-700 text-lg text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-carbon-100 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
