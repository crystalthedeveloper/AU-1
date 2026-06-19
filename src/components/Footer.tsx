import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-carbon-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-blue to-accent-blue-dim flex items-center justify-center font-display font-900 text-white text-lg">
                V
              </div>
              <div>
                <span className="font-display font-800 text-xl text-white tracking-tight">
                  VELOCITY
                </span>
                <span className="font-display font-400 text-xs text-carbon-200 tracking-[0.3em] ml-1">
                  AUTO
                </span>
              </div>
            </div>
            <p className="text-carbon-100 text-sm leading-relaxed">
              Premium automotive experiences designed with precision,
              craftsmanship, and style. Where performance meets luxury.
            </p>
          </div>

          <div>
            <h4 className="font-display font-700 text-white text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              {[
                { name: 'Inventory', path: '/inventory' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-carbon-100 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-700 text-white text-sm uppercase tracking-wider mb-6">
              Services
            </h4>
            <div className="space-y-3 text-carbon-100 text-sm">
              <p>Luxury Sales</p>
              <p>Performance Tuning</p>
              <p>Premium Detailing</p>
              <p>Custom Wraps & Tint</p>
            </div>
          </div>

          <div>
            <h4 className="font-display font-700 text-white text-sm uppercase tracking-wider mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-carbon-100 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent-blue" />
                <span>1240 Performance Blvd, Beverly Hills, CA 90210</span>
              </div>
              <div className="flex items-center gap-3 text-carbon-100 text-sm">
                <Phone size={16} className="shrink-0 text-accent-blue" />
                <span>(310) 555-0199</span>
              </div>
              <div className="flex items-center gap-3 text-carbon-100 text-sm">
                <Mail size={16} className="shrink-0 text-accent-blue" />
                <span>info@velocityauto.com</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a href="#" className="text-carbon-300 hover:text-white transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="text-carbon-300 hover:text-white transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="text-carbon-300 hover:text-white transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-carbon-300 text-xs">
            &copy; {new Date().getFullYear()} Velocity Auto. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-carbon-300 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
