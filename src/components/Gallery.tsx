import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import AutoImage from './AutoImage';

const images = [
  {
    src: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Luxury car in showroom',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Detailing studio',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Performance engine',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Car interior',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Sports car side profile',
    span: 'md:col-span-2',
  },
];

export default function Gallery() {
  const ref = useReveal();

  return (
    <section className="py-24 bg-carbon-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-accent-blue text-xs font-semibold uppercase tracking-[0.2em]">
              Portfolio
            </span>
            <h2 className="font-display font-800 text-4xl sm:text-5xl text-white mt-3 tracking-tight">
              Cinematic Gallery
            </h2>
          </div>
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 text-carbon-100 hover:text-white text-sm font-medium transition-colors"
          >
            View Full Gallery
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative group rounded-xl overflow-hidden cursor-pointer ${img.span}`}
            >
              <AutoImage
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-carbon-950/0 group-hover:bg-carbon-950/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <ArrowUpRight size={20} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
