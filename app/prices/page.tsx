"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CtaFooter } from "../components/CtaFooter";

const core = [
  ["01", "Логотип", "Разработка основного идентификатора бренда: концепция, варианты, цветовые версии, типографика, монохром и файлы для печати и digital.", "от 10 000 ₽", "Логобук — в подарок"],
  ["02", "Логобук", "Компактная инструкция по логотипу: охранное поле, минимальный размер, цветовые версии, правила размещения и примеры использования.", "от 12 000 ₽", ""],
  ["03", "Айдентика", "Полная визуальная система: фирменная концепция, логотип, палитра, типографика, графические элементы, паттерны, фотостиль и носители.", "от 30 000 ₽", ""],
  ["04", "Ребрендинг", "Анализ текущего образа, новое визуальное направление, обновление логотипа, цветовой системы, графики, рекламных материалов и социальных сетей.", "от 40 000 ₽", ""],
  ["05", "Брендбук «Мини»", "Стратегическая основа, логотип, фирменная система, правила использования и базовые носители: визитка, бланк, соцсети, шаблоны и рекламный макет.", "55 000 ₽", "Оптимальный старт"],
  ["06", "Брендбук «Макси»", "Полная визуальная система: бренд-концепция, айдентика, печатные и digital-носители, наружная реклама, упаковка и видеодизайн.", "77 000 ₽", "Полная система"],
  ["07", "Дизайн-проект вывески", "Концепция, композиция, логотип, цвет, шрифт, визуализация на фасаде, варианты размещения, размеры и файлы для производства.", "от 15 000 ₽", ""],
];

const extras = [
  ["Печатный макет", "Визитка, листовка, флаер, сертификат, открытка", "от 2 000 ₽"],
  ["Меню", "Дизайн меню для кафе и ресторана", "от 4 000 ₽"],
  ["Буклет", "Складной рекламный или информационный буклет", "от 5 000 ₽"],
  ["Каталог", "Многостраничный каталог продукции или услуг", "от 7 000 ₽"],
  ["Презентация", "Визуальная концепция, слайды, инфографика и таблицы", "от 5 000 ₽"],
  ["Прайс-лист", "Структура и оформление коммерческого прайса", "от 3 000 ₽"],
  ["Упаковка", "Дизайн упаковки и подготовка носителей", "от 7 000 ₽"],
  ["Наклейки и стикеры", "Серии стикеров и этикеток", "от 2 000 ₽"],
  ["Баннер", "Рекламный баннер для digital или печати", "от 2 500 ₽"],
  ["Рекламный макет", "Креатив, плакат, промо или специальное предложение", "от 2 500 ₽"],
  ["Допечатная подготовка", "Размеры, вылеты, CMYK, разрешение, PDF для типографии", "от 1 500 ₽"],
  ["Дизайн соцсетей", "Аватар, обложка, профиль, шаблоны и рекламные креативы", "от 3 000 ₽"],
  ["Пакет оформления соцсетей", "Единый визуальный стиль для регулярного контента", "от 15 000 ₽"],
  ["Motion / видеомонтаж", "Монтаж роликов, анимация логотипа, титры и адаптации", "от 5 000 ₽"],
];

export default function PricesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main>
      <header className="site-header"><Link href="/" className="brand" aria-label="DTA — на главную"><Image src="/brand/logo.png" alt="DTA" width={40} height={40} /></Link><nav className={menuOpen ? "main-nav is-open" : "main-nav"}><Link href="/#services" onClick={() => setMenuOpen(false)}>Услуги</Link><Link href="/cases" onClick={() => setMenuOpen(false)}>Кейсы</Link><Link href="/prices" onClick={() => setMenuOpen(false)}>Цены</Link></nav><Link className="header-contact" href="/#contact">Обсудить проект <span>↗</span></Link><button className="menu-button" aria-label="Открыть меню" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button></header>

      <section className="prices-hero page-pad"><p className="eyebrow">Прайс-лист</p><h1>Дизайн,<br /><em>который</em><br />работает.</h1><p>Создаём визуальные системы, брендинг и фирменный стиль — от отдельных элементов до полного брендбука.</p><div className="prices-hero-meta"><span>Все цены указаны «от»</span><span>Финальная стоимость — после обсуждения задачи</span></div></section>

      <section className="full-price-section page-pad"><div className="full-price-heading"><p className="eyebrow">Основные услуги</p><h2>От логотипа<br /><em>до системы.</em></h2></div><div className="core-price-list">{core.map(([num, title, desc, price, note]) => <article className="core-price-card" key={title}><span className="core-number">{num}</span><div><h3>{title}</h3><p>{desc}</p>{note && <small>{note}</small>}</div><strong>{price}</strong><Link href="/#contact" aria-label={`Заказать ${title}`}>↗</Link></article>)}</div></section>

      <section className="extras-section dark-section page-pad"><div className="section-head light"><div><p className="eyebrow">Дополнительные услуги</p><h2>Соберём<br /><em>под задачу.</em></h2></div><p className="section-intro">Можно заказать отдельный материал или собрать комплект под конкретный запуск, кампанию или носитель.</p></div><div className="extras-grid">{extras.map(([title, desc, price]) => <article className="extra-card" key={title}><h3>{title}</h3><p>{desc}</p><strong>{price}</strong></article>)}</div></section>

      <section className="comparison-section page-pad"><div className="section-head"><div><p className="eyebrow">Сравнение пакетов</p><h2>Мини<br /><em>или Макси.</em></h2></div><p className="section-intro">Оба пакета создают цельный визуальный образ. Разница — в глубине проработки и количестве носителей.</p></div><div className="comparison-table"><div className="comparison-row comparison-head"><span>Что входит</span><b>Мини</b><b>Макси</b></div>{[["Логотип", "✓", "✓"],["Цветовая система", "✓", "✓"],["Типографика", "✓", "✓"],["Графические элементы", "✓", "✓"],["Паттерны", "✓", "✓"],["Правила использования", "✓", "✓"],["Социальные сети", "Базовые", "Расширенные"],["Печатная продукция", "Базовая", "Расширенная"],["Наружная реклама", "—", "✓"],["Упаковка", "—", "✓"],["Рекламные материалы", "Базовые", "Расширенные"],["Видеодизайн", "—", "✓"]].map(([name, mini, maxi]) => <div className="comparison-row" key={name}><span>{name}</span><b>{mini}</b><b>{maxi}</b></div>)}</div><Link className="button button-black" href="/#contact">Обсудить брендбук <span>↗</span></Link></section>

      <section className="price-note-section page-pad"><div><p className="eyebrow">Важно</p><h2>Каждый проект<br /><em>считаем точно.</em></h2></div><div><p>Стоимость зависит от количества элементов и вариантов, числа носителей, сложности проекта, объёма исходных материалов, дополнительных адаптаций и срочности.</p><p>Перед началом работы формируем техническое задание и фиксируем итоговую стоимость. Работаем как с отдельными задачами, так и с проектами «под ключ».</p><Link className="text-link" href="/#contact">Получить расчёт <span>↗</span></Link></div></section>

      <CtaFooter />
    </main>
  );
}
