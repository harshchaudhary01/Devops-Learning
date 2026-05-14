import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Zap, Shield, Globe, Clock, Users, Star,
  BookOpen, Code2, Rocket, CheckCircle, Terminal
} from 'lucide-react';
import { technologies } from '../data/content';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

function StatCard({ value, label }) {
  return (
    <div className="text-center">
      <div className="font-display font-bold text-3xl gradient-text mb-1">{value}</div>
      <div className="text-slate-400 text-sm">{label}</div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc, delay }) {
  return (
    <motion.div {...fadeUp(delay)} className="glass rounded-2xl p-6 card-hover gradient-border">
      <div className="w-10 h-10 bg-brand-500/15 rounded-xl flex items-center justify-center mb-4">
        <Icon size={20} className="text-brand-400" />
      </div>
      <h3 className="font-display font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

const roadmapSteps = [
  { phase: '01', title: 'Foundations', desc: 'Linux, networking, Git, and the command line. Build the base before the walls.', color: 'bg-brand-500' },
  { phase: '02', title: 'Containers', desc: 'Master Docker — build, ship, and run your apps inside isolated containers.', color: 'bg-cyan-500' },
  { phase: '03', title: 'Orchestration', desc: 'Scale to thousands of containers with Kubernetes. Let the cluster manage itself.', color: 'bg-indigo-500' },
  { phase: '04', title: 'Cloud', desc: 'Host everything on AWS. Servers, databases, DNS, CDN — all in the cloud.', color: 'bg-orange-500' },
  { phase: '05', title: 'Automation', desc: 'Write infrastructure as code with Terraform. One file to build an entire datacenter.', color: 'bg-violet-500' },
  { phase: '06', title: 'CI/CD', desc: 'Never deploy manually again. Jenkins pipelines build, test, and deploy for you.', color: 'bg-red-500' },
  { phase: '07', title: 'Monitoring', desc: 'Know about problems before users do. Prometheus + Grafana watch everything.', color: 'bg-rose-500' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-20 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 section-tag mb-8"
          >
            <Rocket size={12} />
            Free • Beginner Friendly • Step-by-Step
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6"
          >
            Learn DevOps{' '}
            <span className="gradient-text">From Zero</span>
            <br />to Hero
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Step-by-step beginner-friendly roadmap for{' '}
            <span className="text-slate-200">Docker, Kubernetes, AWS, Terraform, Jenkins,</span> and{' '}
            <span className="text-slate-200">Prometheus</span>. Easy enough for a child, professional enough for real work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link to="/learning" className="btn-primary flex items-center justify-center gap-2 text-base">
              Start Learning Free
              <ArrowRight size={16} />
            </Link>
            <Link to="/#roadmap" className="btn-secondary flex items-center justify-center gap-2 text-base">
              Explore Roadmap
            </Link>
          </motion.div>

          {/* Floating tech badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.id}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
                className="glass px-4 py-2 rounded-full text-sm font-display font-medium text-slate-300 flex items-center gap-2"
              >
                <span>{tech.icon}</span>
                {tech.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-surface-800/30">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value="6" label="Technologies Covered" />
            <StatCard value="100+" label="Hands-on Projects" />
            <StatCard value="500+" label="Commands Explained" />
            <StatCard value="Free" label="Always & Forever" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <div className="section-tag mx-auto mb-4"><Zap size={12} /> Why Choose Us</div>
          <h2 className="font-display font-bold text-4xl text-white mb-4">
            Learning made <span className="gradient-text">genuinely easy</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            We don't assume you know anything. Every concept is explained with real-world analogies, step-by-step guides, and working code examples.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard icon={BookOpen} title="Beginner Friendly" desc="Written so clearly that an 8-year-old could understand. No jargon without explanation." delay={0} />
          <FeatureCard icon={Code2} title="Real Code Examples" desc="Every guide includes actual working commands and code you can copy and run immediately." delay={0.05} />
          <FeatureCard icon={CheckCircle} title="Step-by-Step" desc="Never skip steps. Every guide walks you from installation to production-ready setup." delay={0.1} />
          <FeatureCard icon={Globe} title="Cloud Ready" desc="Learn on your laptop, deploy to the cloud. The same skills, the same commands." delay={0.15} />
          <FeatureCard icon={Shield} title="Best Practices" desc="Don't just learn to do it — learn to do it the right way from day one." delay={0.2} />
          <FeatureCard icon={Clock} title="Time Estimates" desc="Each guide tells you how long it takes. Plan your learning journey with confidence." delay={0.25} />
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-24 bg-surface-800/20 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <div className="section-tag mx-auto mb-4"><Terminal size={12} /> The Path</div>
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Your DevOps <span className="gradient-text">roadmap</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Follow this order for the most effective learning. Each step builds on the previous one.
            </p>
          </motion.div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-cyan-500/30 to-transparent" />
            <div className="space-y-8">
              {roadmapSteps.map((step, i) => (
                <motion.div
                  key={step.phase}
                  {...fadeUp(i * 0.08)}
                  className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Step node */}
                  <div className="relative z-10 flex-shrink-0 md:w-1/2 flex md:justify-center">
                    <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center font-display font-bold text-white text-sm shadow-lg`}>
                      {step.phase}
                    </div>
                  </div>
                  {/* Content */}
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                    <div className="glass rounded-xl p-5 card-hover">
                      <h3 className="font-display font-semibold text-white mb-1">{step.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech preview cards */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <div className="section-tag mx-auto mb-4"><Star size={12} /> What You'll Learn</div>
          <h2 className="font-display font-bold text-4xl text-white mb-4">
            6 essential <span className="gradient-text">DevOps tools</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {technologies.map((tech, i) => (
            <motion.div key={tech.id} {...fadeUp(i * 0.07)}>
              <Link to={`/learning/${tech.id}`} className={`block glass rounded-2xl p-6 card-hover ${tech.borderColor} border group`}>
                <div className={`w-12 h-12 ${tech.bgColor} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {tech.icon}
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-1">{tech.name}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{tech.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-display font-semibold ${tech.textColor}`}>{tech.difficulty}</span>
                  <span className="text-xs text-slate-500">{tech.time}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp(0.4)} className="text-center mt-10">
          <Link to="/learning" className="btn-primary inline-flex items-center gap-2">
            View All Courses <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4">
        <motion.div {...fadeUp()} className="max-w-3xl mx-auto glass rounded-3xl p-10 text-center gradient-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-cyan-500/5 rounded-3xl" />
          <div className="relative z-10">
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="font-display font-bold text-3xl text-white mb-3">Ready to start your journey?</h2>
            <p className="text-slate-400 mb-8">Join thousands of developers who transformed their careers with DevOps skills.</p>
            <Link to="/learning" className="btn-primary inline-flex items-center gap-2 text-base">
              Start Learning For Free <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
