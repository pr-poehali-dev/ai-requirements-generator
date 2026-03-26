import { useState } from "react";
import { s } from "@/pages/agentStyles";
import BaAgent from "@/components/agents/BaAgent";
import HrAgent from "@/components/agents/HrAgent";
import TwinAgent from "@/components/agents/TwinAgent";
import UnderwriterAgent from "@/components/agents/UnderwriterAgent";

type AgentId = "ba" | "hr" | "twin" | "underwriter";

const agents: { id: AgentId; label: string; subtitle: string }[] = [
  { id: "ba", label: "Универсальный ассистент бизнес/системных процессов", subtitle: "Анализ эффективности внедрения ИИ-ассистента для бизнес/системных-аналитиков. Период: 1 год." },
  { id: "hr", label: "Помощник руководителей и рекрутеров HR СГ", subtitle: "Анализ эффективности внедрения ИИ-агента для Страховой Группы с периодом в 1 год. Без IT-затрат, без кода, с полным сопровождением." },
  { id: "underwriter", label: "Цифровой двойник Андеррайтеров Имущества", subtitle: "Анализ экономического эффекта от внедрения ИИ-агента для андеррайтинга по имуществу. Оптимизация с ИИ-агентом 45%. Период: 1 год." },
  { id: "twin", label: "Конструктор Цифрового двойника сотрудника", subtitle: "Анализ эффективности внедрения ИИ-агента для Совкомбанка с периодом в 1 год. Оптимизация рутинных задач в Pyrus — без кода, без IT-затрат, с экономией до 15% времени." },
];

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
          {agents.map((a, i) => (
            <button key={a.id} onClick={() => setAgent(a.id)} style={s.agentBtn(agent === a.id)}>
              <span style={{ minWidth: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", fontWeight: 800, flexShrink: 0 }}>{i + 1}</span>
              {a.label}
            </button>
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
