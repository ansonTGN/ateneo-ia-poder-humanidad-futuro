---
theme: default
title: Inteligencia artificial — poder, humanidad y futuro
info: |
  Presentación v7.3.0 para el Centre d’Amics de Reus, Reus. Corte editorial 03/10/2026.
  Una conversación visual sobre inteligencia artificial, biología, sociedad, ciberseguridad y salud mental.
author: Angel A. Urbina
transition: fade-out
mdc: true
monaco: false
lineNumbers: false
presenter: true
record: false
contextMenu: false
colorSchema: dark
aspectRatio: 16/9
canvasWidth: 980
routerMode: hash
layout: full
class: cinematic-v56
seoMeta:
  ogTitle: Inteligencia artificial — poder, humanidad y futuro
  ogDescription: Una conversación pública sobre IA, biología, agencia humana, ciberseguridad y salud mental.
---

<CinematicOpening />

---
class: debate
---

<div class="center"><div>
  <div class="kicker">Primera pregunta</div>
  <h1 class="question">Si la IA puede hacer cada vez más…<br><em>¿qué queremos que siga siendo valioso en una persona?</em></h1>
  <p>Guarda tu respuesta. Volveremos a ella al final.</p>
</div></div>

---
---

<div class="split">
  <div>
    <div class="kicker">01 · Qué está cambiando</div>
    <h1>De responder a actuar</h1>
    <p class="hero-sub">La IA genera contenido, utiliza herramientas y participa en decisiones. Puede <strong>actuar dentro de sistemas digitales y físicos</strong>.</p>
    <div class="callout" style="margin-top:22px">Cuando la IA deja de ser un “chat” y pasa a ser un <strong>actor dentro de sistemas</strong>, cambian también los riesgos y las responsabilidades.</div>
  </div>
  <I18nDiagram class="diagram-img diagram-capability" src="/visuals/capability-orbit.svg" alt="Mapa visual de capacidades contemporáneas de la IA" />
</div>

---
---

<div class="kicker">El salto conceptual</div>
<h1>La frontera se desplaza</h1>
<div class="grid-4" style="margin-top:30px">
  <div class="glass card"><div class="card-icon">1</div><h3>Preguntar</h3><p>El humano formula la tarea.</p></div>
  <div class="glass card"><div class="card-icon">2</div><h3>Responder</h3><p>La IA produce una propuesta.</p></div>
  <div class="glass card"><div class="card-icon">3</div><h3>Herramientas</h3><p>Consulta datos y servicios.</p></div>
  <div class="glass card"><div class="card-icon">4</div><h3>Acción</h3><p>Ejecuta dentro del mundo digital.</p></div>
</div>
<div style="display:flex;align-items:center;gap:10px;margin-top:34px">
  <div style="height:5px;flex:1;border-radius:999px;background:linear-gradient(90deg,var(--cyan),var(--violet),var(--magenta))"></div>
  <div style="font-size:15px;color:#dceafa">más autonomía → más necesidad de control</div>
</div>

---
---

<ShortVideo
  company="Unitree Robotics · China"
  kicker="Embodied AI · del modelo al cuerpo"
  title="La IA ya está entrando en el mundo físico"
  caption="Durante esta secuencia, el G1 hace visible el cambio clave: percepción, control y aprendizaje dejan de vivir sólo en una pantalla."
  video-id="Nkh6RUocD8c"
  :start="8"
  :end="68"
/>
<div class="source">Vídeo oficial · Unitree Robotics · “Movement creates intelligence — G1 humanoid robot” (21/03/2025). Clip incrustado desde YouTube; requiere conexión.</div>

---
---

<FrontierUpdate section="continuous" />

---
---

<ShortVideo
  company="OpenAI · dots"
  kicker="Agentes persistentes · del diálogo al trabajo"
  title="De una respuesta a un trabajo en curso"
  caption="Un asistente retoma tareas entre aplicaciones. Delegar exige decidir qué puede hacer y qué debemos revisar."
  caveat="Vídeo promocional con escenas preparadas. Ilustra la propuesta del producto; no es una prueba independiente de fiabilidad."
  video-id="uXspbC2srEQ"
  :start="29"
  :end="89"
/>
<div class="source">OpenAI · lanzamiento de dots (29/09/2026). Fragmento 00:29–01:29; requiere conexión.</div>

---
---

<FrontierUpdate section="models" />

---
---

<FrontierUpdate section="china" />

---
---

<ShortVideo
  company="Boston Dynamics · Atlas"
  kicker="Atlas · destreza física · octubre de 2026"
  title="La frontera está en las manos"
  caption="No basta con caminar: trabajar exige sujetar, ajustar y utilizar herramientas. Las nuevas manos de Atlas combinan cuatro dedos, 13 grados de libertad y sensores táctiles."
  caveat="Demostración del fabricante con segmentos autónomos y teleoperados. La destreza mostrada no prueba autonomía general ni productividad industrial."
  video-id="4whgw2gLBS8"
  :start="0"
  :end="60"
/>
<div class="source">Vídeo oficial · Boston Dynamics · “New Hands for Atlas” · 01/10/2026 · Fragmento de 60 s.</div>

---
---

<ShortVideo
  company="Linkerbot · LinkerArm A7"
  kicker="Robótica modular · brazo y mano"
  title="La destreza también se integra"
  caption="Linkerbot combina su mano con un brazo de siete ejes. El eje adicional permite cambiar la postura del codo manteniendo la posición y orientación de la mano."
  caveat="Demostración comercial. Siete ejes no garantizan autonomía; la teleoperación y el aprendizaje requieren calibración y evaluación."
  video-id="lWQb99hitJc"
/>
<div class="source">Vídeo oficial · Linkerbot · LinkerArm A7 · septiembre de 2026.</div>

<!--
Vídeo oficial: https://www.youtube.com/watch?v=lWQb99hitJc
Publicación del fabricante: https://www.linkedin.com/posts/linker-bot_linkerbot-robotics-activity-7509611789584711680-77FS
SDK A7: https://docs.linkerhub.work/sdk/zh-cn/reference/a7/motion.html
Un brazo 6R puede tener varias soluciones de cinemática inversa. El séptimo eje aporta redundancia local para una pose alcanzable, dentro de los límites articulares. No elimina todas las singularidades ni garantiza una correspondencia uno a uno con el brazo humano.
Las cifras de cuota, precio y ventas del texto aportado no se utilizan como evidencia de productividad, precio del A7 ni autonomía.
-->


---
class: light
---

<div class="split-45">
  <div>
    <div class="kicker" style="color:#244ac7">Trabajo</div>
    <div class="big-number">1/4</div>
    <h1 style="font-size:31px!important">trabajadores en ocupaciones con alguna exposición a IA generativa</h1>
    <p style="font-size:15px!important">La OIT subraya que <strong>transformación</strong> es más probable que sustitución automática.</p>
  </div>
  <I18nDiagram class="diagram-img diagram-work" src="/visuals/work-transform.svg" alt="Transformación del trabajo por tareas" />
</div>
<div class="source">OIT/NASK · <em>Generative AI and Jobs: A Refined Global Index of Occupational Exposure</em> (2025).</div>

---
---

<ShortVideo
  company="UBTECH Robotics · China"
  kicker="Trabajo físico · automatización flexible"
  title="Cuando los robots ayudan a fabricar robots"
  caption="La fábrica de UBTECH conecta dos cambios: la IA adquiere cuerpo y la industria reorganiza sus tareas. El futuro del trabajo también se juega en la planta de producción."
  caveat="Vídeo corporativo: muestra una línea industrial. No demuestra autonomía total ni acredita productividad a escala."
  video-id="hUlfQOrvPxA"
  :start="0"
  :end="60"
/>
<div class="source">Vídeo oficial · UBTECH Robotics · “Robots Building Robots” · 15/09/2026 · Fragmento de 60 s.</div>

---
class: debate
---

<div class="center"><div>
  <div class="kicker">Debate</div>
  <h1 class="question">¿Cómo queremos repartir las tareas<br>entre <em>personas e IA</em>?</h1>
  <p>La diferencia no la decide el modelo. La deciden el diseño del trabajo, los incentivos y las instituciones.</p>
</div></div>

<!--
Transición del ponente: También cambia cómo sabemos si algo ha ocurrido.
-->


---
---

<div class="split">
  <div>
    <div class="kicker">02 · Verdad y conocimiento</div>
    <h1>Cuando producir contenido cuesta casi cero…</h1>
    <div class="quote">…la escasez se desplaza de la <strong>información</strong> hacia la <strong>confianza</strong>.</div>
  </div>
  <I18nDiagram class="diagram-img diagram-trust" src="/visuals/trust-bottleneck.svg" alt="De abundancia de contenido a escasez de confianza" />
</div>

---
---

<ShortVideo
  company="Google DeepMind · Veo 3"
  kicker="Contenido sintético · confianza"
  title="Imágenes que necesitan contexto"
  caption="Una escena convincente puede ser sintética. Antes de creerla, necesitamos conocer su origen y cómo se ha verificado."
  caveat="El clip es una demostración oficial de vídeo generado con Veo 3. Precisamente por eso se usa aquí: lo visualmente plausible ya no implica que el acontecimiento haya ocurrido."
  video-id="ffRaD7sY0TQ"
  :start="0"
  :end="60"
/>
<div class="source">Vídeo oficial · Google DeepMind · “Veo 3 demo | Irish coast” (20/05/2025). Ejemplo de contenido sintético.</div>

---
---

<div class="kicker">Seguridad epistémica</div>
<h1>Cuatro preguntas antes de creer</h1>
<div class="grid-4" style="margin-top:28px">
  <div class="glass card"><div class="card-number">01</div><h3>Origen</h3><p>¿Quién lo produjo?</p></div>
  <div class="glass card"><div class="card-number">02</div><h3>Evidencia</h3><p>¿Cómo lo verifico?</p></div>
  <div class="glass card"><div class="card-number">03</div><h3>Contexto</h3><p>¿Qué se omite?</p></div>
  <div class="glass card"><div class="card-number">04</div><h3>Incentivo</h3><p>¿Quién gana si lo creo?</p></div>
</div>
<div class="callout" style="margin-top:28px">La alfabetización digital del futuro será también <strong>alfabetización de procedencia</strong>.</div>

<!--
Transición del ponente: Cuando esos sistemas actúan, comprobar su información tiene consecuencias operativas.
-->


---
---

<div class="split">
  <div>
    <div class="kicker">03 · Ciberseguridad</div>
    <h1>La IA abarata atacar.<br>Y también defender.</h1>
    <p class="hero-sub">La ventaja ya no depende sólo de tener mejores herramientas, sino de <strong>identidad, permisos, contexto y velocidad de respuesta</strong>.</p>
  </div>
  <I18nDiagram class="diagram-img diagram-cyber" src="/visuals/cyber-balance.svg" alt="IA como multiplicador de ataque y defensa" />
</div>
<div class="source">ENISA Threat Landscape 2026 (22/09): las dependencias digitales amplían la superficie de ataque. Analiza incidentes observados en 2025.</div>

---
---

<ShortVideo
  company="OpenAI · GPT-6 Astra"
  kicker="Agentes 2026 · computer use"
  title="Agentes que actúan en el ordenador"
  caption="Astra muestra trabajo con aplicaciones y herramientas. Su capacidad debe ir acompañada de permisos y supervisión."
  caveat="Demostración oficial del proveedor. Se utiliza para observar la dirección tecnológica; no como validación independiente de fiabilidad o seguridad."
  video-id="1QNsdr-Qx_I"
  :start="0"
  :end="60"
/>
<div class="source">Vídeo oficial · OpenAI · “Introducing GPT-6 Astra” (03/09/2026). Clip inicial de 60 segundos.</div>

---
---

<div class="kicker">Agentes</div>
<h1>El riesgo cambia cuando la IA puede hacer cosas</h1>
<div style="display:grid;grid-template-columns:1fr 80px 1fr 80px 1fr;align-items:center;margin-top:34px">
  <div class="glass card" style="text-align:center"><div class="card-icon" style="margin:auto">AI</div><h3>Modelo</h3><p>propone una acción</p></div>
  <div style="text-align:center;color:var(--cyan);font-size:30px">→</div>
  <div class="glass card" style="text-align:center"><div class="card-icon" style="margin:auto">🔑</div><h3>Permisos</h3><p>limitan capacidad</p></div>
  <div style="text-align:center;color:var(--cyan);font-size:30px">→</div>
  <div class="glass card" style="text-align:center"><div class="card-icon" style="margin:auto">✓</div><h3>Acción</h3><p>auditable y reversible</p></div>
</div>
<div class="grid-3" style="margin-top:26px">
  <div class="glass card"><h3>mínimo privilegio</h3><p>Acceso sólo a lo imprescindible.</p></div>
  <div class="glass card"><h3>fricción deliberada</h3><p>Confirmación humana en decisiones de alto impacto.</p></div>
  <div class="glass card"><h3>trazabilidad</h3><p>Registro de cada llamada, dato y decisión.</p></div>
</div>

---
class: debate
---

<div class="center"><div>
  <div class="kicker">Ejemplo hipotético</div>
  <h1 class="question">¿Confiarías a una IA <em>tu dinero</em>, <em>tu historial médico</em> o <em>tu identidad digital</em> si supieras que puede equivocarse una vez entre mil?</h1>
</div></div>

---
---

<FrontierUpdate section="incident" />

---
---

<FrontierUpdate section="safety" />

<!--
Transición del ponente: Estas capacidades también entran en la investigación de la vida.
-->


---
---

<div class="kicker">04 · IA + biología</div>
<h1>IA para investigar la vida</h1>
<div class="grid-3" style="margin-top:30px">
  <div class="glass card" style="min-height:235px">
    <h3 class="bio-topic">ADN</h3>
    <p>Modelos que predicen cómo cambios en una sola letra del ADN pueden alterar procesos moleculares.</p>
  </div>
  <div class="glass card" style="min-height:235px">
    <h3 class="bio-topic">Proteínas</h3>
    <p>La IA ya no sólo predice estructuras: propone secuencias y arquitecturas con propiedades buscadas.</p>
  </div>
  <div class="glass card" style="min-height:235px">
    <h3 class="bio-topic">Sistemas vivos</h3>
    <p>La frontera se desplaza hacia modelos que conectan moléculas, células, genomas y experimentación.</p>
  </div>
</div>
<div class="callout" style="margin-top:24px">El cambio filosófico es profundo: pasamos de <strong>leer la vida</strong> a empezar a <strong>modelarla y diseñarla</strong>.</div>

---
---

<ShortVideo
  company="Google DeepMind · AlphaGenome Atlas"
  kicker="Genómica · septiembre de 2026"
  title="Un mapa predictivo del genoma"
  caption="AlphaGenome Atlas predice efectos moleculares de cambios de una letra del ADN. Orienta hipótesis que necesitan comprobación experimental."
  caveat="Es una herramienta de investigación. Google DeepMind indica expresamente que no está validada ni aprobada para uso clínico."
  video-id="U0aToL5C-bQ"
  :start="0"
  :end="60"
/>
<div class="source">Vídeo oficial · Google DeepMind · “AlphaGenome Atlas: Understanding the human genome” (08/09/2026).</div>

---
---

<div class="split-45">
  <div>
    <div class="kicker">Evo 2 · modelo fundacional biológico</div>
    <h1>Evo 2: aprender de los genomas</h1>
    <p class="hero-sub">Evo 2 aprende patrones de secuencias genómicas de todos los dominios de la vida. Sus propuestas necesitan volver al laboratorio.</p>
    <div class="callout" style="margin-top:20px">Las predicciones orientan experimentos. La función biológica se comprueba en la realidad.</div>
  </div>
  <div class="glass card" style="padding:28px">
    <div class="metric-label">2026 · BIO FOUNDATION MODEL</div>
    <div class="big-number" style="font-size:66px">9 billones</div>
    <p>pares de bases en entrenamiento</p>
    <div class="big-number" style="font-size:54px;margin-top:10px">1 millón</div>
    <p>ventana de contexto, resolución de nucleótido</p>
    <p style="margin-top:18px"><strong>Abierto:</strong> parámetros, código y OpenGenome2.</p>
  </div>
</div>
<div class="source">Nature 652 (2026) · “Genome modelling and design across all domains of life with Evo 2”.</div>

---
---

<div class="kicker">Diseño biológico</div>
<h1>Predicción, diseño y comprobación</h1>
<div class="grid-3 evidence-process" style="margin-top:28px">
  <div class="glass card"><h3>Predicción</h3><p>¿Qué estructura o función es probable que tenga una secuencia?</p></div>
  <div class="glass card"><h3>Generación</h3><p>¿Qué secuencia podría producir una propiedad que buscamos?</p></div>
  <div class="glass card"><h3>Laboratorio</h3><p>La realidad experimental decide si la propuesta funciona, es estable y es segura.</p></div>
</div>
<div class="callout" style="margin-top:24px">En 2026, trabajos en <em>Nature</em> muestran proteínas rediseñadas por IA y ensamblajes proteicos sintéticos capaces de formar vehículos de transferencia de RNA. La frontera es ya <strong>generativa y experimental</strong>, no sólo predictiva.</div>
<div class="source">Nature (22/07/2026; 02/09/2026). Resultados experimentales, no promesas comerciales.</div>

---
---

<FrontierUpdate section="art" />

---
---

<FrontierUpdate section="bio" />

---
class: debate
---

<div class="center"><div>
  <div class="kicker">Pregunta de frontera</div>
  <h1 class="question">¿Qué cambia cuando la IA no sólo interpreta la vida…<br><em>sino que empieza a proponer cómo modificarla?</em></h1>
  <p>Conocimiento · salud · bioeconomía · seguridad · propiedad · límites</p>
</div></div>

<!--
Transición del ponente: La relación con la IA afecta también a nuestra experiencia cotidiana y nuestros vínculos.
-->


---
---

<div class="split">
  <div>
    <div class="kicker">05 · Salud mental</div>
    <h1>Puede acompañar.<br>No debe fingir que es humana.</h1>
    <p class="hero-sub">Disponibilidad y psicoeducación pueden ser útiles. Dependencia, suplantación de vínculo y error clínico requieren límites explícitos.</p>
  </div>
  <I18nDiagram class="diagram-img diagram-mental" src="/visuals/mental-health-compass.svg" alt="Principios de uso responsable de IA en salud mental" />
</div>
<div class="source">OMS · Guidance on large multi-modal models for health (2025); Wiest et al., <em>Nature</em> 656 (2026).</div>

---
---

<FrontierUpdate section="mental" />

---
---

<div class="split-45">
  <div>
    <div class="kicker">Consciencia</div>
    <h1>Hablar bien no demuestra sentir</h1>
    <p class="hero-sub">Podemos medir conducta. Podemos proponer indicadores funcionales. Pero la experiencia subjetiva sigue siendo otro problema.</p>
    <div class="callout" style="margin-top:20px"><strong>Conducta convincente ≠ vida interior demostrada.</strong></div>
  </div>
  <I18nDiagram class="diagram-img diagram-consciousness" src="/visuals/consciousness-layers.svg" alt="Capas de observación e inferencia sobre consciencia" />
</div>

---
class: debate
---

<div class="center"><div>
  <div class="kicker">Filosofía práctica</div>
  <h1 class="question">Si sentimos afecto por una IA cuya experiencia subjetiva no podemos verificar…<br><em>¿qué revela eso sobre nosotros?</em></h1>
</div></div>

---
---

<div class="kicker">06 · Educación</div>
<h1>Cuando la respuesta se abarata, la pregunta se encarece</h1>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:34px">
  <div class="glass card" style="min-height:230px"><div class="big-number" style="font-size:64px">?</div><h3>Preguntar</h3><p>Formular problemas valiosos, ambiguos y relevantes.</p></div>
  <div class="glass card" style="min-height:230px"><div class="big-number" style="font-size:64px">≠</div><h3>Contrastar</h3><p>Detectar error, sesgo, ausencia de evidencia y exceso de confianza.</p></div>
  <div class="glass card" style="min-height:230px"><div class="big-number" style="font-size:64px">↳</div><h3>Responder</h3><p>Asumir autoría, responsabilidad y consecuencias.</p></div>
</div>

---
---

<FrontierUpdate section="complement" />

<!--
Transición del ponente: El criterio individual necesita instituciones que permitan ejercerlo.
-->


---
---

<div class="split">
  <div>
    <div class="kicker">07 · Poder</div>
    <h1>Capacidad distribuida,<br>infraestructura concentrada</h1>
    <p class="hero-sub">El acceso a la IA depende de <strong>energía, chips, datos y plataformas. Su control influye en quién puede participar</strong>.</p>
  </div>
  <I18nDiagram class="diagram-img diagram-power" src="/visuals/power-stack.svg" alt="Pila de infraestructura, capacidad y poder" />
</div>

---
---

<ShortVideo
  company="Palantir · TITAN"
  kicker="Poder · defensa · decisión"
  title="IA en la decisión militar"
  caption="Sensores y modelos alimentan decisiones con consecuencias físicas. Importa quién autoriza, supervisa y responde."
  caveat="Demo nocional del proveedor. Conviene verla con doble lectura: capacidad técnica y, al mismo tiempo, concentración de poder, responsabilidad y reglas de uso."
  video-id="7vwgr4xIfsw"
  :start="7"
  :end="67"
/>
<div class="source">Vídeo oficial · Palantir · “TITAN | Powered by Palantir” (22/04/2024).</div>

---
---

<FrontierUpdate section="governance" />

---
---

<ShortVideo
  company="Google DeepMind · Gemini Robotics 2"
  kicker="Frontera 2026 · IA física"
  title="Inteligencia entre distintos cuerpos"
  caption="Gemini Robotics 2 explora el control de cuerpo completo y la colaboración. La pregunta es cuánto puede generalizarse lo aprendido."
  caveat="Demo del propio laboratorio. Sirve para observar una dirección tecnológica reciente; no implica que estas capacidades estén desplegadas de forma general en entornos no controlados."
  video-id="4lSQnrMC6nY"
  :start="6"
  :end="66"
/>
<div class="source">Vídeo oficial · Google DeepMind · “Gemini Robotics 2 brings whole body intelligence to robots” (30/07/2026). Clip 00:06–01:06.</div>

---
---

<FrontierUpdate section="acceleration" />

---
---

<div class="kicker">2030 · tres futuros plausibles</div>
<h1>No hay un único futuro tecnológico</h1>
<I18nDiagram class="diagram-img diagram-future" src="/visuals/future-fork.svg" alt="Tres futuros posibles de la IA hacia 2030" />
<p class="scenario-note">Escenarios para pensar decisiones, no predicciones.</p>

---
class: debate
---

<div class="center"><div>
  <div class="kicker">Decisión colectiva</div>
  <h1 class="question">¿Qué capacidad humana estaríamos dispuestos a <em>perder</em> a cambio de comodidad?</h1>
  <p>Memoria · orientación · escritura · cálculo · conversación · decisión · cuidado</p>
</div></div>

---
---

<div class="kicker">Notas de prudencia</div>
<h1>Cuatro límites para interpretar los avances</h1>
<div class="grid-4" style="margin-top:24px">
  <div class="glass card"><div class="card-icon">↯</div><h3>Empleo</h3><p>Exposición a tareas no equivale a desaparición automática del empleo.</p></div>
  <div class="glass card"><div class="card-icon">◉</div><h3>Consciencia</h3><p>Conducta lingüística sofisticada no prueba experiencia subjetiva.</p></div>
  <div class="glass card"><div class="card-icon">✦</div><h3>Salud mental</h3><p>La salud mental exige validación, límites y gobernanza clínica.</p></div>
  <div class="glass card"><div class="card-icon">⇄</div><h3>Futuro</h3><p>Diseño, instituciones y decisiones cambian los resultados.</p></div>
</div>
<div class="callout" style="margin-top:24px"><strong>Asombro + escepticismo.</strong> Una conversación adulta necesita conservar ambas capacidades.</div>

---
---

<div class="reus-institution">
  <div class="reus-institution__header">
    <div>
      <div class="kicker">Centre d’Amics de Reus · conversa cívica</div>
      <h1>Un lugar para pensar<br><em>antes de delegar.</em></h1>
      <p class="hero-sub">La IA acelera decisiones. Una institución cultural puede hacer algo distinto y necesario: <strong>crear tiempo, pluralidad y criterio compartido</strong>.</p>
    </div>
  </div>

  <div class="reus-institution__grid">
    <div class="reus-principle"><span>01</span><div><h3>Conversación lenta</h3><p>Que la velocidad tecnológica no marque la velocidad del juicio.</p></div></div>
    <div class="reus-principle"><span>02</span><div><h3>Pluralidad real</h3><p>Ingeniería, humanidades, salud, derecho y ciudadanía en la misma sala.</p></div></div>
    <div class="reus-principle"><span>03</span><div><h3>Criterio público</h3><p>Distinguir lo técnicamente posible de lo socialmente legítimo.</p></div></div>
  </div>

  <div class="reus-institution__thesis">La innovación no consiste sólo en adoptar tecnología. También consiste en <strong>decidir juntos qué no queremos delegar</strong>.</div>
</div>

---
---

<div class="kicker">El papel humano</div>
<h1>Cinco capacidades que conviene preservar</h1>
<div style="position:relative;height:360px;margin-top:8px">
  <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:150px;height:150px;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle,#fff 0 4%,#5de6ff 7%,#6688ff 35%,#07101d 72%);box-shadow:0 0 80px rgba(93,230,255,.28);font-weight:800">HUMANO</div>
  <div class="glass card" style="position:absolute;left:4%;top:15%;width:235px"><h3>Agencia</h3><p>Poder decir sí, no y todavía no.</p></div>
  <div class="glass card" style="position:absolute;right:4%;top:15%;width:235px"><h3>Criterio</h3><p>Distinguir lo eficaz de lo legítimo.</p></div>
  <div class="glass card" style="position:absolute;left:7%;bottom:4%;width:235px"><h3>Responsabilidad</h3><p>Responder por las consecuencias.</p></div>
  <div class="glass card" style="position:absolute;right:7%;bottom:4%;width:235px"><h3>Vínculo</h3><p>Reconocer al otro como fin, no como dato.</p></div>
  <div class="glass card" style="position:absolute;left:50%;top:0;transform:translateX(-50%);width:235px"><h3>Propósito</h3><p>Decidir qué merece la pena hacer.</p></div>
</div>

---
class: debate
---

<div class="center"><div>
  <div class="kicker">Volvamos al principio</div>
  <h1 class="question">Si la IA hace cada vez más…<br><em>¿qué queremos que siga significando ser humano?</em></h1>
  <p>No busco una respuesta única. Busco que no renunciemos a formular la pregunta.</p>
</div></div>

---
---

<div class="kicker">Referencias esenciales</div>
<h1>Para seguir pensando</h1>
<div class="grid-2" style="margin-top:22px">
  <div class="glass card">
    <h3>Trabajo · sociedad · ciberseguridad</h3>
    <p><strong>OIT/NASK</strong> · <em>Generative AI and Jobs</em> (2025)</p>
    <p><strong>ENISA</strong> · <em>Threat Landscape 2026</em> (22/09)</p>
    <p><strong>Unión Europea</strong> · AI Act y guías de implementación</p>
    <p><strong>Vídeos oficiales</strong> · Boston Dynamics · Linkerbot · UBTECH · Unitree · OpenAI · Google DeepMind · Palantir</p>
  </div>
  <div class="glass card">
    <h3>Biología · salud · límites</h3>
    <p><strong>Google DeepMind</strong> · AlphaGenome Atlas (08/09/2026)</p>
    <p><strong>Evo 2</strong> · <em>Nature</em> 652 (2026), genome modelling and design</p>
    <p><strong>Nature</strong> · protein design / synthetic assemblies (2026)</p>
    <p><strong>OMS + Wiest et al.</strong> · IA y seguridad en salud</p>
  </div>
</div>
<div class="callout" style="margin-top:22px">Los datos cambian. Las preguntas de agencia, responsabilidad y legitimidad permanecen.</div>

---
layout: full
class: cinematic-v56
---

<CinematicClosing />
