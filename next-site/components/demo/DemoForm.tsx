'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  employeeCount: string;
  interest: string;
  timeline: string;
  notes: string;
}

export function DemoForm() {
  const [formState, setFormState] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS'>('IDLE');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    employeeCount: '',
    interest: '',
    timeline: '',
    notes: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState('SUBMITTING');

    // TODO: Replace with actual API endpoint
    // await fetch('/api/demo-request', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState('SUCCESS');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (formState === 'SUCCESS') {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center bg-white p-16 rounded-[35px] border border-gray-100">
        <div className="w-24 h-24 bg-[#E6F8F0] rounded-full flex items-center justify-center text-[#4CD995] mb-12 animate-bounce">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-[#2E353D] mb-8 tracking-tighter">
          Thanks — we&apos;ve got your request.
        </h2>
        <p className="text-xl text-gray-500 font-medium max-w-2xl leading-relaxed">
          Someone from our team will follow up ASAP to confirm next steps and suggest times. We review every
          request personally.
        </p>
        <button
          onClick={() => setFormState('IDLE')}
          className="mt-12 text-[#466FF6] font-black uppercase text-[11px] tracking-widest hover:opacity-70 transition-opacity"
        >
          Return to request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-16 rounded-[35px] border border-gray-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center mb-12">
        <div className="flex gap-2">
          <div className="h-1.5 w-12 rounded-full bg-[#466FF6]"></div>
          <div className="h-1.5 w-12 rounded-full bg-gray-100"></div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-[10px] font-black uppercase tracking-widest text-gray-300">Step 1 of 2</div>
          <div className="text-[8px] font-black uppercase tracking-widest text-gray-200 mt-1">
            Step 1: Request • Step 2: Confirm time by email
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
              First Name
            </label>
            <input
              required
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              placeholder="Jane"
              className="w-full bg-gray-50 border border-gray-100 px-8 py-5 rounded-2xl focus:outline-none focus:border-[#466FF6] transition-colors font-bold"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
              Last Name
            </label>
            <input
              required
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              placeholder="Doe"
              className="w-full bg-gray-50 border border-gray-100 px-8 py-5 rounded-2xl focus:outline-none focus:border-[#466FF6] transition-colors font-bold"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
            Work Email
          </label>
          <input
            required
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="jane@company.com"
            className="w-full bg-gray-50 border border-gray-100 px-8 py-5 rounded-2xl focus:outline-none focus:border-[#466FF6] transition-colors font-bold"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
              Company
            </label>
            <input
              required
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Company Name"
              className="w-full bg-gray-50 border border-gray-100 px-8 py-5 rounded-2xl focus:outline-none focus:border-[#466FF6] transition-colors font-bold"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
              Role / Team
            </label>
            <input
              required
              type="text"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              placeholder="VP People"
              className="w-full bg-gray-50 border border-gray-100 px-8 py-5 rounded-2xl focus:outline-none focus:border-[#466FF6] transition-colors font-bold"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
              Approx Employee Count
            </label>
            <select
              required
              value={formData.employeeCount}
              onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
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
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
              What are you hoping to solve?
            </label>
            <select
              required
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="w-full bg-gray-50 border border-gray-100 px-8 py-5 rounded-2xl focus:outline-none focus:border-[#466FF6] transition-colors font-bold appearance-none"
            >
              <option value="">Select Priority</option>
              <option value="SCALE">Broad Support (Boon SCALE)</option>
              <option value="GROW">Manager Development (Boon GROW)</option>
              <option value="EXEC">Executive Support (Boon EXEC)</option>
              <option value="TOGETHER">Team Alignment (Boon TOGETHER)</option>
              <option value="UNSURE">Not sure yet</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
            Desired Timeline
          </label>
          <select
            required
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full bg-gray-50 border border-gray-100 px-8 py-5 rounded-2xl focus:outline-none focus:border-[#466FF6] transition-colors font-bold appearance-none"
          >
            <option value="">Select Timeline</option>
            <option value="IMMEDIATE">Immediate / Urgent</option>
            <option value="1-3-MONTHS">Next 1 - 3 months</option>
            <option value="FUTURE">Future planning</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
            Anything else helpful?
          </label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
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
    </div>
  );
}
