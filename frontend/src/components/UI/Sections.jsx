export default function Sections({
  title = 'NO TITLE',
  children,
  orientation = 'row',
  id,
}) {
  return (
    <div className="standard-section" stlye={{ flexDirection: orientation }}>
      <h4 className="section-header">{title}</h4>
      <div className="section-children">{children}</div>
    </div>
  );
}
