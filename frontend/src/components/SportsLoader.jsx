import "./SportsLoader.css";

export default function SportsLoader({
  fullScreen = false,
  label = "Loading…",
  size = "md",
}) {
  return (
    <div
      className={`sportsLoaderWrap ${fullScreen ? "isFull" : ""}`}
      role="status"
      aria-live="polite"
    >
      <span className="srOnly">{label}</span>
      <div className={`sportsLoader ${size}`} aria-hidden="true" />
    </div>
  );
}
