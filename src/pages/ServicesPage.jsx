import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Video, Code2, MessageCircle, Briefcase, Rocket, ArrowRight, CheckCircle } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const services = [
  {
    icon: BookOpen,
    title: 'Self-Paced Learning',
    desc: 'Comprehensive written guides with step-by-step instructions, code examples, and visual explanations. Learn at your own pace, anytime.',
    features: ['6 complete learning paths', 'Interactive code examples', 'Progress tracking', 'Mobile-friendly'],
    color: 'text-brand-400 bg-brand-500/10',
    badge: 'Free',
    badgeColor: 'bg-brand-500/20 text-brand-400',
  },
  {
    icon: Code2,
    title: 'Hands-on Projects',
    desc: 'Real-world projects that simulate what you\'d work on at a tech company. Build a portfolio while you learn.',
    features: ['Dockerize a React app', 'Deploy to Kubernetes', 'AWS S3 static hosting', 'Terraform infrastructure', 'Jenkins CI/CD pipeline', 'Prometheus monitoring setup'],
    color: 'text-cyan-400 bg-cyan-500/10',
    badge: 'Free',
    badgeColor: 'bg-brand-500/20 text-brand-400',
  },
  {
    icon: Briefcase,
    title: 'Interview Preparation',
    desc: 'Every learning path includes curated interview questions with detailed answers, covering entry-level to senior DevOps roles.',
    features: ['50+ interview questions', 'Detailed answers', 'Scenario-based questions', 'Technical deep dives'],
    color: 'text-violet-400 bg-violet-500/10',
    badge: 'Free',
    badgeColor: 'bg-brand-500/20 text-brand-400',
  },
  {
    icon: MessageCircle,
    title: 'Cheatsheets & References',
    desc: 'Quick-reference cheatsheets for every technology — perfect for when you need a command and don\'t want to scroll through docs.',
    features: ['Command references', 'Config file templates', 'Architecture diagrams', 'Troubleshooting guides'],
    color: 'text-orange-400 bg-orange-500/10',
    badge: 'Free',
    badgeColor: 'bg-brand-500/20 text-brand-400',
  },
];

const techStack = [
  { name: 'Docker', icon: '🐳', desc: 'Containerization' },
  { name: 'Kubernetes', icon: '☸️', desc: 'Orchestration' },
  { name: 'AWS', icon: '☁️', desc: 'Cloud Platform' },
  { name: 'Terraform', icon: '🏗️', desc: 'Infrastructure as Code' },
  { name: 'Jenkins', icon: '⚙️', desc: 'CI/CD Automation' },
  { name: 'Prometheus', icon: '🔥', desc: 'Monitoring & Alerting' },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="section-tag mx-auto mb-5"><Rocket size={12} /> What We Offer</div>
          <h1 className="font-display font-extrabold text-5xl text-white mb-5">
            Everything you need to <span className="gradient-text">master DevOps</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From your very first command to production deployments — we've got every step covered.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {services.map((service, i) => (
            <motion.div key={service.title} {...fadeUp(i * 0.08)}>
              <div className="glass rounded-2xl p-7 h-full card-hover gradient-border">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-11 h-11 ${service.color} rounded-xl flex items-center justify-center`}>
                    <service.icon size={20} />
                  </div>
                  <span className={`text-xs font-display font-bold px-3 py-1 rounded-full ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-slate-400 text-sm">
                      <CheckCircle size={13} className="text-brand-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies covered */}
        <motion.div {...fadeUp()}>
          <h2 className="font-display font-bold text-3xl text-white text-center mb-8">
            Technologies <span className="gradient-text">covered</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech, i) => (
              <motion.div key={tech.name} {...fadeUp(i * 0.06)}>
                <Link
                  to={`/learning/${tech.name.toLowerCase()}`}
                  className="glass rounded-2xl p-5 text-center block card-hover group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{tech.icon}</div>
                  <div className="font-display font-semibold text-white text-sm">{tech.name}</div>
                  <div className="text-slate-500 text-xs mt-1">{tech.desc}</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp(0.2)} className="mt-16 glass rounded-3xl p-10 text-center gradient-border">
          <div className="text-4xl mb-4">🎯</div>
          <h2 className="font-display font-bold text-3xl text-white mb-3">Start your DevOps journey today</h2>
          <p className="text-slate-400 mb-8">No account required. No credit card. Just start learning.</p>
          <Link to="/learning" className="btn-primary inline-flex items-center gap-2 text-base">
            Browse All Courses <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
