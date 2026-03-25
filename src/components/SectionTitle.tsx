export function SectionTitle({ icon, title }: { icon: string; title: string }) {
  return (
    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
      <span>{icon}</span>
      <span>{title}</span>
    </h2>
  );
}
