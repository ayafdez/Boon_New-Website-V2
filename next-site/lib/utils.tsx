import { ReactNode } from 'react';

/**
 * Splits text on an emphasis word and wraps the match in styled span.
 * Falls back to plain text if no emphasis word provided or not found.
 */
export function renderEmphasis(
  text: string,
  emphasis?: string,
  className = 'font-serif italic text-boon-blue'
): ReactNode {
  if (!emphasis) return text;

  const idx = text.toLowerCase().indexOf(emphasis.toLowerCase());
  if (idx === -1) return text;

  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + emphasis.length);
  const after = text.slice(idx + emphasis.length);

  return (
    <>
      {before}
      <span className={className}>{match}</span>
      {after}
    </>
  );
}
