interface SectionHeadingProps {
  overline: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  emphasisWord?: string;
}

export function SectionHeading({ overline, title, subtitle, light, emphasisWord }: SectionHeadingProps) {
  const renderTitle = () => {
    if (!emphasisWord) {
      return title;
    }
    const parts = title.split(emphasisWord);
    if (parts.length === 1) {
      return title;
    }
    return (
      <>
        {parts[0]}
        <span className="font-serif italic">{emphasisWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="text-center mb-16 max-w-4xl mx-auto">
      <p
        className={`label-text text-[10px] mb-4 ${
          light ? 'text-white/70' : 'text-boon-blue'
        }`}
      >
        {overline}
      </p>
      <h2
        className={`font-sans text-4xl md:text-5xl font-bold mb-6 tracking-tight ${
          light ? 'text-white' : 'text-boon-charcoal'
        } leading-tight`}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl font-body font-medium ${
            light ? 'text-white/60' : 'text-gray-500'
          } leading-relaxed`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
