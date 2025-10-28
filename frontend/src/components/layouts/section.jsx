export function SectionRow({ title = 'NO TITLE', children, className }) {
  return (
    <div className={`section ${className}`}>
      <h4 className="section__header">{title}</h4>
      <div className="section__children">{children}</div>
    </div>
  );
}

export function SectionDivider({ children }) {
  return <div className="section-divider">{children}</div>;
}
