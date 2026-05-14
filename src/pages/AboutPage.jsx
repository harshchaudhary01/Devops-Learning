import { motion } from 'framer-motion';
import { Heart, Rocket, BookOpen, Users, Target, Code2 } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const team = [
  { name: 'Alex Chen', role: 'DevOps Lead & Instructor', emoji: '👨‍💻', bio: '8 years of cloud engineering at scale. Ex-Google SRE.' },
  { name: 'Priya Sharma', role: 'Kubernetes Specialist', emoji: '👩‍🔬', bio: 'Certified Kubernetes administrator with production experience across 50+ clusters.' },
  { name: 'Jordan Lee', role: 'AWS Architect', emoji: '🧑‍🏫', bio: 'AWS Solutions Architect Professional. Helped 200+ startups go cloud-native.' },
  { name: 'Sam Müller', role: 'CI/CD Engineer', emoji: '👨‍🔧', bio: 'Jenkins & GitHub Actions expert. Passionate about developer experience.' },
];

const values = [
  { icon: BookOpen, title: 'Beginner First', desc: 'We never assume prior knowledge. Every guide starts from zero and explains every step.' },
  { icon: Code2, title: 'Learn by Doing', desc: 'Theory is useful, but hands-on practice is how skills stick. Every lesson has real code.' },
  { icon: Heart, title: 'Free Forever', desc: 'Quality DevOps education should be accessible to everyone, regardless of income.' },
  { icon: Target, title: 'Production Ready', desc: 'We teach the same practices used at top tech companies — not simplified toy examples.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="section-tag mx-auto mb-5">👋 Our Story</div>
          <h1 className="font-display font-extrabold text-5xl text-white mb-5">
            Built by engineers, <span className="gradient-text">for everyone</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            DevOpsLearn was created because we were frustrated with documentation that assumed you already knew everything. We believe anyone can learn DevOps with the right guidance.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div {...fadeUp()} className="glass rounded-3xl p-10 mb-16 gradient-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent rounded-3xl" />
          <div className="relative flex items-start gap-5">
            <div className="w-12 h-12 bg-brand-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Rocket size={24} className="text-brand-400" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-3">Our Mission</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                To make DevOps education so clear and practical that an absolute beginner — a student, a career changer, even a curious child — can go from zero understanding to deploying real applications in the cloud.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div {...fadeUp()} className="mb-16">
          <h2 className="font-display font-bold text-3xl text-white text-center mb-8">What we stand for</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} {...fadeUp(i * 0.1)} className="glass rounded-2xl p-6 card-hover">
                <div className="w-10 h-10 bg-brand-500/15 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={18} className="text-brand-400" />
                </div>
                <h3 className="font-display font-semibold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div {...fadeUp()}>
          <h2 className="font-display font-bold text-3xl text-white text-center mb-8">
            Meet the <span className="gradient-text">team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {team.map((member, i) => (
              <motion.div key={member.name} {...fadeUp(i * 0.1)} className="glass rounded-2xl p-6 flex items-start gap-4 card-hover">
                <div className="w-14 h-14 bg-surface-700 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                  {member.emoji}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white">{member.name}</h3>
                  <p className="text-brand-400 text-xs font-display font-medium mb-2">{member.role}</p>
                  <p className="text-slate-400 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div {...fadeUp(0.2)} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { value: '6', label: 'Courses', icon: '📚' },
            { value: '500+', label: 'Commands', icon: '⌨️' },
            { value: '100%', label: 'Free', icon: '💚' },
            { value: '∞', label: 'Learning', icon: '🚀' },
          ].map(stat => (
            <div key={stat.label} className="glass rounded-2xl p-5 text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="font-display font-bold text-2xl gradient-text">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
