import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import AutoImage from './AutoImage';

export default function CTA() {
  const ref = useReveal();

  return (
    <section className="py-24 bg-carbon-950 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <AutoImage
          src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Premium automotive workshop"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon-950 via-carbon-950/95 to-carbon-950/80" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-blue/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="reveal">
          <span className="text-accent-blue text-xs font-semibold uppercase tracking-[0.2em]">
            Take The Next Step
          </span>
          <h2 className="font-display font-900 text-4xl sm:text-5xl lg:text-6xl text-white mt-4 tracking-tight leading-tight">
            Ready To Upgrade
            <br />
            <span className="text-gradient-accent">Your Drive?</span>
          </h2>
          <p className="text-carbon-100 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
            Whether you are searching for the perfect vehicle, seeking
            performance upgrades, or want showroom-quality detailing, we are
            here to deliver.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/inventory"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent-blue hover:bg-accent-blue-dim text-white font-display font-600 text-sm rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/25 animate-pulse-glow"
            >
              View Inventory
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-display font-600 text-sm rounded-lg transition-all duration-300"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
