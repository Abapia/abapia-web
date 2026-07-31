function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="header-logo">
            <img src="/logo-abapia.png" alt="ABAPIA" className="header-logo-img" />
          </a>

          <nav className="header-nav">
            <a href="#servicios">Servicios</a>
            <a href="#modalidades">Modalidades</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#metodo">Cómo trabajamos</a>
            <a href="#ideal-para">Ideal para</a>
            <a href="#faq">FAQ</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a href="#contacto" className="btn btn-primary header-cta">
            Hablemos
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-center">
            <img src="/logo-abapia.png" alt="ABAPIA" className="hero-logo" />

            <p className="hero-subtitle">Desarrollo ABAP acelerado por IA</p>

            <p className="hero-description">
              Sumá capacidad técnica a tu equipo SAP para resolver desarrollos,
              tickets y mejoras más rápido. IA para acelerar, validación humana
              experta para garantizar la calidad, y precio justo sin horas de más.
            </p>

            <div className="hero-actions">
              <a href="#contacto" className="btn btn-primary">
                Hablar con ABAPIA
              </a>
              <a href="#modalidades" className="btn btn-secondary">
                Ver modalidades
              </a>
            </div>

            <div className="hero-badges">
              <span>Más velocidad</span>
              <span>Menos backlog</span>
              <span>Validación experta</span>
            </div>
          </div>
        </section>

        <section className="trust-bar-section">
          <div className="container">
            <div className="trust-bar">
              <div className="trust-item">
                <span className="trust-value">+20 años</span>
                <span className="trust-label">de experiencia en SAP ABAP</span>
              </div>
              <div className="trust-item">
                <span className="trust-value">IA + humano</span>
                <span className="trust-label">validación experta en cada entrega</span>
              </div>
              <div className="trust-item">
                <span className="trust-value">Precio justo</span>
                <span className="trust-label">sin horas infladas ni relleno</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-divider" id="servicios">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Servicios</span>
              <h2>Qué resolvemos</h2>
              <p>
                Capacidad técnica ABAP para lo que tu equipo necesita destrabar,
                con el alcance cerrado o ayudándote a definirlo.
              </p>
            </div>

            <div className="cards-grid">
              <article className="card service-card service-card-featured">
                <div className="service-card-body">
                  <h3>Desarrollo ABAP a medida</h3>
                  <p>
                    Reportes, ALV, interfaces, formularios, programas Z, mejoras,
                    BADIs, user exits y ajustes técnicos.
                  </p>
                </div>
                <div className="service-card-footer">
                  <div className="card-tag">Nuevos desarrollos</div>
                </div>
              </article>

              <article className="card service-card">
                <div className="service-card-body">
                  <h3>Soporte y correctivo</h3>
                  <p>
                    Resolución de tickets, corrección de errores y optimización
                    técnica sobre desarrollos existentes.
                  </p>
                </div>
                <div className="service-card-footer">
                  <div className="card-tag">Backlog y soporte</div>
                </div>
              </article>

              <article className="card service-card">
                <div className="service-card-body">
                  <h3>Mejoras evolutivas y performance</h3>
                  <p>
                    Evolución de soluciones existentes, tuning y mejoras de
                    performance y mantenibilidad del código.
                  </p>
                </div>
                <div className="service-card-footer">
                  <div className="card-tag">Sobre lo que ya tenés</div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="modalidades">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Modalidades</span>
              <h2>Cómo trabajás con nosotros</h2>
              <p>
                Elegí según el tipo de necesidad y el nivel de acompañamiento.
                Sin estructura fija y sin ataduras.
              </p>
            </div>

            <div className="cards-grid pkg-grid">
              <article className="card pkg-card">
                <div className="pkg-head">
                  <h3>ABAPIA Sprint</h3>
                  <p className="pkg-desc">
                    Un requerimiento puntual. Ideal para arrancar y conocer nuestra
                    forma de trabajo.
                  </p>
                </div>
                <ul className="pkg-includes">
                  <li>Relevamiento breve</li>
                  <li>Alcance acotado</li>
                  <li>Desarrollo o ajuste técnico</li>
                  <li>Prueba básica</li>
                  <li>Entrega para validación</li>
                </ul>
                <div className="pkg-foot">
                  <div className="card-tag">Ideal para un primer trabajo</div>
                  <a href="#contacto" className="btn btn-secondary pkg-cta">
                    Hablemos de un Sprint
                  </a>
                </div>
              </article>

              <article className="card pkg-card pkg-card-featured">
                <div className="pkg-badge">Más elegido</div>
                <div className="pkg-head">
                  <h3>ABAPIA Delivery</h3>
                  <p className="pkg-desc">
                    Ya tenés un desarrollo concreto para ejecutar y querés una
                    entrega llave en mano.
                  </p>
                </div>
                <ul className="pkg-includes">
                  <li>Análisis técnico</li>
                  <li>Estimación clara</li>
                  <li>Desarrollo completo</li>
                  <li>Pruebas técnicas</li>
                  <li>Ajustes dentro del alcance</li>
                  <li>Entrega lista para validar</li>
                </ul>
                <div className="pkg-foot">
                  <div className="card-tag">Ideal para un proyecto definido</div>
                  <a href="#contacto" className="btn btn-primary pkg-cta">
                    Hablemos de un Delivery
                  </a>
                </div>
              </article>

              <article className="card pkg-card">
                <div className="pkg-head">
                  <h3>ABAPIA Partner</h3>
                  <p className="pkg-desc">
                    Una bolsa mensual de horas para acompañar tu backlog de forma
                    continua.
                  </p>
                </div>
                <ul className="pkg-includes">
                  <li>Capacidad reservada por mes</li>
                  <li>Backlog, tickets y mejoras</li>
                  <li>Prioridades flexibles</li>
                  <li>Previsibilidad de costos</li>
                  <li>Sin incorporar estructura fija</li>
                </ul>
                <div className="pkg-foot">
                  <div className="card-tag">Ideal para consultoras y equipos chicos</div>
                  <a href="#contacto" className="btn btn-secondary pkg-cta">
                    Hablemos de Partner
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-divider" id="nosotros">
          <div className="container">
            <div className="about-box">
              <div className="about-intro">
                <span className="eyebrow">Nosotros</span>
                <h2>Experiencia real en SAP ABAP. IA aplicada con criterio.</h2>
              </div>

              <div className="about-content">
                <p>La eficiencia también debería beneficiar al cliente.</p>

                <p>
                  Tenemos más de 20 años desarrollando en SAP ABAP y conocemos de
                  cerca cómo se estiman, ejecutan y entregan los desarrollos dentro
                  del mundo de las consultoras.
                </p>

                <p>
                  Usamos IA como acelerador técnico, siempre con validación humana
                  experta. Esa mejora no queda solo del lado del proveedor: se
                  traduce en estimaciones más razonables y precios más justos. No
                  vendemos horas de más; resolvemos bien y construimos relaciones de
                  largo plazo.
                </p>

                <div className="about-highlight">
                  Más velocidad para ejecutar. Más claridad para el cliente.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="metodo">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Cómo trabajamos</span>
              <h2>Un proceso simple, claro y eficiente</h2>
              <p>Orden, velocidad y criterio técnico para avanzar sin vueltas.</p>
            </div>

            <div className="steps-grid">
              <article className="step-card">
                <span className="step-number">01</span>
                <h3>Relevamiento rápido</h3>
                <p>
                  Entendemos necesidad, alcance y contexto técnico para definir el
                  mejor enfoque.
                </p>
              </article>

              <article className="step-card">
                <span className="step-number">02</span>
                <h3>Estimación clara</h3>
                <p>
                  Bajamos el requerimiento a una propuesta concreta, realista y
                  alineada a tiempos de entrega.
                </p>
              </article>

              <article className="step-card">
                <span className="step-number">03</span>
                <h3>Desarrollo acelerado</h3>
                <p>
                  Usamos IA como acelerador del trabajo técnico donde aporta
                  productividad real.
                </p>
              </article>

              <article className="step-card">
                <span className="step-number">04</span>
                <h3>Validación experta</h3>
                <p>
                  Revisamos cada entrega con criterio técnico para asegurar
                  calidad, mantenibilidad y consistencia.
                </p>
              </article>

              <article className="step-card">
                <span className="step-number">05</span>
                <h3>Entrega y soporte</h3>
                <p>
                  Cerramos con seguimiento, ajustes y acompañamiento para que el
                  resultado quede sólido.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-divider" id="ideal-para">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Ideal para</span>
              <h2>Quiénes pueden aprovechar ABAPIA</h2>
              <p>
                Un servicio pensado para organizaciones que necesitan capacidad
                técnica ABAP con rapidez y criterio.
              </p>
            </div>

            <div className="ideal-grid">
              <article className="ideal-card">
                <h3>Consultoras SAP</h3>
                <p>
                  Para tercerizar desarrollos, resolver picos de demanda o sumar
                  apoyo técnico especializado.
                </p>
              </article>

              <article className="ideal-card">
                <h3>Empresas con backlog técnico</h3>
                <p>
                  Para avanzar tickets, mejoras y desarrollos que hoy están
                  demorados o sin capacidad interna.
                </p>
              </article>

              <article className="ideal-card">
                <h3>Equipos internos chicos</h3>
                <p>
                  Para sumar refuerzo puntual o continuo sin necesidad de agrandar
                  estructura fija.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="faq">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">FAQ</span>
              <h2>Preguntas frecuentes</h2>
              <p>
                Respuestas rápidas para entender cómo trabajamos y en qué casos
                puede ayudarte ABAPIA.
              </p>
            </div>

            <div className="faq-list">
              <article className="faq-item">
                <h3>¿Qué tipo de desarrollos puede tomar ABAPIA?</h3>
                <p>
                  Desarrollos ABAP puntuales, ajustes sobre soluciones existentes,
                  tickets técnicos, backlog y mejoras evolutivas.
                </p>
              </article>

              <article className="faq-item">
                <h3>¿Trabajan por requerimiento puntual o también de forma continua?</h3>
                <p>
                  Ambas. Podés trabajar con una necesidad puntual a través de Sprint
                  o Delivery, o acompañarte de forma continua con la modalidad
                  Partner.
                </p>
              </article>

              <article className="faq-item">
                <h3>¿Cómo es el arranque de un nuevo trabajo?</h3>
                <p>
                  Empezamos con un relevamiento breve para entender la necesidad, el
                  alcance y el contexto técnico. A partir de eso definimos la mejor
                  modalidad y el siguiente paso.
                </p>
              </article>

              <article className="faq-item">
                <h3>¿Es necesario tener el alcance completamente cerrado?</h3>
                <p>
                  No siempre. Si el requerimiento todavía necesita orden, te
                  ayudamos a bajarlo a una propuesta más clara antes de avanzar con
                  la ejecución.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="contacto">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Contacto</span>
              <h2>Hablemos</h2>
              <p>
                ¿No sabés qué modalidad te sirve? Contanos tu caso y lo vemos
                juntos. Desarrollos, soporte o backlog técnico: escribinos.
              </p>
            </div>

            <div className="contact-stack">
              <div className="contact-grid">
                <form
                  className="contact-form"
                  action="https://formspree.io/f/mykraqjy"
                  method="POST"
                >
                  <div className="form-row">
                    <label>
                      Nombre
                      <input type="text" name="nombre" required placeholder="Tu nombre" />
                    </label>
                    <label>
                      Email
                      <input type="email" name="email" required placeholder="tu@email.com" />
                    </label>
                  </div>
                  <label>
                    Empresa <span className="form-opt">(opcional)</span>
                    <input type="text" name="empresa" placeholder="Nombre de tu empresa" />
                  </label>
                  <label>
                    Contanos tu caso
                    <textarea
                      name="mensaje"
                      rows="4"
                      required
                      placeholder="Qué necesitás resolver: backlog, tickets, un desarrollo puntual…"
                    ></textarea>
                  </label>
                  <button type="submit" className="btn btn-primary">
                    Enviar consulta
                  </button>
                </form>

                <aside className="contact-side">
                  <div className="contact-text">
                    <h3>ABAPIA</h3>
                    <p>Desarrollo ABAP acelerado por IA</p>
                  </div>
                  <a href="mailto:contacto@abapia.com" className="btn btn-secondary btn-fixed">
                    Escribinos a contacto@abapia.com
                  </a>
                  <a
                    href="https://www.linkedin.com/company/abapia/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link-item"
                  >
                    <span className="contact-link-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 0 0 3.3 4.95 1.95 1.95 0 0 0 5.23 6.9h.02a1.95 1.95 0 1 0 0-3.9ZM20.7 12.83c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.09-3.38 1.86V8.5H9.62c.04.74 0 11.5 0 11.5H13v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.39 1.9-1.39 1.34 0 1.88 1.02 1.88 2.52V20h3.38v-7.17Z" />
                      </svg>
                    </span>
                    <span>LinkedIn</span>
                  </a>
                </aside>
              </div>

              <div className="contact-secondary-heading">
                <h3>¿Querés trabajar con nosotros?</h3>
                <p>
                  Si sos desarrollador ABAP y te interesa trabajar con foco en
                  eficiencia, calidad técnica y uso inteligente de IA, mandanos tu CV.
                </p>
              </div>

              <div className="career-box">
                <div className="career-text">
                  <h3>Envianos tu perfil</h3>
                  <p>
                    Buscamos perfiles técnicos con ganas de construir una forma más
                    ágil, moderna y transparente de desarrollar en SAP.
                  </p>
                </div>

                <a href="mailto:cv@abapia.com" className="btn btn-primary btn-fixed">
                  Envianos tu CV a cv@abapia.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-content">
            <p>© 2026 ABAPIA. Desarrollo ABAP acelerado por IA.</p>

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
    </>
  );
}

export default App;
