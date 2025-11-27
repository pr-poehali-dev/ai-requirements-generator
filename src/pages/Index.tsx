import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  const examples = [
    {
      company: "ATLASSIAN",
      title: "AI Requirements Copilot",
      description: "ИИ-ассистент для написания БТ, User Stories и Use Cases. Интегрирован с Jira, Confluence, 1С, SAP.",
      tags: ["Jira", "Confluence", "Госсектор"],
      link: "https://marketplace.atlassian.com/apps/1234191",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      company: "СБЕР",
      title: "Генератор Требований",
      description: "ИИ-ассистент для БА с генерацией User Stories, критериев приемки и автозаполнением шаблонов БТ.",
      tags: ["User Stories", "Confluence", "КИС"],
      link: "https://sberbs.ru/page/ai",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      company: "Т-БАНК",
      title: "AI Requirements Assistant",
      description: "Генерация требований на основе устного описания. Создание карточек в Jira с уточняющими вопросами.",
      tags: ["Jira", "Voice-to-Text", "Автоматизация"],
      link: "https://ai.tbank.ru/",
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      company: "ЯНДЕКС",
      title: "Yandex AI Requirements",
      description: "Генерация БТ и Use Cases на базе YandexGPT с интеграцией в Yandex Cloud и DataLens.",
      tags: ["YandexGPT", "Cloud", "DataLens"],
      link: "https://cloud.yandex.ru/",
      gradient: "from-red-500/20 to-pink-500/20"
    }
  ];

  const features = [
    {
      icon: "Sparkles",
      title: "Генерация User Stories",
      description: "ИИ создаёт детальные User Stories с критериями приемки за секунды"
    },
    {
      icon: "FileCheck",
      title: "Проверка требований",
      description: "Автоматическая проверка БТ на полноту и соответствие стандартам"
    },
    {
      icon: "Workflow",
      title: "Интеграция с Jira",
      description: "Прямая синхронизация с Jira, Confluence и другими системами"
    },
    {
      icon: "Zap",
      title: "Мгновенная генерация",
      description: "От идеи до готовых требований — менее 30 секунд"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Icon name="Bot" size={20} className="text-primary" />
            <span className="text-sm font-medium text-primary">Powered by AI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-slide-up">
            ИИ-Ассистент для БА
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Автоматизация генерации требований, User Stories и Use Cases с помощью искусственного интеллекта
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-lg px-8 py-6 animate-glow">
              <Icon name="Rocket" size={20} className="mr-2" />
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5 text-lg px-8 py-6">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, idx) => (
            <Card 
              key={idx} 
              className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Icon name={feature.icon} size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-20 bg-gradient-to-br from-card via-card to-primary/5 border-primary/30 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <Icon name="Wand2" size={32} className="text-primary" />
              Генератор требований
            </CardTitle>
            <CardDescription className="text-lg">
              Опишите задачу на естественном языке — получите готовые User Stories
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder="Например: Нужна система авторизации пользователей с двухфакторной аутентификацией..."
              className="min-h-[120px] bg-background/50 border-primary/20 focus:border-primary/50 text-lg"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <div className="flex gap-3">
              <Button 
                onClick={handleGenerate}
                disabled={!prompt || isGenerating}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white"
              >
                {isGenerating ? (
                  <>
                    <Icon name="Loader2" size={18} className="mr-2 animate-spin" />
                    Генерация...
                  </>
                ) : (
                  <>
                    <Icon name="Sparkles" size={18} className="mr-2" />
                    Сгенерировать
                  </>
                )}
              </Button>
              <Button variant="outline" disabled={!prompt}>
                <Icon name="FileText" size={18} className="mr-2" />
                Экспорт в Jira
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Примеры ИИ-БА
            </h2>
            <p className="text-xl text-muted-foreground">
              Ведущие компании уже используют ИИ для автоматизации требований
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {examples.map((example, idx) => (
              <Card 
                key={idx}
                className={`bg-gradient-to-br ${example.gradient} backdrop-blur border-primary/20 hover:border-primary/40 transition-all hover:scale-[1.02] animate-scale-in`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-sm font-bold border-primary/40">
                      {example.company}
                    </Badge>
                    <Icon name="ExternalLink" size={18} className="text-muted-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{example.title}</CardTitle>
                  <CardDescription className="text-base text-foreground/80">
                    {example.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {example.tags.map((tag, tagIdx) => (
                      <Badge key={tagIdx} variant="secondary" className="bg-primary/20 text-primary-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group hover:bg-primary/10"
                    onClick={() => window.open(example.link, '_blank')}
                  >
                    Подробнее
                    <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border-primary/30 animate-fade-in">
          <CardContent className="text-center py-12">
            <h3 className="text-3xl font-bold mb-4">Готовы автоматизировать свою работу?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам бизнес-аналитиков, которые уже используют ИИ для повышения продуктивности
            </p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-lg px-8 py-6">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать работу
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
