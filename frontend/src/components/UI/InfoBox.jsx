export default function InfoBox({ header = "missing header", children }) {
  return (
    <div className="info-box">
      <div className="top-border" />
      <div className="info-box-header">
        <h4>{header.toUpperCase()}</h4>
      </div>
      <div className="info-box-body">{children}</div>
    </div>
  );
}
