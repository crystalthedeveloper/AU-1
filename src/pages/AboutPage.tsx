import { Award, Users, Wrench, Clock, Target, Heart } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import AutoImage from '../components/AutoImage';

const values = [
  { icon: Target, title: 'Precision', description: 'Every detail is engineered to exacting standards, from our hand-selected inventory to our meticulous service work.' },
  { icon: Award, title: 'Excellence', description: 'We never settle for good enough. Our pursuit of perfection drives every vehicle we touch and every client we serve.' },
  { icon: Heart, title: 'Passion', description: 'Automotive culture is in our DNA. We live and breathe performance, and it shows in every project we deliver.' },
  { icon: Users, title: 'Community', description: 'We build lasting relationships with our clients, creating a community of enthusiasts who share our vision.' },
];

const team = [
  { name: 'David Morales', role: 'Founder & CEO', image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Sarah Kim', role: 'Head of Performance', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Marcus Reeves', role: 'Lead Detailer', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Elena Vasquez', role: 'Client Relations', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const milestones = [
  { icon: Clock, value: '15+', label: 'Years of Excellence' },
  { icon: Wrench, value: '500+', label: 'Vehicles Serviced' },
  { icon: Users, value: '300+', label: 'Satisfied Clients' },
  { icon: Award, value: '12', label: 'Industry Awards' },
];

export default function AboutPage() {
  const ref = useReveal();

  return (
    <main className="pt-24 bg-carbon-950 min-h-screen" ref={ref}>
      <div className="relative">
        <div className="absolute inset-0 h-[500px]">
          <AutoImage
            src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Premium automotive studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-950/60 via-carbon-950/80 to-carbon-950" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-32">
          <div className="reveal max-w-3xl">
            <span className="text-accent-blue text-xs font-semibold uppercase tracking-[0.2em]">
              Our Story
            </span>
            <h1 className="font-display font-900 text-5xl sm:text-6xl lg:text-7xl text-white mt-3 tracking-tight leading-[0.95]">
              Driven by
              <br />
              <span className="text-gradient-accent">Precision</span>
            </h1>
            <p className="text-carbon-100 text-lg mt-6 max-w-xl leading-relaxed">
              Founded in 2009, Velocity Auto was born from a passion for
              automotive excellence and a vision to create a destination where
              performance meets luxury.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-16 relative z-20">
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
          {milestones.map((m) => (
            <div key={m.label} className="glass-card gradient-border rounded-2xl p-6 text-center">
              <m.icon size={24} className="text-accent-blue mx-auto mb-3" />
              <div className="font-display font-800 text-3xl text-white">{m.value}</div>
              <div className="text-carbon-200 text-xs uppercase tracking-wider mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="text-accent-blue text-xs font-semibold uppercase tracking-[0.2em]">
              Our Philosophy
            </span>
            <h2 className="font-display font-800 text-4xl text-white mt-3 tracking-tight">
              Where Craftsmanship
              <br />
              Meets Performance
            </h2>
            <p className="text-carbon-100 text-base leading-relaxed mt-6">
              At Velocity Auto, we believe that every vehicle deserves to perform
              at its absolute best. Our approach combines the precision of
              motorsport engineering with the refinement of luxury automotive
              culture. Every service, every upgrade, and every vehicle in our
              collection reflects this unwavering commitment.
            </p>
            <p className="text-carbon-100 text-base leading-relaxed mt-4">
              We have built our reputation one client at a time, earning trust
              through transparent communication, exceptional workmanship, and
              results that consistently exceed expectations. Our facility is
              equipped with state-of-the-art technology and staffed by
              specialists who share a singular dedication to automotive
              perfection.
            </p>
          </div>

          <div className="reveal relative">
            <div className="rounded-2xl overflow-hidden">
              <AutoImage
                src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Performance workshop"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 glass-card gradient-border rounded-2xl p-6 hidden lg:flex flex-col items-center justify-center">
              <div className="font-display font-900 text-4xl text-white">15+</div>
              <div className="text-carbon-200 text-xs uppercase tracking-wider mt-1 text-center">Years of<br />Excellence</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-carbon-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent-blue text-xs font-semibold uppercase tracking-[0.2em]">
              Core Values
            </span>
            <h2 className="font-display font-800 text-4xl text-white mt-3 tracking-tight">
              What Drives Us
            </h2>
          </div>

          <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="glass-card gradient-border rounded-2xl p-8 hover-lift text-center"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon size={26} className="text-accent-blue" />
                </div>
                <h3 className="font-display font-700 text-lg text-white mb-3">{v.title}</h3>
                <p className="text-carbon-100 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-blue text-xs font-semibold uppercase tracking-[0.2em]">
            The Team
          </span>
          <h2 className="font-display font-800 text-4xl text-white mt-3 tracking-tight">
            Meet Our Specialists
          </h2>
        </div>

        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="glass-card rounded-2xl overflow-hidden hover-lift group">
              <div className="h-56 overflow-hidden">
                <AutoImage
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-display font-700 text-base text-white">{member.name}</h3>
                <p className="text-carbon-200 text-xs mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
