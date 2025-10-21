export function SectionRow({ title = 'NO TITLE', children, id }) {
  return (
    <div className="section" id={id}>
      <h4 className="section__header">{title.toUpperCase()}</h4>
      <div className="section__children">{children}</div>
    </div>
  );
}

export function SectionDivider({ children }) {
  return <div className="section-divider">{children}</div>;
}
