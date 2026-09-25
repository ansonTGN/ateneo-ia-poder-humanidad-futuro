---
theme: default
title: Inteligencia artificial — poder, humanidad y futuro
info: |
  Presentación para el Centre d’Amics de Reus, Reus.
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
  <h1 class="question">Si una máquina puede hacer cada vez más cosas que asociábamos a la inteligencia…<br><em>¿qué pasa a ser valioso en una persona?</em></h1>
  <p>Guarda tu respuesta. Volveremos a ella al final.</p>
</div></div>

---
---

<div class="split">
  <div>
    <div class="kicker">01 · Qué está cambiando</div>
    <h1>De responder a actuar</h1>
    <p class="hero-sub">La ruptura no es sólo que la IA genere texto. Es que <strong>percibe, crea, usa herramientas y entra en cadenas de decisión</strong>.</p>
    <div class="callout" style="margin-top:22px">Cuando la IA deja de ser un “chat” y pasa a ser un <strong>actor dentro de sistemas</strong>, cambian también los riesgos y las responsabilidades.</div>
  </div>
  <I18nDiagram class="diagram-img diagram-capability" src="/visuals/capability-orbit.svg" alt="Mapa visual de capacidades contemporáneas de la IA" />
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

<div class="kicker">Frontera · septiembre de 2026</div>
<h1>No hay un único “modelo ganador”. Hay varias fronteras avanzando a la vez.</h1>
<div class="grid-4" style="margin-top:26px">
  <div class="glass card">
    <div class="card-icon">↗</div><h3>Autonomía</h3>
    <p>GPT-6 Astra lleva el foco hacia tareas largas, computer use y ejecución con herramientas.</p>
  </div>
  <div class="glass card">
    <div class="card-icon">⌘</div><h3>Agentes y código</h3>
    <p>Claude Opus 5.5 refuerza programación agéntica de larga duración y trabajo de conocimiento.</p>
  </div>
  <div class="glass card">
    <div class="card-icon">◈</div><h3>Eficiencia abierta</h3>
    <p>DeepSeek V4.1-Flash y Kimi muestran que la frontera también compite en coste, contexto y apertura.</p>
  </div>
  <div class="glass card">
    <div class="card-icon">◎</div><h3>Multimodalidad</h3>
    <p>Qwen 3.8 amplía contexto, visión, audio, vídeo y orquestación de herramientas dentro del mismo ecosistema.</p>
  </div>
</div>
<div class="callout" style="margin-top:22px"><strong>La tendencia común:</strong> modelos menos aislados, más conectados a memoria, herramientas, software y mundo físico.</div>
<div class="source">Fuentes oficiales consultadas a 25/09/2026: OpenAI, Anthropic, DeepSeek, Moonshot/Kimi y Alibaba Cloud.</div>

---
---

<ShortVideo
  company="NVIDIA · GR00T N1"
  kicker="Modelos fundacionales · visión → lenguaje → acción"
  title="El fundamento técnico: aprender una política de acción, no sólo producir palabras"
  caption="GR00T N1 condensa el cambio hacia modelos VLA: percibir el entorno, interpretar una instrucción, planificar y convertir ese plan en movimiento continuo."
  caveat="La demostración es del fabricante. Su interés aquí es arquitectónico: hace visible cómo los modelos fundacionales empiezan a convertirse en políticas de control físico."
  video-id="m1CH-mgpdYg"
  :start="18"
  :end="78"
/>
<div class="source">Vídeo NVIDIA · “Isaac GR00T N1: An Open Foundation Model for Humanoid Robots” (2025). Clip 00:18–00:52.</div>

---
class: light
---

<div class="split-45">
  <div>
    <div class="kicker" style="color:#244ac7">Trabajo</div>
    <div class="big-number">1/4</div>
    <h1 style="font-size:38px!important">de los trabajadores está en ocupaciones con algún grado de exposición a IA generativa</h1>
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
  title="Cuando la IA sale de la oficina y entra en el turno de fábrica"
  caption="Walker S2 muestra por qué la discusión sobre empleo ya no se limita a redactar, programar o analizar: la automatización cognitiva empieza a adquirir cuerpo."
  video-id="xXiTvnsi4EI"
  :start="6"
  :end="66"
/>
<div class="source">Vídeo oficial · UBTECH Robotics · “Meet The First Humanoid Robotic Worker at SANY RE!” (20/01/2026). Demo corporativa: ilustra capacidad, no prueba por sí sola productividad a escala.</div>

---
class: debate
---

<div class="center"><div>
  <div class="kicker">Debate</div>
  <h1 class="question">¿Queremos una IA que <em>nos sustituya tareas</em>… o una IA que <em>nos amplíe capacidades</em>?</h1>
  <p>La diferencia no la decide el modelo. La deciden el diseño del trabajo, los incentivos y las instituciones.</p>
</div></div>

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
  title="Cuando una imagen deja de ser evidencia por sí sola"
  caption="Una escena cinematográfica puede generarse a partir de una instrucción. El problema social ya no es sólo detectar falsificaciones: es reconstruir procedencia, contexto y confianza."
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
<div class="source">ENISA Threat Landscape 2025: la IA aparece como optimizador de actividad maliciosa y como nueva superficie de exposición.</div>

---
---

<ShortVideo
  company="OpenAI · GPT-6 Astra"
  kicker="Agentes 2026 · computer use"
  title="La frontera ya no es conversar: es ejecutar trabajo dentro del ordenador"
  caption="Astra ejemplifica el salto hacia tareas largas con uso del ordenador y herramientas. La cuestión cambia de «¿qué responde?» a «¿qué puede hacer en nuestro nombre?»."
  caveat="Demostración oficial del proveedor. Se utiliza para observar la dirección tecnológica; no como validación independiente de fiabilidad o seguridad."
  video-id="1QNsdr-Qx_I"
  :start="0"
  :end="60"
/>
<div class="source">Vídeo oficial · OpenAI · “Introducing GPT-6 Astra” (03/09/2026). Clip inicial 00:00–00:30.</div>

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
  <div class="kicker">Pregunta incómoda</div>
  <h1 class="question">¿Confiarías a una IA <em>tu dinero</em>, <em>tu historial médico</em> o <em>tu identidad digital</em> si supieras que puede equivocarse una vez entre mil?</h1>
</div></div>

---
---

<div class="kicker">04 · IA + biología</div>
<h1>La inteligencia artificial empieza a aprender el lenguaje de la vida</h1>
<div class="grid-3" style="margin-top:30px">
  <div class="glass card" style="min-height:235px">
    <div class="big-number" style="font-size:52px">DNA</div>
    <h3>Genoma</h3>
    <p>Modelos que predicen cómo cambios en una sola letra del ADN pueden alterar procesos moleculares.</p>
  </div>
  <div class="glass card" style="min-height:235px">
    <div class="big-number" style="font-size:52px">PRO</div>
    <h3>Proteínas</h3>
    <p>La IA ya no sólo predice estructuras: propone secuencias y arquitecturas con propiedades buscadas.</p>
  </div>
  <div class="glass card" style="min-height:235px">
    <div class="big-number" style="font-size:52px">SYS</div>
    <h3>Sistemas vivos</h3>
    <p>La frontera se desplaza hacia modelos que conectan moléculas, células, genomas y experimentación.</p>
  </div>
</div>
<div class="callout" style="margin-top:24px">El cambio filosófico es profundo: pasamos de <strong>leer la vida</strong> a empezar a <strong>modelarla y diseñarla</strong>.</div>

---
---

<ShortVideo
  company="Google DeepMind · AlphaGenome Atlas"
  kicker="Genómica · septiembre de 2026"
  title="Nueve mil millones de cambios posibles, convertidos en un mapa predictivo"
  caption="AlphaGenome Atlas ofrece predicciones moleculares para cada posible variante de una sola letra del genoma humano. Es una imagen poderosa de cómo la IA transforma el genoma en un espacio navegable."
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
    <h1>Un contexto de un millón de bases para razonar sobre genomas</h1>
    <p class="hero-sub">Evo 2 fue entrenado con <strong>9 billones de pares de bases</strong> de todos los dominios de la vida y trabaja con contexto de hasta <strong>1 millón de nucleótidos</strong>.</p>
    <div class="callout" style="margin-top:20px">La analogía con los LLM es útil, pero incompleta: aquí los “tokens” representan secuencias biológicas y las predicciones deben volver al laboratorio para demostrar función.</div>
  </div>
  <div class="glass card" style="padding:28px">
    <div class="metric-label">2026 · BIO FOUNDATION MODEL</div>
    <div class="big-number" style="font-size:66px">9T</div>
    <p>pares de bases en entrenamiento</p>
    <div class="big-number" style="font-size:54px;margin-top:10px">1M</div>
    <p>ventana de contexto, resolución de nucleótido</p>
    <p style="margin-top:18px"><strong>Abierto:</strong> parámetros, código y OpenGenome2.</p>
  </div>
</div>
<div class="source">Nature 652 (2026) · “Genome modelling and design across all domains of life with Evo 2”.</div>

---
---

<div class="kicker">Diseño biológico</div>
<h1>De predecir estructuras a proponer materia biológica nueva</h1>
<div class="grid-3" style="margin-top:28px">
  <div class="glass card"><h3>Predicción</h3><p>¿Qué estructura o función es probable que tenga una secuencia?</p></div>
  <div class="glass card"><h3>Generación</h3><p>¿Qué secuencia podría producir una propiedad que buscamos?</p></div>
  <div class="glass card"><h3>Laboratorio</h3><p>La realidad experimental decide si la propuesta funciona, es estable y es segura.</p></div>
</div>
<div class="callout" style="margin-top:24px">En 2026, trabajos en <em>Nature</em> muestran proteínas rediseñadas por IA y ensamblajes proteicos sintéticos capaces de formar vehículos de transferencia de RNA. La frontera es ya <strong>generativa y experimental</strong>, no sólo predictiva.</div>
<div class="source">Nature (22/07/2026; 02/09/2026). Resultados experimentales, no promesas comerciales.</div>

---
class: debate
---

<div class="center"><div>
  <div class="kicker">Pregunta de frontera</div>
  <h1 class="question">¿Qué cambia cuando la IA no sólo interpreta la vida…<br><em>sino que empieza a proponer cómo modificarla?</em></h1>
  <p>Conocimiento · salud · bioeconomía · seguridad · propiedad · límites</p>
</div></div>

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

<div class="kicker">Diseño de salud mental</div>
<h1>Cuatro límites que deberían ser visibles</h1>
<div class="grid-4" style="margin-top:28px">
  <div class="glass card"><div class="card-icon" style="color:var(--green)">ID</div><h3>Identidad clara</h3><p>La persona debe saber que habla con un sistema.</p></div>
  <div class="glass card"><div class="card-icon" style="color:var(--amber)">↗</div><h3>Escalado</h3><p>Derivar cuando el contexto supera al sistema.</p></div>
  <div class="glass card"><div class="card-icon" style="color:var(--violet)">◈</div><h3>Privacidad</h3><p>Tratar la conversación como dato especialmente sensible.</p></div>
  <div class="glass card"><div class="card-icon" style="color:var(--red)">∞</div><h3>No dependencia</h3><p>Diseñar para autonomía, no para maximizar apego.</p></div>
</div>

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
  <h1 class="question">Si sentimos afecto por una IA que sabemos que no siente…<br><em>¿qué revela eso sobre nosotros?</em></h1>
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

<div class="split">
  <div>
    <div class="kicker">07 · Poder</div>
    <h1>La IA distribuye capacidad.<br>Y concentra infraestructura.</h1>
    <p class="hero-sub">La conversación pública no puede quedarse en el chatbot. También debe mirar <strong>energía, chips, datos, modelos, agentes, infraestructuras científicas y canales de distribución</strong>.</p>
  </div>
  <I18nDiagram class="diagram-img diagram-power" src="/visuals/power-stack.svg" alt="Pila de infraestructura, capacidad y poder" />
</div>

---
---

<ShortVideo
  company="Palantir · TITAN"
  kicker="Poder · defensa · decisión"
  title="Cuando la IA entra en sistemas donde una decisión tiene consecuencias físicas"
  caption="El interés del ejemplo no es el vehículo: es la convergencia entre sensores, datos, modelos y cadena de decisión. Ahí la gobernanza deja de ser una cuestión abstracta."
  caveat="Demo nocional del proveedor. Conviene verla con doble lectura: capacidad técnica y, al mismo tiempo, concentración de poder, responsabilidad y reglas de uso."
  video-id="7vwgr4xIfsw"
  :start="7"
  :end="67"
/>
<div class="source">Vídeo oficial · Palantir · “TITAN | Powered by Palantir” (22/04/2024).</div>

---
---

<div class="kicker">Gobernanza</div>
<h1>Regular no es detener. Es decidir condiciones de legitimidad.</h1>
<div style="margin-top:32px;display:grid;grid-template-columns:1fr;gap:10px">
  <div class="glass card" style="display:grid;grid-template-columns:150px 1fr;align-items:center"><div class="metric-label" style="color:var(--green)">RIESGO BAJO</div><div style="height:18px;border-radius:999px;background:linear-gradient(90deg,var(--green),rgba(98,232,184,.1))"></div></div>
  <div class="glass card" style="display:grid;grid-template-columns:150px 1fr;align-items:center"><div class="metric-label" style="color:var(--cyan)">TRANSPARENCIA</div><div style="height:18px;border-radius:999px;background:linear-gradient(90deg,var(--cyan),rgba(93,230,255,.12))"></div></div>
  <div class="glass card" style="display:grid;grid-template-columns:150px 1fr;align-items:center"><div class="metric-label" style="color:var(--amber)">ALTO IMPACTO</div><div style="height:18px;border-radius:999px;background:linear-gradient(90deg,var(--amber),rgba(255,200,103,.12))"></div></div>
  <div class="glass card" style="display:grid;grid-template-columns:150px 1fr;align-items:center"><div class="metric-label" style="color:var(--red)">PROHIBIDO</div><div style="height:18px;border-radius:999px;background:linear-gradient(90deg,var(--red),rgba(255,116,135,.12))"></div></div>
</div>
<div class="callout" style="margin-top:24px">La cuestión política central: <strong>¿qué derechos y decisiones deben permanecer no delegables?</strong></div>
<div class="source">EU AI Act: marco basado en riesgo; obligaciones de transparencia y otras disposiciones entran en aplicación por fases.</div>

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

<div class="kicker">2030 · tres futuros plausibles</div>
<h1>No hay un único futuro tecnológico</h1>
<I18nDiagram class="diagram-img diagram-future" src="/visuals/future-fork.svg" alt="Tres futuros posibles de la IA hacia 2030" />
<div class="grid-3" style="margin-top:-4px">
  <div class="glass card"><h3 style="color:var(--green)!important">IA cívica</h3><p>Capacidad distribuida, educación, derechos y control humano significativo.</p></div>
  <div class="glass card"><h3 style="color:var(--amber)!important">IA desigual</h3><p>Gran productividad con concentración de oportunidades y poder.</p></div>
  <div class="glass card"><h3 style="color:var(--red)!important">IA tutelar</h3><p>Comodidad a cambio de vigilancia, dependencia y autonomía decreciente.</p></div>
</div>

---
---

<ShortVideo
  company="Google DeepMind · Gemini Robotics 2"
  kicker="Frontera 2026 · IA física"
  title="El siguiente salto no es un robot concreto: es inteligencia transferible entre cuerpos"
  caption="Gemini Robotics 2 ejemplifica una dirección de frontera: control de cuerpo completo, destreza y colaboración entre robots. El software cognitivo empieza a separarse del hardware que lo encarna."
  caveat="Demo del propio laboratorio. Sirve para observar una dirección tecnológica reciente; no implica que estas capacidades estén desplegadas de forma general en entornos no controlados."
  video-id="4lSQnrMC6nY"
  :start="6"
  :end="66"
/>
<div class="source">Vídeo oficial · Google DeepMind · “Gemini Robotics 2 brings whole body intelligence to robots” (30/07/2026). Clip 00:06–00:36.</div>

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
<h1>Cuatro cosas que esta charla no afirma</h1>
<div class="grid-4" style="margin-top:24px">
  <div class="glass card"><div class="card-icon">↯</div><h3>No predice desempleo masivo</h3><p>Exposición a tareas no equivale a desaparición automática del empleo.</p></div>
  <div class="glass card"><div class="card-icon">◉</div><h3>No atribuye consciencia</h3><p>Conducta lingüística sofisticada no prueba experiencia subjetiva.</p></div>
  <div class="glass card"><div class="card-icon">✦</div><h3>No equipara IA y terapeuta</h3><p>La salud mental exige validación, límites y gobernanza clínica.</p></div>
  <div class="glass card"><div class="card-icon">⇄</div><h3>No convierte riesgo en destino</h3><p>Diseño, instituciones y decisiones cambian los resultados.</p></div>
</div>
<div class="callout" style="margin-top:24px"><strong>Asombro + escepticismo.</strong> Una conversación adulta necesita conservar ambas capacidades.</div>

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
    <p><strong>ENISA</strong> · <em>Threat Landscape 2025</em></p>
    <p><strong>Unión Europea</strong> · AI Act y guías de implementación</p>
    <p><strong>Vídeos oficiales</strong> · NVIDIA · Google DeepMind · Unitree · UBTECH · AGIBOT · Palantir</p>
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
