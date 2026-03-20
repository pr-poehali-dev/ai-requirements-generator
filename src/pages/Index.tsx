import { useState } from "react";

type TabId = "overview" | "table" | "methodology";

const tabs: { id: TabId; label: string }[] = [
  { id: "overview", label: "Обзор" },
  { id: "table", label: "Детализация" },
  { id: "methodology", label: "Методология" },
];

const s: Record<string, React.CSSProperties> = {
  body: { background: "#f5f7fa", minHeight: "100vh", padding: "20px", fontFamily: "Segoe UI, sans-serif", color: "#2c3e50" },
  container: { maxWidth: 1200, margin: "0 auto" },
  header: { textAlign: "center", padding: "24px 20px", background: "#1a237e", color: "#fff", borderRadius: 12, marginBottom: 24 },
  h1: { fontSize: "1.7rem", marginBottom: 8 },
  subtitle: { fontSize: "0.95rem", opacity: 0.85, lineHeight: 1.5 },
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
  econCalc: { fontSize: "0.88rem", color: "#388e3c", marginTop: 10, lineHeight: 1.7 },
  formulaBox: { background: "#fff8e1", border: "1px solid #ffd54f", borderRadius: 10, padding: 16, marginBottom: 12 },
  formulaTitle: { fontWeight: 700, color: "#e65100", marginBottom: 8, fontSize: "0.95rem" },
  formulaText: { color: "#4e342e", fontSize: "0.9rem", lineHeight: 1.7 },
  sectionTitle: { fontSize: "1.2rem", fontWeight: 700, color: "#1a237e", marginBottom: 16, paddingBottom: 8, borderBottom: "2px solid #e8eaf6" },
  footer: { textAlign: "center", padding: 20, color: "#90a4ae", fontSize: "0.9rem", marginTop: 8 },
  tableWrap: { overflowX: "auto" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" },
  th: { background: "#1a237e", color: "#fff", padding: "10px 12px", textAlign: "left", whiteSpace: "nowrap" },
  td: { padding: "9px 12px", borderBottom: "1px solid #e8eaf6", color: "#2c3e50" },
  tdTotal: { padding: "9px 12px", fontWeight: 700, background: "#e8f5e8", color: "#1b5e20" },
  bullet: { fontSize: "0.9rem", color: "#37474f", padding: "2px 0", display: "block" },
};

const tableData = [
  { id: 1, name: "Анализ резюме", without: "2 160", with: "1 620", saveH: "540", saveR: "405 000" },
  { id: 2, name: "Вопросы для подготовки к собеседованию", without: "720", with: "540", saveH: "180", saveR: "135 000" },
  { id: 3, name: "Анализ видеозаписи собеседования", without: "2 880", with: "2 304", saveH: "576", saveR: "432 000" },
  { id: 4, name: "Тестовое задание", without: "1 440", with: "1 152", saveH: "288", saveR: "216 000" },
  { id: 5, name: "Проверка тестового задания", without: "1 440", with: "1 152", saveH: "288", saveR: "216 000" },
  { id: 6, name: "Отработка возражений кандидатов", without: "720", with: "576", saveH: "144", saveR: "108 000" },
  { id: 7, name: "Подготовка обратной связи", without: "720", with: "576", saveH: "144", saveR: "108 000" },
  { id: 8, name: "Помощь в написании вакансии", without: "1 440", with: "1 152", saveH: "288", saveR: "216 000" },
  { id: 9, name: "Оффер СКБСЖ (2 р/нед)", without: "96", with: "81.6", saveH: "14.4", saveR: "10 800" },
  { id: 10, name: "Оффер СКБС (2 р/нед)", without: "96", with: "81.6", saveH: "14.4", saveR: "10 800" },
  { id: 11, name: "Оффер НПФ (2 р/нед)", without: "96", with: "81.6", saveH: "14.4", saveR: "10 800" },
  { id: 12, name: "Внесение изменений в Штатное Расписание (2 р/нед)", without: "240", with: "216", saveH: "24", saveR: "18 000" },
  { id: 13, name: "Анализ задачи на подбор", without: "2 160", with: "1 620", saveH: "540", saveR: "405 000" },
  { id: 14, name: "Правила экологичного перевода (2 р/нед)", without: "96", with: "86.4", saveH: "9.6", saveR: "7 200" },
  { id: 15, name: "Положение о подборе персонала (2 р/нед)", without: "96", with: "86.4", saveH: "9.6", saveR: "7 200" },
];

const OverviewTab = () => (
  <>
    <div style={s.card}>
      <div style={s.statsGrid}>
        <div style={s.statBox}>
          <span style={s.statValue}>14 400</span>
          <span style={s.statLabel}>Человеко-часов без ИИ<br />(в год на 50 сотрудников HR)</span>
        </div>
        <div style={s.statBox}>
          <span style={s.statValue}>11 160</span>
          <span style={s.statLabel}>Человеко-часов с ИИ<br />(в год на 50 сотрудников HR)</span>
        </div>
        <div style={s.statBoxGreen}>
          <span style={s.statValueGreen}>3 240</span>
          <span style={s.statLabel}>Сокращение ч.ч. в год<br />Экономия: 2 430 000 ₽</span>
        </div>
      </div>
    </div>

    <div style={s.economyBox}>
      <span style={s.economyValue}>2 430 000 ₽</span>
      <span style={s.economyLabel}>Общая годовая оптимизация</span>
      <div style={s.econCalc}>
        ИИ-агент «Помощник HR» сократил трудозатраты на <b>22.5%</b> за счёт автоматизации рутинных задач.<br />
        Расчет: 14 400 ч.ч. – 11 160 ч.ч. = <b>3 240 ч.ч.</b> экономии в год.<br />
        Эквивалентно: <b>405 рабочих дней</b> (при 8-часовом рабочем дне) или <b>81 месяц</b> одного сотрудника.
      </div>
    </div>
  </>
);

const TableTab = () => (
  <div style={s.card}>
    <div style={s.sectionTitle}>Детализация экономии по процессам (в год на 50 сотрудников)</div>
    <div style={s.tableWrap}>
      <table style={s.table}>
        <thead>
          <tr>
            <th style={s.th}>№</th>
            <th style={s.th}>Процесс</th>
            <th style={s.th}>Ч.Ч. без ИИ</th>
            <th style={s.th}>Ч.Ч. с ИИ</th>
            <th style={s.th}>Экономия (ч.ч.)</th>
            <th style={s.th}>Экономия (руб.)</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, i) => (
            <tr key={row.id} style={{ background: i % 2 === 0 ? "#fafafa" : "#fff" }}>
              <td style={s.td}>{row.id}</td>
              <td style={s.td}>{row.name}</td>
              <td style={s.td}>{row.without}</td>
              <td style={s.td}>{row.with}</td>
              <td style={s.td}>{row.saveH}</td>
              <td style={s.td}>{row.saveR} ₽</td>
            </tr>
          ))}
          <tr>
            <td style={s.tdTotal} colSpan={2}>ИТОГО</td>
            <td style={s.tdTotal}>14 400</td>
            <td style={s.tdTotal}>11 160</td>
            <td style={s.tdTotal}>3 240</td>
            <td style={s.tdTotal}>2 430 000 ₽</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const MethodologyTab = () => (
  <>
    <div style={s.card}>
      <div style={s.sectionTitle}>Методология расчетов</div>
      {[
        "1. Норматив: 1 сотрудник = 160 ч.ч. в месяц → 1 920 ч.ч. в год.",
        "2. ИИ-агент оптимизирует 15% от общего рабочего времени — рутинные задачи (анализ резюме, подготовка к собеседованиям, проверка тестов, оформление офферов и т.д.).",
        "3. Общее время на рутинные задачи (без ИИ): 1 920 × 15% = 288 ч.ч. в год на одного сотрудника → 14 400 ч.ч. на 50 сотрудников.",
        "4. Оптимизация по процессам: от 10% до 30% — в зависимости от сложности задачи.",
        "5. Стоимость 1 часа — 750 руб.",
        "6. Все значения в таблице — в год на 50 сотрудников.",
      ].map((text, i) => (
        <div key={i} style={{ ...s.formulaText, marginBottom: 10 }}>{text}</div>
      ))}
    </div>

    <div style={s.card}>
      <div style={s.sectionTitle}>Все формулы</div>
      {[
        { title: "Ч.Ч. в год без ИИ:", text: "1 920 × 15% × 50 = 14 400 ч.ч. (в год)" },
        { title: "Ч.Ч. в год с ИИ:", text: "14 400 × 0.775 = 11 160 ч.ч. (в год)" },
        { title: "Экономия в ч.ч.:", text: "14 400 – 11 160 = 3 240 ч.ч. (в год)" },
        { title: "Экономия в рублях:", text: "3 240 × 750 = 2 430 000 руб. (в год)" },
        { title: "Эквивалент в днях:", text: "3 240 / 8 = 405 дней (в год)" },
        { title: "Эквивалент в месяцах:", text: "3 240 / (8 × 20) = 81 месяц (в год)" },
      ].map((f, i, arr) => (
        <div key={i} style={{ ...s.formulaBox, marginBottom: i === arr.length - 1 ? 0 : 12 }}>
          <div style={s.formulaTitle}>{f.title}</div>
          <div style={s.formulaText}>{f.text}</div>
        </div>
      ))}
    </div>
  </>
);

const Index = () => {
  const [active, setActive] = useState<TabId>("overview");

  return (
    <div style={s.body}>
      <div style={s.container}>
        <header style={s.header}>
          <h1 style={s.h1}>Помощник руководителей и рекрутеров HR СГ</h1>
          <p style={s.subtitle}>
            Анализ эффективности внедрения ИИ-агента для Страховой Группы с периодом в 1 год.<br />
            Без IT-затрат, без кода, с полным сопровождением.
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

        {active === "overview" && <OverviewTab />}
        {active === "table" && <TableTab />}
        {active === "methodology" && <MethodologyTab />}

        <footer style={s.footer}>© 2026 Совкомбанк. Универсальный ассистент.</footer>
      </div>
    </div>
  );
};

export default Index;
