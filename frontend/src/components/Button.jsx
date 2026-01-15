import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Button({
  children = "REGISTER YOUR TEAM",
  onClick,
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={["ctaButton", className].filter(Boolean).join(" ")}
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
