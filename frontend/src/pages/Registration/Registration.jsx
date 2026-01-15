import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Registration.css";

import Button from "../../components/Button";
import { sportsCards } from "../../data/sportsData";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

function inferFeeBySportKey(key) {
  // Simple default fee logic (can be replaced with real pricing later)
  if (!key) return 2000;
  if (key.includes("basket")) return 2000;
  if (key.includes("foot")) return 2000;
  if (key.includes("cricket")) return 2000;
  return 2000;
}

export default function Registration() {
  const query = useQuery();
  const navigate = useNavigate();

  const sportKeyFromQuery = query.get("sport") ?? "";

  const sportsOptions = useMemo(() => {
    return sportsCards.map((s) => ({ key: s.key, label: s.title }));
  }, []);

  const [form, setForm] = useState(() => {
    const initialSport = sportsOptions.some((s) => s.key === sportKeyFromQuery)
      ? sportKeyFromQuery
      : "";

    return {
      teamName: "",
      college: "",
      sportKey: initialSport,
      captainName: "",
      email: "",
      phone: "",
      players: ["", "", "", ""],
    };
  });

  const fee = useMemo(() => inferFeeBySportKey(form.sportKey), [form.sportKey]);

  function setField(name, value) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function setPlayer(index, value) {
    setForm((prev) => {
      const nextPlayers = [...prev.players];
      nextPlayers[index] = value;
      return { ...prev, players: nextPlayers };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // UI-only for now; later we can POST to backend and start Razorpay flow.
    // Keeping a safe no-op behavior with a small UX hint.
    alert("Registration form saved (UI only). Hook backend next.");
  }

  const selectedSportLabel =
    sportsOptions.find((s) => s.key === form.sportKey)?.label ?? "Select Sport";

  return (
    <main className="regPage" aria-label="Registration">
      <header className="regHeader" aria-label="Registration header">
        <h1 className="regTitle">REGISTER NOW</h1>
        <p className="regSubtitle">
          Sign up your team for the ultimate showdown.
        </p>
      </header>

      <section className="regCard" aria-label="Registration form">
        <form className="regForm" onSubmit={handleSubmit}>
          <div className="regGrid">
            <section className="regCol" aria-label="Team details">
              <h2 className="regColTitle">TEAM DETAILS</h2>

              <label className="regLabel">
                <span className="regLabelText">Team Name</span>
                <input
                  className="regInput"
                  value={form.teamName}
                  onChange={(e) => setField("teamName", e.target.value)}
                  placeholder="Team Name"
                />
              </label>

              <label className="regLabel">
                <span className="regLabelText">College</span>
                <input
                  className="regInput"
                  value={form.college}
                  onChange={(e) => setField("college", e.target.value)}
                  placeholder="College"
                />
              </label>

              <label className="regLabel">
                <span className="regLabelText">Select Sport</span>
                <select
                  className="regSelect"
                  value={form.sportKey}
                  onChange={(e) => setField("sportKey", e.target.value)}
                >
                  <option value="">Select Sport</option>
                  {sportsOptions.map((s) => (
                    <option key={s.key} value={s.key}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </label>
            </section>

            <section className="regCol" aria-label="Player information">
              <h2 className="regColTitle">PLAYER INFORMATION</h2>

              <label className="regLabel">
                <span className="regLabelText">Captain's Name</span>
                <input
                  className="regInput"
                  value={form.captainName}
                  onChange={(e) => setField("captainName", e.target.value)}
                  placeholder="Captain's Name"
                />
              </label>

              <label className="regLabel">
                <span className="regLabelText">Email</span>
                <input
                  className="regInput"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  placeholder="Email"
                  type="email"
                />
              </label>

              <label className="regLabel">
                <span className="regLabelText">Phone</span>
                <input
                  className="regInput"
                  value={form.phone}
                  onChange={(e) => setField("phone", e.target.value)}
                  placeholder="Phone"
                  inputMode="tel"
                />
              </label>

              {form.players.map((p, idx) => (
                <label key={idx} className="regLabel">
                  <span className="regLabelText">Player {idx + 1} Name</span>
                  <input
                    className="regInput"
                    value={p}
                    onChange={(e) => setPlayer(idx, e.target.value)}
                    placeholder={`Player ${idx + 1} Name`}
                  />
                </label>
              ))}
            </section>

            <aside className="regCol regPay" aria-label="Payment">
              <h2 className="regColTitle">PAYMENT</h2>

              <div className="regFeeCard" aria-label="Registration fee">
                <div className="regFeeRow">
                  <span className="regFeeLabel">Registration Fee:</span>
                  <span className="regFeeValue">₹{fee}</span>
                </div>
                <div className="regFeeSport" aria-label="Selected sport">
                  {selectedSportLabel}
                </div>
              </div>

              <div className="regPayActions">
                <Button className="regPayBtn" type="submit">
                  PROCEED TO PAYMENT
                </Button>
                <button
                  type="button"
                  className="regBackBtn"
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </button>
              </div>
            </aside>
          </div>
        </form>
      </section>
    </main>
  );
}
