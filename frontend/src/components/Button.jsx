import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Button({
  children = "REGISTER YOUR TEAM",
  onClick,
  type = "button",
  className = "",
  variant = "primary",
  ...props
}) {
  const buttonClasses = [
    "ctaButton",
    variant === "outline" ? "ctaButtonOutline" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      <span className="ctaText">{children}</span>

      <span className="ctaIconWrap" aria-hidden="true">
        <span className="ctaIconCircle">
          <FontAwesomeIcon className="ctaIcon" icon={faChevronRight} />
        </span>
      </span>
    </button>
  );
}
