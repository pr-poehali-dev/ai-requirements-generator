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

const pyrusProcesses = [
  { name: "Согласование доступов/документов", withoutAI: 0.5, pct: "5%", withAI: 0.475, saveDay: 0.025, saveYear: 6.625, saveRub: "3 975" },
  { name: "Принятие решений", withoutAI: 0.75, pct: "5%", withAI: 0.7125, saveDay: 0.0375, saveYear: 9.9375, saveRub: "5 962.5" },
  { name: "Подготовка отчетов", withoutAI: 0.6, pct: "5%", withAI: 0.57, saveDay: 0.03, saveYear: 7.95, saveRub: "4 770" },
  { name: "Планирование / тайм-менеджмент", withoutAI: 0.4, pct: "5%", withAI: 0.38, saveDay: 0.02, saveYear: 5.3, saveRub: "3 180" },
  { name: "Организация встреч", withoutAI: 0.3, pct: "5%", withAI: 0.285, saveDay: 0.015, saveYear: 3.975, saveRub: "2 385" },
  { name: "Подключение к критическим задачам", withoutAI: 0.2, pct: "5%", withAI: 0.19, saveDay: 0.01, saveYear: 2.65, saveRub: "1 590" },
];

const TwinOverviewTab = () => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <>
      <div style={s.card}>
        <div style={s.statsGrid}>
          <div style={s.statBox}><span style={s.statValue}>11 419 767</span><span style={s.statLabel}>Ч.Ч. на рабочие процессы сотрудников в Pyrus за год<br />(без AI-Агента)</span></div>
          <div style={s.statBox}><span style={s.statValue}>10 835 336</span><span style={s.statLabel}>Ч.Ч. на рабочие процессы сотрудников в Pyrus за год<br />(с использованием AI-Агента)</span></div>
          <div style={s.statBoxGreen}><span style={s.statValueGreen}>+ 584 431 Ч.Ч.</span><span style={s.statLabel}>автоматизации за год</span></div>
        </div>
      </div>
      <div style={s.card}>
        <div style={s.statsGrid}>
          <div style={s.statBox}>
            <span style={s.statValue}>600 ₽</span>
            <span style={s.statLabel}>Средняя себестоимость 1 часа<br /><span style={{ fontSize: "0.8rem", color: "#90a4ae" }}>Средняя ставка по Совкомбанку (включая ТОПов, аналитиков, HR и др.)</span></span>
          </div>
          <div style={s.statBoxGreen}>
            <span style={s.statValueGreen}>+ 345 258 900 ₽</span>
            <span style={s.statLabel}>Экономии в год за счет автоматизации рабочих процессов сотрудников в Pyrus</span>
          </div>
        </div>
        <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          <div style={{ flex: "1 1 220px", background: "#1a2236", borderRadius: "0.5rem", padding: "0.75rem 1rem", color: "#78909c", fontSize: "0.78rem", lineHeight: "1.6" }}>
            <b style={{ color: "#90a4ae" }}>Формула экономии:</b><br />
            Затраты до ИИ-агента − Затраты после внедрения ИИ-агента = Экономия в год
          </div>
          <div style={{ flex: "1 1 220px", background: "#1a2236", borderRadius: "0.5rem", padding: "0.75rem 1rem", color: "#78909c", fontSize: "0.78rem", lineHeight: "1.6" }}>
            <b style={{ color: "#90a4ae" }}>Затраты до внедрения ИИ:</b><br />
            15 658 активных пользователей × 728,75 ч.ч./год (ср. время на раб.-процессы 1 пользователя без ИИ (получено из 2,75 ч./день на процессы без ИИ × 265 раб. дней)) × 600 руб./ч. (ср. стоимость 1 раб. часа) = <b style={{ color: "#b0bec5" }}>6 846 460 500 руб.</b>
          </div>
          <div style={{ flex: "1 1 220px", background: "#1a2236", borderRadius: "0.5rem", padding: "0.75rem 1rem", color: "#78909c", fontSize: "0.78rem", lineHeight: "1.6" }}>
            <b style={{ color: "#90a4ae" }}>Затраты после внедрения ИИ:</b><br />
            15 658 × 692 ч.ч./год (ср. время на раб.-процессы 1 пользователя с ИИ (вычисляется как 2,6125 ч./день с ИИ × 265)) × 600 р./ч. (ср. себестоимость 1 часа) = <b style={{ color: "#b0bec5" }}>6 501 201 600 руб.</b>
          </div>
          <div style={{ flex: "1 1 220px", background: "#1a2236", borderRadius: "0.5rem", padding: "0.75rem 1rem", color: "#78909c", fontSize: "0.78rem", lineHeight: "1.6" }}>
            <b style={{ color: "#90a4ae" }}>Итоговая экономия:</b><br />
            6 846 460 500 р. (в год без ИИ) − 6 501 201 600 р. (в год с ИИ) = <b style={{ color: "#4caf50" }}>345 258 900 р. экономии в год</b>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
        <button
          onClick={() => setShowDetail(v => !v)}
          style={{ background: showDetail ? "#0056b3" : "#fff", color: showDetail ? "#fff" : "#0056b3", border: "2px solid #0056b3", borderRadius: 8, padding: "10px 28px", fontSize: "0.95rem", fontWeight: 700, cursor: "pointer", transition: "all 0.2s" }}
        >
          {showDetail ? "Скрыть детализацию" : "Детализация экономики"}
        </button>
      </div>
      {showDetail && (
        <div style={{ ...s.card, marginBottom: 16 }}>
          <div style={s.sectionTitle}>Основные рабочие процессы сотрудников в Pyrus</div>
          <div style={{ fontSize: "0.82rem", color: "#607d8b", marginBottom: 12 }}>Экономия по каждому процессу (на 1 пользователя)</div>
          <div style={s.tableWrap}>
            <table style={s.table}>
              <thead>
                <tr>
                  <th style={s.th}>№</th>
                  <th style={s.th}>Бизнес-процесс</th>
                  <th style={s.th}>Время без ИИ (ч/день)</th>
                  <th style={s.th}>% оптимизации</th>
                  <th style={s.th}>Время с ИИ (ч/день)</th>
                  <th style={s.th}>Экономия в день (ч)</th>
                  <th style={s.th}>Экономия в год (ч)</th>
                  <th style={s.th}>Экономия в год (руб.)</th>
                </tr>
              </thead>
              <tbody>
                {pyrusProcesses.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fafafa" : "#fff" }}>
                    <td style={s.td}>{i + 1}</td>
                    <td style={s.td}>{row.name}</td>
                    <td style={s.td}>{row.withoutAI}</td>
                    <td style={s.td}>{row.pct}</td>
                    <td style={s.td}>{row.withAI}</td>
                    <td style={s.td}>{row.saveDay}</td>
                    <td style={s.td}>{row.saveYear}</td>
                    <td style={s.td}>{row.saveRub} ₽</td>
                  </tr>
                ))}
                <tr>
                  <td style={s.tdTotal}>—</td>
                  <td style={s.tdTotal}>ИТОГО</td>
                  <td style={s.tdTotal}>2.75 ч/день</td>
                  <td style={s.tdTotal}>5%</td>
                  <td style={s.tdTotal}>2.6125 ч/день</td>
                  <td style={s.tdTotal}>0.1375 ч/день</td>
                  <td style={s.tdTotal}>36.4125 ч/год</td>
                  <td style={s.tdTotal}>21 862.5 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      <div style={s.economyBox}>
        <span style={s.economyValue}>+ 345 258 900 ₽</span>
        <span style={s.economyLabel}>Экономии в год за счет автоматизации рабочих процессов сотрудников в Pyrus</span>
      </div>
    </>
  );
};

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
      "Количество активных пользователей Pyrus — внутренняя статистика Совкомбанка. Среднее количество пользователей в день = 15 658 чел.",
      "Среднее время на процессы — анализ рабочих задач ТОПов и аналитиков",
      "Ставка 600 руб./час — средняя по Совкомбанку (включая ТОПов, HR, аналитиков)",
      "Оптимизация рабочих процессов в 5% — основано на экспертной оценке и ограничениями проекта (не все активные пользователи сразу будут иметь доступ к ИИ-агенту; Перечень оптимизируемых рабочих процессов может расширяться)",
    ].map((item, i) => (
      <div key={i} style={{ ...s.sourceItem, marginBottom: 10 }}>
        <span style={s.bullet}>{item}</span>
      </div>
    ))}
    <div style={{ ...s.formulaText, marginTop: 12, color: "#78909c", fontStyle: "italic" }}>
      Все данные — предварительные, могут быть скорректированы после пилота в подразделениях.
    </div>
  </div>
);

const TwinAgent = () => {
  const [tab, setTab] = useState<TwinTabId>("overview");
  const tabs: { id: TwinTabId; label: string }[] = [
    { id: "overview", label: "Обзор" },
    { id: "sources", label: "Источники" },
  ];
  return (
    <>
      <div style={s.tabRow}>
        {tabs.map(t => <button key={t.id} onClick={() => setTab(t.id)} style={s.tabBtn(tab === t.id)}>{t.label}</button>)}
      </div>
      {tab === "overview" && <TwinOverviewTab />}
      {tab === "sources" && <TwinSourcesTab />}
    </>
  );
};

export default TwinAgent;