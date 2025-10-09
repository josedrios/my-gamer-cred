// STYLING WAS LEFT IN _SECTIONS.SCSS, WAS BE TOO EXCESSIVE TO LEAVE IT HERE ON TAILWIND
// (this judgement was made by me on 10/8/25 where I am at a point where im improving my
// overall web dev skills and currently learning tailwind)

export function SectionRow({ title = 'NO TITLE', children, id }) {
  return (
    <div className="section" id={id}>
      <h4 className="section__header">{title}</h4>
      <div className="section__children">{children}</div>
    </div>
  );
}

export function SectionDivider({ children }) {
  return <div className="section-divider">{children}</div>;
}
