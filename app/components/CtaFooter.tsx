import Link from "next/link";
import Image from "next/image";

export function CtaFooter() {
  return (
    <section className="cta-footer">
      <div className="cta-visual" aria-hidden="true"><span className="cta-shape cta-shape-lime" /><span className="cta-shape cta-shape-red" /><span className="cta-shape cta-shape-yellow" /><span className="cta-shape cta-shape-blue" /><span className="cta-grid" /></div>
      <div className="cta-fade cta-fade-top" /><div className="cta-fade cta-fade-bottom" />
      <div className="cta-content page-pad"><p className="eyebrow">Следующий шаг</p><h2>Давайте создадим<br /><em>что-то работающее.</em></h2><p>Расскажите о задаче — соберём визуальное решение, которое поможет бизнесу выделиться и запомниться.</p><div className="cta-actions"><a className="button cta-glass" href="mailto:hello@rao.studio">Обсудить проект <span>↗</span></a><Link className="button cta-white" href="/prices">Посмотреть цены <span>↗</span></Link></div><footer className="cta-footer-bar"><small>© 2026 DTA</small><div><Link href="/prices">Цены</Link><a href="mailto:hello@rao.studio">Email</a><Link href="/#contact">Контакты</Link></div><Image src="/brand/logo.png" alt="DTA" width={40} height={40} /></footer></div>
    </section>
  );
}
