export default function SectionTag({ index, name }: { index: string; name: string }) {
  return (
    <div className="section-tag">
      <span className="section-tag-index">{index}</span>
      <span>{name}</span>
      <span className="section-tag-rule" />
    </div>
  );
}
