export function SectionRow({
  title = 'NO TITLE',
  children,
  id,
}) {
  return (
    <div className="standard-section" id={id}>
      <h4 className="section-header">{title}</h4>
      <div
        className="section-children"
      >
        {children}
      </div>
    </div>
  );
}

export function SectionDivider({ children }) {
  return <div className="standard-section-divider">{children}</div>;
}
