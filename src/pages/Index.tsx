import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Scissors" className="text-primary" size={28} />
              <span className="font-heading font-bold text-xl text-primary">MSL</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('services')} className="text-sm hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('prices')} className="text-sm hover:text-primary transition-colors">Цены</button>
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('faq')} className="text-sm hover:text-primary transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="hidden md:flex">
              Оставить заявку
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-heading font-bold text-4xl md:text-6xl leading-tight mb-6 text-foreground">
                MSL — Профессиональный уход за газонами
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Превратим ваш участок в безупречный зеленый ковер. Современные технологии и индивидуальный подход.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => scrollToSection('contact')} className="text-base">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать покос
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('prices')}>
                  Узнать цены
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="font-heading font-bold text-3xl text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">участков обработано</div>
                </div>
                <div>
                  <div className="font-heading font-bold text-3xl text-primary">5 лет</div>
                  <div className="text-sm text-muted-foreground">на рынке</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/13e20f4d-ede1-4c07-b484-0561ecc97c07/files/55c3106e-a828-46aa-a3d8-9727aa16db91.jpg" 
                alt="Профессиональный покос газона" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Предлагаем полный комплекс услуг по уходу за вашим газоном
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Home" className="text-primary" size={24} />
                </div>
                <CardTitle>Покос придомовых территорий</CardTitle>
                <CardDescription>
                  Регулярный уход за газоном возле частных домов и коттеджей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Точная подгонка высоты среза
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Уборка скошенной травы
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    Обработка краев газона
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Trees" className="text-secondary" size={24} />
                </div>
                <CardTitle>Стандартный покос газонов</CardTitle>
                <CardDescription>
                  Качественная стрижка больших и малых газонов любой формы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-secondary" />
                    Профессиональное оборудование
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-secondary" />
                    Работа в удобное время
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-secondary" />
                    Экологичный подход
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Sparkles" className="text-accent" size={24} />
                </div>
                <CardTitle>Комплексный уход</CardTitle>
                <CardDescription>
                  Регулярное обслуживание с учетом сезонных особенностей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    Скидки на абонементы
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    Приоритетное обслуживание
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-accent" />
                    Гарантия результата
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">Прозрачные цены</h2>
            <p className="text-lg text-muted-foreground">
              Честная стоимость без скрытых платежей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Базовый</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">от 500₽</span>
                  <span className="text-muted-foreground">/сотка</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-primary" />
                  <span className="text-sm">Покос участка до 10 соток</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-primary" />
                  <span className="text-sm">Уборка скошенной травы</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-primary" />
                  <span className="text-sm">Выполнение за 1 день</span>
                </div>
                <Button className="w-full mt-6" variant="outline" onClick={() => scrollToSection('contact')}>
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-primary shadow-lg scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Популярный
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Стандарт</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">от 400₽</span>
                  <span className="text-muted-foreground">/сотка</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-primary" />
                  <span className="text-sm">Покос участка до 30 соток</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-primary" />
                  <span className="text-sm">Уборка и вывоз травы</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-primary" />
                  <span className="text-sm">Обработка краев</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-primary" />
                  <span className="text-sm">Выполнение в течение дня</span>
                </div>
                <Button className="w-full mt-6" onClick={() => scrollToSection('contact')}>
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Премиум</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">от 300₽</span>
                  <span className="text-muted-foreground">/сотка</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-primary" />
                  <span className="text-sm">Участки от 30 соток</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-primary" />
                  <span className="text-sm">Полный комплекс услуг</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-primary" />
                  <span className="text-sm">Регулярное обслуживание</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-primary" />
                  <span className="text-sm">Скидка до 30%</span>
                </div>
                <Button className="w-full mt-6" variant="outline" onClick={() => scrollToSection('contact')}>
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/13e20f4d-ede1-4c07-b484-0561ecc97c07/files/8effec4a-8718-4781-ab72-c574dd6f8f5c.jpg" 
                alt="Команда профессионалов" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">О компании</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  MSL — это команда профессионалов с 5-летним опытом работы в сфере ландшафтного дизайна и ухода за газонами. Мы начинали как небольшая семейная компания и выросли до одного из лидеров рынка в регионе.
                </p>
                <p>
                  Наша миссия — делать каждый участок идеальным, сохраняя при этом экологичный подход к работе. Мы используем современное оборудование, которое минимизирует воздействие на окружающую среду.
                </p>
                <p>
                  За годы работы мы обработали более 500 участков, и каждый наш клиент становится постоянным. Это лучшее подтверждение качества нашей работы.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Сертифицированы</div>
                    <div className="text-sm text-muted-foreground">Все специалисты прошли обучение</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Leaf" className="text-secondary" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Эко-подход</div>
                    <div className="text-sm text-muted-foreground">Забота о природе</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">Частые вопросы</h2>
            <p className="text-lg text-muted-foreground">
              Ответы на популярные вопросы о наших услугах
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                <AccordionTrigger className="hover:no-underline">
                  Как часто нужно косить газон?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Оптимальная частота покоса — раз в 7-10 дней в активный сезон роста (май-сентябрь). Это позволяет поддерживать здоровый и красивый вид газона. Мы предлагаем абонементное обслуживание с регулярными выездами.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                <AccordionTrigger className="hover:no-underline">
                  Что входит в стоимость услуги?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  В базовую стоимость входит покос травы на указанной площади и уборка скошенной травы. Дополнительно можем предложить вывоз травы, обработку краев и удобрение газона. Все дополнительные услуги обговариваются заранее.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                <AccordionTrigger className="hover:no-underline">
                  Как быстро вы можете приехать?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  При наличии свободного окна в графике можем приехать в день обращения. Обычно планируем выезд на следующий день после заявки. Для постоянных клиентов с абонементом работаем по фиксированному графику.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                <AccordionTrigger className="hover:no-underline">
                  Какое оборудование вы используете?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Работаем на профессиональных бензиновых и электрических косилках ведущих брендов. Для небольших участков и труднодоступных мест используем триммеры. Всё оборудование регулярно проходит техническое обслуживание.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border-0 shadow-sm">
                <AccordionTrigger className="hover:no-underline">
                  Предоставляете ли вы гарантию?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, мы гарантируем качество выполненных работ. Если вас что-то не устроит — мы вернемся и исправим бесплатно в течение 48 часов. Для постоянных клиентов действуют расширенные гарантийные условия.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Свяжитесь с нами</h2>
              <p className="text-muted-foreground mb-8">
                Оставьте заявку, и мы свяжемся с вами в течение 15 минут для уточнения деталей и расчета стоимости.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@gazonpro.ru" className="text-muted-foreground hover:text-primary transition-colors">
                      info@gazonpro.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <div className="text-muted-foreground">
                      Пн-Вс: 8:00 - 20:00
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <img 
                  src="https://cdn.poehali.dev/projects/13e20f4d-ede1-4c07-b484-0561ecc97c07/files/ac4422e3-f9b5-4832-a9e8-f82edbf74570.jpg" 
                  alt="Идеальный газон" 
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Оставить заявку</CardTitle>
                  <CardDescription>
                    Заполните форму, и мы рассчитаем стоимость для вашего участка
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                      <Input
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <Input
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Сообщение</label>
                      <Textarea
                        placeholder="Расскажите о вашем участке: площадь, особенности, желаемые сроки..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Scissors" size={24} />
                <span className="font-heading font-bold text-xl">MSL</span>
              </div>
              <p className="text-white/70 text-sm">
                Профессиональный уход за газонами с 2019 года. Делаем ваш участок идеальным.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Быстрые ссылки</h3>
              <div className="space-y-2 text-sm text-white/70">
                <div><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Услуги</button></div>
                <div><button onClick={() => scrollToSection('prices')} className="hover:text-white transition-colors">Цены</button></div>
                <div><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О нас</button></div>
                <div><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Контакты</button></div>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-white/70">
                <div>+7 (999) 123-45-67</div>
                <div>info@gazonpro.ru</div>
                <div>Пн-Вс: 8:00 - 20:00</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
            © 2024 MSL. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;