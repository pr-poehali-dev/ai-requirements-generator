import { useState } from "react";
import { s } from "@/pages/agentStyles";

type UnderwriterTabId = "overview" | "processes" | "methodology" | "formulas";

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
        1 350 ч × 1 091 ₽/ч × 1.4 = <b>2 061 990 ₽/год</b>
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

export default UnderwriterAgent;