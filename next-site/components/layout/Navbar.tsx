'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const solutionsItems = [
  { href: '/solutions/scale', name: 'Boon SCALE', desc: 'Always-on coaching for everyone' },
  { href: '/solutions/grow', name: 'Boon GROW', desc: 'Developing managers at scale' },
  { href: '/solutions/exec', name: 'Boon EXEC', desc: 'High-stakes executive leadership' },
  { href: '/solutions/together', name: 'Boon TOGETHER', desc: 'Alignment for teams in motion' },
];

const learnItems = [
  { href: '/learn/blog', name: 'Boon Blog', desc: 'Insights & Perspectives' },
  { href: '/learn/live', name: 'Boon Live', desc: 'Events & Webinars' },
  { href: '/learn/podcast', name: 'Podcast', desc: 'The Human Layer' },
  { href: '/learn/case-studies', name: 'Case Studies', desc: 'Impact Stories' },
  { href: '/learn/resources', name: 'Resources', desc: 'Guides & Toolkits' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;
  const startsWithPath = (path: string) => pathname?.startsWith(path);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image
            src="https://res.cloudinary.com/djbo6r080/image/upload/v1764863780/Wordmark_Blue_16_aw7lvc.png"
            alt="Boon Logo"
            width={80}
            height={24}
            className="h-6 w-auto"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-[13px] tracking-wide text-gray-500 font-body font-semibold uppercase">
          {/* Solutions Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <Link
              href="/solutions"
              className={`flex items-center gap-1.5 py-2 transition-all font-bold text-boon-charcoal hover:text-boon-blue ${
                startsWithPath('/solutions') ? 'text-boon-blue' : ''
              }`}
            >
              Solutions
              <svg
                className={`w-3.5 h-3.5 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {isSolutionsOpen && (
              <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 py-4 px-2 flex flex-col gap-1">
                <Link
                  href="/solutions"
                  className="flex flex-col text-left p-3 hover:bg-boon-light-blue/30 rounded-xl transition-all border-b border-gray-50 mb-1"
                >
                  <span className="text-boon-charcoal text-sm font-sans font-bold">Overview</span>
                  <span className="text-gray-400 text-[10px] font-serif italic">The unified leadership system</span>
                </Link>
                {solutionsItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex flex-col text-left p-3 hover:bg-boon-light-blue/30 rounded-xl transition-all"
                  >
                    <span className="text-boon-charcoal text-sm font-sans font-bold">{item.name}</span>
                    <span className="text-gray-400 text-[10px] font-serif italic">{item.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/story"
            className={`hover:text-boon-blue transition-colors ${isActive('/story') ? 'text-boon-blue' : ''}`}
          >
            Our Story
          </Link>
          <Link
            href="/coaches"
            className={`hover:text-boon-blue transition-colors ${isActive('/coaches') ? 'text-boon-blue' : ''}`}
          >
            For Coaches
          </Link>
          <Link
            href="/individuals"
            className={`hover:text-boon-blue transition-colors ${isActive('/individuals') ? 'text-boon-blue' : ''}`}
          >
            For Individuals
          </Link>

          {/* Learn Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsLearnOpen(true)}
            onMouseLeave={() => setIsLearnOpen(false)}
          >
            <Link
              href="/learn"
              className={`flex items-center gap-1 hover:text-boon-blue transition-colors py-2 ${
                startsWithPath('/learn') ? 'text-boon-blue' : ''
              }`}
            >
              Learn
              <svg
                className={`w-3 h-3 transition-transform ${isLearnOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {isLearnOpen && (
              <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 py-4 px-2 flex flex-col gap-1">
                <Link
                  href="/learn"
                  className="flex flex-col text-left p-3 hover:bg-boon-light-blue/30 rounded-xl transition-all border-b border-gray-50 mb-1"
                >
                  <span className="text-boon-charcoal text-sm font-sans font-bold">Learn Hub</span>
                  <span className="text-gray-400 text-[10px] font-serif italic">Resource Center</span>
                </Link>
                {learnItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex flex-col text-left p-3 hover:bg-boon-light-blue/30 rounded-xl transition-all"
                  >
                    <span className="text-boon-charcoal text-sm font-sans font-bold">{item.name}</span>
                    <span className="text-gray-400 text-[10px] font-serif italic">{item.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block text-boon-charcoal font-body font-semibold text-sm hover:text-boon-blue px-4 transition-colors">
          Log In
        </button>
        <Link
          href="/demo"
          className="bg-boon-coral text-white px-6 py-2.5 rounded-lg hover:bg-boon-light-coral transition-all font-sans font-bold shadow-lg shadow-boon-coral/20 text-sm"
        >
          Book Demo
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gray-600"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white p-6 flex flex-col gap-6 lg:hidden overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <Image
              src="https://res.cloudinary.com/djbo6r080/image/upload/v1764863780/Wordmark_Blue_16_aw7lvc.png"
              alt="Boon"
              width={80}
              height={24}
              className="h-6 w-auto"
            />
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2" aria-label="Close menu">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-6">
            <h6 className="label-text text-[10px] text-gray-400 border-b border-gray-100 pb-2">
              Solutions
            </h6>
            <Link
              href="/solutions"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-2xl font-sans font-bold text-boon-charcoal"
            >
              Overview
            </Link>
            {['scale', 'grow', 'exec', 'together'].map((p) => (
              <Link
                key={p}
                href={`/solutions/${p}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left text-2xl font-sans font-bold text-boon-charcoal"
              >
                Boon {p.toUpperCase()}
              </Link>
            ))}
            <h6 className="label-text text-[10px] text-gray-400 border-b border-gray-100 pb-2 mt-8">
              Learn
            </h6>
            <Link
              href="/learn"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-2xl font-sans font-bold text-boon-charcoal"
            >
              Learn Hub
            </Link>
            <h6 className="label-text text-[10px] text-gray-400 border-b border-gray-100 pb-2 mt-12">
              Company
            </h6>
            <Link
              href="/story"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-2xl font-sans font-bold text-boon-charcoal"
            >
              Our Story
            </Link>
            <Link
              href="/coaches"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-2xl font-sans font-bold text-boon-charcoal"
            >
              For Coaches
            </Link>
            <Link
              href="/individuals"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-2xl font-sans font-bold text-boon-charcoal"
            >
              For Individuals
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
