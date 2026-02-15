
import React, { useState, useEffect } from 'react';
import { SectionHeading } from './Components';
import { GoogleGenAI } from "@google/genai";

/**
 * Boon EXEC - High Fidelity Product Page
 * Refined for senior leaders with architectural signals and precise hierarchy.
 */

// Component to generate and display the AI Hero Image based on the specific editorial prompt
const ExecHeroImage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function generateHero() {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: `A high-end, editorial-style hero image for an executive coaching and leadership advisory brand. 
                Subject & Scene: A small group of senior leaders (2–4 people) in a quiet, private setting. The moment is candid and observational, not posed. One leader is listening intently while another speaks. Subtle tension. Thoughtful expressions. No whiteboards, sticky notes, or exaggerated gestures. This feels like a confidential, high-stakes conversation where decisions matter.
                Environment: Executive-level setting: private boardroom, understated office. Natural light, muted, neutral tones. Premium materials: wood, glass, stone, fabric. No laptops front and center. No startup office clichés.
                Mood & Signal: Calm authority, psychological safety, seriousness without severity. The feeling should be: “This is where judgment is sharpened before it shows up publicly.”
                Composition: Horizontal orientation, generous negative space, subjects slightly off-center, depth of field softly separating people from background.
                Styling: Wardrobe is understated and professional. Tailored but not flashy. No smiling at camera. No performative warmth.
                Visual Treatment: Editorial photography style, soft contrast, slightly desaturated color palette, rich shadows, controlled highlights.`,
              },
            ],
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9"
            }
          }
        });

        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            setImageUrl(`data:image/png;base64,${part.inlineData.data}`);
            break;
          }
        }
      } catch (error) {
        console.error("Failed to generate hero image:", error);
        // High quality fallback
        setImageUrl("https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000");
      } finally {
        setLoading(false);
      }
    }

    generateHero();
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] bg-[#1A1F24] overflow-hidden rounded-[80px] shadow-2xl border border-white/5">
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/10 border-t-white/30 rounded-full animate-spin"></div>
        </div>
      ) : imageUrl ? (
        <>
          <img 
            src={imageUrl} 
            alt="High-stakes leadership calibration" 
            className="w-full h-full object-cover opacity-70 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E353D] via-transparent to-transparent"></div>
        </>
      ) : null}
    </div>
  );
};

// Quiet confirmation indicator for Outcomes
const QuietIndicator: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="w-1.5 h-1.5 bg-[#466FF6] opacity-30 mt-2">
    {children}
  </div>
);

// Architectural Signals
const BoundaryIcon = () => (
  <svg className="w-6 h-6 text-[#2E353D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M4 8V4h4m8 0h4v4m0 8v4h-4m-8 0H4v-4" />
    <rect x="9" y="9" width="6" height="6" strokeDasharray="1 1" />
  </svg>
);

const PrecisionIcon = () => (
  <svg className="w-6 h-6 text-[#2E353D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M12 2v20M2 12h20" strokeOpacity="0.1" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
    <circle cx="12" cy="12" r="6" />
  </svg>
);

const LeverageIcon = () => (
  <svg className="w-6 h-6 text-[#2E353D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M3 16h18" />
    <path d="M11 16l1-2 1 2h-2z" fill="currentColor" />
    <circle cx="5" cy="10" r="1.5" />
    <circle cx="19" cy="4" r="1.5" />
    <path d="M5 11.5L19 5.5" strokeDasharray="2 2" />
  </svg>
);

const MinimalIcon: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="relative w-20 h-20 flex items-center justify-center mb-12 border border-gray-100 bg-white shadow-sm rounded-lg transition-all duration-500 group-hover:border-[#466FF6]/30 group-hover:scale-110">
    <div className="relative z-10 opacity-70 group-hover:opacity-100 transition-opacity">
      {children}
    </div>
  </div>
);

export const BoonExecPage: React.FC = () => {
  return (
    <main className="bg-white text-[#2E353D] overflow-hidden">
      {/* 1. Hero Section */}
      <section className="bg-[#2E353D] pt-40 pb-44 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Shape 4: Blue Concentric Bottom Right */}
        <img 
          src="https://storage.googleapis.com/boon-public-assets/Background%20Shapes/Background%20Shape%20(4).png" 
          className="absolute -bottom-44 -right-44 w-2/3 opacity-10 pointer-events-none select-none z-0"
          alt=""
        />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center relative z-10">
          <div>
            <div className="inline-flex items-center bg-white/10 text-white font-black text-[13px] tracking-[0.25em] px-10 py-5 rounded-full mb-16 uppercase border border-white/5 shadow-inner">
              Boon EXEC
            </div>
            <h1 className="text-6xl md:text-[108px] font-black text-white leading-[0.78] tracking-tighter mb-16 max-w-5xl">
              Precision in <br/>high-stakes <span className="text-[#466FF6] italic font-serif">leadership</span>.
            </h1>
            <p className="text-xl md:text-2xl text-white/40 font-medium leading-relaxed max-w-2xl mb-24">
              A confidential space for senior leaders navigating decisions where clarity, consequence, and timing matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-[#466FF6] text-white px-14 py-6 rounded-2xl font-black text-xl hover:bg-blue-600 transition-all shadow-2xl shadow-blue-900/40">
                Initiate a Confidential Inquiry
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block h-full min-h-[600px]">
            <ExecHeroImage />
          </div>
        </div>
      </section>

      {/* 2. The Executive Reality */}
      <section className="py-48 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-44">
            <p className="text-[#466FF6] font-black text-[10px] tracking-[0.4em] uppercase mb-10">The Context</p>
            <h2 className="text-4xl md:text-7xl font-black leading-[1.02] mb-14 tracking-tighter">
              Complexity is often least visible where it is most intense.
            </h2>
            <div className="space-y-12 text-gray-500 text-xl font-medium leading-relaxed max-w-2xl">
              <p>
                At the senior level, decisions are rarely binary. They are trade-offs under ambiguity, time pressure, and asymmetric information. 
                Boon EXEC provides external perspective to close the gap between strategic intent and behavioral reality.
              </p>
            </div>
          </div>
          
          <div className="mb-12">
            <p className="text-[#466FF6] font-black text-[10px] tracking-[0.4em] uppercase mb-2">The pressure points that don’t show up on org charts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
             {[
               { t: "Leadership Isolation", d: "The higher the role, the fewer people a leader can speak to with total candor." },
               { t: "Decision Fatigue", d: "Continuous high-impact choices require an intentional space for calibration." },
               { t: "Cultural Gravity of Leadership", d: "Senior leaders set the tone. Their development is an organizational imperative." },
               { t: "External Sparring", d: "An objective partner to stress-test board dynamics and internal shifts." }
             ].map(item => (
               <div key={item.t} className="p-12 border border-gray-100 rounded-[56px] hover:shadow-2xl hover:border-transparent transition-all group bg-white">
                  <div className="w-1.5 h-1.5 bg-gray-100 rounded-full mb-10 group-hover:bg-[#466FF6] transition-colors"></div>
                  <h4 className="text-2xl font-black mb-6 transition-colors tracking-tight leading-tight text-[#1A1F24] group-hover:text-[#466FF6]">
                    {item.t}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. The Philosophy */}
      <section className="py-48 px-6 md:px-12 lg:px-24 bg-[#F0F3F7]/50 relative overflow-hidden">
        {/* Background Shape 1: Gray Waves Top Right */}
        <img 
          src="https://storage.googleapis.com/boon-public-assets/Background%20Shapes/Background%20Shape%20(1).png" 
          className="absolute -top-32 -right-32 w-1/2 opacity-8 pointer-events-none select-none z-0 rotate-12"
          alt=""
        />
        <div className="max-w-5xl mx-auto text-center mb-40 relative z-10">
          <SectionHeading 
            overline="The Philosophy" 
            title="Strategic sparring. Not remediation." 
            subtitle="Executive growth is not about fixing deficits; it’s about pressure-testing judgment before it shows up in the organization."
          />
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-24 relative z-10">
           {[
             { icon: <BoundaryIcon />, t: "Absolute Discretion", d: "Privacy is our foundation. Every engagement is protected by rigorous confidentiality protocols." },
             { icon: <PrecisionIcon />, t: "Operator Depth", d: "Matched with elite coaches who have spent decades in senior leadership roles themselves." },
             { icon: <LeverageIcon />, t: "Focus on Leverage", d: "We focus on the cognitive skills that drive outsized results: presence, influence, and calm under pressure." }
           ].map(item => (
             <div key={item.t} className="text-center group">
                <div className="flex justify-center">
                  <MinimalIcon>
                    {item.icon}
                  </MinimalIcon>
                </div>
                <h4 className="text-3xl font-black mb-8 tracking-tight group-hover:scale-[1.02] transition-transform duration-500">{item.t}</h4>
                <p className="text-gray-500 font-medium leading-relaxed px-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500">{item.d}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 4. Focus Areas - Outcomes */}
      <section className="py-48 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32">
            <p className="text-[#466FF6] font-black text-[10px] tracking-[0.4em] uppercase mb-10">Outcomes</p>
            <div className="inline-block relative">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter pb-4">Leverage, not hand-holding.</h2>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#466FF6]"></div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              { t: "Leading Through Ambiguity", d: "Developing internal stability to steer teams through organizational shifts and rapid scaling." },
              { t: "Influence Without Erosion of Trust", d: "Sharpening the ability to manage board dynamics and drive consensus." },
              { t: "Sustained Executive Effectiveness", d: "Building resilience to maintain peak performance without personal depletion." },
              { t: "Decision Clarity Under Pressure", d: "A structured environment to vet strategic plans before execution." }
            ].map(area => (
              <div key={area.t} className="flex gap-12 p-16 bg-gray-50/50 rounded-[72px] border border-gray-100 hover:bg-white hover:border-[#466FF6]/20 transition-all group">
                 <div className="flex-shrink-0">
                    <QuietIndicator />
                 </div>
                 <div>
                    <h4 className="text-3xl font-black mb-6 group-hover:text-[#466FF6] transition-colors tracking-tight leading-tight">{area.t}</h4>
                    <p className="text-gray-500 font-medium text-lg leading-relaxed">{area.d}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Coherent System */}
      <section className="py-36 px-6 md:px-12 lg:px-24 bg-[#2E353D] text-white">
        <div className="max-w-7xl mx-auto text-center">
           <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">One system. Coherent growth at every level.</h3>
           <div className="max-w-3xl mx-auto mb-24">
             <p className="text-white/15 text-xl font-medium leading-relaxed mb-6">
               Boon EXEC integrates with SCALE and GROW to ensure leadership speaks a common language across levels.
             </p>
             <p className="text-white/40 font-bold italic">
               This ensures leadership development compounds across levels instead of fragmenting into disconnected tools.
             </p>
           </div>
           <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16">
              {['Boon SCALE', 'Boon GROW', 'Boon TOGETHER'].map((prod, idx) => (
                <React.Fragment key={prod}>
                  <div className="flex items-center gap-5 text-white/50 font-black text-[12px] tracking-[0.4em] uppercase">
                    <div className="w-1.5 h-1.5 bg-[#466FF6] rounded-full"></div> {prod}
                  </div>
                  {idx < 2 && (
                    <div className="hidden md:flex items-center gap-2 opacity-10">
                       <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                       <div className="w-8 h-px bg-white"></div>
                       <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
           </div>
        </div>
      </section>

      {/* 6. Why Boon EXEC - The Standard */}
      <section className="py-48 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Shape 3: Gray Spiral Bottom Left */}
        <img 
          src="https://storage.googleapis.com/boon-public-assets/Background%20Shapes/Background%20Shape%20(3).png" 
          className="absolute -bottom-32 -left-32 w-1/2 opacity-10 pointer-events-none select-none z-0"
          alt=""
        />
        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
          <SectionHeading overline="The Standard" title="The standard at the top." />
          <div className="grid md:grid-cols-3 gap-12 w-full mt-24">
             {[
               { t: "Vetted Matches", d: "We match based on operator personality, industry nuance, and growth goals using a selective operator-first approach." },
               { t: "Measured Outcomes", d: "We track qualitative and quantitative progress through our Resilience Index™, providing data-backed proof of growth." },
               { t: "Flexible Engagement", d: "Engage support for as long as it provides value, without rigid contract locks or transactional overhead." }
             ].map(item => (
               <div key={item.t} className="p-16 border border-gray-100 rounded-[64px] bg-white hover:shadow-xl transition-all">
                  <h5 className="text-2xl font-black mb-8 tracking-tight leading-tight">{item.t}</h5>
                  <p className="text-gray-400 font-medium leading-relaxed text-sm">{item.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="bg-[#466FF6] py-56 px-6 text-white text-center relative overflow-hidden">
        {/* Background Shape 5: Blue Flowing Bottom Right */}
        <img 
          src="https://storage.googleapis.com/boon-public-assets/Background%20Shapes/Background%20Shape%20(5).png" 
          className="absolute -bottom-44 -right-44 w-1/2 opacity-12 pointer-events-none select-none z-0"
          alt=""
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-[108px] font-black tracking-tighter leading-[0.78] mb-16">Clarity where the <span className="text-white/40 italic font-serif">stakes</span> are highest.</h2>
          <p className="text-lg md:text-xl text-white/60 font-medium mb-24 max-w-2xl mx-auto leading-relaxed scale-95">
            Where the stakes are highest and the margin for error is smallest.
          </p>
          <button className="bg-white text-[#466FF6] px-16 py-8 rounded-full font-black text-2xl shadow-2xl hover:scale-105 transition-all">
            Initiate a Conversation
          </button>
          
          <div className="max-w-md mx-auto mt-32">
            <div className="h-[1px] bg-white/20 w-full mb-12"></div>
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">
              Strictly Confidential • ICF Certified • Global Network
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
