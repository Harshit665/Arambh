import "./Rules.css";
import { eventRules } from "../../data/eventRulesData";

export default function Rules() {
  return (
    <main className="rules-page">
      <section className="rules-hero">
        <div className="rules-hero-content">
          <h1 className="rules-page-title">Rules & Regulations</h1>
          <p className="rules-page-subtitle">
            Guidelines to ensure fair play, discipline, and smooth conduct of the sports event
          </p>
        </div>
      </section>

      <section className="rules-content-section">
        <div className="rules-page-container">
          <div className="rules-intro">
            <p className="rules-intro-text">
              To ensure fair play, discipline, and the smooth conduct of the sports event, 
              all participants are required to strictly follow the rules and regulations mentioned below. 
              <strong> Violation of any rule may lead to penalties, disqualification, or removal from the event.</strong>
            </p>
          </div>

          <div className="rules-grid">
            {eventRules.map((section) => (
              <div key={section.id} className="rule-card">
                <div className="rule-card-header">
                  <h2 className="rule-title">
                    <span className="rule-number">{section.id}.</span> {section.title}
                  </h2>
                </div>
                <ul className="rule-list">
                  {section.rules.map((rule, idx) => (
                    <li key={idx} className="rule-item">
                      <span className="rule-bullet">•</span>
                      <span className="rule-text">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rules-footer-note">
            <p className="note-text">
              All participants are expected to read and understand these rules before registering. 
              The organizing committee reserves the right to take appropriate action against any violations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
