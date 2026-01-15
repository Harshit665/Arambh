import "./SportsSection.css";
import SportsCard from "../components/sportsCard";
import { sportsCards, sportsPage } from "../data/sportsData";
import Button from "../components/Button";

export default function SportsSection() {
  return (
    <section id="sports" className="sportsSection" aria-label="Sports">
      <header className="sportsHeader" aria-label="Sports section header">
        <h2 className="sportsTitle">{sportsPage.title}</h2>
        <p className="sportsSubtitle">{sportsPage.subtitle}</p>
      </header>
      <div className="sportsGridWrap">
        <div className="sportsGrid" aria-label="Sports list">
          {sportsCards.map((card) => (
            <SportsCard
              key={card.key}
              title={card.title}
              meta={card.meta}
              cta={card.cta}
              icon={card.icon}
              iconSrc={card.iconSrc}
              iconAlt={card.iconAlt}
            />
          ))}
        </div>
        <div className="sportsMoreWrap">
          <Button className="sportsMoreBtn">See More Sports</Button>
        </div>
      </div>
    </section>
  );
}
