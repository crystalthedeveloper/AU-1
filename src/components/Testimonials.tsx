import { Star, Quote } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const testimonials = [
  {
    name: 'Marcus Chen',
    role: 'Porsche 911 Owner',
    text: 'Velocity Auto transformed my GT3 into something truly special. The attention to detail in their performance tuning is unmatched. Every drive now feels like a track day.',
    rating: 5,
  },
  {
    name: 'Sophia Laurent',
    role: 'Mercedes-AMG Client',
    text: 'From the moment I walked in, the experience was nothing short of exceptional. They sourced my dream AMG GT and the detailing work was absolutely flawless.',
    rating: 5,
  },
  {
    name: 'James Whitfield',
    role: 'BMW M Series Owner',
    text: 'I have worked with several performance shops over the years, but Velocity Auto stands apart. Their knowledge, professionalism, and results speak for themselves.',
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useReveal();

  return (
    <section className="py-24 bg-carbon-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-blue text-xs font-semibold uppercase tracking-[0.2em]">
            Testimonials
          </span>
          <h2 className="font-display font-800 text-4xl sm:text-5xl text-white mt-3 tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal glass-card gradient-border rounded-2xl p-8 hover-lift"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Quote size={24} className="text-accent-blue/30 mb-4" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-accent-blue text-accent-blue" />
                ))}
              </div>
              <p className="text-carbon-100 text-sm leading-relaxed mb-8">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-carbon-500 to-carbon-400 flex items-center justify-center">
                  <span className="font-display font-700 text-white text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-display font-600 text-sm">{t.name}</div>
                  <div className="text-carbon-300 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
