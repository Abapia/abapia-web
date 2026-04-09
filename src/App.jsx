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
            <a href="#paquetes">Paquetes</a>
            <a href="#porque-abapia">Por qué ABAPIA</a>
            <a href="#metodo">Cómo trabajamos</a>
            <a href="#ideal-para">Ideal para</a>
            <a href="#talento">Talento</a>
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
            <img
              src="/logo-abapia.png"
              alt="ABAPIA"
              className="hero-logo"
            />

            <p className="hero-subtitle">Desarrollo ABAP acelerado por IA</p>

            <p className="hero-description">
              Ayudamos a empresas y consultoras SAP a resolver desarrollos ABAP,
              tickets y mejoras técnicas más rápido, con validación experta humana.
            </p>

            <div className="hero-actions">
              <a href="#contacto" className="btn btn-primary">
                Hablar con ABAPIA
              </a>
              <a href="#servicios" className="btn btn-secondary">
                Ver servicios
              </a>
            </div>

            <div className="hero-badges">
              <span>Más velocidad</span>
              <span>Menos backlog</span>
              <span>Validación experta</span>
            </div>
          </div>
        </section>

        <section className="section section-divider" id="servicios">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Servicios</span>
              <h2>Qué hace ABAPIA</h2>
              <p>
                Soluciones concretas para empresas y consultoras SAP que necesitan
                más capacidad técnica, menos demora y mejor respuesta.
              </p>
            </div>

            <div className="cards-grid">
              <article className="card">
                <h3>Desarrollo ABAP bajo demanda</h3>
                <p>
                  Reportes, ALV, interfaces, formularios, programas Z, mejoras,
                  BADIs, exits y ajustes técnicos puntuales.
                </p>
                <div className="card-tag">Ideal para requerimientos puntuales</div>
              </article>

              <article className="card">
                <h3>Soporte evolutivo y correctivo</h3>
                <p>
                  Resolución de tickets, corrección de errores, mejoras sobre
                  desarrollos existentes y optimización técnica.
                </p>
                <div className="card-tag">Ideal para backlog y soporte continuo</div>
              </article>

              <article className="card">
                <h3>Bolsa mensual ABAP</h3>
                <p>
                  Capacidad técnica reservada por mes para acompañar backlog,
                  soporte continuo y demanda variable.
                </p>
                <div className="card-tag">Ideal para consultoras y equipos chicos</div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="paquetes">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Paquetes</span>
              <h2>Tres formas simples de trabajar con ABAPIA</h2>
              <p>
                Elegimos la modalidad según el tipo de necesidad, el ritmo del
                cliente y el nivel de acompañamiento que haga falta.
              </p>
            </div>

            <div className="cards-grid">
              <article className="card">
                <h3>ABAPIA Sprint</h3>
                <p>
                  Ideal para resolver un requerimiento puntual y conocer nuestra
                  forma de trabajo. Incluye relevamiento breve, alcance acotado,
                  desarrollo o ajuste técnico, prueba básica y entrega para
                  validación.
                </p>
              </article>

              <article className="card">
                <h3>ABAPIA Delivery</h3>
                <p>
                  Pensado para cuando ya hay un desarrollo ABAP concreto para
                  ejecutar. Incluye análisis técnico, estimación, desarrollo,
                  pruebas técnicas, ajustes razonables dentro del alcance y
                  entrega lista para validar.
                </p>
              </article>

              <article className="card">
                <h3>ABAPIA Partner</h3>
                <p>
                  Una bolsa mensual de horas para acompañar backlog, tickets,
                  ajustes y mejoras de manera continua. Es la opción más flexible
                  para sumar capacidad técnica sin incorporar estructura fija.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="porque-abapia">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Por qué ABAPIA</span>
              <h2>Una forma más moderna y transparente de desarrollar</h2>
              <p>
                La tecnología cambió. En ABAPIA usamos IA donde realmente suma,
                pero la calidad final siempre la garantiza un programador experto.
              </p>
            </div>

            <div className="benefits-grid">
              <article className="benefit-card">
                <h3>Experiencia real en SAP ABAP</h3>
                <p>
                  No se trata solo de escribir código: se trata de entender el
                  proceso, el impacto técnico y la calidad de entrega.
                </p>
              </article>

              <article className="benefit-card">
                <h3>IA como acelerador, no como humo</h3>
                <p>
                  Aprovechamos la IA para acelerar análisis, construcción y
                  documentación, sin improvisar ni bajar el nivel técnico.
                </p>
              </article>

              <article className="benefit-card">
                <h3>Menos backlog, mejor respuesta</h3>
                <p>
                  Sumamos capacidad técnica real para que los pendientes avancen
                  más rápido y con mejor previsibilidad.
                </p>
              </article>

              <article className="benefit-card">
                <h3>Validación humana experta</h3>
                <p>
                  La velocidad sola no alcanza. Todo desarrollo pasa por revisión
                  técnica antes de ser entregado.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-divider" id="metodo">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Cómo trabajamos</span>
              <h2>Un proceso simple, claro y eficiente</h2>
              <p>
                Orden, velocidad y criterio técnico para avanzar sin vueltas.
              </p>
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

        <section className="section section-alt" id="ideal-para">
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

        <section className="section section-divider" id="talento">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Talento</span>
              <h2>¿Querés trabajar con nosotros?</h2>
              <p>
                Si sos desarrollador ABAP y te interesa trabajar con foco en
                eficiencia, calidad técnica y uso inteligente de IA, mandanos tu CV.
              </p>
            </div>

            <div className="career-box">
              <div className="career-text">
                <h3>Envíanos tu perfil</h3>
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
        </section>

        <section className="section" id="contacto">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Contacto</span>
              <h2>Hablemos</h2>
              <p>
                Si querés conversar sobre desarrollos, soporte o backlog técnico,
                escribinos.
              </p>
            </div>

            <div className="contact-box">
              <div className="contact-text">
                <h3>ABAPIA</h3>
                <p>Desarrollo ABAP acelerado por IA</p>
              </div>

              <div className="contact-actions">
                <a href="mailto:contacto@abapia.com" className="btn btn-primary btn-fixed">
                  Escribinos a contacto@abapia.com
                </a>


              </div>
            </div>
          </div>
        </section>

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
      </main>
    </>
  )
}

export default App