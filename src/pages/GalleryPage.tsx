import { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import AutoImage from '../components/AutoImage';

const categories = ['All', 'Showroom', 'Detailing', 'Performance', 'Interiors', 'Exterior'];

const images = [
  { src: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Showroom display', category: 'Showroom', span: 'col-span-2 row-span-2' },
  { src: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Detailing process', category: 'Detailing', span: '' },
  { src: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Performance engine bay', category: 'Performance', span: '' },
  { src: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Luxury interior', category: 'Interiors', span: '' },
  { src: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Porsche exterior', category: 'Exterior', span: '' },
  { src: 'https://images.pexels.com/photos/1200491/pexels-photo-1200491.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Mercedes showroom', category: 'Showroom', span: '' },
  { src: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Sports car side profile', category: 'Exterior', span: 'col-span-2' },
  { src: 'https://images.pexels.com/photos/18346532/pexels-photo-18346532.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'BMW performance', category: 'Detailing', span: '' },
  { src: 'https://images.pexels.com/photos/10987310/pexels-photo-10987310.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Audi e-tron GT', category: 'Performance', span: '' },
  { src: 'https://images.pexels.com/photos/4119601/pexels-photo-4119601.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Lamborghini night', category: 'Exterior', span: '' },
  { src: 'https://images.pexels.com/photos/573532/pexels-photo-573532.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Interior leather', category: 'Interiors', span: '' },
  { src: 'https://images.pexels.com/photos/919957/pexels-photo-919957.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Car wrap studio', category: 'Detailing', span: '' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);
  const ref = useReveal();

  const filtered = activeCategory === 'All'
    ? images
    : images.filter((img) => img.category === activeCategory);

  return (
    <main className="pt-24 bg-carbon-950 min-h-screen" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="reveal">
          <span className="text-accent-blue text-xs font-semibold uppercase tracking-[0.2em]">
            Portfolio
          </span>
          <h1 className="font-display font-900 text-5xl sm:text-6xl text-white mt-3 tracking-tight">
            Cinematic Gallery
          </h1>
        </div>

        <div className="reveal mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-accent-blue text-white'
                  : 'bg-carbon-800 text-carbon-100 hover:text-white hover:bg-carbon-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="reveal mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {filtered.map((img, i) => (
            <div
              key={i}
              className={`relative group rounded-xl overflow-hidden cursor-pointer ${img.span}`}
              onClick={() => setLightbox(img.src)}
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

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-carbon-950/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={20} />
          </button>
          <img
            src={lightbox.replace('w=600', 'w=1400').replace('w=800', 'w=1400')}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
