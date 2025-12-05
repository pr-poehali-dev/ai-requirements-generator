import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const spaces = [
    {
      id: 1,
      title: "Проведение и документирование встреч",
      used: "57,1% (4 человека)",
      frequency: "1–2 раза/нед — 75%; 3–5 раз — 25%",
      usefulness: "3 — 50%; 4 — 25%; 5 — 25%",
      correctness: "60–80% — 50%",
      comments: [
        "Не видит файлы с 1 раза",
        "Не спрашивать, была ли встреча объёмной",
        "Не всегда запускается с первого раза — использую закреплённые промты"
      ],
      conclusion: "Востребовано, но требует улучшения стабильности и интеграции с файлами.",
      status: "warning",
      gradient: "from-[#667eea] to-[#764ba2]"
    },
    {
      id: 2,
      title: "Анализ бизнес-процессов и выявление проблем",
      used: "71,4% (5 человек)",
      frequency: "1–2 раза/нед — 80%; >5 раз — 20%",
      usefulness: "2 — 40%; 3 — 40%; 5 — 20%",
      correctness: "Менее 20% — 40%",
      comments: ["Все нормально)"],
      conclusion: "Используется часто, но оценка полезности низкая — ИИ часто даёт некорректные результаты. Потенциал есть, но требует доработки.",
      status: "danger",
      gradient: "from-[#f093fb] to-[#f5576c]"
    },
    {
      id: 3,
      title: "Генерация бизнес-требований (БТ)",
      used: "57,1% (4 человека)",
      frequency: "1–2 раза/нед — 75%; один раз — 25%",
      usefulness: "1 — 25%; 3 — 50%; 4 — 25%",
      correctness: "40–60% — 25%; 60–80% — 25%",
      comments: ["Часто бредит, хотелось бы, чтобы выдавал записи без лишнего и лучше изучал документы из задачи"],
      conclusion: "Востребовано, но качество генерации требований нестабильно. Пользователи хотят более точного анализа документов.",
      status: "warning",
      gradient: "from-[#4facfe] to-[#00f2fe]"
    },
    {
      id: 4,
      title: "Генерация критериев приёмки",
      used: "71,4% (5 человек)",
      frequency: "1–2 раза/нед — 80%; 3–5 раз — 20%",
      usefulness: "4 — 60%; 5 — 40%",
      correctness: "60–80% — 100%",
      comments: [
        "Все супер",
        "Не дублировать критерии",
        "Хотелось бы редактировать промт перед запуском"
      ],
      conclusion: "Лучшее пространство по качеству и полезности. ИИ даёт корректные результаты, пользователи активно его используют. Требуется улучшение гибкости промтов.",
      status: "success",
      gradient: "from-[#43e97b] to-[#38f9d7]"
    },
    {
      id: 5,
      title: "Проверка и обновление бизнес-требований (БТ)",
      used: "28,6% (2 человека)",
      frequency: "1–2 раза — 50%; 3–5 раз — 50%",
      usefulness: "4 — 100%",
      correctness: "60–80% — 100%",
      comments: ["Все ок"],
      conclusion: "Низкое использование, но высокая оценка полезности и корректности. Возможно, пользователи не знают о его возможностях — нужна популяризация и обучение.",
      status: "success",
      gradient: "from-[#fa709a] to-[#fee140]"
    },
    {
      id: 6,
      title: "Аналитика по задачам в Pyrus",
      used: "0% (0 человек)",
      frequency: "—",
      usefulness: "—",
      correctness: "—",
      comments: ["Нет ответов"],
      conclusion: "Пространство не используется вообще. Возможно, неизвестно, не интегрировано или не решает актуальные задачи. Требует пересмотра или улучшения функционала.",
      status: "danger",
      gradient: "from-[#a8edea] to-[#fed6e3]"
    }
  ];

  const statusColors: Record<string, string> = {
    success: "bg-[#27ae60]",
    warning: "bg-[#f39c12]",
    danger: "bg-[#e74c3c]"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <h1 className="text-5xl font-bold text-center text-white mb-12 drop-shadow-2xl">
          📊 Результаты опроса по использованию ИИ-пространств DeepSeek
        </h1>

        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl mb-12 border-0 col-span-2">
          <CardHeader className="bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-t-2xl py-6">
            <CardTitle className="text-white text-3xl">📌 Резюме по опросу</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="bg-gradient-to-br from-[#f093fb]/10 to-[#f5576c]/10 rounded-xl p-6 mb-6 border border-purple-200">
              <p className="mb-3 text-gray-800 text-lg"><strong>Всего опрошенных:</strong> 9 человек</p>
              <p className="mb-3 text-gray-800 text-lg"><strong>Используют ИИ-пространства:</strong> <span className="text-[#27ae60] font-bold">77,8%</span> (7 человек)</p>
              <p className="mb-3 text-gray-800 text-lg"><strong>Не используют:</strong> <span className="text-[#e74c3c] font-bold">22,2%</span> (2 человека)</p>
              <p className="text-gray-800 text-lg"><strong>Причина неиспользования:</strong> «Не было потребности, и ранее нестабильно работали»</p>
            </div>

            <div className="mb-6">
              <p className="font-bold mb-3 text-gray-800 text-xl">Топ-3 самых полезных пространства:</p>
              <ul className="list-none space-y-2 ml-4">
                <li className="text-gray-800 text-lg">✅ Проведение и документирование встреч — 71,4%</li>
                <li className="text-gray-800 text-lg">✅ Генерация бизнес-требований — 71,4%</li>
                <li className="text-gray-800 text-lg">✅ Генерация критериев приёмки — 71,4%</li>
              </ul>
            </div>

            <div className="mb-6">
              <p className="font-bold mb-3 text-gray-800 text-xl">Готовность продолжать использовать:</p>
              <ul className="list-none space-y-2 ml-4">
                <li className="text-gray-800 text-lg">🟢 Активно — 66,7%</li>
                <li className="text-gray-800 text-lg">🟡 В крайних случаях — 16,7%</li>
                <li className="text-gray-800 text-lg">🔴 Нет, но возможно — 16,7%</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-[#ffecd2] to-[#fcb69f] border-l-4 border-[#f39c12] rounded-lg p-6">
              <h3 className="text-[#d35400] font-bold mb-4 text-xl">💡 Ключевые рекомендации:</h3>
              <p className="mb-2 text-gray-800 text-lg">— Улучшить стабильность и интеграцию с файлами</p>
              <p className="mb-2 text-gray-800 text-lg">— Добавить редактирование промтов прямо в интерфейсе</p>
              <p className="mb-2 text-gray-800 text-lg">— Популяризировать малоиспользуемые, но полезные пространства (например, проверка БТ)</p>
              <p className="text-gray-800 text-lg">— Интегрировать анализ задач Pyrus</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {spaces.map((space) => (
            <Card key={space.id} className="bg-white/95 backdrop-blur-sm shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 border-0">
              <CardHeader className={`bg-gradient-to-r ${space.gradient} rounded-t-2xl py-5`}>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white text-xl font-bold">
                    {space.id}️⃣ {space.title}
                  </CardTitle>
                  <Badge className={`${statusColors[space.status]} text-white border-0 px-3 py-1 text-base`}>
                    {space.status === 'success' ? '✓' : space.status === 'warning' ? '⚠' : '✗'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className={`bg-gradient-to-br ${space.gradient} bg-opacity-10 rounded-xl p-5 mb-5 border border-gray-200`}>
                  <p className="mb-2 text-gray-800 text-base"><strong>Использовали:</strong> {space.used}</p>
                  <p className="mb-2 text-gray-800 text-base"><strong>Частота:</strong> {space.frequency}</p>
                  <p className="mb-2 text-gray-800 text-base"><strong>Полезность (1–5):</strong> {space.usefulness}</p>
                  <p className="text-gray-800 text-base"><strong>Корректность ИИ:</strong> {space.correctness}</p>
                </div>

                {space.comments.length > 0 && (
                  <div className="bg-gradient-to-r from-[#ffecd2] to-[#fcb69f] border-l-4 border-[#f39c12] rounded-lg p-4 mb-5">
                    <h3 className="text-[#d35400] font-bold mb-2 text-base">💬 Комментарии:</h3>
                    {space.comments.map((comment, idx) => (
                      <p key={idx} className="mb-1 text-gray-800 text-sm leading-relaxed">— {comment}</p>
                    ))}
                  </div>
                )}

                <p className="text-gray-800 text-base leading-relaxed">
                  <strong>Вывод:</strong>{' '}
                  <span className={space.status === 'success' ? 'text-[#27ae60] font-semibold' : space.status === 'danger' ? 'text-[#e74c3c] font-semibold' : 'font-semibold'}>
                    {space.conclusion}
                  </span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 py-8 text-white/70 text-base backdrop-blur-sm bg-white/5 rounded-2xl">
          📊 Отчёт сформирован на основе опроса 9 бизнес-аналитиков.<br />
          Для улучшения ИИ-пространств — обращайтесь к команде разработки.
        </div>
      </div>
    </div>
  );
};

export default Index;