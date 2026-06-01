import { useEffect, useState } from "react";
import { BookOpen, Mail, CreditCard, Download, Star, CheckCircle, ArrowRight, Zap, Shield, Clock } from "lucide-react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEmail, setModalEmail] = useState("");

  useEffect(() => {
    const observers: Record<string, IntersectionObserver> = {};
    const sectionIds = ["hero", "features", "how", "pricing", "reviews", "cta"];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      observers[id] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
            observers[id].unobserve(element);
          }
        },
        { threshold: 0.1 }
      );

      observers[id].observe(element);
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-2xl border-b border-accent/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="font-display font-bold text-2xl tracking-tighter bg-gradient-to-r from-white via-accent to-accent/80 bg-clip-text text-transparent">
            ГайдПро
          </div>
          <nav className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#features" className="text-muted-foreground hover:text-white transition-colors">О гайде</a>
            <a href="#how" className="text-muted-foreground hover:text-white transition-colors">Как получить</a>
            <a href="#pricing" className="text-muted-foreground hover:text-white transition-colors">Цена</a>
            <a href="#reviews" className="text-muted-foreground hover:text-white transition-colors">Отзывы</a>
          </nav>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-accent to-accent/80 text-black rounded-full hover:shadow-lg hover:shadow-accent/40 transition-all"
          >
            Купить гайд
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-32 px-6 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
          <img src="/images/black-hole-gif.gif" alt="" className="w-auto h-3/4 object-contain opacity-60" />
        </div>
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${visibleSections["hero"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="mb-8 inline-block">
                <span className="text-xs font-medium tracking-widest text-accent/80 uppercase">
                  Эксклюзивный цифровой гайд
                </span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-display font-black leading-tight mb-8 tracking-tighter">
                <span className="bg-gradient-to-br from-white via-white to-accent/40 bg-clip-text text-transparent">
                  Получи результат.
                </span>
                <br />
                <span className="text-accent">Уже сегодня.</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-xl font-light">
                Полный пошаговый гайд, который даёт чёткую систему от А до Я.
                Никакой воды — только конкретные шаги и реальные результаты.
              </p>
              <div className="flex gap-4 mb-12 flex-col sm:flex-row">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/50 transition-all font-semibold text-lg flex items-center gap-3 justify-center"
                >
                  Получить гайд сейчас
                  <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition" />
                </button>
                <button
                  onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-8 py-4 border border-accent/40 rounded-full hover:border-accent/70 hover:bg-accent/10 transition-all font-medium text-lg text-white"
                >
                  Узнать подробнее
                </button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">1 200+</div>
                  <p className="text-sm text-white/60">Довольных покупателей</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">4.9 / 5</div>
                  <p className="text-sm text-white/60">Средняя оценка</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">Сразу</div>
                  <p className="text-sm text-white/60">Доступ после оплаты</p>
                </div>
              </div>
            </div>

            <div className={`relative h-96 lg:h-[550px] transition-all duration-1000 flex items-center justify-center ${visibleSections["hero"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-transparent rounded-3xl blur-3xl animate-pulse" />
              <div className="relative z-10 w-72 lg:w-96">
                <div className="bg-gradient-to-br from-card/90 to-card/60 border border-accent/30 rounded-3xl p-10 backdrop-blur-xl shadow-2xl shadow-accent/20 animate-float">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-2xl flex items-center justify-center mb-6">
                    <Icon name="BookOpen" size={32} className="text-black" />
                  </div>
                  <h3 className="text-2xl font-display font-black mb-3 text-white">Полный гайд</h3>
                  <p className="text-white/60 text-sm mb-6">PDF + бонусные материалы</p>
                  <div className="space-y-3">
                    {["Пошаговые инструкции", "Практические примеры", "Бонусные шаблоны", "Пожизненный доступ"].map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-white/80">
                        <Icon name="CheckCircle" size={16} className="text-accent flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections["features"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Что внутри</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4 mb-6">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Всё необходимое
              </span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Гайд содержит всё, что нужно для достижения результата — без лишней теории
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "BookOpen", title: "Полная система", desc: "Структурированная методология от первого шага до финального результата" },
              { icon: "Zap", title: "Быстрый старт", desc: "Начни применять уже в первый день — без долгого погружения и подготовки" },
              { icon: "Target", title: "Конкретные шаги", desc: "Чёткие действия без воды: что делать, в каком порядке и почему" },
              { icon: "Download", title: "PDF-формат", desc: "Удобный гайд на любом устройстве — читай и применяй в своём темпе" },
              { icon: "Gift", title: "Бонусные шаблоны", desc: "Готовые шаблоны и чеклисты, которые сэкономят десятки часов работы" },
              { icon: "Shield", title: "Гарантия результата", desc: "14 дней гарантии возврата средств — если не понравится, вернём деньги" },
            ].map((item, i) => {
              const isVisible = visibleSections["features"];
              return (
                <div
                  key={i}
                  className={`group p-8 border border-accent/10 hover:border-accent/40 rounded-2xl bg-card/50 hover:bg-card/80 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-accent/10 group-hover:bg-accent/20 rounded-xl flex items-center justify-center mb-6 transition-all">
                    <Icon name={item.icon} fallback="Star" size={22} className="text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections["how"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Как получить</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Три простых шага
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", icon: "CreditCard", title: "Оплати", desc: "Выбери тариф и оплати удобным способом — карта, СБП, электронные кошельки" },
              { num: "02", icon: "Mail", title: "Получи письмо", desc: "Сразу после оплаты на твой email придёт письмо со ссылкой для скачивания" },
              { num: "03", icon: "Download", title: "Применяй", desc: "Скачай гайд и начни применять систему уже сегодня — результат не заставит ждать" },
            ].map((step, i) => {
              const isVisible = visibleSections["how"];
              return (
                <div
                  key={i}
                  className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="group bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 rounded-2xl p-8 h-full flex flex-col transition-all backdrop-blur-sm">
                    <div className="text-5xl font-display font-black text-accent mb-4 group-hover:scale-110 transition-transform">
                      {step.num}
                    </div>
                    <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                      <Icon name={step.icon} fallback="Star" size={20} className="text-accent" />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent/40 to-transparent z-10" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections["pricing"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Стоимость</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Выбери свой вариант
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Базовый",
                price: "990 ₽",
                oldPrice: "1 990 ₽",
                desc: "Всё необходимое для старта",
                features: ["Полный PDF-гайд", "Пошаговая система", "Доступ навсегда", "Email-поддержка 30 дней"],
                highlight: false,
                cta: "Купить за 990 ₽",
              },
              {
                name: "Расширенный",
                price: "1 990 ₽",
                oldPrice: "3 990 ₽",
                desc: "Максимум для быстрого результата",
                features: ["Всё из Базового", "Бонусные шаблоны и чеклисты", "Видео-разбор ключевых тем", "Личная консультация 30 мин", "Email-поддержка 90 дней"],
                highlight: true,
                cta: "Купить за 1 990 ₽",
              },
            ].map((plan, i) => {
              const isVisible = visibleSections["pricing"];
              return (
                <div
                  key={i}
                  className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"} ${plan.highlight ? "md:scale-105" : ""}`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  {plan.highlight && (
                    <>
                      <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent to-accent/60 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition" />
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-accent/80 text-black text-xs font-bold px-4 py-1.5 rounded-full">
                        ПОПУЛЯРНЫЙ
                      </div>
                    </>
                  )}
                  <div className={`relative p-10 border rounded-2xl h-full flex flex-col backdrop-blur-sm transition-all ${plan.highlight ? "border-accent/40 bg-accent/10" : "border-accent/10 bg-card/50 hover:bg-card/80"}`}>
                    <div className="mb-8">
                      <h3 className="font-display font-bold text-2xl mb-1">{plan.name}</h3>
                      <p className="text-white/50 text-sm mb-4">{plan.desc}</p>
                      <div className="flex items-baseline gap-3">
                        <p className="text-4xl font-black text-accent">{plan.price}</p>
                        <p className="text-lg text-white/30 line-through">{plan.oldPrice}</p>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-10 flex-1">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex gap-3 text-sm items-start">
                          <Icon name="CheckCircle" size={16} className="text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className={`w-full px-6 py-4 rounded-xl font-semibold transition-all text-base ${plan.highlight ? "bg-gradient-to-r from-accent to-accent/80 text-black hover:shadow-xl hover:shadow-accent/40" : "border border-accent/20 hover:border-accent/40 hover:bg-accent/5 text-white"}`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-white/40 text-sm mt-10">
            14 дней гарантии возврата · Мгновенная доставка на email · Безопасная оплата
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${visibleSections["reviews"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-medium tracking-widest text-accent/60 uppercase">Отзывы</span>
            <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mt-4">
              <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
                Что говорят покупатели
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Анна К.", role: "Маркетолог", text: "Купила и не пожалела. Применила систему и уже через неделю увидела первые результаты. Очень чёткое и понятное изложение!", stars: 5 },
              { name: "Дмитрий В.", role: "Предприниматель", text: "Долго сомневался, но решился. Гайд реально работает — никакой воды, только конкретика. Рекомендую всем!", stars: 5 },
              { name: "Мария Л.", role: "Фрилансер", text: "Отличный материал! Особенно понравились бонусные шаблоны — сэкономили мне огромное количество времени.", stars: 5 },
            ].map((review, i) => {
              const isVisible = visibleSections["reviews"];
              return (
                <div
                  key={i}
                  className={`p-8 border border-accent/10 hover:border-accent/30 rounded-2xl bg-card/50 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.stars)].map((_, j) => (
                      <Icon key={j} name="Star" size={16} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">"{review.text}"</p>
                  <div>
                    <p className="font-semibold text-white">{review.name}</p>
                    <p className="text-white/40 text-xs">{review.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-32 px-6 bg-accent/5">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${visibleSections["cta"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-5xl lg:text-6xl font-display font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-white via-white to-accent/40 bg-clip-text text-transparent">
              Готов начать?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
            Присоединяйся к 1 200+ покупателям, которые уже получили результат с нашим гайдом.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="group px-10 py-5 bg-gradient-to-r from-accent to-accent/90 text-black rounded-full hover:shadow-2xl hover:shadow-accent/40 transition-all font-bold text-lg flex items-center gap-3 mx-auto"
          >
            Получить гайд сейчас
            <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition" />
          </button>
          <p className="text-white/30 text-sm mt-6">Мгновенная доставка · Гарантия 14 дней</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/10 py-12 px-6 bg-background/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>© 2025 ГайдПро — Цифровые продукты</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Оферта</a>
            <a href="#" className="hover:text-white transition-colors">Контакты</a>
          </div>
        </div>
      </footer>

      {/* Purchase Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative w-full max-w-md bg-card border border-accent/30 rounded-3xl p-10 shadow-2xl shadow-accent/20">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
            <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
              <Icon name="BookOpen" size={24} className="text-accent" />
            </div>
            <h3 className="text-2xl font-display font-black mb-2">Получить гайд</h3>
            <p className="text-white/50 text-sm mb-8">Введите email — мы пришлём ссылку для оплаты и доступ к гайду сразу после покупки</p>
            <input
              type="email"
              value={modalEmail}
              onChange={(e) => setModalEmail(e.target.value)}
              placeholder="ваш@email.com"
              className="w-full bg-background border border-accent/20 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/60 mb-4 transition-colors"
            />
            <button
              className="w-full py-4 bg-gradient-to-r from-accent to-accent/80 text-black font-bold rounded-xl hover:shadow-xl hover:shadow-accent/40 transition-all text-base"
            >
              Перейти к оплате
            </button>
            <p className="text-center text-white/30 text-xs mt-4">Безопасная оплата · Мгновенная доставка</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
