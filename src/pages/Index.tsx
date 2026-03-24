import { useState } from "react";

type AgentId = "ba" | "hr" | "twin" | "underwriter";
type BaTabId = "insurance" | "bank" | "methodology";
type HrTabId = "overview" | "table" | "methodology";
type TwinTabId = "overview" | "table" | "sources";
type UnderwriterTabId = "overview" | "processes" | "methodology" | "formulas";

const BG_PATTERN = "https://cdn.poehali.dev/projects/42e938e2-bf61-4164-bb36-13a93dc5e216/bucket/ac9b8653-9db7-422c-89f0-178a9722a64f.jpg";

const s: Record<string, React.CSSProperties> = {
  body: {
    minHeight: "100vh",
    padding: "20px",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#1a1a2e",
    position: "relative",
    backgroundImage: `url(${BG_PATTERN})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    backgroundColor: "#f5e6c8",
  },
  bodyOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(255,245,225,0.25)",
    pointerEvents: "none",
    zIndex: 0,
  },

  container: { maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 },
  header: {
    textAlign: "center",
    padding: "28px 24px",
    background: "rgba(100,20,20,0.82)",
    color: "#fff",
    borderRadius: 16,
    marginBottom: 24,
    backdropFilter: "blur(8px)",
    border: "2px solid rgba(180,60,40,0.6)",
    boxShadow: "0 4px 32px rgba(100,20,20,0.3)",
  },
  h1: { fontSize: "1.7rem", marginBottom: 8, letterSpacing: "0.03em" },
  subtitle: { fontSize: "0.95rem", opacity: 0.85, lineHeight: 1.5 },
  agentRow: { display: "flex", gap: 10, marginBottom: 6, flexWrap: "wrap" },
  agentBtn: (active: boolean): React.CSSProperties => ({
    padding: "12px 28px",
    border: active ? "2px solid rgba(200,80,60,0.8)" : "2px solid rgba(150,60,40,0.4)",
    borderRadius: 10,
    background: active ? "rgba(140,30,30,0.88)" : "rgba(80,20,20,0.65)",
    color: "#fff",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: 700,
    backdropFilter: "blur(6px)",
    transition: "all 0.2s",
    boxShadow: active ? "0 2px 16px rgba(180,40,40,0.4)" : "none",
  }),
  tabRow: { display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap", marginTop: 14 },
  tabBtn: (active: boolean): React.CSSProperties => ({
    padding: "8px 20px",
    border: "none",
    borderRadius: 6,
    background: active ? "rgba(160,40,40,0.85)" : "rgba(80,30,20,0.6)",
    color: "#fff",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: 600,
    backdropFilter: "blur(4px)",
  }),
  card: {
    background: "rgba(255,252,248,0.82)",
    borderRadius: 14,
    padding: 24,
    marginBottom: 16,
    boxShadow: "0 2px 20px rgba(10,20,80,0.12)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.6)",
  },
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 4 },
  statBox: { background: "rgba(220,230,255,0.7)", borderRadius: 10, padding: 20, textAlign: "center", border: "1px solid rgba(100,130,200,0.35)" },
  statBoxGreen: { background: "rgba(210,245,215,0.75)", borderRadius: 10, padding: 20, textAlign: "center", border: "1px solid rgba(100,180,110,0.4)" },
  statValue: { fontSize: "2rem", fontWeight: 700, color: "#1a237e", display: "block", marginBottom: 4 },
  statValueGreen: { fontSize: "2rem", fontWeight: 700, color: "#1b5e20", display: "block", marginBottom: 4 },
  statLabel: { fontSize: "0.9rem", color: "#37474f", lineHeight: 1.4 },
  economyBox: { background: "rgba(200,245,210,0.8)", border: "1px solid rgba(60,180,80,0.4)", borderRadius: 10, padding: 20, textAlign: "center", marginBottom: 0 },
  economyValue: { fontSize: "2.2rem", fontWeight: 700, color: "#1b5e20", display: "block", marginBottom: 6 },
  economyLabel: { fontSize: "1rem", color: "#2e7d32", fontWeight: 600 },
  econCalc: { fontSize: "0.88rem", color: "#2e7d32", marginTop: 10, lineHeight: 1.7 },
  formulaBox: { background: "rgba(255,248,220,0.85)", border: "1px solid rgba(220,180,60,0.5)", borderRadius: 10, padding: 16, marginBottom: 12 },
  formulaTitle: { fontWeight: 700, color: "#c62828", marginBottom: 8, fontSize: "0.95rem" },
  formulaText: { color: "#3e2723", fontSize: "0.9rem", lineHeight: 1.7 },
  sectionTitle: { fontSize: "1.2rem", fontWeight: 700, color: "#7a1515", marginBottom: 16, paddingBottom: 8, borderBottom: "2px solid rgba(160,50,40,0.35)" },
  tableWrap: { overflowX: "auto" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" },
  th: { background: "rgba(100,20,20,0.85)", color: "#fff", padding: "10px 12px", textAlign: "left", whiteSpace: "nowrap" },
  td: { padding: "9px 12px", borderBottom: "1px solid rgba(160,80,40,0.2)", color: "#3e1a10" },
  tdTotal: { padding: "9px 12px", fontWeight: 700, background: "rgba(200,245,210,0.7)", color: "#1b5e20" },
  hint: { fontSize: "0.83rem", color: "#78909c", marginTop: 4 },
  sourceItem: { marginBottom: 10, paddingLeft: 12, borderLeft: "3px solid #8b1a1a" },
  bullet: { fontSize: "0.9rem", color: "#3e1a10", padding: "2px 0", display: "block" },
  footer: { textAlign: "center", padding: 20, color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", marginTop: 8 },
};

// ─────────────── БА: Страховая + Банк ───────────────
const BaInsuranceTab = () => (
  <>
    <div style={s.card}>
      <div style={s.sectionTitle}>Страховая Группа</div>
      <div style={s.statsGrid}>
        <div style={s.statBox}><span style={s.statValue}>812</span><span style={s.statLabel}>Сейчас (без ИИ)<br />БТ реализовано за год</span></div>
        <div style={s.statBox}><span style={s.statValue}>1 015</span><span style={s.statLabel}>С ИИ-агентом<br />БТ потенциально за год</span></div>
        <div style={s.statBoxGreen}><span style={s.statValueGreen}>+203</span><span style={s.statLabel}>Прирост<br />дополнительных БТ (+25%)</span></div>
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

const BaBankTab = () => (
  <>
    <div style={s.card}>
      <div style={s.sectionTitle}>Банк</div>
      <div style={s.statsGrid}>
        <div style={s.statBox}><span style={s.statValue}>22 400</span><span style={s.statLabel}>Сейчас (без ИИ)<br />БТ реализовано за год</span></div>
        <div style={s.statBox}><span style={s.statValue}>28 000</span><span style={s.statLabel}>С ИИ-агентом<br />БТ потенциально за год</span></div>
        <div style={s.statBoxGreen}><span style={s.statValueGreen}>+5 600</span><span style={s.statLabel}>Прирост<br />дополнительных БТ (+25%)</span></div>
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

const BaMethodologyTab = () => (
  <>
    <div style={s.card}>
      <div style={s.sectionTitle}>Методология расчета</div>
      <div style={{ ...s.formulaText, marginBottom: 20 }}>Расчеты основаны на анализе данных 16 бизнес-аналитиков за 3 месяца:</div>
      {[
        { title: "1. Статистический анализ", text: "За 3 месяца создано 240 БТ\nСредняя производительность: 240 БТ ÷ 3 мес = 80 БТ/мес\nНа 1 БА: 80 ÷ 16 = 5 БТ/мес" },
        { title: "2. Экспертная оценка времени", text: "БА тратит 7.2 ч/день на процессы БТ\nВремя на 1 БТ: 7.2 ч/день × 22 дня = 158.4 ч/мес ÷ 5 БТ/мес = 31.7 ч/БТ\nС учетом сложности (2.0 балла): 17.6 ч/БТ" },
        { title: "3. Годовой отчет", text: "Фактический объем: 812 БТ реализовано СКБТ\n• Стоимость часа БА: 710 ₽ (без НДС)\n• Средняя сложность БТ: 2.0 балла\n• Оптимизация: 25%\n• Расчет ведется по консервативному сценарию" },
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
        { title: "Трудоемкость 1 БТ:", text: "T = 1 901 ч ÷ 70.3 БТ = 27.0 ч/БТ (среднее 36.0 ч/БТ)" },
        { title: "Себестоимость 1 БТ:", text: "С = 17.6 ч × 710 ₽/ч = 12 496 ₽/БТ" },
        { title: "Экономия на 1 БТ с ИИ:", text: "E₁ = (17.6 − 13.2) × 710 = 4.4 × 710 = 3 124 ₽/БТ" },
        { title: "Дополнительные БТ:", text: "ΔБТ = 3 573 ч ÷ 13.2 ч/БТ = 271 БТ\nВ консервативном сценарии: 203 БТ (25% прироста)" },
        { title: "Общая экономия:", text: "Eобщ = 3 124 ₽ × 812 БТ = 2 536 688 ₽" },
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
        { title: "1. Статистика работы БА (3 месяца):", items: ["16 бизнес-аналитиков", "240 БТ создано", "479 баллов сложности", "Средняя производительность: 5 БТ/мес на 1 БА"] },
        { title: "2. Годовые отчеты:", items: ["812 БТ реализовано СКБТ в год", "Средняя сложность БТ: 2.0 балла", "Коэффициент реализации: 100%"] },
        { title: "3. Экспертные оценки:", items: ["Время на процессы БТ: 7.2 ч/день (90% рабочего времени)", "Стоимость часа БА: 710 ₽ (без НДС)", "Рабочих дней в году: 264"] },
        { title: "4. Технические параметры ИИ:", items: ["Точность генерации БТ: 65–70%", "Оптимизация процессов: 25%"] },
      ].map((src, i, arr) => (
        <div key={i} style={{ ...s.sourceItem, marginBottom: i === arr.length - 1 ? 0 : 14 }}>
          <div style={{ fontWeight: 700, color: "#1a237e", marginBottom: 6, fontSize: "0.95rem" }}>{src.title}</div>
          {src.items.map((item, j) => <span key={j} style={s.bullet}>• {item}</span>)}
        </div>
      ))}
    </div>
  </>
);

const BaAgent = () => {
  const [tab, setTab] = useState<BaTabId>("insurance");
  const tabs: { id: BaTabId; label: string }[] = [
    { id: "insurance", label: "Страховая Группа" },
    { id: "bank", label: "Банк" },
    { id: "methodology", label: "Методология" },
  ];
  return (
    <>
      <div style={s.tabRow}>
        {tabs.map(t => <button key={t.id} onClick={() => setTab(t.id)} style={s.tabBtn(tab === t.id)}>{t.label}</button>)}
      </div>
      {tab === "insurance" && <BaInsuranceTab />}
      {tab === "bank" && <BaBankTab />}
      {tab === "methodology" && <BaMethodologyTab />}
    </>
  );
};

// ─────────────── HR ───────────────
const hrTableData = [
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

const HrOverviewTab = () => (
  <>
    <div style={s.card}>
      <div style={s.statsGrid}>
        <div style={s.statBox}><span style={s.statValue}>14 400</span><span style={s.statLabel}>Человеко-часов без ИИ<br />(в год на 50 сотрудников HR)</span></div>
        <div style={s.statBox}><span style={s.statValue}>11 160</span><span style={s.statLabel}>Человеко-часов с ИИ<br />(в год на 50 сотрудников HR)</span></div>
        <div style={s.statBoxGreen}><span style={s.statValueGreen}>3 240</span><span style={s.statLabel}>Сокращение ч.ч. в год<br />Экономия: 2 430 000 ₽</span></div>
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

const HrTableTab = () => (
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
          {hrTableData.map((row, i) => (
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

const HrMethodologyTab = () => (
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
      ].map((text, i) => <div key={i} style={{ ...s.formulaText, marginBottom: 10 }}>{text}</div>)}
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

const HrAgent = () => {
  const [tab, setTab] = useState<HrTabId>("overview");
  const tabs: { id: HrTabId; label: string }[] = [
    { id: "overview", label: "Обзор" },
    { id: "table", label: "Детализация" },
    { id: "methodology", label: "Методология" },
  ];
  return (
    <>
      <div style={s.tabRow}>
        {tabs.map(t => <button key={t.id} onClick={() => setTab(t.id)} style={s.tabBtn(tab === t.id)}>{t.label}</button>)}
      </div>
      {tab === "overview" && <HrOverviewTab />}
      {tab === "table" && <HrTableTab />}
      {tab === "methodology" && <HrMethodologyTab />}
    </>
  );
};

// ─────────────── Цифровой двойник ───────────────
const twinTableData = [
  { name: "Согласование доступов/документов", without: "18.9", with: "16.07", saveH: "2.83", saveR: "1 698" },
  { name: "Принятие решений", without: "28.35", with: "24.10", saveH: "4.25", saveR: "2 550" },
  { name: "Подготовка отчетов", without: "22.68", with: "19.28", saveH: "3.40", saveR: "2 040" },
  { name: "Планирование / тайм-менеджмент", without: "15.12", with: "12.85", saveH: "2.27", saveR: "1 362" },
  { name: "Организация встреч", without: "11.34", with: "9.64", saveH: "1.70", saveR: "1 020" },
  { name: "Подключение к критическим задачам", without: "7.56", with: "6.43", saveH: "1.13", saveR: "678" },
];

const TwinOverviewTab = () => (
  <>
    <div style={s.card}>
      <div style={s.statsGrid}>
        <div style={s.statBox}><span style={s.statValue}>2 700 000</span><span style={s.statLabel}>Ч.Ч. на рутинную работу в Pyrus<br />(без ИИ, за год)</span></div>
        <div style={s.statBox}><span style={s.statValue}>2 290 000</span><span style={s.statLabel}>Ч.Ч. на рутинную работу в Pyrus<br />(с ИИ-агентом, за год)</span></div>
        <div style={s.statBoxGreen}><span style={s.statValueGreen}>410 000</span><span style={s.statLabel}>Оптимизация сокращения ч.ч.<br />(за год)</span></div>
      </div>
    </div>
    <div style={s.card}>
      <div style={s.statsGrid}>
        <div style={s.statBox}>
          <span style={s.statValue}>600 ₽</span>
          <span style={s.statLabel}>Средняя себестоимость 1 часа<br /><span style={{ fontSize: "0.8rem", color: "#90a4ae" }}>Средняя ставка по Совкомбанку (включая ТОПов, аналитиков, HR и др.)</span></span>
        </div>
        <div style={s.statBoxGreen}>
          <span style={s.statValueGreen}>978 000 000 ₽</span>
          <span style={s.statLabel}>Экономия в год (руб.)</span>
        </div>
      </div>
      <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
        <div style={{ flex: "1 1 220px", background: "#1a2236", borderRadius: "0.5rem", padding: "0.75rem 1rem", color: "#78909c", fontSize: "0.78rem", lineHeight: "1.6" }}>
          <b style={{ color: "#90a4ae" }}>Формула экономии:</b><br />
          Затраты до ИИ-агента − Затраты после внедрения ИИ-агента = Экономия в год
        </div>
        <div style={{ flex: "1 1 220px", background: "#1a2236", borderRadius: "0.5rem", padding: "0.75rem 1rem", color: "#78909c", fontSize: "0.78rem", lineHeight: "1.6" }}>
          <b style={{ color: "#90a4ae" }}>Затраты до внедрения ИИ:</b><br />
          15 658 активных пользователей × 715 ч.ч./год (ср. время на раб.-процессы 1 пользователя без ИИ) × 600 р./ч. (ср. себестоимость 1 часа) = <b style={{ color: "#b0bec5" }}>6 720 000 000 руб.</b>
        </div>
        <div style={{ flex: "1 1 220px", background: "#1a2236", borderRadius: "0.5rem", padding: "0.75rem 1rem", color: "#78909c", fontSize: "0.78rem", lineHeight: "1.6" }}>
          <b style={{ color: "#90a4ae" }}>Затраты после внедрения ИИ:</b><br />
          15 658 × 608 ч.ч./год (ср. время на раб.-процессы 1 пользователя с ИИ) × 600 р./ч. (ср. себестоимость 1 часа) = <b style={{ color: "#b0bec5" }}>5 742 000 000 руб.</b>
        </div>
        <div style={{ flex: "1 1 220px", background: "#1a2236", borderRadius: "0.5rem", padding: "0.75rem 1rem", color: "#78909c", fontSize: "0.78rem", lineHeight: "1.6" }}>
          <b style={{ color: "#90a4ae" }}>Итоговая экономия:</b><br />
          6 720 000 000 р. (в год без ИИ) − 5 742 000 000 р. (в год с ИИ) = <b style={{ color: "#4caf50" }}>978 000 000 р. экономии в год</b>
        </div>
      </div>
    </div>
    <div style={s.economyBox}>
      <span style={s.economyValue}>978 000 000 ₽</span>
      <span style={s.economyLabel}>Общая годовая оптимизация</span>
      <div style={s.econCalc}>
        Эквивалентно <b>81 500 недель</b> высвобожденного времени<br />
        ≈ <b>16 300 сотрудников</b> (при 40 ч/неделю)
      </div>
    </div>
  </>
);

const TwinTableTab = () => (
  <div style={s.card}>
    <div style={s.sectionTitle}>Детализация экономии по процессам</div>
    <div style={s.tableWrap}>
      <table style={s.table}>
        <thead>
          <tr>
            <th style={s.th}>Процесс</th>
            <th style={s.th}>Ч.Ч. в год (без ИИ)</th>
            <th style={s.th}>Ч.Ч. в год (с ИИ)</th>
            <th style={s.th}>Экономия (ч.ч.)</th>
            <th style={s.th}>Экономия (руб.)</th>
          </tr>
        </thead>
        <tbody>
          {twinTableData.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#fafafa" : "#fff" }}>
              <td style={s.td}>{row.name}</td>
              <td style={s.td}>{row.without}</td>
              <td style={s.td}>{row.with}</td>
              <td style={s.td}>{row.saveH}</td>
              <td style={s.td}>{row.saveR} ₽</td>
            </tr>
          ))}
          <tr>
            <td style={s.tdTotal}>ИТОГО (на 1 пользователя)</td>
            <td style={s.tdTotal}>104.04</td>
            <td style={s.tdTotal}>88.44</td>
            <td style={s.tdTotal}>15.60</td>
            <td style={s.tdTotal}>9 360 ₽</td>
          </tr>
          <tr>
            <td style={s.tdTotal}>ИТОГО (на 15 658 пользователей)</td>
            <td style={s.tdTotal}>1 630 000</td>
            <td style={s.tdTotal}>1 385 000</td>
            <td style={s.tdTotal}>245 000</td>
            <td style={s.tdTotal}>978 000 000 ₽</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const TwinSourcesTab = () => (
  <div style={s.card}>
    <div style={s.sectionTitle}>Источники данных</div>
    {[
      "Количество активных пользователей Pyrus — внутренняя статистика Совкомбанка",
      "Среднее время на процессы — анализ рабочих задач ТОПов и аналитиков",
      "Ставка 600 руб./час — средняя по Совкомбанку (включая ТОПов, HR, аналитиков)",
      "Оптимизация 15% — ограничение проекта, подтвержденное командой",
      "Период — 1 год (с мая 2026 г.)",
    ].map((item, i) => (
      <div key={i} style={{ ...s.sourceItem, marginBottom: 10 }}>
        <span style={s.bullet}>{item}</span>
      </div>
    ))}
    <div style={{ ...s.formulaText, marginTop: 12, color: "#78909c", fontStyle: "italic" }}>
      Все данные — предварительные, могут быть скорректированы после пилота в отделах.
    </div>
  </div>
);

const TwinAgent = () => {
  const [tab, setTab] = useState<TwinTabId>("overview");
  const tabs: { id: TwinTabId; label: string }[] = [
    { id: "overview", label: "Обзор" },
    { id: "table", label: "Детализация" },
    { id: "sources", label: "Источники" },
  ];
  return (
    <>
      <div style={s.tabRow}>
        {tabs.map(t => <button key={t.id} onClick={() => setTab(t.id)} style={s.tabBtn(tab === t.id)}>{t.label}</button>)}
      </div>
      {tab === "overview" && <TwinOverviewTab />}
      {tab === "table" && <TwinTableTab />}
      {tab === "sources" && <TwinSourcesTab />}
    </>
  );
};

// ─────────────── Андеррайтеры Имущества ───────────────
const UnderwriterOverviewTab = () => (
  <>
    <div style={s.card}>
      <div style={s.statsGrid}>
        <div style={s.statBox}><span style={s.statValue}>3 000</span><span style={s.statLabel}>Ч.Ч. в год без ИИ<br />Текущие затраты на рутину</span></div>
        <div style={s.statBox}><span style={s.statValue}>1 650</span><span style={s.statLabel}>Ч.Ч. в год с ИИ<br />После автоматизации</span></div>
        <div style={s.statBoxGreen}><span style={s.statValueGreen}>1 350</span><span style={s.statLabel}>Высвобождаемый ресурс<br />в год (ч.ч.)</span></div>
      </div>
    </div>
    <div style={s.card}>
      <div style={s.statsGrid}>
        <div style={s.statBox}>
          <span style={s.statValue}>1 091 ₽</span>
          <span style={s.statLabel}>Часовая ставка<br /><span style={{ fontSize: "0.8rem", color: "#90a4ae" }}>179 000 ₽ ФОТ / 164 ч</span></span>
        </div>
        <div style={s.statBox}>
          <span style={s.statValue}>×1.4</span>
          <span style={s.statLabel}>Коэффициент полной<br />стоимости труда</span>
        </div>
        <div style={s.statBoxGreen}>
          <span style={s.statValueGreen}>45%</span>
          <span style={s.statLabel}>Оптимизация<br />с ИИ-агентом</span>
        </div>
      </div>
    </div>
    <div style={s.economyBox}>
      <span style={s.economyValue}>2 061 990 ₽</span>
      <span style={s.economyLabel}>Общая годовая оптимизация</span>
      <div style={s.econCalc}>
        1 350 ч × 1 091 ₽/ч × 1.4 = <b>2 061 990 ₽/год</b><br />
        <b>Состав команды:</b> 7 андеррайтеров ИЮЛ + 2 начальника отдела + 1 главный андеррайтер
      </div>
    </div>
  </>
);

const UnderwriterProcessesTab = () => (
  <div style={s.card}>
    <div style={s.sectionTitle}>Детальные расчеты по оптимизированным процессам</div>
    {[
      { num: 1, name: "Обработка заявок", desc: "Сокращает время обработки заявок", opt: "50% оптимизации" },
      { num: 2, name: "Проверка документов", desc: "Уменьшает количество ошибок при проверке документов", opt: "80% оптимизации" },
      { num: 3, name: "Операционные затраты", desc: "Снижает операционные затраты на ручную обработку документов", opt: "40% оптимизации" },
      { num: 4, name: "Адаптация сотрудников", desc: "Помогает снизить время на адаптацию новых сотрудников", opt: "30% оптимизации" },
    ].map((p) => (
      <div key={p.num} style={{ ...s.formulaBox, display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 12 }}>
        <div style={{ minWidth: 36, height: 36, borderRadius: "50%", background: "#00bcd4", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "1rem" }}>{p.num}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, color: "#1a237e", marginBottom: 4 }}>{p.name}</div>
          <div style={{ ...s.formulaText, marginBottom: 6 }}>{p.desc}</div>
          <div style={{ color: "#4caf50", fontWeight: 700, fontSize: "1rem" }}>→ {p.opt}</div>
        </div>
      </div>
    ))}
  </div>
);

const UnderwriterMethodologyTab = () => (
  <>
    <div style={s.card}>
      <div style={s.sectionTitle}>Состав подразделения</div>
      <div style={s.statsGrid}>
        <div style={s.statBox}><span style={s.statValue}>7</span><span style={s.statLabel}>Андеррайтеров ИЮЛ<br />рутинные операции</span></div>
        <div style={s.statBox}><span style={s.statValue}>2</span><span style={s.statLabel}>Начальника отдела<br />контроль и решения</span></div>
        <div style={s.statBox}><span style={s.statValue}>1</span><span style={s.statLabel}>Главный андеррайтер<br />стратегия и сложные кейсы</span></div>
      </div>
    </div>
    <div style={s.card}>
      <div style={s.sectionTitle}>Методология расчета</div>
      {[
        { title: "Статистический анализ", text: "Анализ исторических данных Pyrus по шифрам 520, 521" },
        { title: "Экспертная оценка", text: "Интервью с андеррайтерами, хронометраж операций" },
        { title: "Годовой отчет", text: "Сравнение метрик до и после внедрения" },
      ].map((item, i, arr) => (
        <div key={i} style={{ ...s.formulaBox, marginBottom: i === arr.length - 1 ? 0 : 12 }}>
          <div style={s.formulaTitle}>{item.title}</div>
          <div style={s.formulaText}>{item.text}</div>
        </div>
      ))}
    </div>
    <div style={s.card}>
      <div style={s.sectionTitle}>Источники данных</div>
      {[
        "Статистика Pyrus, отчеты по шифрам 520, 521",
        "Планово-экономические показатели подразделения",
        "Опрошенные эксперты: андеррайтеры, руководители, главный андеррайтер",
        "Среднемесячный ФОТ: 179 000 ₽, рабочих часов в месяц: 164",
      ].map((item, i) => (
        <div key={i} style={{ ...s.sourceItem, marginBottom: 8 }}>
          <span style={s.bullet}>• {item}</span>
        </div>
      ))}
      <div style={{ ...s.formulaText, marginTop: 12, color: "#78909c", fontStyle: "italic" }}>
        Данные основаны на экспертных оценках и анализе бизнес-требований | Апрель 2026
      </div>
    </div>
  </>
);

const UnderwriterFormulasTab = () => (
  <div style={s.card}>
    <div style={s.sectionTitle}>Формулы расчета общей годовой оптимизации</div>
    {[
      {
        title: "Годовая оптимизация (ч.ч.):",
        lines: [
          "Годовая оптимизация (ч.ч.) = Текущие затраты (ч.ч.) × Доля оптимизации",
          "Годовая оптимизация (ч.ч.) = 3 000 ч × 0.45 = 1 350 ч.ч./год",
        ],
      },
      {
        title: "Годовая оптимизация (руб.):",
        lines: [
          "Годовая оптимизация (руб.) = Годовая оптимизация (ч.ч.) × Часовая ставка × K",
          "Годовая оптимизация (руб.) = 1 350 ч × 1 091 руб./ч × 1.4 = 2 061 990 ₽",
        ],
      },
      {
        title: "Часовая ставка:",
        lines: [
          "Часовая ставка = Среднемесячный ФОТ / 164 ч",
          "Часовая ставка = 179 000 руб. / 164 ч = 1 091 руб./ч",
        ],
      },
      {
        title: "Коэффициент полной стоимости труда:",
        lines: [
          "K = 1.4",
          "Включает: налоги, рабочее место, софт, административные расходы",
        ],
      },
    ].map((f, i, arr) => (
      <div key={i} style={{ background: "#f8f9fa", border: "1px solid #e8eaf6", borderLeft: "4px solid #00bcd4", borderRadius: 10, padding: 16, marginBottom: i === arr.length - 1 ? 0 : 14 }}>
        <div style={s.formulaTitle}>{f.title}</div>
        {f.lines.map((line, j) => (
          <div key={j} style={{ fontFamily: "Courier New, monospace", color: "#1a237e", fontSize: "0.95rem", margin: "6px 0" }}>{line}</div>
        ))}
      </div>
    ))}
  </div>
);

const UnderwriterAgent = () => {
  const [tab, setTab] = useState<UnderwriterTabId>("overview");
  const tabs: { id: UnderwriterTabId; label: string }[] = [
    { id: "overview", label: "Обзор" },
    { id: "processes", label: "Процессы" },
    { id: "methodology", label: "Методология" },
    { id: "formulas", label: "Формулы" },
  ];
  return (
    <>
      <div style={s.tabRow}>
        {tabs.map(t => <button key={t.id} onClick={() => setTab(t.id)} style={s.tabBtn(tab === t.id)}>{t.label}</button>)}
      </div>
      {tab === "overview" && <UnderwriterOverviewTab />}
      {tab === "processes" && <UnderwriterProcessesTab />}
      {tab === "methodology" && <UnderwriterMethodologyTab />}
      {tab === "formulas" && <UnderwriterFormulasTab />}
    </>
  );
};

// ─────────────── Конфигурация агентов ───────────────
const agents: { id: AgentId; label: string; subtitle: string }[] = [
  { id: "ba", label: "Универсальный ассистент бизнес/системных-процессов", subtitle: "Анализ эффективности внедрения ИИ-ассистента для бизнес/системных-аналитиков. Период: 1 год." },
  { id: "hr", label: "Помощник руководителей и рекрутеров HR СГ", subtitle: "Анализ эффективности внедрения ИИ-агента для Страховой Группы с периодом в 1 год. Без IT-затрат, без кода, с полным сопровождением." },
  { id: "twin", label: "Цифровой двойник сотрудника", subtitle: "Анализ эффективности внедрения ИИ-агента для Совкомбанка с периодом в 1 год. Оптимизация рутинных задач в Pyrus — без кода, без IT-затрат, с экономией до 15% времени." },
  { id: "underwriter", label: "Цифровой двойник Андеррайтеров Имущества", subtitle: "Анализ экономического эффекта от внедрения ИИ-агента для андеррайтинга по имуществу. Оптимизация с ИИ-агентом 45%. Период: 1 год." },
];

// ─────────────── Главный компонент ───────────────
const Index = () => {
  const [agent, setAgent] = useState<AgentId>("ba");
  const current = agents.find(a => a.id === agent)!;

  return (
    <div style={s.body}>
      <div style={s.bodyOverlay} />
      <div style={s.container}>
        <header style={s.header}>
          <h1 style={s.h1}>Специализированные ИИ-агенты | Совкомбанк</h1>
          <p style={s.subtitle}>Анализ эффективности внедрения. Период: 1 год.</p>
        </header>

        <div style={s.agentRow}>
          {agents.map(a => (
            <button key={a.id} onClick={() => setAgent(a.id)} style={s.agentBtn(agent === a.id)}>{a.label}</button>
          ))}
        </div>

        <div style={{ ...s.card, background: "rgba(220,228,255,0.75)", marginBottom: 0 }}>
          <div style={{ fontWeight: 700, color: "#1a237e", fontSize: "1.05rem", marginBottom: 4 }}>{current.label}</div>
          <div style={{ fontSize: "0.9rem", color: "#455a64" }}>{current.subtitle}</div>
        </div>

        {agent === "ba" && <BaAgent />}
        {agent === "hr" && <HrAgent />}
        {agent === "twin" && <TwinAgent />}
        {agent === "underwriter" && <UnderwriterAgent />}

        <footer style={s.footer}>© 2026 Совкомбанк. Универсальный ассистент.</footer>
      </div>
    </div>
  );
};

export default Index;