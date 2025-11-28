import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const companies = [
    {
      name: "Сбер",
      industry: "Банк",
      help: "Автоматизация сбора и визуализации KPI, генерация отчётов по BABOK-процессам (например, \"Анализ требований\", \"Оценка решений\"), предиктивная аналитика для прогнозирования поведения клиентов.",
      searchUrl: "https://www.google.com/search?q=Сбер+ИИ+бизнес-аналитика+2022+официальный+сайт",
      gradient: "from-cyan-500/30 via-blue-500/20 to-purple-500/30"
    },
    {
      name: "ВТБ",
      industry: "Банк",
      help: "Автоматизация ETL-процессов, генерация гипотез по данным, поддержка принятия решений по BABOK-доменам \"Стратегическое планирование\", \"Управление требованиями\".",
      searchUrl: "https://www.google.com/search?q=ВТБ+ИИ+платформа+бизнес-аналитика+2022+пресс-релиз",
      gradient: "from-blue-500/30 via-cyan-500/20 to-teal-500/30"
    },
    {
      name: "Газпром нефть",
      industry: "Энергетика",
      help: "Автоматизация анализа операционных данных, поддержка BABOK-процессов \"Анализ данных\", \"Оценка решений\", \"Управление изменениями\".",
      searchUrl: "https://www.google.com/search?q=Газпром+нефть+ИИ+бизнес-аналитика+2023+официальный+сайт",
      gradient: "from-purple-500/30 via-pink-500/20 to-fuchsia-500/30"
    },
    {
      name: "МТС",
      industry: "Телеком / IT",
      help: "Автоматизация отчётности, предиктивный анализ клиентского поведения, поддержка BABOK-процессов \"Анализ требований\", \"Моделирование процессов\".",
      searchUrl: "https://www.google.com/search?q=МТС+ИИ+для+бизнес-аналитиков+2022+пресс-релиз",
      gradient: "from-pink-500/30 via-rose-500/20 to-red-500/30"
    },
    {
      name: "Яндекс",
      industry: "IT / Технологии",
      help: "Автоматизация визуализации данных, генерация рекомендаций по улучшению бизнес-процессов, поддержка BABOK-доменов \"Анализ требований\", \"Оценка решений\", \"Управление требованиями\".",
      searchUrl: "https://www.google.com/search?q=Яндекс+ИИ+для+бизнес-аналитиков+2021+официальный+сайт",
      gradient: "from-cyan-500/30 via-blue-500/20 to-indigo-500/30"
    },
    {
      name: "Альфа-Банк",
      industry: "Банк",
      help: "Автоматизация сбора и анализа данных по клиентам, поддержка BABOK-процессов \"Анализ данных\", \"Оценка решений\", \"Управление изменениями\".",
      searchUrl: "https://www.google.com/search?q=Альфа-Банк+ИИ+бизнес-аналитика+2022+официальный+сайт",
      gradient: "from-yellow-500/30 via-orange-500/20 to-amber-500/30"
    },
    {
      name: "Ростелеком",
      industry: "Телеком / IT",
      help: "Автоматизация отчётности, предиктивный анализ, поддержка BABOK-процессов \"Анализ требований\", \"Моделирование процессов\", \"Оценка решений\".",
      searchUrl: "https://www.google.com/search?q=Ростелеком+ИИ+бизнес-аналитика+2022+пресс-релиз",
      gradient: "from-indigo-500/30 via-purple-500/20 to-violet-500/30"
    },
    {
      name: "Лукойл",
      industry: "Энергетика",
      help: "Автоматизация анализа операционных данных, поддержка BABOK-процессов \"Анализ данных\", \"Оценка решений\", \"Управление изменениями\".",
      searchUrl: "https://www.google.com/search?q=Лукойл+ИИ+бизнес-аналитика+2023+официальный+сайт",
      gradient: "from-teal-500/30 via-emerald-500/20 to-green-500/30"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a12]">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 text-cyan-400 animate-fade-in" style={{ textShadow: '0 0 20px rgba(0, 255, 255, 0.5)' }}>
          🤖 ИИ в процессе работы БА
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {companies.map((company, idx) => (
            <Card
              key={idx}
              className={`relative bg-[#121220] border-2 border-blue-500 hover:border-purple-500 transition-all hover:-translate-y-2 animate-scale-in overflow-hidden`}
              style={{
                animationDelay: `${idx * 0.1}s`,
                boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
              }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${company.gradient}`} />
              
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-400 mb-2" style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.5)' }}>
                  {company.name}
                </CardTitle>
                <Badge className="bg-purple-500/30 text-purple-300 border-purple-500/50 w-fit">
                  {company.industry}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="bg-black/30 border-l-4 border-pink-500 rounded-lg p-4">
                  <p className="text-sm font-semibold text-white mb-2">Как помогает:</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {company.help}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href={company.searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-cyan-400 hover:text-pink-400 transition-colors group"
                    style={{ textShadow: '0 0 5px rgba(0, 255, 255, 0.3)' }}
                  >
                    <Icon name="Search" size={16} className="group-hover:animate-pulse" />
                    <span className="group-hover:underline">Найти информацию</span>
                    <Icon name="ExternalLink" size={14} className="ml-auto" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
