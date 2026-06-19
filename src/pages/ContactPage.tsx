import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function ContactPage() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <main className="pt-24 bg-carbon-950 min-h-screen" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="reveal">
          <span className="text-accent-blue text-xs font-semibold uppercase tracking-[0.2em]">
            Get In Touch
          </span>
          <h1 className="font-display font-900 text-5xl sm:text-6xl text-white mt-3 tracking-tight">
            Book Your
            <br />
            <span className="text-gradient-accent">Consultation</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-16">
          <div className="lg:col-span-3">
            <div className="reveal glass-card gradient-border rounded-2xl p-8">
              <h2 className="font-display font-700 text-xl text-white mb-6">
                Send Us a Message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 rounded-lg bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm">
                  Thank you for your inquiry. Our team will be in touch within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-carbon-200 text-xs font-medium mb-2 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className="w-full px-4 py-3 bg-carbon-800 border border-white/5 rounded-lg text-white text-sm placeholder:text-carbon-400 focus:outline-none focus:border-accent-blue/30 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-carbon-200 text-xs font-medium mb-2 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className="w-full px-4 py-3 bg-carbon-800 border border-white/5 rounded-lg text-white text-sm placeholder:text-carbon-400 focus:outline-none focus:border-accent-blue/30 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-carbon-200 text-xs font-medium mb-2 uppercase tracking-wider">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="w-full px-4 py-3 bg-carbon-800 border border-white/5 rounded-lg text-white text-sm placeholder:text-carbon-400 focus:outline-none focus:border-accent-blue/30 transition-colors"
                      placeholder="(310) 555-0199"
                    />
                  </div>
                  <div>
                    <label className="block text-carbon-200 text-xs font-medium mb-2 uppercase tracking-wider">
                      Service Interest
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => update('service', e.target.value)}
                      className="w-full px-4 py-3 bg-carbon-800 border border-white/5 rounded-lg text-white text-sm focus:outline-none focus:border-accent-blue/30 transition-colors appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="purchase">Vehicle Purchase</option>
                      <option value="performance">Performance Tuning</option>
                      <option value="detailing">Premium Detailing</option>
                      <option value="wrap">Custom Wrap / Tint</option>
                      <option value="suspension">Suspension & Aero</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-carbon-200 text-xs font-medium mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="w-full px-4 py-3 bg-carbon-800 border border-white/5 rounded-lg text-white text-sm placeholder:text-carbon-400 focus:outline-none focus:border-accent-blue/30 transition-colors resize-none"
                    placeholder="Tell us about your project or vehicle interest..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent-blue hover:bg-accent-blue-dim text-white font-display font-600 text-sm rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/25"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="reveal glass-card gradient-border rounded-2xl p-8">
              <h3 className="font-display font-700 text-lg text-white mb-6">Contact Info</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-accent-blue" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Visit Us</div>
                    <div className="text-carbon-100 text-sm mt-1">1240 Performance Blvd<br />Beverly Hills, CA 90210</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-accent-blue" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Call Us</div>
                    <div className="text-carbon-100 text-sm mt-1">(310) 555-0199</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-accent-blue" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Email Us</div>
                    <div className="text-carbon-100 text-sm mt-1">info@velocityauto.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal glass-card gradient-border rounded-2xl p-8">
              <h3 className="font-display font-700 text-lg text-white mb-6">Business Hours</h3>
              <div className="space-y-3">
                {[
                  { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
                  { day: 'Saturday', hours: '10:00 AM - 5:00 PM' },
                  { day: 'Sunday', hours: 'By Appointment' },
                ].map((schedule) => (
                  <div key={schedule.day} className="flex items-center justify-between">
                    <span className="text-carbon-100 text-sm">{schedule.day}</span>
                    <span className="text-white text-sm font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-white/5 flex items-center gap-3">
                <Clock size={16} className="text-accent-blue" />
                <span className="text-carbon-200 text-xs">Consultations available by appointment outside regular hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
