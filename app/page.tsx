"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CtaFooter } from "./components/CtaFooter";

const services = [
  ["01", "Логотип", "Узнаваемый знак, который работает в digital, печати и наружной рекламе.", "от 10 000 ₽"],
  ["02", "Айдентика", "Единая визуальная система: цвет, типографика, графика и характер бренда.", "от 30 000 ₽"],
  ["03", "Брендбук", "Правила использования фирменного стиля, чтобы команда говорила одним языком.", "от 55 000 ₽"],
  ["04", "Ребрендинг", "Обновляем образ бизнеса, сохраняя сильные стороны и добавляя новый импульс.", "от 40 000 ₽"],
  ["05", "Digital-дизайн", "Социальные сети, сайты, презентации и рекламные материалы для цифровой среды.", "от 3 000 ₽"],
  ["06", "Наружная реклама", "Вывески, фасады, баннеры, навигация и дизайн-проекты рекламных конструкций.", "от 15 000 ₽"],
];

const advantages = [
  ["2.1", "Прозрачность разработки", "Мы всегда на связи и держим заказчика в курсе. Вы можете лично отслеживать каждый этап разработки: ничего не скрываем и поэтапно даём контролировать проект."],
  ["2.2", "Опытные специалисты", "Наша команда собрала по-настоящему талантливых и современных дизайнеров и монтажёров, которые гибко относятся к задачам и целям проекта."],
  ["2.3", "Низкие цены по рынку", "Мы новички на рынке рекламных услуг, поэтому наша задача сейчас — заслужить ваше доверие. Низкие цены, скидки и подарки в честь первого года работы."],
  ["2.4", "Бесплатные правки", "Мы не придерживаемся политики «если вам что-то не нравится, за изменение нужно платить». Наш принцип: пока заказчик не удовлетворён проектом, наша работа не заканчивается."],
  ["2.5", "Быстрые сроки разработки", "Логотип за 3 дня? Легко. Брендбук меньше чем за 2 недели? Легче лёгкого. Доверьтесь нашей скорости — мы не подведём."],
  ["2.6", "Индивидуальный подход", "Не используем шаблонные решения. Погружаемся в задачу, учитываем характер бизнеса и создаём дизайн, который работает именно на ваши цели."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <main>
      <header className="site-header">
        <Link href="#top" className="brand" aria-label="DTA — на главную"><Image src="/brand/logo.png" alt="DTA" width={40} height={40} /></Link>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Услуги</a>
          <Link href="/cases" onClick={() => setMenuOpen(false)}>Кейсы</Link>
          <Link href="/prices" onClick={() => setMenuOpen(false)}>Цены</Link>
        </nav>
        <a className="header-contact" href="#contact">Обсудить проект <span>↗</span></a>
        <button className="menu-button" aria-label="Открыть меню" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </header>

      <section id="top" className="hero page-pad">
        <div className="hero-green-bg" aria-hidden="true">
          <span className="hero-green-orb hero-green-orb-one" />
          <span className="hero-green-orb hero-green-orb-two" />
          <span className="hero-green-orb hero-green-orb-three" />
        </div>
        <div className="hero-mark" aria-hidden="true">
          <Image src="/brand/logo.png" alt="" width={200} height={200} />
        </div>
        <p className="hero-script-copy">Дизайн,<br />который<br />работает.</p>
        <p className="hero-tagline"><span className="hero-typed-line"><b>ДИЗАЙН</b><i>•</i><b>ТЕХНОЛОГИИ</b><i>•</i><b>АМБИЦИИ</b></span></p>
      </section>

      <section className="ticker" aria-label="Направления работы"><div className="ticker-track"><span>ЛОГОТИПЫ <i>•</i> АЙДЕНТИКА <i>•</i> БРЕНДБУКИ <i>•</i> РЕБРЕНДИНГ <i>•</i> DIGITAL-ДИЗАЙН <i>•</i> НАРУЖНАЯ РЕКЛАМА <i>•</i></span><span aria-hidden="true">ЛОГОТИПЫ <i>•</i> АЙДЕНТИКА <i>•</i> БРЕНДБУКИ <i>•</i> РЕБРЕНДИНГ <i>•</i> DIGITAL-ДИЗАЙН <i>•</i> НАРУЖНАЯ РЕКЛАМА <i>•</i></span></div></section>

      <section id="services" className="section page-pad services-section"><div className="section-head"><div><p className="eyebrow">Что мы делаем</p><h2>Визуальный язык<br /><em>вашего бизнеса.</em></h2></div><p className="section-intro">Не отдельные картинки, а система, которая делает бренд узнаваемым на каждой точке контакта.</p></div><div className="services-grid">{services.map(([num, title, desc, price]) => <article className="service-card" key={title}><span className="service-num">{num}</span><h3>{title}</h3><p>{desc}</p><strong>{price}</strong><a href="#contact" aria-label={`Заказать услугу ${title}`}>↗</a></article>)}</div></section>

      <section className="advantages-section dark-section page-pad"><div className="section-head light"><div><p className="eyebrow">Наши преимущества</p><h2>Почему<br /><em>именно мы?</em></h2></div><p className="section-intro">Работаем открыто, быстро и с вниманием к результату — от первой идеи до готового проекта.</p></div><div className="advantages-grid">{advantages.map(([num, title, desc]) => <article className="advantage-card" key={num}><span>{num}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></section>

      <section className="process dark-section page-pad"><div className="section-head light"><div><p className="eyebrow">Как мы работаем</p><h2>Понятный путь<br /><em>к результату.</em></h2></div></div><div className="process-grid">{[["01", "Заявка", "Рассказываете о задаче и целях проекта."],["02", "Обсуждение", "Изучаем бизнес, аудиторию и контекст."],["03", "Концепция", "Формируем визуальное направление."],["04", "Разработка", "Создаём дизайн и необходимые элементы."],["05", "Доработка", "Учитываем согласованные правки."],["06", "Передача", "Передаём готовую систему и файлы."]].map(([num, title, desc]) => <div className="process-item" key={num}><span>{num}</span><h3>{title}</h3><p>{desc}</p></div>)}</div></section>

      <section id="contact" className="contact-section page-pad"><div className="contact-title"><p className="eyebrow">Контакты</p><h2>Давайте создадим<br /><em>ваш проект.</em></h2><p>Расскажите нам о задаче — мы изучим её и предложим подходящее решение.</p><a href="mailto:hello@rao.studio">hello@rao.studio ↗</a></div><form onSubmit={(e) => { e.preventDefault(); setSent(true); }}><label>Имя<input required name="name" placeholder="Как к вам обращаться?" /></label><label>Компания<input name="company" placeholder="Название компании" /></label><label>Контакт<input required name="contact" placeholder="Почта или телефон" /></label><label>Что вам необходимо?<textarea name="message" placeholder="Коротко о задаче" rows={3} /></label><button className="button button-black" type="submit">{sent ? "Заявка отправлена ✓" : "Отправить заявку ↗"}</button></form></section>

      <CtaFooter />
    </main>
  );
}
