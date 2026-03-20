import { useState } from "react";

type TabId = "insurance" | "bank" | "hr" | "pyrus";

const tabs: { id: TabId; label: string }[] = [
  { id: "insurance", label: "Страховка" },
  { id: "bank", label: "Банк" },
  { id: "hr", label: "HR" },
  { id: "pyrus", label: "Pyrus" },
];

const data: Record<TabId, { stats: { value: string; label: string }[]; economy: string; economyLabel: string }> = {
  insurance: {
    stats: [
      { value: "812", label: "БТ без ИИ" },
      { value: "1 015", label: "БТ с ИИ" },
      { value: "+203", label: "Прирост (+25%)" },
    ],
    economy: "3 170 860 ₽",
    economyLabel: "Общая оптимизация",
  },
  bank: {
    stats: [
      { value: "22 400", label: "БТ без ИИ" },
      { value: "28 000", label: "БТ с ИИ" },
      { value: "+5 600", label: "Прирост (+25%)" },
    ],
    economy: "87 472 000 ₽",
    economyLabel: "Общая оптимизация",
  },
  hr: {
    stats: [
      { value: "14 400", label: "ч.ч. без ИИ" },
      { value: "11 160", label: "ч.ч. с ИИ" },
      { value: "3 240", label: "Экономия (ч.ч.)" },
    ],
    economy: "2 430 000 ₽",
    economyLabel: "Экономия",
  },
  pyrus: {
    stats: [
      { value: "2 700 000", label: "ч.ч. без ИИ" },
      { value: "2 290 000", label: "ч.ч. с ИИ" },
      { value: "410 000", label: "Экономия (ч.ч.)" },
    ],
    economy: "978 000 000 ₽",
    economyLabel: "Общая оптимизация",
  },
};

const Index = () => {
  const [active, setActive] = useState<TabId>("insurance");
  const current = data[active];

  return (
    <div style={{ background: "#f5f7fa", minHeight: "100vh", padding: "20px", fontFamily: "Segoe UI, sans-serif", color: "#2c3e50" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <header style={{ textAlign: "center", padding: "20px", background: "#1a237e", color: "#fff", borderRadius: 12, marginBottom: 20 }}>
          <h1 style={{ fontSize: "1.8rem", marginBottom: 10 }}>ИИ-агенты | Совкомбанк</h1>
          <p>Эффективность за 1 год</p>
        </header>

        <div style={{ marginBottom: 20 }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: 6,
                background: active === tab.id ? "#4caf50" : "#1a237e",
                color: "#fff",
                margin: 5,
                cursor: "pointer",
                fontSize: "0.9rem",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div style={{ padding: 20, borderRadius: 10, background: "#fff", margin: "10px 0" }}>
          {current.stats.map((stat, i) => (
            <div key={i} style={{ fontSize: "1.2rem", textAlign: "center", padding: 10, margin: "10px 0" }}>
              <span style={{ fontWeight: "bold", color: "#1a237e", fontSize: "1.4rem" }}>{stat.value}</span>
              <br />
              {stat.label}
            </div>
          ))}
          <div style={{ background: "#e8f5e8", padding: 15, borderRadius: 8, textAlign: "center", margin: "15px 0", border: "1px solid #4caf50" }}>
            <div style={{ fontSize: "1.6rem", color: "#1b5e20", fontWeight: "bold" }}>{current.economy}</div>
            {current.economyLabel}
          </div>
        </div>

        <footer style={{ textAlign: "center", padding: 20, color: "#666", fontSize: "0.9rem" }}>
          © 2026 Совкомбанк. Универсальный ассистент.
        </footer>

      </div>
    </div>
  );
};

export default Index;
