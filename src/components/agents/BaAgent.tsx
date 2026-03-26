import { useState } from "react";
import s from "@/pages/agentStyles";


type BaTabId = "insurance" | "bank";

const BaInsuranceTab = () => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <>
      <div style={s.card}>
        <div style={s.sectionTitle}>Страховая Группа</div>
        <div style={s.statsGrid}>
          <div style={s.statBox}><span style={s.statValue}>812 шт.</span><span style={s.statLabel}>Сейчас (без AI-Агента)<br />Бизнес-требований написано за 1 год</span></div>
          <div style={s.statBox}><span style={s.statValue}>1 015 шт.</span><span style={s.statLabel}>Будет (с AI-Агентом)<br />Бизнес-требований написано за 1 год</span></div>
          <div style={s.statBoxGreen}><span style={s.statValueGreen}>+203 шт.</span><span style={s.statLabel}>Прирост за написанных Бизнес-требований за год с использованием AI-агента</span></div>
        </div>
        <div style={{ marginTop: 16 }}>
          <button
            onClick={() => setShowDetail(v => !v)}
            style={{ padding: "10px 20px", background: showDetail ? "#0056b3" : "#e8f0fe", color: showDetail ? "#fff" : "#0056b3", border: "1.5px solid #0056b3", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: "0.95rem", transition: "all 0.2s" }}
          >
            {showDetail ? "▲ Скрыть детализацию" : "▼ Детализация экономии"}
          </button>
        </div>
        {showDetail && (
          <div style={{ marginTop: 16, padding: "20px", background: "#f0f4ff", borderRadius: 10, border: "1px solid #c5d5f5" }}>
            <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "#1a237e", marginBottom: 14 }}>Источники данных</div>
            <div style={{ marginBottom: 18, padding: "16px", background: "#fff", borderRadius: 8, border: "1px solid #dde3f5" }}>
              <div style={{ fontWeight: 700, color: "#0056b3", marginBottom: 10, fontSize: "0.97rem" }}>1. Статистика работы БА (за 6 месяцев)</div>
              <div style={{ fontWeight: 600, color: "#333", marginBottom: 8 }}>16 Бизнес-Аналитиков</div>
              <div style={{ lineHeight: 1.9, color: "#333", fontSize: "0.93rem" }}>
                <div>• Общее количество написанных БТ за 6 мес. = <b>287 шт.</b></div>
                <div>• Среднее количество написанных БТ за 1 мес. одним БА = 287 шт. ÷ 16 БА ÷ 6 мес. = <b>3 БТ/мес.</b></div>
              </div>
            </div>
            <div style={{ marginBottom: 18, padding: "16px", background: "#fff", borderRadius: 8, border: "1px solid #dde3f5" }}>
              <div style={{ fontWeight: 700, color: "#0056b3", marginBottom: 10, fontSize: "0.97rem" }}>2. Себестоимость 1 рабочего часа Бизнес-Аналитика</div>
              <div style={{ lineHeight: 2, color: "#333", fontSize: "0.93rem" }}>
                <div>• Средняя з./п. БА в мес. = Сумма з./п. (Мл. БА + БА + Старший БА + Ведущий БА) ÷ 4 = 460 000 ₽ ÷ 4 = <b>115 000 ₽/мес.</b></div>
                <div>• Ср. количество рабочих часов в мес. = 40 ч. в неделю × 4 недели = <b>160 ч.</b></div>
                <div>• Стоимость 1 часа = 115 000 ₽/мес. ÷ 160 ч./мес. = <b>718,75 руб./час</b></div>
              </div>
            </div>
            <div style={{ marginBottom: 18, padding: "16px", background: "#fff", borderRadius: 8, border: "1px solid #dde3f5" }}>
              <div style={{ fontWeight: 700, color: "#0056b3", marginBottom: 10, fontSize: "0.97rem" }}>3. Себестоимость 1 Бизнес-Требования</div>
              <div style={{ lineHeight: 2, color: "#333", fontSize: "0.93rem" }}>
                <div>• Кол-во часов на рабочие процессы по написанию БТ в день = <b>7,2 ч.</b></div>
                <div>• Рабочих дней в месяце = <b>22 дня</b></div>
                <div>• Среднее кол-во написанных БТ в месяц на 1 БА = <b>3 шт.</b></div>
                <div>• Время написания 1 БТ = (7,2 ч. × 22 дня) ÷ 3 БТ/мес. = <b>52 ч./1 БТ</b></div>
              </div>
            </div>
            <div style={{ marginBottom: 18, padding: "16px", background: "#fff", borderRadius: 8, border: "1px solid #dde3f5" }}>
              <div style={{ fontWeight: 700, color: "#0056b3", marginBottom: 10, fontSize: "0.97rem" }}>4. Годовой отчет по кол-ву написанных БТ в Страховой Группе</div>
              <div style={{ lineHeight: 2, color: "#333", fontSize: "0.93rem" }}>
                <div>• <b>812 шт.</b> Бизнес-Требований было написано за год от Страховой Группы</div>
              </div>
            </div>
            <div style={{ padding: "16px", background: "#fff", borderRadius: 8, border: "1px solid #dde3f5" }}>
              <div style={{ fontWeight: 700, color: "#0056b3", marginBottom: 10, fontSize: "0.97rem" }}>5. Значения эффективности ИИ-агента для системных аналитиков на основе презентации СКБТ от 09.07.2025</div>
              <div style={{ lineHeight: 2, color: "#333", fontSize: "0.93rem" }}>
                <div>• Экономия до <b>3 ч.</b> в неделю на решение рабочих процессов по анализу БТ</div>
                <div>• Качество ТЗ повышается на <b>15%</b></div>
                <div>• Анализ БТ ускоряется на <b>5%</b></div>
                <div>• Подготовка ТХ ускоряется на <b>10%</b></div>
              </div>
            </div>

            <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "#1a237e", margin: "22px 0 14px" }}>Рабочие процессы Бизнес/Системных аналитиков, участвующие при написании БТ/ТЗ</div>

            <div style={{ marginBottom: 18 }}>
              <div style={{ fontWeight: 700, color: "#333", marginBottom: 8, fontSize: "0.95rem" }}>I. Рабочие процессы Бизнес-аналитика (Страховая Группа)</div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
                  <thead>
                    <tr>
                      {["№", "Наименование рабочего процесса", "Ч.Ч./день\n(без ИИ)", "Ч.Ч./мес\n(без ИИ)", "Ч.Ч./год\n(без ИИ)", "Ч.Ч./день\n(с ИИ)", "Ч.Ч./мес\n(с ИИ)", "Ч.Ч./год\n(с ИИ)", "% опт.\n(за год)"].map((h, i) => (
                        <th key={i} style={{ background: "#1a237e", color: "#fff", padding: "8px 10px", textAlign: i === 1 ? "left" : "center", whiteSpace: "pre-line", lineHeight: 1.3, fontSize: "0.8rem" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [1, "Генерация вопросов к заказчику перед первой встречей", "0.5", "11.0", "132", "0.38", "8.25", "99", "25%"],
                      [2, "Подготовка к встречам (составление повестки, сбор информации)", "0.75", "16.5", "198", "0.56", "12.38", "148.5", "25%"],
                      [3, "Оформление встреч (написание протокола, транскрибация)", "0.75", "16.5", "198", "0.56", "12.38", "148.5", "25%"],
                      [4, "Поиск и рекомендация успешных практик (проектов/задач)", "0.5", "11.0", "132", "0.38", "8.25", "99", "25%"],
                      [5, "Генерация Бизнес-Требований (БТ)", "4.0", "88.0", "1 056", "3.0", "66.0", "792", "25%"],
                      [6, "Проверка и оценка Бизнес-Требований перед передачей в ИТ", "1.0", "22.0", "264", "0.75", "16.5", "198", "25%"],
                    ].map((row, i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? "#f5f7ff" : "#fff" }}>
                        {row.map((cell, j) => (
                          <td key={j} style={{ padding: "7px 10px", borderBottom: "1px solid #e0e6f0", color: j === 1 ? "#1a237e" : "#333", textAlign: j === 1 ? "left" : "center", fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                    <tr style={{ background: "#e8f0fe", fontWeight: 700 }}>
                      <td style={{ padding: "8px 10px", borderTop: "2px solid #0056b3", color: "#1a237e", textAlign: "center" }} colSpan={2}>ИТОГО</td>
                      {["7.5", "165.0", "1 980", "5.63", "123.75", "1 485", "25%"].map((v, i) => (
                        <td key={i} style={{ padding: "8px 10px", borderTop: "2px solid #0056b3", color: "#1b5e20", textAlign: "center", fontWeight: 700 }}>{v}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 700, color: "#333", marginBottom: 8, fontSize: "0.95rem" }}>II. Рабочие процессы Системного аналитика (Совкомбанк Технологии)</div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
                  <thead>
                    <tr>
                      {["№", "Наименование рабочего процесса", "Ч.Ч./день\n(без ИИ)", "Ч.Ч./мес\n(без ИИ)", "Ч.Ч./год\n(без ИИ)", "Ч.Ч./день\n(с ИИ)", "Ч.Ч./мес\n(с ИИ)", "Ч.Ч./год\n(с ИИ)", "% опт.\n(за год)"].map((h, i) => (
                        <th key={i} style={{ background: "#1a237e", color: "#fff", padding: "8px 10px", textAlign: i === 1 ? "left" : "center", whiteSpace: "pre-line", lineHeight: 1.3, fontSize: "0.8rem" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [1, "Анализ Бизнес-Требований, полученных от Бизнес-Аналитиков", "1.5", "33.0", "396", "1.28", "28.05", "336.6", "15%"],
                      [2, "Написание Технического Задания (ТЗ) на основе БТ", "3.0", "66.0", "792", "2.55", "56.1", "673.2", "15%"],
                      [3, "Сопоставление ТЗ и БТ, выявление ошибок и несоответствий", "1.5", "33.0", "396", "1.28", "28.05", "336.6", "15%"],
                      [4, "Написание пользовательской документации по проекту", "1.0", "22.0", "264", "0.85", "18.7", "224.4", "15%"],
                    ].map((row, i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? "#f5f7ff" : "#fff" }}>
                        {row.map((cell, j) => (
                          <td key={j} style={{ padding: "7px 10px", borderBottom: "1px solid #e0e6f0", color: j === 1 ? "#1a237e" : "#333", textAlign: j === 1 ? "left" : "center", fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                    <tr style={{ background: "#e8f0fe", fontWeight: 700 }}>
                      <td style={{ padding: "8px 10px", borderTop: "2px solid #0056b3", color: "#1a237e", textAlign: "center" }} colSpan={2}>ИТОГО</td>
                      {["7.0", "154.0", "1 848", "5.95", "130.9", "1 570.8", "15%"].map((v, i) => (
                        <td key={i} style={{ padding: "8px 10px", borderTop: "2px solid #0056b3", color: "#1b5e20", textAlign: "center", fontWeight: 700 }}>{v}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
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
};

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
  ];
  return (
    <>
      <div style={s.tabRow}>
        {tabs.map(t => <button key={t.id} onClick={() => setTab(t.id)} style={s.tabBtn(tab === t.id)}>{t.label}</button>)}
      </div>
      {tab === "insurance" && <BaInsuranceTab />}
      {tab === "bank" && <BaBankTab />}
    </>
  );
};

export default BaAgent;