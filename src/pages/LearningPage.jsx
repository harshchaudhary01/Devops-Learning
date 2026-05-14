import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Clock, BarChart2, X } from 'lucide-react';
import { technologies } from '../data/content';

const difficultyColor = {
  Beginner: 'text-brand-400 bg-brand-500/10',
  Intermediate: 'text-yellow-400 bg-yellow-500/10',
  Advanced: 'text-rose-400 bg-rose-500/10',
};

export default function LearningPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filtered = technologies.filter(t => {
    const matchSearch =
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase()) ||
      t.topics.some(topic => topic.toLowerCase().includes(search.toLowerCase()));
    const matchFilter = filter === 'All' || t.difficulty === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 section-tag mb-5">
            📚 Learning Paths
          </div>
          <h1 className="font-display font-extrabold text-5xl text-white mb-4">
            Choose Your <span className="gradient-text">Learning Path</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Each path contains detailed guides, hands-on projects, commands, FAQs, and interview prep.
          </p>
        </motion.div>

        {/* Search + Filter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-3 mb-10 max-w-2xl mx-auto"
        >
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search technologies, topics..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-surface-800 border border-white/10 rounded-xl pl-10 pr-10 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30 transition-all"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white">
                <X size={14} />
              </button>
            )}
          </div>
          <div className="flex gap-2">
            {levels.map(level => (
              <button
                key={level}
                onClick={() => setFilter(level)}
                className={`px-3 py-2 rounded-lg text-xs font-display font-semibold transition-all ${
                  filter === level
                    ? 'bg-brand-500 text-white'
                    : 'glass text-slate-400 hover:text-white'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards grid */}
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="font-display font-semibold text-white mb-2">No results found</h3>
            <p className="text-slate-400">Try a different search term or filter</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((tech, i) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={`/learning/${tech.id}`}
                  className={`group block glass-dark rounded-2xl overflow-hidden card-hover border ${tech.borderColor} transition-all duration-300 hover:shadow-2xl`}
                >
                  {/* Card top gradient bar */}
                  <div className={`h-1 bg-gradient-to-r ${tech.color}`} />

                  <div className="p-6">
                    {/* Icon + badge */}
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-14 h-14 ${tech.bgColor} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                        {tech.icon}
                      </div>
                      <span className={`text-xs font-display font-bold px-2.5 py-1 rounded-full ${difficultyColor[tech.difficulty]}`}>
                        {tech.difficulty}
                      </span>
                    </div>

                    {/* Info */}
                    <h3 className="font-display font-bold text-xl text-white mb-1">{tech.name}</h3>
                    <p className={`text-sm font-display font-medium ${tech.textColor} mb-3`}>{tech.tagline}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">{tech.description}</p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {tech.topics.map(topic => (
                        <span key={topic} className="glass text-xs text-slate-400 px-2.5 py-1 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                        <Clock size={12} />
                        {tech.time}
                      </div>
                      <span className={`flex items-center gap-1.5 text-sm font-display font-semibold ${tech.textColor} group-hover:gap-2.5 transition-all`}>
                        Learn More <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 glass rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <BarChart2 size={28} className="text-brand-400 mx-auto mb-3" />
          <h3 className="font-display font-semibold text-white mb-2">Recommended Learning Order</h3>
          <p className="text-slate-400 text-sm">
            Start with <span className="text-brand-400">Docker</span>, then move to{' '}
            <span className="text-indigo-400">Kubernetes</span>,{' '}
            <span className="text-orange-400">AWS</span>,{' '}
            <span className="text-violet-400">Terraform</span>,{' '}
            <span className="text-red-400">Jenkins</span>, and finally{' '}
            <span className="text-rose-400">Prometheus</span>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
