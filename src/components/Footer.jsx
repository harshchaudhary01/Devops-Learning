import { Link } from 'react-router-dom';
import { Terminal, Github, Twitter, Linkedin, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-800 border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                <Terminal size={16} className="text-white" />
              </div>
              <span className="font-display font-bold text-white text-lg">
                DevOps<span className="text-brand-400">Learn</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              The most beginner-friendly DevOps learning platform. From zero to production hero.
            </p>
            <div className="flex gap-3 mt-4">
              {[
                { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-brand-400 transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/learning', label: 'Learning' },
                { to: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-slate-400 hover:text-brand-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Technologies</h4>
            <ul className="space-y-2">
              {['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins', 'Prometheus'].map(tech => (
                <li key={tech}>
                  <Link
                    to={`/learning/${tech.toLowerCase()}`}
                    className="text-slate-400 hover:text-brand-400 text-sm transition-colors"
                  >
                    {tech}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                'Docker Documentation',
                'Kubernetes Docs',
                'AWS Free Tier',
                'Terraform Registry',
                'Jenkins Plugins',
                'Prometheus Docs',
              ].map(resource => (
                <li key={resource}>
                  <a href="#" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} DevOpsLearn. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Built with <Heart size={13} className="text-rose-500 fill-rose-500" /> for aspiring DevOps engineers
          </p>
        </div>
      </div>
    </footer>
  );
}
