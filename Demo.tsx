
import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-8 text-left group transition-all"
      >
        <h4 className="text-xl font-bold text-[#2E353D] group-hover:text-[#466FF6] transition-colors">{question}</h4>
        <div className={`w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center transition-all ${isOpen ? 'bg-[#466FF6] border-[#466FF6] text-white rotate-45' : 'text-gray-400'}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v12M6 12h12" /></svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[300px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-500 font-medium leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export const DemoPage: React.FC = () => {
  const [formState, setFormState] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS'>('IDLE');
  const [viewMode, setViewMode] = useState<'FORM' | 'CALENDAR'>('FORM');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    employeeCount: '',
    interest: '',
    timeline: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('SUBMITTING');
    // Simulate API call
    setTimeout(() => {
      setFormState('SUCCESS');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (formState === 'SUCCESS') {
    return (
      <main className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="w-24 h-24 bg-[#E6F8F0] rounded-full flex items-center justify-center text-[#4CD995] mb-12 animate-bounce">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-[#2E353D] mb-8 tracking-tighter">Thanks, we've got your request.</h1>
        <p className="text-xl text-gray-500 font-medium max-w-2xl leading-relaxed">
          Someone from our team will follow up ASAP to confirm next steps and suggest times. We review every request personally.
        </p>
        <button 
          onClick={() => setFormState('IDLE')}
          className="mt-12 text-[#466FF6] font-black uppercase text-[11px] tracking-widest hover:opacity-70 transition-opacity"
        >
          Return to request
        </button>
      </main>
    );
  }

  return (
    <main className="bg-white text-[#2E353D] selection:bg-[#466FF6] selection:text-white">
      {/* 1. Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#F4F7FF] text-[#466FF6] text-[10px] tracking-widest font-black px-4 py-2 rounded-full mb-10 uppercase border border-blue-50">
            Schedule a Conversation
          </div>
          <h1 className="text-6xl md:text-[92px] font-black leading-[0.85] tracking-tighter mb-10 max-w-5xl">
            Schedule a conversation about your organization.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mb-12">
            A short conversation to understand your goals and determine whether Boon is the right fit.
          </p>
          
          <div className="flex flex-wrap items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#466FF6]"></div>
              Response within 1 business day
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#466FF6]"></div>
              No scripted sales pitch
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#466FF6]"></div>
              Speak directly with our team
            </div>
          </div>
        </div>
      </section>

      {/* 2. Content + Form Layout */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-24 items-start relative">
          
          {/* Left Column: Context & Sticky Summary */}
          <div className="space-y-24 lg:sticky lg:top-32">
            <div className="space-y-16">
              <div>
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#466FF6] mb-8">What this conversation covers</h3>
                <ul className="space-y-6 text-lg text-gray-500 font-medium leading-relaxed">
                  <li className="flex gap-4">
                    <span className="w-1.5 h-1.5 bg-blue-100 rounded-full mt-2.5 flex-shrink-0"></span>
                    Whether Boon fits your organization and goals
                  </li>
                  <li className="flex gap-4">
                    <span className="w-1.5 h-1.5 bg-blue-100 rounded-full mt-2.5 flex-shrink-0"></span>
                    Which programs make sense for your team today
                  </li>
                  <li className="flex gap-4">
                    <span className="w-1.5 h-1.5 bg-blue-100 rounded-full mt-2.5 flex-shrink-0"></span>
                    How pricing works as you scale
                  </li>
                </ul>
              </div>

              <div className="pt-16 border-t border-gray-100">
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-300 mb-8">What this is not</h3>
                <ul className="space-y-6">
                  {[
                    'Not a scripted sales demo', 
                    'Not therapy or clinical intake', 
                    'Not a generic product walkthrough'
                  ].map(item => (
                    <li key={item} className="flex gap-4 text-sm font-bold text-gray-400">
                      <span className="w-1.5 h-1.5 border border-gray-200 rounded-full mt-1.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Desktop Sticky Summary */}
            <div className="hidden lg:block bg-gray-50 p-10 rounded-[48px] border border-gray-100">
               <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">Request Summary</p>
               <div className="space-y-4">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-gray-400">Program</span>
                    <span className="text-[#2E353D]">{formData.interest || 'Not selected'}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-gray-400">Priority</span>
                    <span className="text-[#2E353D]">{formData.timeline === 'IMMEDIATE' ? 'Urgent' : formData.timeline === '1-3-MONTHS' ? '1-3 months' : formData.timeline === 'FUTURE' ? 'Planning' : '-'}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-gray-400">Availability</span>
                    <span className="text-[#2E353D]">To be confirmed by email</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Form Module */}
          <div className="bg-white p-8 md:p-16 rounded-[64px] border border-gray-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center mb-12">
               <div className="flex gap-2">
                 <div className={`h-1.5 w-12 rounded-full transition-colors ${viewMode === 'FORM' ? 'bg-[#466FF6]' : 'bg-gray-100'}`}></div>
                 <div className={`h-1.5 w-12 rounded-full transition-colors ${viewMode === 'CALENDAR' ? 'bg-[#466FF6]' : 'bg-gray-100'}`}></div>
               </div>
               <div className="flex flex-col items-end">
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-300">Step 1 of 2</div>
                  <div className="text-[8px] font-black uppercase tracking-widest text-gray-200 mt-1">Step 1: Request • Step 2: Confirm time by email</div>
               </div>
            </div>

            {/* Toggle Switch */}
            <div className="flex bg-gray-50 p-1.5 rounded-2xl mb-12 max-w-sm">
               <button 
                onClick={() => setViewMode('FORM')}
                className={`flex-1 py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'FORM' ? 'bg-white shadow-sm text-[#466FF6]' : 'text-gray-400 hover:text-gray-600'}`}
               >
                 Request times
               </button>
               <button 
                onClick={() => setViewMode('CALENDAR')}
                className={`flex-1 py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'CALENDAR' ? 'bg-white shadow-sm text-[#466FF6]' : 'text-gray-400 hover:text-gray-600'}`}
               >
                 View availability
               </button>
            </div>

            {viewMode === 'FORM' ? (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">First Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      placeholder="Jane" 
                      className="w-full bg-gray-50 border border-gray-100 px-8 py-5 rounded-2xl focus:outline-none focus:border-[#466FF6] transition-colors font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Last Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      placeholder="Doe" 
                      className="w-full bg-gray-50 border border-gray-100 px-8 py-5 rounded-2xl focus:outline-none focus:border-[#466FF6] transition-colors font-bold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Work Email</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="jane@company.com" 
                    className="w-full bg-gray-50 border border-gray-100 px-8 py-5 rounded-2xl focus:outline-none focus:border-[#466FF6] transition-colors font-bold"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Company</label>
                    <input 
                      required
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Company Name" 
                      className="w-full bg-gray-50 border border-gray-100 px-8 py-5 rounded-2xl focus:outline-none focus:border-[#466FF6] transition-colors font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Role / Team</label>
                    <input 
                      required
                      type="text" 
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      placeholder="VP People" 
                      className="w-full bg-gray-50 border border-gray-100 px-8 py-5 rounded-2xl focus:outline-none focus:border-[#466FF6] transition-colors font-bold"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Approx Employee Count</label>
                    <select 
                      required
                      value={formData.employeeCount}
                      onChange={(e) => setFormData({...formData, employeeCount: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 px-8 py-5 rounded-2xl focus:outline-none focus:border-[#466FF6] transition-colors font-bold appearance-none"
                    >
                      <option value="">Select Range</option>
                      <option value="1-100">1 - 100</option>
                      <option value="101-500">101 - 500</option>
                      <option value="501-2000">501 - 2,000</option>
                      <option value="2001-5000">2,001 - 5,000</option>
                      <option value="5000+">5,000+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">What are you hoping to solve?</label>
                    <select 
                      required
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 px-8 py-5 rounded-2xl focus:outline-none focus:border-[#466FF6] transition-colors font-bold appearance-none"
                    >
                      <option value="">Select Priority</option>
                      <option value="SCALE">Broad Support (Boon SCALE)</option>
                      <option value="GROW">Manager Development (Boon GROW)</option>
                      <option value="EXEC">Executive Support (Boon EXEC)</option>
                      <option value="TOGETHER">Team Alignment (Boon TOGETHER)</option>
                      <option value="UNSURE">Not sure yet</option>
                    </select>
                    <p className="text-[8px] font-bold text-gray-300 ml-4">This helps us prepare and route your request.</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Desired Timeline</label>
                  <select 
                    required
                    value={formData.timeline}
                    onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-100 px-8 py-5 rounded-2xl focus:outline-none focus:border-[#466FF6] transition-colors font-bold appearance-none"
                  >
                    <option value="">Select Timeline</option>
                    <option value="IMMEDIATE">Immediate / Urgent</option>
                    <option value="1-3-MONTHS">Next 1 - 3 months</option>
                    <option value="FUTURE">Future planning</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Anything else helpful?</label>
                  <textarea 
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    rows={4}
                    placeholder="Tell us about your specific goals or challenges."
                    className="w-full bg-gray-50 border border-gray-100 px-8 py-5 rounded-2xl focus:outline-none focus:border-[#466FF6] transition-colors font-bold resize-none"
                  ></textarea>
                </div>

                <div className="pt-6 border-t border-gray-50 flex flex-col items-center">
                  <button 
                    type="submit"
                    disabled={formState === 'SUBMITTING'}
                    className="w-full bg-[#466FF6] text-white py-6 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 disabled:opacity-50 disabled:cursor-wait"
                  >
                    {formState === 'SUBMITTING' ? 'Processing...' : 'Request times'}
                  </button>
                  <p className="mt-8 text-[9px] font-black uppercase tracking-widest text-gray-300">
                    We never share individual employee data
                  </p>
                </div>
              </form>
            ) : (
              <div className="min-h-[400px] flex flex-col items-center justify-center border-2 border-dashed border-gray-100 rounded-[48px] bg-gray-50 p-12 text-center">
                 <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#466FF6] mb-8">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                 </div>
                 <h4 className="text-2xl font-black mb-4">Optional calendar access</h4>
                 <p className="text-sm text-gray-400 font-medium max-w-xs leading-relaxed">
                   Book directly if your schedule requires immediate coordination.
                 </p>
                 <button className="mt-8 bg-white border border-gray-200 px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/50 transition-all">Open calendar</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Social Proof Strip */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-16">TRUSTED BY PEOPLE LEADERS</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale mb-24">
             {/* Logo Placeholders - reusing real logos where possible */}
             <img src="https://storage.googleapis.com/boon-public-assets/72andsunny.png" className="h-6" alt="Logo" />
             <img src="https://storage.googleapis.com/boon-public-assets/consensys.png" className="h-6" alt="Logo" />
             <img src="https://storage.googleapis.com/boon-public-assets/circle.png" className="h-6" alt="Logo" />
             <img src="https://storage.googleapis.com/boon-public-assets/usta.png" className="h-6" alt="Logo" />
          </div>

          <div className="max-w-2xl bg-white p-12 rounded-[56px] border border-gray-100 shadow-sm text-center">
             <p className="text-lg font-bold text-gray-500 italic leading-relaxed mb-8">
               "Boon has become a core part of our leadership infrastructure. The level of support they provide our managers is unmatched by any generic L&D tool we've used."
             </p>
             <div>
                <p className="text-sm font-black uppercase tracking-widest">VP OF PEOPLE</p>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Global Tech Organization</p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-5xl md:text-7xl font-black text-[#2E353D] tracking-tighter mb-4">Questions.</h2>
             <p className="text-gray-400 font-bold italic">Clear answers to common questions.</p>
          </div>
          <div className="border-t border-gray-100">
             {[
               { q: "Is individual data shared with HR?", a: "No. Privacy is foundational to our trust. We provide aggregate theme reporting so leadership can understand organizational trends without ever exposing individual session content." },
               { q: "How quickly can we launch a cohort?", a: "Most organizations can launch their first cohort in under 10 business days. We provide all the enrollment templates and SSO integration needed." },
               { q: "How do you match coaches?", a: "We don't use simple algorithms. We match based on operator experience, industry context, and the specific goals identified by the employee." },
               { q: "What is your pricing model?", a: "We believe in usage-based transparency. You pay for completed sessions, ensuring your investment is directly tied to engagement and value." }
             ].map((faq, i) => (
               <FAQItem key={i} question={faq.q} answer={faq.a} />
             ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA Band */}
      <section className="py-40 px-6 md:px-12 lg:px-24 bg-[#466FF6] text-white text-center rounded-[80px] mx-4 md:mx-10 mb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.85]">
            Prefer to reach out directly?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-white text-[#466FF6] px-14 py-7 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-2xl">
              Email our team
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
