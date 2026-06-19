import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import AutoImage from './AutoImage';

const vehicles = [
  {
    name: 'Porsche 911 GT3 RS',
    category: 'Performance',
    year: '2024',
    price: '$223,800',
    image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: { power: '518 HP', speed: '3.2s 0-60', drive: 'RWD' },
  },
  {
    name: 'Mercedes-AMG GT 63',
    category: 'Grand Tourer',
    year: '2024',
    price: '$179,900',
    image: 'https://images.pexels.com/photos/1200491/pexels-photo-1200491.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: { power: '577 HP', speed: '3.1s 0-60', drive: 'AWD' },
  },
  {
    name: 'BMW M8 Competition',
    category: 'Luxury Sport',
    year: '2024',
    price: '$133,500',
    image: 'https://images.pexels.com/photos/18346532/pexels-photo-18346532.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: { power: '617 HP', speed: '3.0s 0-60', drive: 'AWD' },
  },
  {
    name: 'Audi RS e-tron GT',
    category: 'Electric Performance',
    year: '2024',
    price: '$164,200',
    image: 'https://images.pexels.com/photos/10987310/pexels-photo-10987310.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: { power: '637 HP', speed: '3.1s 0-60', drive: 'AWD' },
  },
];

export default function FeaturedVehicles() {
  const ref = useReveal();

  return (
    <section className="py-24 bg-carbon-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-accent-blue text-xs font-semibold uppercase tracking-[0.2em]">
              Featured Collection
            </span>
            <h2 className="font-display font-800 text-4xl sm:text-5xl text-white mt-3 tracking-tight">
              Premium Selection
            </h2>
          </div>
          <Link
            to="/inventory"
            className="group inline-flex items-center gap-2 text-carbon-100 hover:text-white text-sm font-medium transition-colors"
          >
            View All Inventory
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vehicles.map((vehicle, i) => (
            <div
              key={vehicle.name}
              className="reveal group glass-card rounded-2xl overflow-hidden hover-lift"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <AutoImage
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-accent-blue/90 text-white text-xs font-semibold uppercase tracking-wider">
                    {vehicle.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-medium">
                    {vehicle.year}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display font-700 text-xl text-white group-hover:text-accent-blue transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="font-display font-700 text-lg text-accent-blue mt-1">
                      {vehicle.price}
                    </p>
                  </div>
                  <button className="w-10 h-10 rounded-lg bg-white/5 hover:bg-accent-blue text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </button>
                </div>

                <div className="mt-5 pt-5 border-t border-white/5 grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-white font-display font-600 text-sm">{vehicle.specs.power}</div>
                    <div className="text-carbon-300 text-xs mt-0.5">Power</div>
                  </div>
                  <div>
                    <div className="text-white font-display font-600 text-sm">{vehicle.specs.speed}</div>
                    <div className="text-carbon-300 text-xs mt-0.5">Acceleration</div>
                  </div>
                  <div>
                    <div className="text-white font-display font-600 text-sm">{vehicle.specs.drive}</div>
                    <div className="text-carbon-300 text-xs mt-0.5">Drivetrain</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
