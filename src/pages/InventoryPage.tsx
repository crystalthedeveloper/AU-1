import { useState } from 'react';
import { ArrowUpRight, SlidersHorizontal, Search } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import AutoImage from '../components/AutoImage';

const vehicles = [
  {
    name: 'Porsche 911 GT3 RS',
    category: 'Performance',
    type: 'Coupe',
    year: 2024,
    price: '$223,800',
    image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: { power: '518 HP', speed: '3.2s', drive: 'RWD', engine: '4.0L Flat-6' },
  },
  {
    name: 'Mercedes-AMG GT 63',
    category: 'Grand Tourer',
    type: 'Sedan',
    year: 2024,
    price: '$179,900',
    image: 'https://images.pexels.com/photos/1200491/pexels-photo-1200491.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: { power: '577 HP', speed: '3.1s', drive: 'AWD', engine: '4.0L V8 TT' },
  },
  {
    name: 'BMW M8 Competition',
    category: 'Luxury Sport',
    type: 'Coupe',
    year: 2024,
    price: '$133,500',
    image: 'https://images.pexels.com/photos/18346532/pexels-photo-18346532.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: { power: '617 HP', speed: '3.0s', drive: 'AWD', engine: '4.4L V8 TT' },
  },
  {
    name: 'Lamborghini Huracan EVO',
    category: 'Supercar',
    type: 'Coupe',
    year: 2023,
    price: '$327,400',
    image: 'https://images.pexels.com/photos/4119601/pexels-photo-4119601.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: { power: '631 HP', speed: '2.9s', drive: 'AWD', engine: '5.2L V10' },
  },
  {
    name: 'Audi RS e-tron GT',
    category: 'Electric Performance',
    type: 'Sedan',
    year: 2024,
    price: '$164,200',
    image: 'https://images.pexels.com/photos/10987310/pexels-photo-10987310.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: { power: '637 HP', speed: '3.1s', drive: 'AWD', engine: 'Dual Motor EV' },
  },
  {
    name: 'McLaren 720S Spider',
    category: 'Supercar',
    type: 'Convertible',
    year: 2023,
    price: '$315,000',
    image: 'https://images.pexels.com/photos/7942896/pexels-photo-7942896.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: { power: '710 HP', speed: '2.8s', drive: 'RWD', engine: '4.0L V8 TT' },
  },
];

const services = [
  {
    name: 'Performance Tuning',
    description: 'ECU calibration, exhaust systems, and powertrain upgrades to unlock your vehicle\'s full potential.',
    image: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 'From $2,500',
  },
  {
    name: 'Premium Detailing',
    description: 'Multi-stage paint correction, ceramic coating, and interior refinement to showroom-perfect condition.',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 'From $1,200',
  },
  {
    name: 'Custom Wraps & Tint',
    description: 'Full and partial vehicle wraps, PPF installation, and precision window tinting with premium films.',
    image: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 'From $3,000',
  },
  {
    name: 'Suspension & Aero',
    description: 'Coilover setups, aero packages, and chassis tuning for enhanced handling and visual presence.',
    image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 'From $4,500',
  },
];

type Tab = 'vehicles' | 'services';

export default function InventoryPage() {
  const [activeTab, setActiveTab] = useState<Tab>('vehicles');
  const [search, setSearch] = useState('');
  const ref = useReveal();

  const filteredVehicles = vehicles.filter(
    (v) =>
      v.name.toLowerCase().includes(search.toLowerCase()) ||
      v.category.toLowerCase().includes(search.toLowerCase())
  );

  const filteredServices = services.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="pt-24 bg-carbon-950 min-h-screen" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="reveal">
          <span className="text-accent-blue text-xs font-semibold uppercase tracking-[0.2em]">
            Our Collection
          </span>
          <h1 className="font-display font-900 text-5xl sm:text-6xl text-white mt-3 tracking-tight">
            Inventory & Services
          </h1>
        </div>

        <div className="reveal mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex bg-carbon-800 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('vehicles')}
              className={`px-6 py-2.5 rounded-md text-sm font-display font-600 transition-all duration-300 ${
                activeTab === 'vehicles'
                  ? 'bg-accent-blue text-white shadow-lg shadow-accent-blue/20'
                  : 'text-carbon-100 hover:text-white'
              }`}
            >
              Vehicles
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-2.5 rounded-md text-sm font-display font-600 transition-all duration-300 ${
                activeTab === 'services'
                  ? 'bg-accent-blue text-white shadow-lg shadow-accent-blue/20'
                  : 'text-carbon-100 hover:text-white'
              }`}
            >
              Services
            </button>
          </div>

          <div className="flex-1 w-full sm:max-w-md relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-carbon-300" />
            <input
              type="text"
              placeholder={activeTab === 'vehicles' ? 'Search vehicles...' : 'Search services...'}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-carbon-800 border border-white/5 rounded-lg text-white text-sm placeholder:text-carbon-300 focus:outline-none focus:border-accent-blue/30 transition-colors"
            />
          </div>

          <button className="flex items-center gap-2 px-4 py-2.5 bg-carbon-800 border border-white/5 rounded-lg text-carbon-100 text-sm hover:border-white/10 transition-colors">
            <SlidersHorizontal size={16} />
            Filters
          </button>
        </div>

        {activeTab === 'vehicles' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filteredVehicles.map((vehicle, i) => (
              <div
                key={vehicle.name}
                className="reveal group glass-card rounded-2xl overflow-hidden hover-lift"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <AutoImage
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-accent-blue/90 text-white text-[10px] font-semibold uppercase tracking-wider">
                      {vehicle.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-[10px] font-medium">
                      {vehicle.type}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display font-700 text-base text-white group-hover:text-accent-blue transition-colors">
                      {vehicle.name}
                    </h3>
                    <span className="text-carbon-300 text-xs shrink-0">{vehicle.year}</span>
                  </div>
                  <p className="font-display font-700 text-accent-blue mt-1">{vehicle.price}</p>

                  <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-white font-display font-600 text-xs">{vehicle.specs.power}</div>
                      <div className="text-carbon-300 text-[10px] mt-0.5">Power</div>
                    </div>
                    <div>
                      <div className="text-white font-display font-600 text-xs">{vehicle.specs.speed}</div>
                      <div className="text-carbon-300 text-[10px] mt-0.5">0-60 mph</div>
                    </div>
                    <div>
                      <div className="text-white font-display font-600 text-xs">{vehicle.specs.drive}</div>
                      <div className="text-carbon-300 text-[10px] mt-0.5">Drivetrain</div>
                    </div>
                    <div>
                      <div className="text-white font-display font-600 text-xs">{vehicle.specs.engine}</div>
                      <div className="text-carbon-300 text-[10px] mt-0.5">Engine</div>
                    </div>
                  </div>

                  <button className="mt-4 w-full py-2.5 rounded-lg bg-white/5 hover:bg-accent-blue text-white font-display font-600 text-xs transition-all duration-300 flex items-center justify-center gap-2">
                    View Details
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {filteredServices.map((service, i) => (
              <div
                key={service.name}
                className="reveal group glass-card rounded-2xl overflow-hidden hover-lift"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <AutoImage
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/90 via-carbon-950/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display font-700 text-xl text-white">{service.name}</h3>
                    <p className="font-display font-700 text-accent-blue mt-1">{service.price}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-carbon-100 text-sm leading-relaxed">{service.description}</p>
                  <button className="mt-4 w-full py-2.5 rounded-lg bg-white/5 hover:bg-accent-blue text-white font-display font-600 text-xs transition-all duration-300 flex items-center justify-center gap-2">
                    Learn More
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
