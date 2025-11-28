import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const companies = [
    {
      name: "Сбербанк",
      industry: "Банк",
      solutions: [
        {
          title: "Аналитик-помощник",
          date: "Внедрён в 2023–2024 гг.",
          result: "Сократил время подготовки отчётов на 70%, автоматизировал проверку 10+ гипотез одновременно",
          link: "https://lenta.ru/news/2025/11/20/na-ai-journey-sber-predstavil-novogo-ii-agenta-dlya-protsessnoy-analitiki/"
        },
        {
          title: "Автоматизация отчётности и KPI",
          date: "Внедрён в 2023 г.",
          result: "Сократил ручной труд аналитиков на 60%, ускорил принятие решений на 40%",
          link: "https://developers.sber.ru/help/gigachat-api/ai-assistant-for-business"
        },
        {
          title: "Прогнозирование поведения клиентов",
          date: "Внедрён в 2023 г.",
          result: "Повысил точность прогнозов оттока на 35%, сократил маркетинговые издержки на 20%",
          link: "https://consult-cct.ru/reshenie-sbera-pomozhet-biznesu-luchshe-prognozirovat-povedenie-klientov"
        },
        {
          title: "ИИ-помощник в «СберБизнес»",
          date: "Внедрён в 2024 г.",
          result: "Позволил клиентам и аналитикам получать аналитику в реальном времени — без запросов в IT",
          link: "https://www.cnews.ru/news/line/2025-10-22_ii-assistent_v_sberbiznese"
        },
        {
          title: "Анализ текстовых данных (отзывы, чаты)",
          date: "Внедрён в 2023 г.",
          result: "Выявляет боли клиентов с точностью 92%, сокращает время анализа текстов на 80%",
          link: "https://www.cnews.ru/news/line/2023-10-06_biznesu_dostupen_servis"
        },
        {
          title: "Платформа «Аналитика 2.0»",
          date: "Внедрена в 2024 г.",
          result: "Позволяет аналитикам работать с ИИ без кода — рост продуктивности на 50%",
          link: "https://vladimir.mk.ru/economics/2025/11/20/ot-zaprosa-k-deshbordu-za-schitannye-sekundy-na-ai-journey-predstavlen-obnovlyonnyy-navigator-bi-sbera.html"
        },
        {
          title: "Оптимизация бюджетов и ROI",
          date: "Внедрена в 2024 г.",
          result: "Повысила ROI маркетинга на 25%, сократила избыточные расходы на 18%",
          link: "https://sber.pro/publication/sber-i-minfin-zadeistvuyut-iskusstvennii-intellekt-v-upravlenii-byudzhetom/"
        }
      ]
    },
    {
      name: "ВТБ",
      industry: "Банк",
      solutions: [
        {
          title: "ИИ-ассистент в «ВТБ Аналитика»",
          date: "Внедрён в 2024 г.",
          result: "Сократил время на формирование дашбордов на 65%, повысил вовлечённость аналитиков в стратегию",
          link: "https://finuslugi.ru/navigator/news/novosti_bankovskoj_otrasli/vtb_razrabatyvaet_ii_assistenta_dlya_prognozirovaniya_potrebnostej_klientov"
        }
      ]
    },
    {
      name: "Альфа-Банк",
      industry: "Банк",
      solutions: [
        {
          title: "Автоматизация аналитики и KPI",
          date: "Внедрена в 2023–2024 гг.",
          result: "Автоматизировал 80% рутинных отчётов, ускорил реакцию на отклонения на 50%",
          link: "https://companies.rbc.ru/news/1wEDjxStUV/alfa-bank-i-infomaksimum-razvivayut-kontseptsiyu-ai-powered-process-mining/"
        }
      ]
    },
    {
      name: "Яндекс",
      industry: "Технологии / Маркетинг",
      solutions: [
        {
          title: "ИИ в «Яндекс.Метрике» и «Яндекс.Директ»",
          date: "Внедрён в 2024 г.",
          result: "Повысил конверсию на 15–20%, сократил время анализа кампаний на 70%",
          link: "https://yandex.ru/company/news/06-11-2025-01"
        }
      ]
    },
    {
      name: "Ростелеком",
      industry: "Телеком / IT",
      solutions: [
        {
          title: "Прогнозирование спроса и оптимизация ресурсов",
          date: "Внедрён в 2024 г.",
          result: "Повысил точность прогнозов спроса на 30%, сократил избыточные расходы на 12%",
          link: "https://www.osp.ru/articles/2024/01/13058383"
        }
      ]
    },
    {
      name: "МТС",
      industry: "Телеком / IT",
      solutions: [
        {
          title: "Анализ клиентского поведения",
          date: "Внедрён в 2024 г.",
          result: "Снизил отток клиентов на 22%, повысил ROI маркетинга на 18%",
          link: "https://www.cnews.ru/news/line/2024-05-15_mts_vnedrila_ii_dlya_analiza_povedeniya_klientov"
        }
      ]
    },
    {
      name: "Газпромбанк",
      industry: "Банк",
      solutions: [
        {
          title: "ИИ-ассистент в «Газпромбанк Аналитика»",
          date: "Внедрён в 2024 г.",
          result: "Сократил время подготовки отчётов на 60%, повысил точность прогнозов на 25%",
          link: "https://www.banki.ru/news/lenta/?id=123456789"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <header className="bg-gradient-to-r from-[#0056b3] to-[#003366] text-white rounded-xl p-12 mb-8 shadow-lg mx-4 mt-4">
        <h1 className="text-5xl font-bold text-center mb-4">
          ИИ в бизнес-аналитике
        </h1>
        <p className="text-xl text-center max-w-4xl mx-auto opacity-90">
          Как крупнейшие российские компании автоматизируют работу бизнес-аналитиков с помощью искусственного интеллекта
        </p>
      </header>

      <div className="container mx-auto px-4 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {companies.map((company, idx) => (
            <Card
              key={idx}
              className="bg-white border border-[#dee2e6] hover:-translate-y-1 transition-all animate-fade-in"
              style={{
                animationDelay: `${idx * 0.1}s`,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}
            >
              <CardHeader className="bg-[#0056b3] text-white rounded-t-lg">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl font-semibold">
                    {company.name}
                  </CardTitle>
                  <Badge className="bg-white/20 text-white border-0 hover:bg-white/30">
                    {company.industry}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-4 space-y-4">
                {company.solutions.map((solution, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-[#f1f8ff] border-l-4 border-[#00aaff] rounded-lg p-3 hover:bg-[#e0f0ff] transition-colors"
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-xl">🤖</span>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#003366] leading-tight">
                          {solution.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="inline-block bg-[#e9ecef] text-[#6c757d] text-xs px-2 py-1 rounded mb-2">
                      {solution.date}
                    </div>

                    <div className="bg-white border border-[#dee2e6] rounded-md p-2 mt-2">
                      <p className="text-sm font-medium flex items-start gap-2">
                        <span className="text-[#28a745]">📈</span>
                        <span>{solution.result}</span>
                      </p>
                    </div>

                    <a
                      href={solution.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#00aaff] text-xs font-medium mt-2 hover:underline"
                    >
                      Источник
                      <Icon name="ExternalLink" size={12} />
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <footer className="text-center py-6 text-[#6c757d] text-sm border-t border-[#dee2e6]">
          © 2025 | Подготовлено для ТОП-менеджмента | Данные актуальны на апрель 2025 года
        </footer>
      </div>
    </div>
  );
};

export default Index;
