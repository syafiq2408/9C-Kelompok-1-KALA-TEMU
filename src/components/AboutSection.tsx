import { TEAM_MEMBERS } from '../data/cafeData';
import { Sparkles, Award, Target, Heart } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white/75 relative overflow-hidden border-t border-[#E5D9CE]">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E6D5C3]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#EAE0D5] border border-[#D7C4B7] text-[#6F4E37] text-xs font-bold tracking-wide">
            <Sparkles className="w-4 h-4" />
            <span>About KALA TEMU</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-800 font-serif-heading tracking-tight">
            Where Warm Gatherings Meet Technology
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            KALA TEMU is a place where every gathering is special, combining the comfort of an aesthetic brown pastel latte cafe with cutting-edge smart technology.
          </p>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#FAF4EC] to-white border border-[#E5D9CE] shadow-xl shadow-stone-900/5 group hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#EAE0D5] border border-[#D7C4B7] flex items-center justify-center text-[#6F4E37] mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-3">Our Vision 🎯</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              To be Indonesia's leading smart cafe blending the warmth of local coffee culture with friendly, innovative digital automation.
            </p>
          </div>

          <div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#FAF4EC] to-white border border-[#E5D9CE] shadow-xl shadow-stone-900/5 group hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#EAE0D5] border border-[#D7C4B7] flex items-center justify-center text-[#6F4E37] mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-3">Our Mission ✨</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Serving top-quality menu items with delightful flavors, providing exceptional service, and creating the coziest mocha-themed cafe atmosphere for everyone.
            </p>
          </div>

          <div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#FAF4EC] to-white border border-[#E5D9CE] shadow-xl shadow-stone-900/5 group hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#EAE0D5] border border-[#D7C4B7] flex items-center justify-center text-[#6F4E37] mb-6 group-hover:scale-110 transition-transform">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-3">Core Values 🤎</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Warmth, Joy, Creativity, and Comfort for every visitor who steps into KALA TEMU.
            </p>
          </div>
        </div>

        {/* Founders & Team Section */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-800 font-serif-heading">
              The Brilliant Team Behind KALA TEMU 🤎
            </h3>
            <p className="text-stone-500 text-sm sm:text-base">
              The visionaries, innovators, and creators behind this smart cafe
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {TEAM_MEMBERS.map((member, index) => (
              <div 
                key={index} 
                className="rounded-[2rem] bg-white border border-[#E5D9CE] overflow-hidden hover:border-[#8C6D53] hover:shadow-xl transition-all shadow-md flex flex-col group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#8C6D53] text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-[#E5D9CE] shadow-sm">
                    Founder #0{index + 1}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-stone-800 font-bold text-base leading-tight mb-1">{member.name}</h4>
                    <span className="inline-block text-xs font-bold text-[#8C6D53] mb-2">{member.role}</span>
                    <p className="text-stone-600 text-xs leading-relaxed">{member.bio}</p>
                  </div>
                  
                  <div className="pt-3 border-t border-[#F7F3EE] text-[11px] italic text-stone-500">
                    "{member.quote}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
