import "./Home.css";
import Button from "../components/Button";
import { homeHero, homeSponsors } from "../data/homeData";
import SportsSection from "../sections/SportsSection";
import ScheduleSection from "../sections/ScheduleSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="hero" aria-label="Home hero">
        <div className="heroInner">
          <div className="heroSponsors" aria-label="Sponsors">
            <div className="heroSponsorsLogos" aria-label="Sponsor logos">
              {homeSponsors.items.map((item) => (
                <div key={item.key} className="heroSponsorItem">
                  {item.src ? (
                    <img
                      className="heroSponsorLogo"
                      src={item.src}
                      alt={item.alt ?? item.label}
                      loading="lazy"
                    />
                  ) : (
                    item.label
                  )}
                </div>
              ))}
            </div>
          </div>
          <h1 className="heroTitle">{homeHero.title}</h1>
          <p className="heroSubtitle">{homeHero.subtitle}</p>

          <div className="heroCtaRow">
            <Button onClick={() => navigate("/register")}>
              {homeHero.ctaText}
            </Button>
          </div>

          <p className="heroStatus">
            <span>{homeHero.statusPrefix}</span>
            <span className="heroLiveDot" aria-hidden="true" />
          </p>
        </div>
      </section>

      <SportsSection />
      <ScheduleSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
