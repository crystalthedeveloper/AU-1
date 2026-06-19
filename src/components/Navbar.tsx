import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Inventory', path: '/inventory' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (location.pathname !== '/') {
        setScrolled(window.scrollY > 40);
        return;
      }

      const hero = document.querySelector<HTMLElement>('.hero-scroll-stage');
      setScrolled(hero ? hero.getBoundingClientRect().bottom <= 80 : window.scrollY > 40);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    const closeOnOutsideClick = (event: PointerEvent) => {
      const target = event.target as Node;

      if (
        !menuRef.current?.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOnOutsideClick);

    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOnOutsideClick);
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-dark shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-blue to-accent-blue-dim flex items-center justify-center font-display font-900 text-white text-lg tracking-tighter">
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
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`w-10 h-10 flex items-center justify-center rounded-xl text-white transition-all duration-300 ${
              menuOpen ? 'bg-white/10' : 'hover:bg-white/10'
            }`}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="site-navigation-menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={menuRef}
          id="site-navigation-menu"
          className={`absolute top-2 right-4 sm:right-6 lg:right-8 w-[calc(100vw-2rem)] max-w-[380px] rounded-[20px] border border-white/[0.08] bg-[rgba(10,10,10,0.85)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-[20px] transition-all duration-300 ease-out ${
            menuOpen
              ? 'visible translate-y-0 scale-100 opacity-100'
              : 'invisible -translate-y-3 scale-[0.98] opacity-0 pointer-events-none'
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                tabIndex={menuOpen ? 0 : -1}
                className={`group flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-sm font-600 transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'bg-white/[0.08] text-white'
                    : 'text-carbon-100 hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <span
                  className={`h-1.5 w-1.5 rounded-full bg-accent-blue transition-opacity ${
                    location.pathname === link.path
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-60'
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="mt-5 border-t border-white/[0.08] pt-5">
            <Link
              to="/contact"
              tabIndex={menuOpen ? 0 : -1}
              className="block rounded-xl bg-accent-blue px-5 py-3.5 text-center font-display text-sm font-700 text-white transition-all duration-300 hover:bg-accent-blue-dim hover:shadow-lg hover:shadow-accent-blue/20"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
