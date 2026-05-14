import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CodeBlock({ code, language = 'bash' }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple syntax highlighting via span wrapping
  const highlight = (text) => {
    return text
      .split('\n')
      .map((line, i) => {
        // Comment lines
        if (line.trim().startsWith('#')) {
          return <div key={i} className="token-comment">{line}</div>;
        }
        // Highlight common keywords
        const parts = line.split(/(\s+)/);
        return (
          <div key={i}>
            {parts.map((part, j) => {
              if (['FROM', 'RUN', 'COPY', 'CMD', 'EXPOSE', 'WORKDIR', 'ENV', 'ARG', 'ENTRYPOINT', 'ADD', 'LABEL', 'VOLUME', 'USER'].includes(part)) {
                return <span key={j} className="token-keyword">{part}</span>;
              }
              if (['sudo', 'apt-get', 'install', 'curl', 'wget', 'docker', 'kubectl', 'terraform', 'aws', 'helm'].includes(part)) {
                return <span key={j} className="token-cmd">{part}</span>;
              }
              if (part.startsWith('-') && part.length > 1 && part.length < 20) {
                return <span key={j} className="token-flag">{part}</span>;
              }
              if (/^".*"$|^'.*'$/.test(part)) {
                return <span key={j} className="token-string">{part}</span>;
              }
              return <span key={j}>{part}</span>;
            })}
          </div>
        );
      });
  };

  return (
    <div className="relative group my-4">
      <div className="flex items-center justify-between bg-surface-700 border border-white/10 rounded-t-xl px-4 py-2">
        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{language}</span>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <Check size={12} className="text-brand-400" />
              <span className="text-brand-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="bg-surface-800 border border-t-0 border-white/10 rounded-b-xl p-4 overflow-x-auto">
        <pre className="font-mono text-sm text-slate-300 whitespace-pre leading-relaxed">
          {highlight(code)}
        </pre>
      </div>
    </div>
  );
}
