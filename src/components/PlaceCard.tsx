export function PlaceCard({
  emoji,
  title,
  description,
  tag,
  link,
}: {
  emoji: string;
  title: string;
  description: string;
  tag: string;
  link?: string;
}) {
  const inner = (
    <div className="rounded-2xl bg-foreground/[0.03] border border-foreground/[0.06] p-5 h-full hover:bg-foreground/[0.05] transition-colors">
      <div className="flex items-start justify-between mb-2">
        <span className="text-2xl">{emoji}</span>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-sakura-100 text-sakura-500">
          {tag}
        </span>
      </div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-foreground/50">{description}</p>
      {link && (
        <p className="text-xs text-sakura-400 mt-2">참고 링크 →</p>
      )}
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return inner;
}
