import { useState } from "react";
import s from "@/pages/agentStyles";

type HrTabId = "overview" | "table" | "methodology";
type HrModalId = "methodology" | "formulas" | "sources" | null;

const hrTableData = [
  { id: 1,  name: "Анализ резюме (руководители)",                           without: "1 692.25", with: "362.625",  saveH: "1 329.625", saveR: "997 219" },
  { id: 2,  name: "Анализ резюме (рекрутеры)",                              without: "21 391.75",with: "6 417.525",saveH: "14 974.225",saveR: "11 230 669" },
  { id: 3,  name: "Вопросы для подготовки к собеседованию",                 without: "720",      with: "540",       saveH: "180",        saveR: "135 000" },
  { id: 4,  name: "Анализ видеозаписи собеседования",                       without: "2 880",    with: "2 304",     saveH: "576",        saveR: "432 000" },
  { id: 5,  name: "Тестовое задание",                                       without: "1 440",    with: "1 152",     saveH: "288",        saveR: "216 000" },
  { id: 6,  name: "Проверка тестового задания",                             without: "1 440",    with: "1 152",     saveH: "288",        saveR: "216 000" },
  { id: 7,  name: "Отработка возражений кандидатов",                        without: "720",      with: "576",       saveH: "144",        saveR: "108 000" },
  { id: 8,  name: "Подготовка обратной связи",                              without: "720",      with: "576",       saveH: "144",        saveR: "108 000" },
  { id: 9,  name: "Помощь в написании вакансии",                            without: "1 440",    with: "1 152",     saveH: "288",        saveR: "216 000" },
  { id: 10, name: "Оффер СКБСЖ (2 р/нед)",                                 without: "96",       with: "81.6",      saveH: "14.4",       saveR: "10 800" },
  { id: 11, name: "Оффер СКБС (2 р/нед)",                                  without: "96",       with: "81.6",      saveH: "14.4",       saveR: "10 800" },
  { id: 12, name: "Оффер НПФ (2 р/нед)",                                   without: "96",       with: "81.6",      saveH: "14.4",       saveR: "10 800" },
  { id: 13, name: "Внесение изменений в Штатное Расписание (2 р/нед)",      without: "240",      with: "216",       saveH: "24",         saveR: "18 000" },
  { id: 14, name: "Анализ задачи на подбор",                                without: "2 160",    with: "1 620",     saveH: "540",        saveR: "405 000" },
  { id: 15, name: "Правила экологичного перевода (2 р/нед)",                without: "96",       with: "86.4",      saveH: "9.6",        saveR: "7 200" },
  { id: 16, name: "Положение о подборе персонала (2 р/нед)",                without: "96",       with: "86.4",      saveH: "9.6",        saveR: "7 200" },
];

const hrModalStyle: React.CSSProperties = {
  position: "fixed", zIndex: 1000, left: 0, top: 0, width: "100%", height: "100%",
  background: "rgba(0,0,0,0.5)", padding: "20px", display: "flex", alignItems: "center", justifyContent: "center",
};
const hrModalContentStyle: React.CSSProperties = {
  background: "white", padding: 24, borderRadius: 12, maxWidth: 700, width: "100%",
  boxShadow: "0 4px 24px rgba(0,0,0,0.15)", maxHeight: "80vh", overflowY: "auto", position: "relative",
};

const HrAgent = () => {
  const [tab, setTab] = useState<HrTabId>("overview");
  const [modal, setModal] = useState<HrModalId>(null);

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

      {tab === "overview" && (
        <>
          <div style={s.card}>
            <div style={s.statsGrid}>
              <div style={s.statBox}><span style={s.statValue}>34 484</span><span style={s.statLabel}>Человеко-часов без ИИ<br />(в год на сотрудников HR СГ)</span></div>
              <div style={s.statBox}><span style={s.statValue}>18 184</span><span style={s.statLabel}>Человеко-часов с ИИ<br />(в год на сотрудников HR СГ)</span></div>
              <div style={s.statBoxGreen}><span style={s.statValueGreen}>16 300</span><span style={s.statLabel}>Экономия ч.ч. в год<br />(-47.3%)</span></div>
            </div>
          </div>
          <div style={s.card}>
            <div style={s.statsGrid}>
              <div style={{ ...s.statBox, textAlign: "left" }}>
                <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1a237e", display: "block", marginBottom: 8 }}>Стоимость 1 часа</span>
                <span style={{ fontSize: "2rem", fontWeight: 700, color: "#1a237e" }}>750 ₽</span>
              </div>
              <div style={{ ...s.statBoxGreen, textAlign: "left" }}>
                <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1b5e20", display: "block", marginBottom: 8 }}>Экономия в год</span>
                <span style={{ fontSize: "2rem", fontWeight: 700, color: "#1b5e20" }}>12 225 000 ₽</span>
                <span style={{ fontSize: "0.85rem", color: "#2e7d32" }}>Экономия в год</span>
              </div>
            </div>
          </div>
          <div style={{ background: "linear-gradient(135deg, #0056b3, #007bff)", color: "#fff", padding: 28, borderRadius: 14, marginBottom: 16, boxShadow: "0 6px 24px rgba(0,86,179,0.2)" }}>
            <div style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 16, textAlign: "center" }}>Общая годовая оптимизация</div>
            <div style={{ fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
              <p>ИИ-агент «Помощник HR» сократил трудозатраты на <span style={{ background: "rgba(255,255,255,0.2)", padding: "2px 8px", borderRadius: 6, fontWeight: 600 }}>47.3%</span> за счёт автоматизации рутинных задач.</p>
              <p style={{ marginTop: 10 }}><b>Расчет:</b> 34 484 ч.ч. – 18 184 ч.ч. = <b>16 300 ч.ч.</b> экономии в год.</p>
              <p style={{ marginTop: 10 }}><b>Эквивалентно:</b> <span style={{ background: "rgba(255,255,255,0.2)", padding: "2px 8px", borderRadius: 6, fontWeight: 600 }}>16 300 ч.ч.</span> — это <b>2 038 рабочих дней</b> (при 8-часовом рабочем дне) или <b>407 месяцев</b> одного сотрудника.</p>
              <p style={{ marginTop: 10 }}>Экономия: <b>12 225 000 руб.</b> — это <b>12,2 млн руб.</b> в год.</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 8 }}>
            <button onClick={() => setModal("methodology")} style={{ padding: "10px 16px", background: "#0056b3", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 600 }}>Методология расчетов</button>
            <button onClick={() => setModal("formulas")} style={{ padding: "10px 16px", background: "#6c757d", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 600 }}>Все формулы</button>
            <button onClick={() => setModal("sources")} style={{ padding: "10px 16px", background: "#28a745", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 600 }}>Источники данных</button>
          </div>
        </>
      )}

      {tab === "table" && (
        <div style={s.card}>
          <div style={s.sectionTitle}>Детализация экономии по процессам (в год на 50 сотрудников)</div>
          <div style={s.tableWrap}>
            <table style={s.table}>
              <thead>
                <tr>
                  <th style={s.th}>№</th>
                  <th style={s.th}>Процесс</th>
                  <th style={s.th}>Ч.Ч. без ИИ (в год)</th>
                  <th style={s.th}>Ч.Ч. с ИИ (в год)</th>
                  <th style={s.th}>Экономия (ч.ч.) (в год)</th>
                  <th style={s.th}>Экономия (руб.) (в год)</th>
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
                  <td style={s.tdTotal}>34 484</td>
                  <td style={s.tdTotal}>18 184</td>
                  <td style={s.tdTotal}>16 300</td>
                  <td style={s.tdTotal}>12 225 000 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === "methodology" && (
        <>
          <div style={s.card}>
            <div style={s.sectionTitle}>Методология расчетов</div>
            {[
              "1. Норматив: 1 сотрудник = 160 ч.ч. в месяц → 1 920 ч.ч. в год.",
              "2. ИИ-агент оптимизирует 15% от общего рабочего времени — рутинные задачи (анализ резюме, подготовка к собеседованиям, проверка тестов, оформление офферов и т.д.).",
              "3. Общее время на рутинные задачи (без ИИ): 1 920 × 15% = 288 ч.ч. в год на одного сотрудника → 14 400 ч.ч. на 50 сотрудников.",
              "4. Анализ резюме — Руководители HR: 14 505 резюме в год × 7 минут = 1 692.25 ч.ч. → с ИИ: 1,5 мин → 362.625 ч.ч.",
              "5. Анализ резюме — Рекрутеры: 256 701 резюме в год × 5 минут = 21 391.75 ч.ч. → с ИИ: 1,5 мин → 6 417.525 ч.ч.",
              "6. Стоимость 1 часа — 750 руб.",
              "7. Все значения в таблице — в год на 50 сотрудников.",
            ].map((text, i) => <div key={i} style={{ ...s.formulaText, marginBottom: 10 }}>{text}</div>)}
          </div>
          <div style={s.card}>
            <div style={s.sectionTitle}>Все формулы</div>
            {[
              { title: "Ч.Ч. в год без ИИ:", text: "1 920 × 15% × 50 = 14 400 ч.ч. (в год)" },
              { title: "Ч.Ч. в год с ИИ:", text: "14 400 × 0.775 = 11 160 ч.ч. (в год)" },
              { title: "Экономия в ч.ч.:", text: "14 400 – 11 160 = 3 240 ч.ч. (в год)" },
              { title: "Экономия в рублях:", text: "3 240 × 750 = 2 430 000 руб. (в год)" },
              { title: "Анализ резюме (руководители):", text: "14 505 × 7 мин = 101 535 мин = 1 692.25 ч.ч. → с ИИ: 1,5 мин = 362.625 ч.ч." },
              { title: "Анализ резюме (рекрутеры):", text: "256 701 × 5 мин = 1 283 505 мин = 21 391.75 ч.ч. → с ИИ: 1,5 мин = 6 417.525 ч.ч." },
            ].map((f, i, arr) => (
              <div key={i} style={{ ...s.formulaBox, marginBottom: i === arr.length - 1 ? 0 : 12 }}>
                <div style={s.formulaTitle}>{f.title}</div>
                <div style={s.formulaText}>{f.text}</div>
              </div>
            ))}
          </div>
        </>
      )}

      {modal && (
        <div style={hrModalStyle} onClick={() => setModal(null)}>
          <div style={hrModalContentStyle} onClick={e => e.stopPropagation()}>
            <span onClick={() => setModal(null)} style={{ position: "absolute", top: 12, right: 16, fontSize: 24, cursor: "pointer", color: "#343a40" }}>×</span>
            {modal === "methodology" && (
              <>
                <h3 style={{ color: "#0056b3", marginBottom: 12 }}>Методология расчетов</h3>
                {[
                  "1. Норматив: 1 сотрудник = 160 ч.ч. в месяц → 1920 ч.ч. в год.",
                  "2. ИИ-агент оптимизирует 15% от общего рабочего времени — рутинные задачи.",
                  "3. Общее время на рутинные задачи (без ИИ): 1920 × 15% = 288 ч.ч. в год на одного → 14 400 ч.ч. на 50 сотрудников.",
                  "4. Руководители HR: 14 505 резюме × 7 мин = 1 692.25 ч.ч. → с ИИ: 1,5 мин → 362.625 ч.ч.",
                  "5. Рекрутеры: 256 701 резюме × 5 мин = 21 391.75 ч.ч. → с ИИ: 1,5 мин → 6 417.525 ч.ч.",
                  "6. Стоимость 1 часа — 750 руб.",
                  "7. Все значения в таблице — в год на 50 сотрудников.",
                ].map((t, i) => <p key={i} style={{ marginBottom: 8, color: "#343a40", fontSize: "0.95rem" }}>{t}</p>)}
              </>
            )}
            {modal === "formulas" && (
              <>
                <h3 style={{ color: "#0056b3", marginBottom: 12 }}>Все формулы</h3>
                {[
                  ["Ч.Ч. в год без ИИ", "1920 × 15% × 50 = 14 400 ч.ч."],
                  ["Ч.Ч. в год с ИИ", "14 400 × 0.775 = 11 160 ч.ч."],
                  ["Экономия в ч.ч.", "14 400 – 11 160 = 3 240 ч.ч."],
                  ["Экономия в рублях", "3 240 × 750 = 2 430 000 руб."],
                  ["Эквивалент в днях", "3 240 / 8 = 405 дней"],
                  ["Эквивалент в месяцах", "3 240 / (8 × 20) = 81 месяц"],
                  ["Резюме (руководители)", "14 505 × 7 мин → 1 692.25 ч.ч. → с ИИ: 362.625 ч.ч."],
                  ["Резюме (рекрутеры)", "256 701 × 5 мин → 21 391.75 ч.ч. → с ИИ: 6 417.525 ч.ч."],
                ].map(([title, text], i) => (
                  <div key={i} style={{ background: "#fff8dc", border: "1px solid #e8d87a", borderRadius: 8, padding: "10px 14px", marginBottom: 10 }}>
                    <b style={{ color: "#c62828" }}>{title}:</b>
                    <div style={{ fontFamily: "Courier New, monospace", color: "#1a237e", marginTop: 4 }}>{text}</div>
                  </div>
                ))}
              </>
            )}
            {modal === "sources" && (
              <>
                <h3 style={{ color: "#0056b3", marginBottom: 12 }}>Источники данных</h3>
                {[
                  "1. Нормативы: Трудовой кодекс РФ — 40 часов в неделю → 160 ч.ч. в месяц.",
                  "2. Доля рутинных задач — 15% — экспертная оценка HR-команды.",
                  "3. Стоимость 1 часа — 750 руб. — средняя зарплата HR-сотрудника.",
                  "4. Количество сотрудников — 50 человек в HR-департаменте Страховой Группы.",
                  "5. Количество резюме — из внутренней статистики HH и Страховой Группы.",
                  "6. Руководители HR: анализируют 14 505 резюме в год (отобранные рекрутерами). Среднее время на 1 резюме — 7 минут. С ИИ — 1,5 минуты.",
                  "7. Рекрутеры: анализируют 256 701 резюме в год (первичные, с HH). Среднее время на 1 резюме — 5 минут. С ИИ — 1,5 минуты.",
                  "8. Все значения в таблице — в год на 50 сотрудников.",
                ].map((t, i) => <p key={i} style={{ marginBottom: 8, color: "#343a40", fontSize: "0.95rem" }}>{t}</p>)}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HrAgent;
