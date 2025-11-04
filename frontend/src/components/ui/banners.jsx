export default function Banner({ variant }) {
  return (
    <div className={`banner banner--${variant}`}>
      <p className="banner__text">
        <span className="banner__status">Status.</span> This is a banner with a
        message on it giving you feedback about something.
      </p>
    </div>
  );
}
