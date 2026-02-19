'use client'

import { useState } from 'react'

// ── Icons ────────────────────────────────────────────────────────────

export function CheckIcon({ color = 'text-boon-green' }: { color?: string }) {
  const fillMap: Record<string, string> = {
    'text-boon-green': '#6CD893',
    'text-boon-blue': '#466FF6',
    'text-gray-400': '#9CA3AF',
  }
  const c = fillMap[color] || '#6CD893'
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="flex-shrink-0">
      <circle cx="11" cy="11" r="11" fill={c} opacity="0.15" />
      <path d="M6.5 11.5L9.5 14.5L15.5 8" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="flex-shrink-0">
      <circle cx="11" cy="11" r="11" fill="#DC2626" opacity="0.1" />
      <path d="M8 8L14 14M14 8L8 14" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function PartialIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="flex-shrink-0">
      <circle cx="11" cy="11" r="11" fill="#F59E0B" opacity="0.15" />
      <path d="M7 11H15" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function StatusIcon({ status }: { status: 'yes' | 'no' | 'partial' }) {
  if (status === 'yes') return <CheckIcon color="text-boon-blue" />
  if (status === 'no') return <XIcon />
  return <PartialIcon />
}

// ── Types ────────────────────────────────────────────────────────────

export interface ComparisonRow {
  feature: string
  boon: string
  betterup: string
  bStatus: 'yes' | 'no' | 'partial'
  buStatus: 'yes' | 'no' | 'partial'
}

export interface ComparisonTab {
  key: string
  label: string
  rows: ComparisonRow[]
}

export interface FAQData {
  question: string
  answer: string
}

// ── Comparison Tabs ──────────────────────────────────────────────────

export function ComparisonTabs({ tabs }: { tabs: ComparisonTab[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0].key)
  const currentTab = tabs.find((t) => t.key === activeTab) || tabs[0]

  return (
    <>
      {/* Tab buttons */}
      <div className="flex gap-1 bg-white rounded-xl p-1 mb-10 max-w-2xl mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 px-4 py-2.5 rounded-lg font-body text-sm transition-all ${
              activeTab === tab.key
                ? 'bg-boon-blue text-white font-semibold'
                : 'text-boon-charcoal font-medium hover:bg-gray-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Table header */}
      <div className="grid grid-cols-3 bg-white rounded-t-xl px-6 py-4 border-b-2 border-boon-off-white">
        <div className="font-body font-extrabold text-xs tracking-[0.12em] uppercase text-gray-400">Feature</div>
        <div className="font-sans font-bold text-base text-boon-blue">Boon</div>
        <div className="font-sans font-bold text-base text-gray-400">BetterUp</div>
      </div>

      {/* Rows */}
      <div className="bg-white rounded-b-xl px-6 pb-4">
        {currentTab.rows.map((row, i) => (
          <div key={i} className="grid grid-cols-3 gap-0 border-b border-boon-off-white py-5 items-start">
            <div className="pr-6">
              <p className="font-body text-[15px] font-semibold text-boon-charcoal">{row.feature}</p>
            </div>
            <div className="flex items-start gap-2.5 pr-4">
              <StatusIcon status={row.bStatus} />
              <p className="font-body text-sm text-gray-600">{row.boon}</p>
            </div>
            <div className="flex items-start gap-2.5">
              <StatusIcon status={row.buStatus} />
              <p className="font-body text-sm text-gray-600">{row.betterup}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

// ── FAQ Accordion ────────────────────────────────────────────────────

export function FAQAccordion({ items }: { items: FAQData[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex justify-between items-center py-5 text-left bg-transparent border-none cursor-pointer"
          >
            <span className="font-sans font-semibold text-[17px] text-boon-charcoal pr-4">
              {item.question}
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
            >
              <path d="M5 8L10 13L15 8" stroke="#2E353D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <p className="font-body text-[15px] text-gray-600 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
