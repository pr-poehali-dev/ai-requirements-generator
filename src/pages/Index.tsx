import { useState } from "react";

type TabId = "insurance" | "bank" | "methodology";

const tabs: { id: TabId; label: string }[] = [
  { id: "insurance", label: "Страховая Группа" },
  { id: "bank", label: "Банк" },
  { id: "methodology", label: "Методология" },
];

const s: Record<string, React.CSSProperties> = {
  body: { background: "#f5f7fa", minHeight: "100vh", padding: "20px", fontFamily: "Segoe UI, sans-serif", color: "#2c3e50" },
  container: { maxWidth: 1200, margin: "0 auto" },
  header: { textAlign: "center", padding: "24px 20px", background: "#1a237e", color: "#fff", borderRadius: 12, marginBottom: 24 },
  h1: { fontSize: "1.8rem", marginBottom: 8 },
  tabRow: { display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" },
  card: { background: "#fff", borderRadius: 12, padding: 24, marginBottom: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.07)" },
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 4 },
  statBox: { background: "#f0f4ff", borderRadius: 10, padding: 20, textAlign: "center", border: "1px solid #c5cae9" },
  statBoxGreen: { background: "#e8f5e8", borderRadius: 10, padding: 20, textAlign: "center", border: "1px solid #a5d6a7" },
  statValue: { fontSize: "2rem", fontWeight: 700, color: "#1a237e", display: "block", marginBottom: 4 },
  statValueGreen: { fontSize: "2rem", fontWeight: 700, color: "#2e7d32", display: "block", marginBottom: 4 },
  statLabel: { fontSize: "0.9rem", color: "#546e7a", lineHeight: 1.4 },
  economyBox: { background: "#e8f5e8", border: "1px solid #4caf50", borderRadius: 10, padding: 20, textAlign: "center", marginBottom: 0 },
  economyValue: { fontSize: "2.2rem", fontWeight: 700, color: "#1b5e20", display: "block", marginBottom: 6 },
  economyLabel: { fontSize: "1rem", color: "#2e7d32", fontWeight: 600 },
  econCalc: { fontSize: "0.88rem", color: "#388e3c", marginTop: 10, lineHeight: 1.6 },
  formulaBox: { background: "#fff8e1", border: "1px solid #ffd54f", borderRadius: 10, padding: 16, marginBottom: 12 },
  formulaTitle: { fontWeight: 700, color: "#e65100", marginBottom: 8, fontSize: "0.95rem" },
  formulaText: { color: "#4e342e", fontSize: "0.9rem", lineHeight: 1.7 },
  hint: { fontSize: "0.83rem", color: "#78909c", marginTop: 4 },
  sectionTitle: { fontSize: "1.2rem", fontWeight: 700, color: "#1a237e", marginBottom: 16, paddingBottom: 8, borderBottom: "2px solid #e8eaf6" },
  sourceItem: { marginBottom: 14, paddingLeft: 12, borderLeft: "3px solid #1a237e" },
  sourceTitle: { fontWeight: 700, color: "#1a237e", marginBottom: 6, fontSize: "0.95rem" },
  bullet: { fontSize: "0.9rem", color: "#37474f", padding: "2px 0", display: "block" },
  footer: { textAlign: "center", padding: 20, color: "#90a4ae", fontSize: "0.9rem", marginTop: 8 },
};

const InsuranceTab = () => (
  <>
    <div style={s.card}>
      <div style={s.sectionTitle}>Страховая Группа</div>
      <div style={s.statsGrid}>
        <div style={s.statBox}>
          <span style={s.statValue}>812</span>
          <span style={s.statLabel}>Сейчас (без ИИ)<br />БТ реализовано за год</span>
        </div>
        <div style={s.statBox}>
          <span style={s.statValue}>1 015</span>
          <span style={s.statLabel}>С ИИ-агентом<br />БТ потенциально за год</span>
        </div>
        <div style={s.statBoxGreen}>
          <span style={s.statValueGreen}>+203</span>
          <span style={s.statLabel}>Прирост<br />дополнительных БТ (+25%)</span>
        </div>
      </div>
    </div>

    <div style={s.card}>
      <div style={s.formulaTitle}>Расчет экономии на 812 БТ</div>
      <div style={s.formulaText}>
        <b>Формула:</b> Экономия = Количество БТ × Экономия на 1 БТ<br />
        <b>Расчет:</b> 812 БТ × 3 124 ₽/БТ = <b>2 536 688 ₽</b>
        <div style={s.hint}>Это экономия только на текущих 812 БТ — без учёта дополнительных</div>
      </div>
    </div>

    <div style={s.economyBox}>
      <span style={s.economyValue}>3 170 860 ₽</span>
      <span style={s.economyLabel}>Общая годовая оптимизация</span>
      <div style={s.econCalc}>
        2 536 688 ₽ (на 812 БТ) + 634 172 ₽ (на 203 БТ) = 3 170 860 ₽<br />
        <b>Эквивалентно 3 573 ч высвобожденного времени</b>
      </div>
    </div>
  </>
);

const BankTab = () => (
  <>
    <div style={s.card}>
      <div style={s.sectionTitle}>Банк</div>
      <div style={s.statsGrid}>
        <div style={s.statBox}>
          <span style={s.statValue}>22 400</span>
          <span style={s.statLabel}>Сейчас (без ИИ)<br />БТ реализовано за год</span>
        </div>
        <div style={s.statBox}>
          <span style={s.statValue}>28 000</span>
          <span style={s.statLabel}>С ИИ-агентом<br />БТ потенциально за год</span>
        </div>
        <div style={s.statBoxGreen}>
          <span style={s.statValueGreen}>+5 600</span>
          <span style={s.statLabel}>Прирост<br />дополнительных БТ (+25%)</span>
        </div>
      </div>
    </div>

    <div style={s.card}>
      <div style={s.formulaTitle}>Расчет экономии на 22 400 БТ</div>
      <div style={s.formulaText}>
        <b>Формула:</b> Экономия = Количество БТ × Экономия на 1 БТ<br />
        <b>Расчет:</b> 22 400 БТ × 3 124 ₽/БТ = <b>69 977 600 ₽</b>
        <div style={s.hint}>Это экономия только на текущих 22 400 БТ — без учёта дополнительных</div>
      </div>
    </div>

    <div style={s.economyBox}>
      <span style={s.economyValue}>87 472 000 ₽</span>
      <span style={s.economyLabel}>Общая годовая оптимизация</span>
      <div style={s.econCalc}>
        69 977 600 ₽ (на 22 400 БТ) + 17 494 400 ₽ (на 5 600 БТ) = 87 472 000 ₽<br />
        <b>Эквивалентно 123 200 ч высвобожденного времени</b>
      </div>
    </div>
  </>
);

const MethodologyTab = () => (
  <>
    <div style={s.card}>
      <div style={s.sectionTitle}>Методология расчета</div>
      <div style={{ ...s.formulaText, marginBottom: 20 }}>
        Расчеты основаны на анализе данных 16 бизнес-аналитиков за 3 месяца:
      </div>

      {[
        {
          title: "1. Статистический анализ",
          text: "За 3 месяца создано 240 БТ\nСредняя производительность: 240 БТ ÷ 3 мес = 80 БТ/мес\nНа 1 БА: 80 ÷ 16 = 5 БТ/мес",
        },
        {
          title: "2. Экспертная оценка времени",
          text: "БА тратит 7.2 ч/день на процессы БТ\nВремя на 1 БТ: 7.2 ч/день × 22 дня = 158.4 ч/мес ÷ 5 БТ/мес = 31.7 ч/БТ\nС учетом сложности (2.0 балла): 17.6 ч/БТ",
        },
        {
          title: "3. Годовой отчет",
          text: "Фактический объем: 812 БТ реализовано СКБТ\nКлючевые допущения:\n• Стоимость часа БА: 710 ₽ (без НДС)\n• Средняя сложность БТ: 2.0 балла\n• Оптимизация: 25%\n• Расчет ведется по консервативному сценарию",
        },
      ].map((item, i) => (
        <div key={i} style={{ ...s.formulaBox, marginBottom: i === 2 ? 0 : 12 }}>
          <div style={s.formulaTitle}>{item.title}</div>
          <div style={{ ...s.formulaText, whiteSpace: "pre-line" }}>{item.text}</div>
        </div>
      ))}
    </div>

    <div style={s.card}>
      <div style={s.sectionTitle}>Все формулы расчета</div>
      {[
        { title: "Трудоемкость 1 БТ:", text: "T = (Время на БТ в год) ÷ (Количество БТ в год)\nT = 1 901 ч ÷ 70.3 БТ = 27.0 ч/БТ (среднее 36.0 ч/БТ)" },
        { title: "Себестоимость 1 БТ:", text: "С = T × Стоимость часа\nС = 17.6 ч × 710 ₽/ч = 12 496 ₽/БТ" },
        { title: "Экономия на 1 БТ с ИИ:", text: "E₁ = (TбезИИ − TсИИ) × Стоимость часа\nE₁ = (17.6 − 13.2) × 710 = 4.4 × 710 = 3 124 ₽/БТ" },
        { title: "Дополнительные БТ:", text: "ΔБТ = (Экономия времени) ÷ (Трудоемкость с ИИ)\nΔБТ = 3 573 ч ÷ 13.2 ч/БТ = 271 БТ (первоначальный расчет)\nВ консервативном сценарии: 203 БТ (25% прироста)" },
        { title: "Общая экономия:", text: "Eобщ = E₁ × Количество БТ\nEобщ = 3 124 ₽ × 812 БТ = 2 536 688 ₽" },
      ].map((f, i, arr) => (
        <div key={i} style={{ ...s.formulaBox, marginBottom: i === arr.length - 1 ? 0 : 12 }}>
          <div style={s.formulaTitle}>{f.title}</div>
          <div style={{ ...s.formulaText, whiteSpace: "pre-line" }}>{f.text}</div>
        </div>
      ))}
    </div>

    <div style={s.card}>
      <div style={s.sectionTitle}>Источники данных</div>
      {[
        {
          title: "1. Статистика работы БА (3 месяца):",
          items: ["16 бизнес-аналитиков", "240 БТ создано", "479 баллов сложности", "Средняя производительность: 5 БТ/мес на 1 БА"],
        },
        {
          title: "2. Годовые отчеты:",
          items: ["812 БТ реализовано СКБТ в год", "Средняя сложность БТ: 2.0 балла", "Коэффициент реализации: 100%"],
        },
        {
          title: "3. Экспертные оценки:",
          items: ["Время на процессы БТ: 7.2 ч/день (90% рабочего времени)", "Стоимость часа БА: 710 ₽ (без НДС)", "Рабочих дней в году: 264"],
        },
        {
          title: "4. Технические параметры ИИ:",
          items: ["Точность генерации БТ: 65–70%", "Оптимизация процессов: 25%", "Средняя оптимизация: 25%"],
        },
      ].map((src, i, arr) => (
        <div key={i} style={{ ...s.sourceItem, marginBottom: i === arr.length - 1 ? 0 : 14 }}>
          <div style={s.sourceTitle}>{src.title}</div>
          {src.items.map((item, j) => (
            <span key={j} style={s.bullet}>• {item}</span>
          ))}
        </div>
      ))}
    </div>
  </>
);

const Index = () => {
  const [active, setActive] = useState<TabId>("insurance");

  return (
    <div style={s.body}>
      <div style={s.container}>
        <header style={s.header}>
          <h1 style={s.h1}>ИИ-агенты для Страховой Группы и Банка</h1>
          <p style={{ fontSize: "1rem", opacity: 0.85 }}>
            Анализ эффективности внедрения ИИ-ассистента для бизнес-аналитиков. Период: 1 год.
          </p>
        </header>

        <div style={s.tabRow}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              style={{
                padding: "10px 24px",
                border: "none",
                borderRadius: 8,
                background: active === tab.id ? "#4caf50" : "#1a237e",
                color: "#fff",
                cursor: "pointer",
                fontSize: "0.95rem",
                fontWeight: 600,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {active === "insurance" && <InsuranceTab />}
        {active === "bank" && <BankTab />}
        {active === "methodology" && <MethodologyTab />}

        <footer style={s.footer}>© 2026 Совкомбанк. Универсальный ассистент.</footer>
      </div>
    </div>
  );
};

export default Index;
