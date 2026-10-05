import { useState, useEffect } from 'react'
import { translations, LANGS } from './i18n'

function App() {
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState(false)
  const [toastId, setToastId] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('abapia_lang')
      if (saved && translations[saved]) return saved
    } catch {
      /* noop */
    }
    return 'es'
  })

  const t = translations[lang]

  // Persistimos el idioma elegido y actualizamos <html lang>.
  useEffect(() => {
    try {
      localStorage.setItem('abapia_lang', lang)
    } catch {
      /* noop */
    }
    document.documentElement.lang = lang
  }, [lang])

  // Al entrar directo con un hash en la URL (ej. abapia.com/#contacto desde LinkedIn),
  // esperamos a que la SPA renderice y recién ahí hacemos scroll a la sección.
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1)
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    setEnviando(true)
    setError(false)
    try {
      const res = await fetch('https://formspree.io/f/mykraqjy', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setEnviado(true)
        setToastId((n) => n + 1)
        form.mensaje.value = ''
        setTimeout(() => setEnviado(false), 4000)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setEnviando(false)
    }
  }

  const LangSwitch = () => (
    <div className="lang-switch" role="group" aria-label={t.aria.lang}>
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          className={`lang-btn${lang === l.code ? ' is-active' : ''}`}
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  )

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="header-logo">
            <img src="/logo-abapia.png" alt="ABAPIA" className="header-logo-img" />
          </a>

          <nav className={`header-nav${menuOpen ? ' is-open' : ''}`}>
            <a href="#servicios" onClick={() => setMenuOpen(false)}>{t.nav.servicios}</a>
            <a href="#modalidades" onClick={() => setMenuOpen(false)}>{t.nav.modalidades}</a>
            <a href="#nosotros" onClick={() => setMenuOpen(false)}>{t.nav.nosotros}</a>
            <a href="#metodo" onClick={() => setMenuOpen(false)}>{t.nav.metodo}</a>
            <a href="#ideal-para" onClick={() => setMenuOpen(false)}>{t.nav.ideal}</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>{t.nav.faq}</a>
            <a href="#contacto" onClick={() => setMenuOpen(false)}>{t.nav.contacto}</a>
            <a
              href="#contacto"
              className="btn btn-primary header-nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.hablemos}
            </a>
          </nav>

          <LangSwitch />

          <a href="#contacto" className="btn btn-primary header-cta">
            {t.nav.hablemos}
          </a>

          <button
            type="button"
            className={`nav-toggle${menuOpen ? ' is-open' : ''}`}
            aria-label={menuOpen ? t.aria.closeMenu : t.aria.openMenu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-center">
            <img src="/logo-abapia.png" alt="ABAPIA" className="hero-logo" />
            <p className="hero-signature">{t.tagline}</p>

            <span className="hero-kicker">{t.hero.kicker}</span>

            <h1 className="hero-title">
              <span className="hero-title-line">{t.hero.titleLine}</span>
              <span className="hero-title-q">{t.hero.titleQ}</span>
            </h1>

            <p className="hero-description">{t.hero.description}</p>

            <div className="hero-actions">
              <a href="#contacto" className="btn btn-primary">
                {t.hero.ctaPrimary}
              </a>
              <a href="#modalidades" className="btn btn-secondary">
                {t.hero.ctaSecondary}
              </a>
            </div>

          </div>
        </section>

        <section className="trust-bar-section">
          <div className="container">
            <div className="trust-bar">
              {t.trust.map((it, i) => (
                <div className="trust-item" key={i}>
                  <span className="trust-value">{it.value}</span>
                  <span className="trust-label">{it.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="manifiesto">
          <div className="container">
            <div className="manifesto">
              <span className="eyebrow">{t.manifesto.eyebrow}</span>
              <h2>{t.manifesto.h2}</h2>
              <p>{t.manifesto.p1}</p>
              <p>
                {t.manifesto.p2a}
                <strong>{t.manifesto.p2strong}</strong>
                {t.manifesto.p2b}
              </p>
              <p>{t.manifesto.p3}</p>
              <div className="manifesto-points">
                {t.manifesto.points.map((p, i) => (
                  <span key={i}>{p}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-divider" id="servicios">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">{t.servicios.eyebrow}</span>
              <h2>{t.servicios.h2}</h2>
              <p>{t.servicios.p}</p>
            </div>

            <div className="cards-grid">
              {t.servicios.cards.map((c, i) => (
                <article
                  className={`card service-card${i === 0 ? ' service-card-featured' : ''}`}
                  key={i}
                >
                  <div className="service-card-body">
                    <h3>{c.h3}</h3>
                    <p className="svc-lead">{c.lead}</p>
                    <p className="svc-tech">{c.tech}</p>
                  </div>
                  <div className="service-card-footer">
                    <div className="card-tag">{c.tag}</div>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        <section className="section section-alt" id="modalidades">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">{t.modalidades.eyebrow}</span>
              <h2>{t.modalidades.h2}</h2>
              <p>
                {t.modalidades.pLine1}
                <br />
                {t.modalidades.pLine2}
              </p>
            </div>

            <div className="cards-grid pkg-grid">
              {t.modalidades.packages.map((p, i) => {
                const featured = i === 1
                return (
                  <article
                    className={`card pkg-card${featured ? ' pkg-card-featured' : ''}`}
                    key={i}
                  >
                    {featured && (
                      <div className="pkg-badge">{t.modalidades.recommended}</div>
                    )}
                    <div className="pkg-head">
                      <h3>{p.name}</h3>
                      <p className="pkg-desc">{p.desc}</p>
                    </div>
                    <ul className="pkg-includes">
                      {p.includes.map((it, j) => (
                        <li key={j}>{it}</li>
                      ))}
                    </ul>
                    <div className="pkg-foot">
                      <div className="card-tag">{p.tag}</div>
                      <a
                        href="#contacto"
                        className={`btn ${featured ? 'btn-primary' : 'btn-secondary'} pkg-cta`}
                      >
                        {p.cta}
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section" id="oferta">
          <div className="container">
            <div className="offer-card">
              <span className="eyebrow">{t.oferta.eyebrow}</span>
              <h2>{t.oferta.h2}</h2>
              <p className="offer-lead">{t.oferta.lead}</p>
              <div className="offer-steps">
                {t.oferta.steps.map((s, i) => (
                  <div className="offer-step" key={i}>
                    <span className="offer-num">{i + 1}</span>
                    <p>{s}</p>
                  </div>
                ))}
              </div>
              <div className="offer-cta">
                <a href="#contacto" className="btn btn-primary">{t.oferta.cta}</a>
              </div>
              <p className="offer-cond">{t.oferta.cond}</p>
            </div>
          </div>
        </section>

        <section className="section section-divider" id="nosotros">
          <div className="container">
            <div className="about-box">
              <div className="about-intro">
                <span className="eyebrow">{t.nosotros.eyebrow}</span>
                <h2>{t.nosotros.h2}</h2>
              </div>

              <div className="about-content">
                <p>{t.nosotros.p1}</p>
                <p>{t.nosotros.p2}</p>
                <p>{t.nosotros.p3}</p>
                <div className="about-highlight">{t.nosotros.highlight}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="metodo">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">{t.metodo.eyebrow}</span>
              <h2>
                {t.metodo.h2Line1}
                <br />
                {t.metodo.h2Line2}
              </h2>
              <p>{t.metodo.p}</p>
            </div>

            <div className="steps-grid">
              {t.metodo.pillars.map((p, i) => (
                <article className="step-card" key={i}>
                  <span className="step-number">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{p.h3}</h3>
                  <p>{p.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-divider" id="ideal-para">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">{t.ideal.eyebrow}</span>
              <h2>{t.ideal.h2}</h2>
              <p>{t.ideal.p}</p>
            </div>

            <div className="ideal-grid">
              {t.ideal.cards.map((c, i) => (
                <article className="ideal-card" key={i}>
                  <h3>{c.h3}</h3>
                  <p>{c.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="faq">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">{t.faq.eyebrow}</span>
              <h2>{t.faq.h2}</h2>
              <p>{t.faq.p}</p>
            </div>

            <div className="faq-list">
              {t.faq.items.map((it, i) => (
                <article className="faq-item" key={i}>
                  <h3>{it.q}</h3>
                  <p>{it.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contacto">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">{t.contacto.eyebrow}</span>
              <h2>{t.contacto.h2}</h2>
              <p>{t.contacto.p}</p>
            </div>

            <div className="contact-stack">
              <div className="contact-grid">
                <form
                  className="contact-form"
                  action="https://formspree.io/f/mykraqjy"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <div className="form-row">
                    <label>
                      {t.contacto.form.nombre}
                      <input type="text" name="nombre" required placeholder={t.contacto.form.nombrePh} />
                    </label>
                    <label>
                      {t.contacto.form.email}
                      <input type="email" name="email" required placeholder={t.contacto.form.emailPh} />
                    </label>
                  </div>
                  <label>
                    {t.contacto.form.empresa} <span className="form-opt">{t.contacto.form.opcional}</span>
                    <input type="text" name="empresa" placeholder={t.contacto.form.empresaPh} />
                  </label>
                  <label>
                    {t.contacto.form.caso}
                    <textarea
                      name="mensaje"
                      rows="4"
                      required
                      placeholder={t.contacto.form.casoPh}
                    ></textarea>
                  </label>
                  <button type="submit" className="btn btn-primary" disabled={enviando}>
                    {enviando ? t.contacto.form.submitting : t.contacto.form.submit}
                  </button>
                  {error && (
                    <p className="form-error">{t.contacto.form.error}</p>
                  )}
                </form>

                <aside className="contact-side">
                  <img
                    src="/logo-abapia.png"
                    alt="ABAPIA"
                    className="contact-side-logo"
                  />

                  <div className="contact-side-mid">
                    <p className="contact-side-tag">{t.contacto.side.tag}</p>
                    <div className="contact-rows">
                      {t.contacto.side.feats.map((f, i) => (
                        <div className="contact-feat" key={i}>
                          <span className="contact-feat-ic" aria-hidden="true">✓</span>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="contact-side-actions">
                    <a href="mailto:contacto@abapia.com" className="contact-row">
                      <span className="contact-row-ic" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <path d="m3 7 9 6 9-6" />
                        </svg>
                      </span>
                      <span className="contact-row-txt">
                        <b>Email</b>contacto@abapia.com
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/abapia/"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-row"
                    >
                      <span className="contact-row-ic" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 0 0 3.3 4.95 1.95 1.95 0 0 0 5.23 6.9h.02a1.95 1.95 0 1 0 0-3.9ZM20.7 12.83c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.09-3.38 1.86V8.5H9.62c.04.74 0 11.5 0 11.5H13v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.39 1.9-1.39 1.34 0 1.88 1.02 1.88 2.52V20h3.38v-7.17Z" />
                        </svg>
                      </span>
                      <span className="contact-row-txt">
                        <b>LinkedIn</b>/company/abapia
                      </span>
                    </a>
                  </div>
                </aside>
              </div>

              <div className="contact-secondary-heading">
                <h3>{t.career.secHeading}</h3>
                <p>{t.career.secP}</p>
              </div>

              <div className="career-box">
                <div className="career-text">
                  <h3>{t.career.h3}</h3>
                  <p>{t.career.p}</p>
                </div>

                <a href="mailto:cv@abapia.com" className="btn btn-primary btn-fixed">
                  {t.career.cta}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-content">
            <p>© 2026 ABAPIA. {t.tagline}</p>

            <a
              href="https://www.linkedin.com/company/abapia/"
              target="_blank"
              rel="noreferrer"
              className="footer-linkedin"
            >
              <span className="contact-link-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 0 0 3.3 4.95 1.95 1.95 0 0 0 5.23 6.9h.02a1.95 1.95 0 1 0 0-3.9ZM20.7 12.83c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.09-3.38 1.86V8.5H9.62c.04.74 0 11.5 0 11.5H13v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.39 1.9-1.39 1.34 0 1.88 1.02 1.88 2.52V20h3.38v-7.17Z" />
                </svg>
              </span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>

      {enviado && (
        <div key={toastId} className="toast" role="status" aria-live="polite">
          {t.toast}
        </div>
      )}
    </>
  );
}

export default App;
