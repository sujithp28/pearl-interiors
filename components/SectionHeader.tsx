type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className = "",
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`mb-12 max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-pearl-gold-muted">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl text-pearl-gold md:text-5xl">{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-gray-400 leading-relaxed ${align === "center" ? "max-w-2xl mx-auto" : "max-w-xl"}`}>
          {subtitle}
        </p>
      )}
    </header>
  );
}
