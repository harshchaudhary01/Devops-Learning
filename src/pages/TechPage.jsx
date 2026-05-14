import { useState, useRef, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, ChevronRight, CheckCircle, AlertTriangle,
  Lightbulb, BookOpen, Code2, Star, MessageCircle,
  Briefcase, Layers, ChevronDown, ChevronUp, ExternalLink
} from 'lucide-react';
import CodeBlock from '../components/CodeBlock';
import { technologies, allContent } from '../data/content';

const sidebarSections = [
  { id: 'intro', label: 'Introduction', icon: BookOpen },
  { id: 'prerequisites', label: 'Prerequisites', icon: CheckCircle },
  { id: 'installation', label: 'Installation', icon: Code2 },
  { id: 'first-project', label: 'First Project', icon: Star },
  { id: 'commands', label: 'Commands', icon: Layers },
  { id: 'roadmap', label: 'Roadmap', icon: ChevronRight },
  { id: 'best-practices', label: 'Best Practices', icon: CheckCircle },
  { id: 'common-mistakes', label: 'Common Mistakes', icon: AlertTriangle },
  { id: 'faq', label: 'FAQ', icon: MessageCircle },
  { id: 'interview', label: 'Interview Prep', icon: Briefcase },
];

function SectionHeading({ id, children, icon: Icon }) {
  return (
    <div id={id} className="scroll-mt-24 flex items-center gap-3 mb-6 mt-12 first:mt-0">
      {Icon && <div className="w-8 h-8 bg-brand-500/15 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon size={16} className="text-brand-400" />
      </div>}
      <h2 className="font-display font-bold text-2xl text-white">{children}</h2>
    </div>
  );
}

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass rounded-xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between px-5 py-4 gap-4"
      >
        <span className="font-display font-medium text-white text-sm">{q}</span>
        {open ? <ChevronUp size={16} className="text-brand-400 flex-shrink-0" /> : <ChevronDown size={16} className="text-slate-500 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-4 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

function InstallTabs({ installation }) {
  const [os, setOs] = useState('linux');
  const tabs = [
    { key: 'linux', label: '🐧 Linux' },
    { key: 'windows', label: '🪟 Windows' },
    { key: 'mac', label: '🍎 macOS' },
  ];

  const steps = installation[os] || [];

  return (
    <div>
      <div className="flex gap-2 mb-5 glass rounded-xl p-1 w-fit">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setOs(tab.key)}
            className={`px-4 py-2 rounded-lg text-sm font-display font-medium transition-all ${
              os === tab.key ? 'bg-brand-500 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="space-y-5">
        {steps.map(step => (
          <div key={step.step} className="glass rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                {step.step}
              </span>
              <h4 className="font-display font-semibold text-white text-sm">{step.title}</h4>
            </div>
            <p className="text-slate-400 text-sm mb-3">{step.desc}</p>
            <CodeBlock code={step.cmd} language="bash" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechPage() {
  const { id } = useParams();
  const tech = technologies.find(t => t.id === id);
  const content = allContent[id];
  const [activeSection, setActiveSection] = useState('intro');
  const mainRef = useRef(null);

  if (!tech || !content) return <Navigate to="/learning" />;

  const scrollTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    sidebarSections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Top banner */}
      <div className={`h-1 bg-gradient-to-r ${tech.color}`} />

      {/* Breadcrumb */}
      <div className="border-b border-white/5 bg-surface-800/50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/learning" className="hover:text-slate-300 transition-colors">Learning</Link>
          <ChevronRight size={14} />
          <span className="text-slate-300">{tech.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0 pt-8">
            <div className="sticky top-24">
              <Link to="/learning" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6 transition-colors">
                <ArrowLeft size={14} />
                All Technologies
              </Link>
              <div className="glass rounded-2xl p-3 space-y-0.5">
                {sidebarSections.map(({ id: secId, label, icon: Icon }) => (
                  <button
                    key={secId}
                    onClick={() => scrollTo(secId)}
                    className={`w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-all ${
                      activeSection === secId
                        ? 'bg-brand-500/15 text-brand-400 font-medium'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon size={13} className="flex-shrink-0" />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main ref={mainRef} className="flex-1 min-w-0 py-8 pb-20">
            {/* Hero header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 ${tech.bgColor} rounded-2xl flex items-center justify-center text-4xl`}>
                  {tech.icon}
                </div>
                <div>
                  <h1 className="font-display font-extrabold text-4xl text-white">{tech.name}</h1>
                  <p className={`text-sm font-display font-semibold ${tech.textColor}`}>{tech.tagline}</p>
                </div>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">{tech.description}</p>
              <div className="flex flex-wrap gap-3 mt-5">
                <span className="glass px-3 py-1.5 rounded-full text-xs font-display font-semibold text-slate-300">
                  📊 Difficulty: {tech.difficulty}
                </span>
                <span className="glass px-3 py-1.5 rounded-full text-xs font-display font-semibold text-slate-300">
                  ⏱️ Time: {tech.time}
                </span>
                {tech.topics.map(t => (
                  <span key={t} className={`px-3 py-1.5 rounded-full text-xs font-display font-semibold ${tech.bgColor} ${tech.textColor}`}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* ===== INTRODUCTION ===== */}
            <SectionHeading id="intro" icon={BookOpen}>Introduction</SectionHeading>
            <div className="prose-like">
              <div className="text-slate-400 leading-relaxed whitespace-pre-line mb-6">{content.intro.what}</div>

              {/* Analogy box */}
              <div className="glass rounded-xl p-5 border-l-4 border-brand-500 mb-6 flex gap-3">
                <Lightbulb size={20} className="text-brand-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-semibold text-white text-sm mb-1">Simple Analogy 💡</p>
                  <p className="text-slate-400 text-sm">{content.intro.analogy}</p>
                </div>
              </div>

              <h3 className="font-display font-semibold text-white text-lg mb-3">Why use {tech.name}?</h3>
              <ul className="space-y-2 mb-6">
                {content.intro.why.map((why, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                    <CheckCircle size={15} className="text-brand-400 mt-0.5 flex-shrink-0" />
                    {why}
                  </li>
                ))}
              </ul>
            </div>

            {/* ===== PREREQUISITES ===== */}
            <SectionHeading id="prerequisites" icon={CheckCircle}>Prerequisites</SectionHeading>
            <div className="glass rounded-xl p-5 mb-6">
              <ul className="space-y-3">
                {content.prerequisites.map((pre, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="w-5 h-5 bg-brand-500/20 rounded-full flex items-center justify-center text-brand-400 text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {pre}
                  </li>
                ))}
              </ul>
            </div>

            {/* ===== INSTALLATION ===== */}
            <SectionHeading id="installation" icon={Code2}>Installation Guide</SectionHeading>
            <p className="text-slate-400 text-sm mb-5">Follow the steps for your operating system:</p>
            <InstallTabs installation={content.installation} />

            {/* ===== FIRST PROJECT ===== */}
            <SectionHeading id="first-project" icon={Star}>First Project: {content.firstProject.title}</SectionHeading>
            <div className="glass rounded-xl p-5 mb-5">
              <p className="font-display font-semibold text-white text-sm mb-3">📁 Folder Structure</p>
              <CodeBlock code={content.firstProject.folderStructure} language="text" />
            </div>
            <div className="space-y-5">
              {content.firstProject.steps.map((step, i) => (
                <div key={i} className="glass rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-6 h-6 bg-gradient-to-br from-brand-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <h4 className="font-display font-semibold text-white text-sm">{step.title}</h4>
                  </div>
                  <p className="text-slate-400 text-sm mb-3 pl-9">{step.desc}</p>
                  <CodeBlock code={step.cmd} language="bash" />
                </div>
              ))}
            </div>

            {/* ===== COMMANDS ===== */}
            <SectionHeading id="commands" icon={Layers}>Essential Commands</SectionHeading>
            <div className="overflow-hidden rounded-xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-700 border-b border-white/10">
                    <th className="text-left px-4 py-3 font-display font-semibold text-slate-300">Command</th>
                    <th className="text-left px-4 py-3 font-display font-semibold text-slate-300 hidden sm:table-cell">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {content.commands.map((cmd, i) => (
                    <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? '' : 'bg-surface-800/30'}`}>
                      <td className="px-4 py-3 font-mono text-brand-300 text-xs align-top">{cmd.cmd}</td>
                      <td className="px-4 py-3 text-slate-400 hidden sm:table-cell">{cmd.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ===== ROADMAP ===== */}
            <SectionHeading id="roadmap" icon={ChevronRight}>Learning Roadmap</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { level: 'Beginner', items: content.roadmap.beginner, color: 'border-brand-500/30 bg-brand-500/5', badge: 'text-brand-400 bg-brand-500/10' },
                { level: 'Intermediate', items: content.roadmap.intermediate, color: 'border-yellow-500/30 bg-yellow-500/5', badge: 'text-yellow-400 bg-yellow-500/10' },
                { level: 'Advanced', items: content.roadmap.advanced, color: 'border-rose-500/30 bg-rose-500/5', badge: 'text-rose-400 bg-rose-500/10' },
              ].map(({ level, items, color, badge }) => (
                <div key={level} className={`rounded-xl border p-5 ${color}`}>
                  <span className={`text-xs font-display font-bold px-2.5 py-1 rounded-full ${badge} mb-4 inline-block`}>{level}</span>
                  <ul className="space-y-2">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                        <span className="text-slate-600 mt-0.5">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* ===== BEST PRACTICES ===== */}
            <SectionHeading id="best-practices" icon={CheckCircle}>Best Practices</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {content.bestPractices.map((practice, i) => (
                <div key={i} className="glass rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle size={15} className="text-brand-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-400 text-sm">{practice}</p>
                </div>
              ))}
            </div>

            {/* ===== COMMON MISTAKES ===== */}
            <SectionHeading id="common-mistakes" icon={AlertTriangle}>Common Mistakes to Avoid</SectionHeading>
            <div className="space-y-3">
              {content.commonMistakes.map((mistake, i) => (
                <div key={i} className="glass rounded-xl p-4 flex items-start gap-3 border-l-4 border-rose-500/50">
                  <AlertTriangle size={15} className="text-rose-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-400 text-sm">{mistake}</p>
                </div>
              ))}
            </div>

            {/* ===== FAQ ===== */}
            <SectionHeading id="faq" icon={MessageCircle}>Frequently Asked Questions</SectionHeading>
            <div>
              {content.faq.map((item, i) => (
                <AccordionItem key={i} q={item.q} a={item.a} />
              ))}
            </div>

            {/* ===== INTERVIEW ===== */}
            <SectionHeading id="interview" icon={Briefcase}>Interview Preparation</SectionHeading>
            <p className="text-slate-400 text-sm mb-5">Common interview questions about {tech.name} and how to answer them:</p>
            <div className="space-y-4">
              {content.interview.map((item, i) => (
                <div key={i} className="glass rounded-xl overflow-hidden">
                  <div className="flex items-start gap-3 px-5 py-4 bg-surface-700/30">
                    <span className="w-6 h-6 bg-brand-500/20 rounded-full flex items-center justify-center text-brand-400 text-xs font-bold flex-shrink-0 mt-0.5">Q</span>
                    <p className="text-white text-sm font-medium">{item.q}</p>
                  </div>
                  <div className="flex items-start gap-3 px-5 py-4">
                    <span className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 text-xs font-bold flex-shrink-0 mt-0.5">A</span>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Next steps */}
            <div className="mt-16 glass rounded-2xl p-8 text-center gradient-border">
              <div className="text-3xl mb-3">🎉</div>
              <h3 className="font-display font-bold text-xl text-white mb-2">You're making great progress!</h3>
              <p className="text-slate-400 text-sm mb-6">Ready to learn the next tool? Check out all our learning paths.</p>
              <Link to="/learning" className="btn-primary inline-flex items-center gap-2">
                <ExternalLink size={14} />
                Explore All Technologies
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
