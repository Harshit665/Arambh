import "./profileCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";

function getInitials(name) {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return "";
  const first = parts[0]?.[0] ?? "";
  const last = (parts.length > 1 ? parts[parts.length - 1]?.[0] : "") ?? "";
  return (first + last).toUpperCase();
}

export default function ProfileCard({
  name = "John Doe",
  role = "Event Head",
  imageSrc,
  meta,
  links = {
    linkedin: "#",
    twitter: "#",
    email: "#",
  },
  showSocials = true,
  onImageClick,
}) {
  const initials = getInitials(name) || "JD";

  const canClickImage = Boolean(onImageClick && imageSrc);

  return (
    <section className="profileCard" aria-label={name}>
      <div className="profileCardInner">
        <div className="profileMedia">
          <div
            className={`profilePhotoFrame${
              canClickImage ? " isClickable" : ""
            }`}
            onClick={
              canClickImage ? () => onImageClick(imageSrc, name) : undefined
            }
            role={canClickImage ? "button" : undefined}
            tabIndex={canClickImage ? 0 : undefined}
            onKeyDown={(e) => {
              if (!canClickImage) return;
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onImageClick(imageSrc, name);
              }
            }}
          >
            {imageSrc ? (
              <img
                className="profilePhoto"
                src={imageSrc}
                alt={name}
                loading="lazy"
              />
            ) : (
              <div className="profileFallback" aria-hidden="true">
                {initials}
              </div>
            )}
          </div>
        </div>

        <div className="profileBody">
          <h3 className="profileName">{name}</h3>
          <div className="profileRole">{role}</div>
          {meta ? <div className="profileMeta">{meta}</div> : null}

          {showSocials && (
            <div className="profileSocials" aria-label="Social links">
              <a
                className="profileIconBtn"
                href={links.linkedin}
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon className="profileIcon" icon={faLinkedinIn} />
              </a>
              <a
                className="profileIconBtn"
                href={links.twitter}
                aria-label="Twitter"
              >
                <FontAwesomeIcon className="profileIcon" icon={faXTwitter} />
              </a>
              <a
                className="profileIconBtn"
                href={links.email}
                aria-label="Email"
              >
                <FontAwesomeIcon className="profileIcon" icon={faEnvelope} />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
