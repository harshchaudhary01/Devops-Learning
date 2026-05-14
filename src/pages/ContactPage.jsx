import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Github, Twitter, Send, CheckCircle } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="section-tag mx-auto mb-5"><Mail size={12} /> Get In Touch</div>
          <h1 className="font-display font-extrabold text-5xl text-white mb-4">
            Let's <span className="gradient-text">talk</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Have a question, suggestion, or want to contribute? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div {...fadeUp()} className="lg:col-span-2 space-y-5">
            {[
              { icon: Mail, title: 'Email Us', value: 'hello@devopslearn.io', desc: 'We reply within 48 hours' },
              { icon: Github, title: 'GitHub', value: 'github.com/devopslearn', desc: 'Contribute content or report issues' },
              { icon: Twitter, title: 'Twitter', value: '@devopslearn', desc: 'Follow for tips and updates' },
              { icon: MessageCircle, title: 'Community', value: 'Discord Server', desc: 'Chat with other learners' },
            ].map(({ icon: Icon, title, value, desc }) => (
              <div key={title} className="glass rounded-2xl p-5 flex items-start gap-4 card-hover">
                <div className="w-10 h-10 bg-brand-500/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-brand-400" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-sm">{title}</h3>
                  <p className="text-brand-400 text-sm font-medium">{value}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-3">
            {submitted ? (
              <div className="glass rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center">
                <CheckCircle size={48} className="text-brand-400 mb-4" />
                <h3 className="font-display font-bold text-2xl text-white mb-2">Message sent! 🎉</h3>
                <p className="text-slate-400">Thanks for reaching out. We'll get back to you within 48 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="btn-secondary mt-6"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="glass rounded-2xl p-7">
                <h2 className="font-display font-bold text-xl text-white mb-6">Send a message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 text-xs font-display font-medium mb-1.5">Your Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => { setForm(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: '' })); }}
                        placeholder="John Doe"
                        className={`w-full bg-surface-700 border rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 transition-all ${errors.name ? 'border-rose-500/50 focus:ring-rose-500/30' : 'border-white/10 focus:border-brand-500/50 focus:ring-brand-500/30'}`}
                      />
                      {errors.name && <p className="text-rose-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-display font-medium mb-1.5">Email Address</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => { setForm(p => ({ ...p, email: e.target.value })); setErrors(p => ({ ...p, email: '' })); }}
                        placeholder="john@example.com"
                        className={`w-full bg-surface-700 border rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 transition-all ${errors.email ? 'border-rose-500/50 focus:ring-rose-500/30' : 'border-white/10 focus:border-brand-500/50 focus:ring-brand-500/30'}`}
                      />
                      {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-display font-medium mb-1.5">Subject</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                      placeholder="Question about Docker..."
                      className="w-full bg-surface-700 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-display font-medium mb-1.5">Message</label>
                    <textarea
                      value={form.message}
                      onChange={e => { setForm(p => ({ ...p, message: e.target.value })); setErrors(p => ({ ...p, message: '' })); }}
                      placeholder="Tell us more..."
                      rows={5}
                      className={`w-full bg-surface-700 border rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 transition-all resize-none ${errors.message ? 'border-rose-500/50 focus:ring-rose-500/30' : 'border-white/10 focus:border-brand-500/50 focus:ring-brand-500/30'}`}
                    />
                    {errors.message && <p className="text-rose-400 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    <Send size={15} />
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
