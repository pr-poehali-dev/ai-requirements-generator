import { useState } from "react";
import { s } from "@/pages/agentStyles";

type TwinTabId = "overview" | "table" | "sources";

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

export default TwinAgent;