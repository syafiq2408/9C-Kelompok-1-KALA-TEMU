import { useState } from 'react';
import { REPORT_TEXT } from '../data/cafeData';
import { BookOpen, Copy, Check, Printer, Sparkles, Globe } from 'lucide-react';

export function ReportTextSection() {
  const [language, setLanguage] = useState<'english' | 'indonesian'>('english');
  const [copied, setCopied] = useState(false);

  const currentReport = REPORT_TEXT[language];

  const handleCopyReport = () => {
    const text = `${currentReport.title}\n\n${currentReport.generalClassification}\n\nArchitectural & Ambiance:\n${currentReport.description.architectural}\n\nCulinary & Menu:\n${currentReport.description.menu}\n\nSmart Technology:\n${currentReport.description.technology}\n\nConclusion:\n${currentReport.conclusion}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrintReport = () => {
    window.print();
  };

  return (
    <section id="report" className="py-24 bg-white/75 relative overflow-hidden border-t border-[#E5D9CE]">
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#E6D5C3]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#EAE0D5] border border-[#D7C4B7] text-[#6F4E37] text-xs font-bold tracking-wide">
            <BookOpen className="w-4 h-4" />
            <span>Educational Report Text</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-800 font-serif-heading tracking-tight">
            Report Text & Analysis of KALA TEMU
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Comprehensive descriptive and analytical report on KALA TEMU Smart Cafe in English & Indonesian.
          </p>
        </div>

        {/* Language Switcher & Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#E5D9CE] mb-8 shadow-md">
          <div className="flex items-center space-x-2 bg-[#FAF6F0] p-1.5 rounded-xl border border-[#E5D9CE]">
            <Globe className="w-4 h-4 text-[#8C6D53] ml-2" />
            <button
              onClick={() => setLanguage('english')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                language === 'english'
                  ? 'bg-[#8C6D53] text-white shadow-sm'
                  : 'text-stone-600 hover:text-[#8C6D53]'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('indonesian')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                language === 'indonesian'
                  ? 'bg-[#8C6D53] text-white shadow-sm'
                  : 'text-stone-600 hover:text-[#8C6D53]'
              }`}
            >
              Bahasa Indonesia
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleCopyReport}
              className="px-4 py-2.5 rounded-xl bg-[#FAF6F0] hover:bg-[#EAE0D5] text-[#8C6D53] font-bold text-xs flex items-center space-x-1.5 border border-[#E5D9CE] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-600">Text Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#8C6D53]" />
                  <span>Copy Report</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrintReport}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#8C6D53] to-[#A47E5B] hover:opacity-90 text-white font-bold text-xs flex items-center space-x-1.5 transition-colors shadow-md shadow-[#8C6D53]/30"
            >
              <Printer className="w-4 h-4" />
              <span>Print / PDF</span>
            </button>
          </div>
        </div>

        {/* Report Content Box */}
        <div className="bg-white border-2 border-[#E5D9CE] rounded-[2.5rem] p-8 sm:p-10 shadow-xl space-y-8">
          
          <div className="border-b border-[#E5D9CE] pb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-800 font-serif-heading mb-2">
              {currentReport.title}
            </h3>
            <p className="text-[#8C6D53] text-sm font-medium italic">{currentReport.subtitle}</p>
          </div>

          {/* General Classification */}
          <div className="space-y-3">
            <h4 className="text-[#8C6D53] font-bold text-sm tracking-wider uppercase flex items-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>1. General Classification</span>
            </h4>
            <p className="text-stone-700 text-base leading-relaxed bg-[#FAF6F0] p-5 rounded-2xl border border-[#E5D9CE]">
              {currentReport.generalClassification}
            </p>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h4 className="text-[#8C6D53] font-bold text-sm tracking-wider uppercase flex items-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>2. Description</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#E5D9CE] space-y-2">
                <h5 className="text-stone-800 font-bold text-sm">🏛️ Architecture & Ambiance</h5>
                <p className="text-stone-600 text-xs leading-relaxed">{currentReport.description.architectural}</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF4EC] border border-[#D7C4B7] space-y-2">
                <h5 className="text-stone-800 font-bold text-sm">☕ Menu & Culinary</h5>
                <p className="text-stone-600 text-xs leading-relaxed">{currentReport.description.menu}</p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <h5 className="text-stone-800 font-bold text-sm">🤖 Smart IoT Technology</h5>
                <p className="text-stone-600 text-xs leading-relaxed">{currentReport.description.technology}</p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="space-y-3 pt-4 border-t border-[#E5D9CE]">
            <h4 className="text-[#8C6D53] font-bold text-sm tracking-wider uppercase flex items-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>3. Conclusion</span>
            </h4>
            <p className="text-stone-700 text-base leading-relaxed bg-[#FAF6F0] p-5 rounded-2xl border border-[#E5D9CE]">
              {currentReport.conclusion}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
