import { ref } from 'vue'

export type PresentationLang = 'es' | 'ca' | 'en'

type TranslationRow = [source: string, es: string, ca: string, en: string]

const STORAGE_KEY = 'aau-presentation-lang'

const rows: TranslationRow[] = [
  [
    "INTELIGENCIA ARTIFICIAL · PODER · HUMANIDAD · 2026",
    "INTELIGENCIA ARTIFICIAL · PODER · HUMANIDAD · 2026",
    "INTEL·LIGÈNCIA ARTIFICIAL · PODER · HUMANITAT · 2026",
    "ARTIFICIAL INTELLIGENCE · POWER · HUMANITY · 2026"
  ],
  [
    "Inteligencia artificial",
    "Inteligencia artificial",
    "Intel·ligència artificial",
    "Artificial intelligence"
  ],
  [
    "Poder, humanidad y futuro",
    "Poder, humanidad y futuro",
    "Poder, humanitat i futur",
    "Power, humanity and the future"
  ],
  [
    "Datos, modelos fundacionales y cómputo ya pueden percibir, simular, razonar y actuar. La cuestión política empieza cuando esa cadena entra en el mundo.",
    "Datos, modelos fundacionales y cómputo ya pueden percibir, simular, razonar y actuar. La cuestión política empieza cuando esa cadena entra en el mundo.",
    "Les dades, els models fundacionals i el còmput ja poden percebre, simular, raonar i actuar. La qüestió política comença quan aquesta cadena entra al món.",
    "Data, foundation models and compute can now perceive, simulate, reason and act. The political question begins when that chain enters the world."
  ],
  [
    "Datos, modelos fundacionales, cómputo, mundo y acción",
    "Datos, modelos fundacionales, cómputo, mundo y acción",
    "Dades, models fundacionals, còmput, món i acció",
    "Data, foundation models, compute, world and action"
  ],
  [
    "modelos fundacionales",
    "modelos fundacionales",
    "models fundacionals",
    "foundation models"
  ],
  [
    "cómputo",
    "cómputo",
    "còmput",
    "compute"
  ],
  [
    "datos",
    "datos",
    "dades",
    "data"
  ],
  [
    "mundo",
    "mundo",
    "món",
    "world"
  ],
  [
    "acción",
    "acción",
    "acció",
    "action"
  ],
  [
    "NVIDIA Cosmos · vídeo oficial · bucle completo",
    "NVIDIA Cosmos · vídeo oficial · bucle completo",
    "NVIDIA Cosmos · vídeo oficial · bucle complet",
    "NVIDIA Cosmos · official video · full loop"
  ],
  [
    "Primera pregunta",
    "Primera pregunta",
    "Primera pregunta",
    "First question"
  ],
  [
    "Si una máquina puede hacer cada vez más cosas que asociábamos a la inteligencia…",
    "Si una máquina puede hacer cada vez más cosas que asociábamos a la inteligencia…",
    "Si una màquina pot fer cada vegada més coses que associàvem a la intel·ligència…",
    "If a machine can do more and more things we used to associate with intelligence…"
  ],
  [
    "¿qué pasa a ser valioso en una persona?",
    "¿qué pasa a ser valioso en una persona?",
    "què passa a ser valuós en una persona?",
    "what becomes valuable in a person?"
  ],
  [
    "Guarda tu respuesta. Volveremos a ella al final.",
    "Guarda tu respuesta. Volveremos a ella al final.",
    "Guarda la teva resposta. Hi tornarem al final.",
    "Keep your answer. We will return to it at the end."
  ],
  [
    "01 · Qué está cambiando",
    "01 · Qué está cambiando",
    "01 · Què està canviant",
    "01 · What is changing"
  ],
  [
    "De responder a actuar",
    "De responder a actuar",
    "De respondre a actuar",
    "From answering to acting"
  ],
  [
    "La ruptura no es sólo que la IA genere texto. Es que ",
    "La ruptura no es sólo que la IA genere texto. Es que ",
    "La ruptura no és només que la IA generi text. És que ",
    "The break is not only that AI generates text. It also "
  ],
  [
    "percibe, crea, usa herramientas y entra en cadenas de decisión",
    "percibe, crea, usa herramientas y entra en cadenas de decisión",
    "percep, crea, utilitza eines i entra en cadenes de decisió",
    "perceives, creates, uses tools and enters decision chains"
  ],
  [
    "Cuando la IA deja de ser un “chat” y pasa a ser un ",
    "Cuando la IA deja de ser un “chat” y pasa a ser un ",
    "Quan la IA deixa de ser un «xat» i passa a ser un ",
    "When AI stops being a “chat” and becomes an "
  ],
  [
    "actor dentro de sistemas",
    "actor dentro de sistemas",
    "actor dins de sistemes",
    "actor inside systems"
  ],
  [
    ", cambian también los riesgos y las responsabilidades.",
    ", cambian también los riesgos y las responsabilidades.",
    ", també canvien els riscos i les responsabilitats.",
    ", the risks and responsibilities change too."
  ],
  [
    "Mapa visual de capacidades contemporáneas de la IA",
    "Mapa visual de capacidades contemporáneas de la IA",
    "Mapa visual de capacitats contemporànies de la IA",
    "Visual map of contemporary AI capabilities"
  ],
  [
    "Embodied AI · del modelo al cuerpo",
    "Embodied AI · del modelo al cuerpo",
    "Embodied AI · del model al cos",
    "Embodied AI · from model to body"
  ],
  [
    "La IA ya está entrando en el mundo físico",
    "La IA ya está entrando en el mundo físico",
    "La IA ja està entrant al món físic",
    "AI is already entering the physical world"
  ],
  [
    "En menos de medio minuto, el G1 hace visible el cambio clave: percepción, control y aprendizaje dejan de vivir sólo en una pantalla.",
    "En menos de medio minuto, el G1 hace visible el cambio clave: percepción, control y aprendizaje dejan de vivir sólo en una pantalla.",
    "En menys de mig minut, el G1 fa visible el canvi clau: percepció, control i aprenentatge deixen de viure només en una pantalla.",
    "In under half a minute, the G1 makes the key shift visible: perception, control and learning no longer live only on a screen."
  ],
  [
    "Clip incrustado desde YouTube; requiere conexión.",
    "Clip incrustado desde YouTube; requiere conexión.",
    "Clip incrustat des de YouTube; requereix connexió.",
    "Embedded YouTube clip; connection required."
  ],
  [
    "Vídeo oficial",
    "Vídeo oficial",
    "Vídeo oficial",
    "Official video"
  ],
  [
    "El salto conceptual",
    "El salto conceptual",
    "El salt conceptual",
    "The conceptual leap"
  ],
  [
    "La frontera se desplaza",
    "La frontera se desplaza",
    "La frontera es desplaça",
    "The frontier is moving"
  ],
  [
    "Preguntar",
    "Preguntar",
    "Preguntar",
    "Ask"
  ],
  [
    "El humano formula la tarea.",
    "El humano formula la tarea.",
    "L'humà formula la tasca.",
    "The human defines the task."
  ],
  [
    "Responder",
    "Responder",
    "Respondre",
    "Answer"
  ],
  [
    "La IA produce una propuesta.",
    "La IA produce una propuesta.",
    "La IA produeix una proposta.",
    "AI produces a proposal."
  ],
  [
    "Herramientas",
    "Herramientas",
    "Eines",
    "Tools"
  ],
  [
    "Consulta datos y servicios.",
    "Consulta datos y servicios.",
    "Consulta dades i serveis.",
    "Queries data and services."
  ],
  [
    "Acción",
    "Acción",
    "Acció",
    "Action"
  ],
  [
    "Ejecuta dentro del mundo digital.",
    "Ejecuta dentro del mundo digital.",
    "Executa dins del món digital.",
    "Executes within the digital world."
  ],
  [
    "más autonomía → más necesidad de control",
    "más autonomía → más necesidad de control",
    "més autonomia → més necessitat de control",
    "more autonomy → greater need for control"
  ],
  [
    "Modelos fundacionales · visión → lenguaje → acción",
    "Modelos fundacionales · visión → lenguaje → acción",
    "Models fundacionals · visió → llenguatge → acció",
    "Foundation models · vision → language → action"
  ],
  [
    "El fundamento técnico: aprender una política de acción, no sólo producir palabras",
    "El fundamento técnico: aprender una política de acción, no sólo producir palabras",
    "El fonament tècnic: aprendre una política d'acció, no només produir paraules",
    "The technical foundation: learning an action policy, not just producing words"
  ],
  [
    "GR00T N1 condensa el cambio hacia modelos VLA: percibir el entorno, interpretar una instrucción, planificar y convertir ese plan en movimiento continuo.",
    "GR00T N1 condensa el cambio hacia modelos VLA: percibir el entorno, interpretar una instrucción, planificar y convertir ese plan en movimiento continuo.",
    "GR00T N1 condensa el canvi cap als models VLA: percebre l'entorn, interpretar una instrucció, planificar i convertir aquest pla en moviment continu.",
    "GR00T N1 captures the shift toward VLA models: perceive the environment, interpret an instruction, plan, and turn that plan into continuous motion."
  ],
  [
    "La demostración es del fabricante. Su interés aquí es arquitectónico: hace visible cómo los modelos fundacionales empiezan a convertirse en políticas de control físico.",
    "La demostración es del fabricante. Su interés aquí es arquitectónico: hace visible cómo los modelos fundacionales empiezan a convertirse en políticas de control físico.",
    "La demostració és del fabricant. L'interès aquí és arquitectònic: fa visible com els models fundacionals comencen a convertir-se en polítiques de control físic.",
    "The demonstration is from the manufacturer. Its value here is architectural: it shows how foundation models are beginning to become physical-control policies."
  ],
  [
    "Trabajo",
    "Trabajo",
    "Treball",
    "Work"
  ],
  [
    "de los trabajadores está en ocupaciones con algún grado de exposición a IA generativa",
    "de los trabajadores está en ocupaciones con algún grado de exposición a IA generativa",
    "dels treballadors es troba en ocupacions amb algun grau d'exposició a IA generativa",
    "of workers are in occupations with some degree of exposure to generative AI"
  ],
  [
    "La OIT subraya que ",
    "La OIT subraya que ",
    "L'OIT subratlla que ",
    "The ILO stresses that "
  ],
  [
    "transformación",
    "transformación",
    "transformació",
    "transformation"
  ],
  [
    " es más probable que sustitución automática.",
    " es más probable que sustitución automática.",
    " és més probable que la substitució automàtica.",
    " is more likely than automatic replacement."
  ],
  [
    "Transformación del trabajo por tareas",
    "Transformación del trabajo por tareas",
    "Transformació del treball per tasques",
    "Task-level transformation of work"
  ],
  [
    "Trabajo físico · automatización flexible",
    "Trabajo físico · automatización flexible",
    "Treball físic · automatització flexible",
    "Physical work · flexible automation"
  ],
  [
    "Cuando la IA sale de la oficina y entra en el turno de fábrica",
    "Cuando la IA sale de la oficina y entra en el turno de fábrica",
    "Quan la IA surt de l'oficina i entra al torn de fàbrica",
    "When AI leaves the office and enters the factory shift"
  ],
  [
    "Walker S2 muestra por qué la discusión sobre empleo ya no se limita a redactar, programar o analizar: la automatización cognitiva empieza a adquirir cuerpo.",
    "Walker S2 muestra por qué la discusión sobre empleo ya no se limita a redactar, programar o analizar: la automatización cognitiva empieza a adquirir cuerpo.",
    "Walker S2 mostra per què la discussió sobre ocupació ja no es limita a redactar, programar o analitzar: l'automatització cognitiva comença a adquirir cos.",
    "Walker S2 shows why the employment debate is no longer limited to writing, programming or analysis: cognitive automation is beginning to acquire a body."
  ],
  [
    "Demo corporativa: ilustra capacidad, no prueba por sí sola productividad a escala.",
    "Demo corporativa: ilustra capacidad, no prueba por sí sola productividad a escala.",
    "Demo corporativa: il·lustra capacitat, però no demostra per si sola productivitat a escala.",
    "Corporate demo: it illustrates capability, but does not by itself prove productivity at scale."
  ],
  [
    "Industria · embodied AI",
    "Industria · embodied AI",
    "Indústria · embodied AI",
    "Industry · embodied AI"
  ],
  [
    "China no está ensayando un único robot: está construyendo un ecosistema",
    "China no está ensayando un único robot: está construyendo un ecosistema",
    "La Xina no està assajant un únic robot: està construint un ecosistema",
    "China is not testing a single robot: it is building an ecosystem"
  ],
  [
    "AGIBOT G2 ilustra otra vía: plataforma industrial, manipulación de precisión, percepción 360° y operación continua. La carrera es ya de sistemas completos, no de prototipos aislados.",
    "AGIBOT G2 ilustra otra vía: plataforma industrial, manipulación de precisión, percepción 360° y operación continua. La carrera es ya de sistemas completos, no de prototipos aislados.",
    "AGIBOT G2 il·lustra una altra via: plataforma industrial, manipulació de precisió, percepció 360° i operació contínua. La cursa ja és de sistemes complets, no de prototips aïllats.",
    "AGIBOT G2 illustrates another path: an industrial platform, precision manipulation, 360° perception and continuous operation. The race is now about complete systems, not isolated prototypes."
  ],
  [
    "Demo oficial del fabricante. Se usa para observar dirección tecnológica y lenguaje de producto; no como validación independiente de rendimiento industrial.",
    "Demo oficial del fabricante. Se usa para observar dirección tecnológica y lenguaje de producto; no como validación independiente de rendimiento industrial.",
    "Demo oficial del fabricant. S'utilitza per observar la direcció tecnològica i el llenguatge de producte; no com a validació independent del rendiment industrial.",
    "Official manufacturer demo. It is used to observe technological direction and product language, not as independent validation of industrial performance."
  ],
  [
    "Debate",
    "Debate",
    "Debat",
    "Debate"
  ],
  [
    "¿Queremos una IA que ",
    "¿Queremos una IA que ",
    "Volem una IA que ",
    "Do we want AI that "
  ],
  [
    "nos sustituya tareas",
    "nos sustituya tareas",
    "ens substitueixi tasques",
    "replaces our tasks"
  ],
  [
    "… o una IA que ",
    "… o una IA que ",
    "… o una IA que ",
    "… or AI that "
  ],
  [
    "nos amplíe capacidades",
    "nos amplíe capacidades",
    "ens ampliï capacitats",
    "expands our capabilities"
  ],
  [
    "La diferencia no la decide el modelo. La deciden el diseño del trabajo, los incentivos y las instituciones.",
    "La diferencia no la decide el modelo. La deciden el diseño del trabajo, los incentivos y las instituciones.",
    "La diferència no la decideix el model. La decideixen el disseny del treball, els incentius i les institucions.",
    "The model does not decide the difference. Work design, incentives and institutions do."
  ],
  [
    "02 · Verdad y conocimiento",
    "02 · Verdad y conocimiento",
    "02 · Veritat i coneixement",
    "02 · Truth and knowledge"
  ],
  [
    "Cuando producir contenido cuesta casi cero…",
    "Cuando producir contenido cuesta casi cero…",
    "Quan produir contingut costa gairebé zero…",
    "When producing content costs almost nothing…"
  ],
  [
    "…la escasez se desplaza de la ",
    "…la escasez se desplaza de la ",
    "…l'escassetat es desplaça de la ",
    "…scarcity shifts from "
  ],
  [
    "información",
    "información",
    "informació",
    "information"
  ],
  [
    " hacia la ",
    " hacia la ",
    " cap a la ",
    " to "
  ],
  [
    "confianza",
    "confianza",
    "confiança",
    "trust"
  ],
  [
    "De abundancia de contenido a escasez de confianza",
    "De abundancia de contenido a escasez de confianza",
    "De l'abundància de contingut a l'escassetat de confiança",
    "From content abundance to trust scarcity"
  ],
  [
    "Contenido sintético · confianza",
    "Contenido sintético · confianza",
    "Contingut sintètic · confiança",
    "Synthetic content · trust"
  ],
  [
    "Cuando una imagen deja de ser evidencia por sí sola",
    "Cuando una imagen deja de ser evidencia por sí sola",
    "Quan una imatge deixa de ser evidència per si sola",
    "When an image is no longer evidence by itself"
  ],
  [
    "Una escena cinematográfica puede generarse a partir de una instrucción. El problema social ya no es sólo detectar falsificaciones: es reconstruir procedencia, contexto y confianza.",
    "Una escena cinematográfica puede generarse a partir de una instrucción. El problema social ya no es sólo detectar falsificaciones: es reconstruir procedencia, contexto y confianza.",
    "Una escena cinematogràfica es pot generar a partir d'una instrucció. El problema social ja no és només detectar falsificacions: és reconstruir procedència, context i confiança.",
    "A cinematic scene can be generated from an instruction. The social problem is no longer just detecting fakes: it is rebuilding provenance, context and trust."
  ],
  [
    "El clip es una demostración oficial de vídeo generado con Veo 3. Precisamente por eso se usa aquí: lo visualmente plausible ya no implica que el acontecimiento haya ocurrido.",
    "El clip es una demostración oficial de vídeo generado con Veo 3. Precisamente por eso se usa aquí: lo visualmente plausible ya no implica que el acontecimiento haya ocurrido.",
    "El clip és una demostració oficial de vídeo generat amb Veo 3. Precisament per això s'utilitza aquí: allò visualment plausible ja no implica que l'esdeveniment hagi ocorregut.",
    "The clip is an official demonstration of video generated with Veo 3. That is precisely why it is used here: visual plausibility no longer means the event actually happened."
  ],
  [
    "Ejemplo de contenido sintético.",
    "Ejemplo de contenido sintético.",
    "Exemple de contingut sintètic.",
    "Example of synthetic content."
  ],
  [
    "Seguridad epistémica",
    "Seguridad epistémica",
    "Seguretat epistèmica",
    "Epistemic security"
  ],
  [
    "Cuatro preguntas antes de creer",
    "Cuatro preguntas antes de creer",
    "Quatre preguntes abans de creure",
    "Four questions before believing"
  ],
  [
    "Origen",
    "Origen",
    "Origen",
    "Origin"
  ],
  [
    "¿Quién lo produjo?",
    "¿Quién lo produjo?",
    "Qui ho va produir?",
    "Who produced it?"
  ],
  [
    "Evidencia",
    "Evidencia",
    "Evidència",
    "Evidence"
  ],
  [
    "¿Cómo lo verifico?",
    "¿Cómo lo verifico?",
    "Com ho verifico?",
    "How do I verify it?"
  ],
  [
    "Contexto",
    "Contexto",
    "Context",
    "Context"
  ],
  [
    "¿Qué se omite?",
    "¿Qué se omite?",
    "Què s'omet?",
    "What is omitted?"
  ],
  [
    "Incentivo",
    "Incentivo",
    "Incentiu",
    "Incentive"
  ],
  [
    "¿Quién gana si lo creo?",
    "¿Quién gana si lo creo?",
    "Qui hi guanya si m'ho crec?",
    "Who benefits if I believe it?"
  ],
  [
    "La alfabetización digital del futuro será también ",
    "La alfabetización digital del futuro será también ",
    "L'alfabetització digital del futur serà també ",
    "Digital literacy in the future will also be "
  ],
  [
    "alfabetización de procedencia",
    "alfabetización de procedencia",
    "alfabetització de procedència",
    "provenance literacy"
  ],
  [
    "03 · Ciberseguridad",
    "03 · Ciberseguridad",
    "03 · Ciberseguretat",
    "03 · Cybersecurity"
  ],
  [
    "La IA abarata atacar.",
    "La IA abarata atacar.",
    "La IA abarateix atacar.",
    "AI makes attacks cheaper."
  ],
  [
    "Y también defender.",
    "Y también defender.",
    "I també defensar.",
    "And defence too."
  ],
  [
    "La ventaja ya no depende sólo de tener mejores herramientas, sino de ",
    "La ventaja ya no depende sólo de tener mejores herramientas, sino de ",
    "L'avantatge ja no depèn només de tenir millors eines, sinó de ",
    "Advantage no longer depends only on having better tools, but on "
  ],
  [
    "identidad, permisos, contexto y velocidad de respuesta",
    "identidad, permisos, contexto y velocidad de respuesta",
    "identitat, permisos, context i velocitat de resposta",
    "identity, permissions, context and response speed"
  ],
  [
    "IA como multiplicador de ataque y defensa",
    "IA como multiplicador de ataque y defensa",
    "IA com a multiplicador d'atac i defensa",
    "AI as an attack and defence multiplier"
  ],
  [
    "la IA aparece como optimizador de actividad maliciosa y como nueva superficie de exposición.",
    "la IA aparece como optimizador de actividad maliciosa y como nueva superficie de exposición.",
    "la IA apareix com a optimitzador d'activitat maliciosa i com a nova superfície d'exposició.",
    "AI appears as an optimiser of malicious activity and as a new exposure surface."
  ],
  [
    "Seguridad · IA operativa",
    "Seguridad · IA operativa",
    "Seguretat · IA operativa",
    "Security · operational AI"
  ],
  [
    "El salto decisivo: conectar el modelo con datos, permisos y operaciones",
    "El salto decisivo: conectar el modelo con datos, permisos y operaciones",
    "El salt decisiu: connectar el model amb dades, permisos i operacions",
    "The decisive leap: connecting the model to data, permissions and operations"
  ],
  [
    "AIP es un buen caso para explicar que la seguridad de un agente no depende sólo del LLM: importan la identidad, el contexto autorizado, las herramientas y la trazabilidad.",
    "AIP es un buen caso para explicar que la seguridad de un agente no depende sólo del LLM: importan la identidad, el contexto autorizado, las herramientas y la trazabilidad.",
    "AIP és un bon cas per explicar que la seguretat d'un agent no depèn només de l'LLM: importen la identitat, el context autoritzat, les eines i la traçabilitat.",
    "AIP is a useful case for showing that an agent's security does not depend only on the LLM: identity, authorised context, tools and traceability matter."
  ],
  [
    "Es una demostración del propio proveedor. Aquí se usa para observar la arquitectura y el lenguaje de producto, no como validación independiente de sus afirmaciones.",
    "Es una demostración del propio proveedor. Aquí se usa para observar la arquitectura y el lenguaje de producto, no como validación independiente de sus afirmaciones.",
    "És una demostració del mateix proveïdor. Aquí s'utilitza per observar l'arquitectura i el llenguatge de producte, no com a validació independent de les seves afirmacions.",
    "It is a demonstration from the provider itself. It is used here to observe the architecture and product language, not as independent validation of its claims."
  ],
  [
    "Agentes",
    "Agentes",
    "Agents",
    "Agents"
  ],
  [
    "El riesgo cambia cuando la IA puede hacer cosas",
    "El riesgo cambia cuando la IA puede hacer cosas",
    "El risc canvia quan la IA pot fer coses",
    "Risk changes when AI can do things"
  ],
  [
    "Modelo",
    "Modelo",
    "Model",
    "Model"
  ],
  [
    "propone una acción",
    "propone una acción",
    "proposa una acció",
    "proposes an action"
  ],
  [
    "Permisos",
    "Permisos",
    "Permisos",
    "Permissions"
  ],
  [
    "limitan capacidad",
    "limitan capacidad",
    "limiten la capacitat",
    "limit capability"
  ],
  [
    "auditable y reversible",
    "auditable y reversible",
    "auditable i reversible",
    "auditable and reversible"
  ],
  [
    "mínimo privilegio",
    "mínimo privilegio",
    "mínim privilegi",
    "least privilege"
  ],
  [
    "Acceso sólo a lo imprescindible.",
    "Acceso sólo a lo imprescindible.",
    "Accés només a allò imprescindible.",
    "Access only to what is essential."
  ],
  [
    "fricción deliberada",
    "fricción deliberada",
    "fricció deliberada",
    "deliberate friction"
  ],
  [
    "Confirmación humana en decisiones de alto impacto.",
    "Confirmación humana en decisiones de alto impacto.",
    "Confirmació humana en decisions d'alt impacte.",
    "Human confirmation for high-impact decisions."
  ],
  [
    "trazabilidad",
    "trazabilidad",
    "traçabilitat",
    "traceability"
  ],
  [
    "Registro de cada llamada, dato y decisión.",
    "Registro de cada llamada, dato y decisión.",
    "Registre de cada crida, dada i decisió.",
    "Record of every call, data item and decision."
  ],
  [
    "Pregunta incómoda",
    "Pregunta incómoda",
    "Pregunta incòmoda",
    "Uncomfortable question"
  ],
  [
    "¿Confiarías a una IA ",
    "¿Confiarías a una IA ",
    "Confiaries a una IA ",
    "Would you trust AI with "
  ],
  [
    "tu dinero",
    "tu dinero",
    "els teus diners",
    "your money"
  ],
  [
    "tu historial médico",
    "tu historial médico",
    "el teu historial mèdic",
    "your medical record"
  ],
  [
    "tu identidad digital",
    "tu identidad digital",
    "la teva identitat digital",
    "your digital identity"
  ],
  [
    " si supieras que puede equivocarse una vez entre mil?",
    " si supieras que puede equivocarse una vez entre mil?",
    " si sabessis que es pot equivocar una vegada entre mil?",
    " if you knew it could be wrong once in a thousand cases?"
  ],
  [
    "04 · Salud mental",
    "04 · Salud mental",
    "04 · Salut mental",
    "04 · Mental health"
  ],
  [
    "Puede acompañar.",
    "Puede acompañar.",
    "Pot acompanyar.",
    "It can provide support."
  ],
  [
    "No debe fingir que es humana.",
    "No debe fingir que es humana.",
    "No ha de fingir que és humana.",
    "It must not pretend to be human."
  ],
  [
    "Disponibilidad y psicoeducación pueden ser útiles. Dependencia, suplantación de vínculo y error clínico requieren límites explícitos.",
    "Disponibilidad y psicoeducación pueden ser útiles. Dependencia, suplantación de vínculo y error clínico requieren límites explícitos.",
    "La disponibilitat i la psicoeducació poden ser útils. La dependència, la suplantació del vincle i l'error clínic requereixen límits explícits.",
    "Availability and psychoeducation can be useful. Dependence, simulated attachment and clinical error require explicit limits."
  ],
  [
    "Principios de uso responsable de IA en salud mental",
    "Principios de uso responsable de IA en salud mental",
    "Principis d'ús responsable de la IA en salut mental",
    "Principles for responsible AI use in mental health"
  ],
  [
    "Diseño de salud mental",
    "Diseño de salud mental",
    "Disseny en salut mental",
    "Mental-health design"
  ],
  [
    "Cuatro límites que deberían ser visibles",
    "Cuatro límites que deberían ser visibles",
    "Quatre límits que haurien de ser visibles",
    "Four limits that should be visible"
  ],
  [
    "Identidad clara",
    "Identidad clara",
    "Identitat clara",
    "Clear identity"
  ],
  [
    "La persona debe saber que habla con un sistema.",
    "La persona debe saber que habla con un sistema.",
    "La persona ha de saber que parla amb un sistema.",
    "The person must know they are talking to a system."
  ],
  [
    "Escalado",
    "Escalado",
    "Escalat",
    "Escalation"
  ],
  [
    "Derivar cuando el contexto supera al sistema.",
    "Derivar cuando el contexto supera al sistema.",
    "Derivar quan el context supera el sistema.",
    "Escalate when the context exceeds the system."
  ],
  [
    "Privacidad",
    "Privacidad",
    "Privacitat",
    "Privacy"
  ],
  [
    "Tratar la conversación como dato especialmente sensible.",
    "Tratar la conversación como dato especialmente sensible.",
    "Tractar la conversa com una dada especialment sensible.",
    "Treat the conversation as especially sensitive data."
  ],
  [
    "No dependencia",
    "No dependencia",
    "No dependència",
    "No dependency"
  ],
  [
    "Diseñar para autonomía, no para maximizar apego.",
    "Diseñar para autonomía, no para maximizar apego.",
    "Dissenyar per a l'autonomia, no per maximitzar l'afecció.",
    "Design for autonomy, not to maximise attachment."
  ],
  [
    "Consciencia",
    "Consciencia",
    "Consciència",
    "Consciousness"
  ],
  [
    "Hablar bien no demuestra sentir",
    "Hablar bien no demuestra sentir",
    "Parlar bé no demostra sentir",
    "Speaking well does not prove feeling"
  ],
  [
    "Podemos medir conducta. Podemos proponer indicadores funcionales. Pero la experiencia subjetiva sigue siendo otro problema.",
    "Podemos medir conducta. Podemos proponer indicadores funcionales. Pero la experiencia subjetiva sigue siendo otro problema.",
    "Podem mesurar conducta. Podem proposar indicadors funcionals. Però l'experiència subjectiva continua sent un altre problema.",
    "We can measure behaviour. We can propose functional indicators. But subjective experience remains a different problem."
  ],
  [
    "Conducta convincente ≠ vida interior demostrada.",
    "Conducta convincente ≠ vida interior demostrada.",
    "Conducta convincent ≠ vida interior demostrada.",
    "Convincing behaviour ≠ demonstrated inner life."
  ],
  [
    "Capas de observación e inferencia sobre consciencia",
    "Capas de observación e inferencia sobre consciencia",
    "Capes d'observació i inferència sobre consciència",
    "Layers of observation and inference about consciousness"
  ],
  [
    "Filosofía práctica",
    "Filosofía práctica",
    "Filosofia pràctica",
    "Practical philosophy"
  ],
  [
    "Si sentimos afecto por una IA que sabemos que no siente…",
    "Si sentimos afecto por una IA que sabemos que no siente…",
    "Si sentim afecte per una IA que sabem que no sent…",
    "If we feel affection for an AI we know does not feel…"
  ],
  [
    "¿qué revela eso sobre nosotros?",
    "¿qué revela eso sobre nosotros?",
    "què revela això sobre nosaltres?",
    "what does that reveal about us?"
  ],
  [
    "05 · Educación",
    "05 · Educación",
    "05 · Educació",
    "05 · Education"
  ],
  [
    "Cuando la respuesta se abarata, la pregunta se encarece",
    "Cuando la respuesta se abarata, la pregunta se encarece",
    "Quan la resposta s'abarateix, la pregunta s'encareix",
    "When answers become cheaper, questions become more valuable"
  ],
  [
    "Formular problemas valiosos, ambiguos y relevantes.",
    "Formular problemas valiosos, ambiguos y relevantes.",
    "Formular problemes valuosos, ambigus i rellevants.",
    "Formulate valuable, ambiguous and relevant problems."
  ],
  [
    "Contrastar",
    "Contrastar",
    "Contrastar",
    "Cross-check"
  ],
  [
    "Detectar error, sesgo, ausencia de evidencia y exceso de confianza.",
    "Detectar error, sesgo, ausencia de evidencia y exceso de confianza.",
    "Detectar error, biaix, absència d'evidència i excés de confiança.",
    "Detect error, bias, lack of evidence and overconfidence."
  ],
  [
    "Asumir autoría, responsabilidad y consecuencias.",
    "Asumir autoría, responsabilidad y consecuencias.",
    "Assumir autoria, responsabilitat i conseqüències.",
    "Assume authorship, responsibility and consequences."
  ],
  [
    "06 · Poder",
    "06 · Poder",
    "06 · Poder",
    "06 · Power"
  ],
  [
    "La IA distribuye capacidad.",
    "La IA distribuye capacidad.",
    "La IA distribueix capacitat.",
    "AI distributes capability."
  ],
  [
    "Y concentra infraestructura.",
    "Y concentra infraestructura.",
    "I concentra infraestructura.",
    "And concentrates infrastructure."
  ],
  [
    "La conversación pública no puede quedarse en el chatbot. También debe mirar ",
    "La conversación pública no puede quedarse en el chatbot. También debe mirar ",
    "La conversa pública no es pot quedar en el chatbot. També ha de mirar ",
    "Public debate cannot stop at the chatbot. It must also examine "
  ],
  [
    "energía, chips, datos, modelos y canales de distribución",
    "energía, chips, datos, modelos y canales de distribución",
    "energia, xips, dades, models i canals de distribució",
    "energy, chips, data, models and distribution channels"
  ],
  [
    "Pila de infraestructura, capacidad y poder",
    "Pila de infraestructura, capacidad y poder",
    "Pila d'infraestructura, capacitat i poder",
    "Stack of infrastructure, capability and power"
  ],
  [
    "Poder · defensa · decisión",
    "Poder · defensa · decisión",
    "Poder · defensa · decisió",
    "Power · defence · decision"
  ],
  [
    "Cuando la IA entra en sistemas donde una decisión tiene consecuencias físicas",
    "Cuando la IA entra en sistemas donde una decisión tiene consecuencias físicas",
    "Quan la IA entra en sistemes on una decisió té conseqüències físiques",
    "When AI enters systems where a decision has physical consequences"
  ],
  [
    "El interés del ejemplo no es el vehículo: es la convergencia entre sensores, datos, modelos y cadena de decisión. Ahí la gobernanza deja de ser una cuestión abstracta.",
    "El interés del ejemplo no es el vehículo: es la convergencia entre sensores, datos, modelos y cadena de decisión. Ahí la gobernanza deja de ser una cuestión abstracta.",
    "L'interès de l'exemple no és el vehicle: és la convergència entre sensors, dades, models i cadena de decisió. Aquí la governança deixa de ser una qüestió abstracta.",
    "The point of the example is not the vehicle: it is the convergence of sensors, data, models and the decision chain. At that point governance stops being abstract."
  ],
  [
    "Demo nocional del proveedor. Conviene verla con doble lectura: capacidad técnica y, al mismo tiempo, concentración de poder, responsabilidad y reglas de uso.",
    "Demo nocional del proveedor. Conviene verla con doble lectura: capacidad técnica y, al mismo tiempo, concentración de poder, responsabilidad y reglas de uso.",
    "Demo nocional del proveïdor. Convé mirar-la amb una doble lectura: capacitat tècnica i, alhora, concentració de poder, responsabilitat i regles d'ús.",
    "Notional provider demo. It should be read in two ways: technical capability and, at the same time, concentration of power, responsibility and rules of use."
  ],
  [
    "Gobernanza",
    "Gobernanza",
    "Governança",
    "Governance"
  ],
  [
    "Regular no es detener. Es decidir condiciones de legitimidad.",
    "Regular no es detener. Es decidir condiciones de legitimidad.",
    "Regular no és aturar. És decidir condicions de legitimitat.",
    "Regulation is not stopping. It is deciding the conditions of legitimacy."
  ],
  [
    "RIESGO BAJO",
    "RIESGO BAJO",
    "RISC BAIX",
    "LOW RISK"
  ],
  [
    "TRANSPARENCIA",
    "TRANSPARENCIA",
    "TRANSPARÈNCIA",
    "TRANSPARENCY"
  ],
  [
    "ALTO IMPACTO",
    "ALTO IMPACTO",
    "ALT IMPACTE",
    "HIGH IMPACT"
  ],
  [
    "PROHIBIDO",
    "PROHIBIDO",
    "PROHIBIT",
    "PROHIBITED"
  ],
  [
    "La cuestión política central: ",
    "La cuestión política central: ",
    "La qüestió política central: ",
    "The central political question: "
  ],
  [
    "¿qué derechos y decisiones deben permanecer no delegables?",
    "¿qué derechos y decisiones deben permanecer no delegables?",
    "quins drets i decisions han de continuar sent no delegables?",
    "which rights and decisions must remain non-delegable?"
  ],
  [
    "marco basado en riesgo; obligaciones de transparencia y otras disposiciones entran en aplicación por fases.",
    "marco basado en riesgo; obligaciones de transparencia y otras disposiciones entran en aplicación por fases.",
    "marc basat en el risc; les obligacions de transparència i altres disposicions entren en aplicació per fases.",
    "risk-based framework; transparency obligations and other provisions take effect in phases."
  ],
  [
    "Centre d’Amics de Reus · conversa cívica",
    "Centre d’Amics de Reus · conversación cívica",
    "Centre d’Amics de Reus · conversa cívica",
    "Centre d’Amics de Reus · civic conversation"
  ],
  [
    "Un lugar para pensar",
    "Un lugar para pensar",
    "Un lloc per pensar",
    "A place to think"
  ],
  [
    "antes de delegar.",
    "antes de delegar.",
    "abans de delegar.",
    "before delegating."
  ],
  [
    "La IA acelera decisiones. Una institución cultural puede hacer algo distinto y necesario: ",
    "La IA acelera decisiones. Una institución cultural puede hacer algo distinto y necesario: ",
    "La IA accelera decisions. Una institució cultural pot fer una cosa diferent i necessària: ",
    "AI accelerates decisions. A cultural institution can do something different and necessary: "
  ],
  [
    "crear tiempo, pluralidad y criterio compartido",
    "crear tiempo, pluralidad y criterio compartido",
    "crear temps, pluralitat i criteri compartit",
    "create time, plurality and shared judgement"
  ],
  [
    "Conversación lenta",
    "Conversación lenta",
    "Conversa lenta",
    "Slow conversation"
  ],
  [
    "Que la velocidad tecnológica no marque la velocidad del juicio.",
    "Que la velocidad tecnológica no marque la velocidad del juicio.",
    "Que la velocitat tecnològica no marqui la velocitat del judici.",
    "Technology's speed should not dictate the speed of judgement."
  ],
  [
    "Pluralidad real",
    "Pluralidad real",
    "Pluralitat real",
    "Real plurality"
  ],
  [
    "Ingeniería, humanidades, salud, derecho y ciudadanía en la misma sala.",
    "Ingeniería, humanidades, salud, derecho y ciudadanía en la misma sala.",
    "Enginyeria, humanitats, salut, dret i ciutadania a la mateixa sala.",
    "Engineering, humanities, health, law and citizens in the same room."
  ],
  [
    "Criterio público",
    "Criterio público",
    "Criteri públic",
    "Public judgement"
  ],
  [
    "Distinguir lo técnicamente posible de lo socialmente legítimo.",
    "Distinguir lo técnicamente posible de lo socialmente legítimo.",
    "Distingir allò tècnicament possible d'allò socialment legítim.",
    "Distinguish what is technically possible from what is socially legitimate."
  ],
  [
    "La innovación no consiste sólo en adoptar tecnología. También consiste en ",
    "La innovación no consiste sólo en adoptar tecnología. También consiste en ",
    "La innovació no consisteix només a adoptar tecnologia. També consisteix a ",
    "Innovation is not only about adopting technology. It is also about "
  ],
  [
    "decidir juntos qué no queremos delegar",
    "decidir juntos qué no queremos delegar",
    "decidir plegats què no volem delegar",
    "deciding together what we do not want to delegate"
  ],
  [
    "2030 · tres futuros plausibles",
    "2030 · tres futuros plausibles",
    "2030 · tres futurs plausibles",
    "2030 · three plausible futures"
  ],
  [
    "No hay un único futuro tecnológico",
    "No hay un único futuro tecnológico",
    "No hi ha un únic futur tecnològic",
    "There is no single technological future"
  ],
  [
    "Tres futuros posibles de la IA hacia 2030",
    "Tres futuros posibles de la IA hacia 2030",
    "Tres futurs possibles de la IA cap al 2030",
    "Three possible AI futures toward 2030"
  ],
  [
    "IA cívica",
    "IA cívica",
    "IA cívica",
    "Civic AI"
  ],
  [
    "Capacidad distribuida, educación, derechos y control humano significativo.",
    "Capacidad distribuida, educación, derechos y control humano significativo.",
    "Capacitat distribuïda, educació, drets i control humà significatiu.",
    "Distributed capability, education, rights and meaningful human control."
  ],
  [
    "IA desigual",
    "IA desigual",
    "IA desigual",
    "Unequal AI"
  ],
  [
    "Gran productividad con concentración de oportunidades y poder.",
    "Gran productividad con concentración de oportunidades y poder.",
    "Gran productivitat amb concentració d'oportunitats i poder.",
    "High productivity with concentrated opportunity and power."
  ],
  [
    "IA tutelar",
    "IA tutelar",
    "IA tutelar",
    "Tutelar AI"
  ],
  [
    "Comodidad a cambio de vigilancia, dependencia y autonomía decreciente.",
    "Comodidad a cambio de vigilancia, dependencia y autonomía decreciente.",
    "Comoditat a canvi de vigilància, dependència i autonomia decreixent.",
    "Convenience in exchange for surveillance, dependence and declining autonomy."
  ],
  [
    "Frontera 2026 · IA física",
    "Frontera 2026 · IA física",
    "Frontera 2026 · IA física",
    "Frontier 2026 · physical AI"
  ],
  [
    "El siguiente salto no es un robot concreto: es inteligencia transferible entre cuerpos",
    "El siguiente salto no es un robot concreto: es inteligencia transferible entre cuerpos",
    "El següent salt no és un robot concret: és intel·ligència transferible entre cossos",
    "The next leap is not a specific robot: it is intelligence transferable across bodies"
  ],
  [
    "Gemini Robotics 2 ejemplifica una dirección de frontera: control de cuerpo completo, destreza y colaboración entre robots. El software cognitivo empieza a separarse del hardware que lo encarna.",
    "Gemini Robotics 2 ejemplifica una dirección de frontera: control de cuerpo completo, destreza y colaboración entre robots. El software cognitivo empieza a separarse del hardware que lo encarna.",
    "Gemini Robotics 2 exemplifica una direcció de frontera: control de cos complet, destresa i col·laboració entre robots. El programari cognitiu comença a separar-se del maquinari que l'encarna.",
    "Gemini Robotics 2 illustrates a frontier direction: whole-body control, dexterity and collaboration between robots. Cognitive software is beginning to separate from the hardware that embodies it."
  ],
  [
    "Demo del propio laboratorio. Sirve para observar una dirección tecnológica reciente; no implica que estas capacidades estén desplegadas de forma general en entornos no controlados.",
    "Demo del propio laboratorio. Sirve para observar una dirección tecnológica reciente; no implica que estas capacidades estén desplegadas de forma general en entornos no controlados.",
    "Demo del mateix laboratori. Serveix per observar una direcció tecnològica recent; no implica que aquestes capacitats estiguin desplegades de manera general en entorns no controlats.",
    "Demo from the laboratory itself. It shows a recent technological direction; it does not imply these capabilities are broadly deployed in uncontrolled environments."
  ],
  [
    "Decisión colectiva",
    "Decisión colectiva",
    "Decisió col·lectiva",
    "Collective decision"
  ],
  [
    "¿Qué capacidad humana estaríamos dispuestos a ",
    "¿Qué capacidad humana estaríamos dispuestos a ",
    "Quina capacitat humana estaríem disposats a ",
    "What human capability would we be willing to "
  ],
  [
    "perder",
    "perder",
    "perdre",
    "lose"
  ],
  [
    " a cambio de comodidad?",
    " a cambio de comodidad?",
    " a canvi de comoditat?",
    " in exchange for convenience?"
  ],
  [
    "Memoria · orientación · escritura · cálculo · conversación · decisión · cuidado",
    "Memoria · orientación · escritura · cálculo · conversación · decisión · cuidado",
    "Memòria · orientació · escriptura · càlcul · conversa · decisió · cura",
    "Memory · orientation · writing · calculation · conversation · decision · care"
  ],
  [
    "Notas de prudencia",
    "Notas de prudencia",
    "Notes de prudència",
    "Notes of caution"
  ],
  [
    "Cuatro cosas que esta charla no afirma",
    "Cuatro cosas que esta charla no afirma",
    "Quatre coses que aquesta xerrada no afirma",
    "Four things this talk does not claim"
  ],
  [
    "No predice desempleo masivo",
    "No predice desempleo masivo",
    "No prediu atur massiu",
    "It does not predict mass unemployment"
  ],
  [
    "Exposición a tareas no equivale a desaparición automática del empleo.",
    "Exposición a tareas no equivale a desaparición automática del empleo.",
    "L'exposició a tasques no equival a la desaparició automàtica de l'ocupació.",
    "Task exposure does not equal automatic job disappearance."
  ],
  [
    "No atribuye consciencia",
    "No atribuye consciencia",
    "No atribueix consciència",
    "It does not attribute consciousness"
  ],
  [
    "Conducta lingüística sofisticada no prueba experiencia subjetiva.",
    "Conducta lingüística sofisticada no prueba experiencia subjetiva.",
    "Una conducta lingüística sofisticada no demostra experiència subjectiva.",
    "Sophisticated linguistic behaviour does not prove subjective experience."
  ],
  [
    "No equipara IA y terapeuta",
    "No equipara IA y terapeuta",
    "No equipara IA i terapeuta",
    "It does not equate AI with a therapist"
  ],
  [
    "La salud mental exige validación, límites y gobernanza clínica.",
    "La salud mental exige validación, límites y gobernanza clínica.",
    "La salut mental exigeix validació, límits i governança clínica.",
    "Mental health requires validation, limits and clinical governance."
  ],
  [
    "No convierte riesgo en destino",
    "No convierte riesgo en destino",
    "No converteix el risc en destí",
    "It does not turn risk into destiny"
  ],
  [
    "Diseño, instituciones y decisiones cambian los resultados.",
    "Diseño, instituciones y decisiones cambian los resultados.",
    "El disseny, les institucions i les decisions canvien els resultats.",
    "Design, institutions and decisions change outcomes."
  ],
  [
    "Asombro + escepticismo.",
    "Asombro + escepticismo.",
    "Meravella + escepticisme.",
    "Wonder + scepticism."
  ],
  [
    "Una conversación adulta necesita conservar ambas capacidades.",
    "Una conversación adulta necesita conservar ambas capacidades.",
    "Una conversa adulta necessita conservar totes dues capacitats.",
    "An adult conversation needs to preserve both capacities."
  ],
  [
    "El papel humano",
    "El papel humano",
    "El paper humà",
    "The human role"
  ],
  [
    "Cinco capacidades que conviene preservar",
    "Cinco capacidades que conviene preservar",
    "Cinc capacitats que convé preservar",
    "Five capabilities worth preserving"
  ],
  [
    "HUMANO",
    "HUMANO",
    "HUMÀ",
    "HUMAN"
  ],
  [
    "Agencia",
    "Agencia",
    "Agència",
    "Agency"
  ],
  [
    "Poder decir sí, no y todavía no.",
    "Poder decir sí, no y todavía no.",
    "Poder dir sí, no i encara no.",
    "Being able to say yes, no and not yet."
  ],
  [
    "Criterio",
    "Criterio",
    "Criteri",
    "Judgement"
  ],
  [
    "Distinguir lo eficaz de lo legítimo.",
    "Distinguir lo eficaz de lo legítimo.",
    "Distingir allò eficaç d'allò legítim.",
    "Distinguish what is effective from what is legitimate."
  ],
  [
    "Responsabilidad",
    "Responsabilidad",
    "Responsabilitat",
    "Responsibility"
  ],
  [
    "Responder por las consecuencias.",
    "Responder por las consecuencias.",
    "Respondre de les conseqüències.",
    "Be accountable for the consequences."
  ],
  [
    "Vínculo",
    "Vínculo",
    "Vincle",
    "Connection"
  ],
  [
    "Reconocer al otro como fin, no como dato.",
    "Reconocer al otro como fin, no como dato.",
    "Reconèixer l'altre com a fi, no com a dada.",
    "Recognise the other as an end, not as data."
  ],
  [
    "Propósito",
    "Propósito",
    "Propòsit",
    "Purpose"
  ],
  [
    "Decidir qué merece la pena hacer.",
    "Decidir qué merece la pena hacer.",
    "Decidir què val la pena fer.",
    "Decide what is worth doing."
  ],
  [
    "Volvamos al principio",
    "Volvamos al principio",
    "Tornem al principi",
    "Back to the beginning"
  ],
  [
    "Si la IA hace cada vez más…",
    "Si la IA hace cada vez más…",
    "Si la IA fa cada vegada més…",
    "If AI does more and more…"
  ],
  [
    "¿qué queremos que siga significando ser humano?",
    "¿qué queremos que siga significando ser humano?",
    "què volem que continuï significant ser humà?",
    "what do we want being human to continue to mean?"
  ],
  [
    "No busco una respuesta única. Busco que no renunciemos a formular la pregunta.",
    "No busco una respuesta única. Busco que no renunciemos a formular la pregunta.",
    "No busco una resposta única. Busco que no renunciem a formular la pregunta.",
    "I am not looking for a single answer. I am asking that we do not give up asking the question."
  ],
  [
    "Referencias esenciales",
    "Referencias esenciales",
    "Referències essencials",
    "Essential references"
  ],
  [
    "Para seguir pensando",
    "Para seguir pensando",
    "Per continuar pensant",
    "To keep thinking"
  ],
  [
    "Trabajo · sociedad · ciberseguridad",
    "Trabajo · sociedad · ciberseguridad",
    "Treball · societat · ciberseguretat",
    "Work · society · cybersecurity"
  ],
  [
    "Unión Europea",
    "Unión Europea",
    "Unió Europea",
    "European Union"
  ],
  [
    "AI Act y guías de implementación",
    "AI Act y guías de implementación",
    "AI Act i guies d'implementació",
    "AI Act and implementation guidance"
  ],
  [
    "Vídeos oficiales",
    "Vídeos oficiales",
    "Vídeos oficials",
    "Official videos"
  ],
  [
    "Salud · límites · evidencia",
    "Salud · límites · evidencia",
    "Salut · límits · evidència",
    "Health · limits · evidence"
  ],
  [
    "presentación web reproducible y estática",
    "presentación web reproducible y estática",
    "presentació web reproduïble i estàtica",
    "reproducible static web presentation"
  ],
  [
    "Los datos cambian. Las preguntas de agencia, responsabilidad y legitimidad permanecen.",
    "Los datos cambian. Las preguntas de agencia, responsabilidad y legitimidad permanecen.",
    "Les dades canvien. Les preguntes d'agència, responsabilitat i legitimitat romanen.",
    "The data change. Questions of agency, responsibility and legitimacy remain."
  ],
  [
    "GRÀCIES · LA CONVERSA CONTINUA",
    "GRACIAS · LA CONVERSACIÓN CONTINÚA",
    "GRÀCIES · LA CONVERSA CONTINUA",
    "THANK YOU · THE CONVERSATION CONTINUES"
  ],
  [
    "La tecnología avanza.",
    "La tecnología avanza.",
    "La tecnologia avança.",
    "Technology advances."
  ],
  [
    "La dirección sigue siendo humana.",
    "La dirección sigue siendo humana.",
    "La direcció continua sent humana.",
    "Direction remains human."
  ],
  [
    "La cuestión no es sólo qué puede hacer la IA, sino qué capacidades, derechos y responsabilidades queremos conservar al incorporarla al mundo.",
    "La cuestión no es sólo qué puede hacer la IA, sino qué capacidades, derechos y responsabilidades queremos conservar al incorporarla al mundo.",
    "La qüestió no és només què pot fer la IA, sinó quines capacitats, drets i responsabilitats volem conservar quan la incorporem al món.",
    "The question is not only what AI can do, but which capabilities, rights and responsibilities we want to preserve as we bring it into the world."
  ],
  [
    "Ingeniería Industrial · Data Science · Ciberseguridad · Rust / IA",
    "Ingeniería Industrial · Data Science · Ciberseguridad · Rust / IA",
    "Enginyeria Industrial · Data Science · Ciberseguretat · Rust / IA",
    "Industrial Engineering · Data Science · Cybersecurity · Rust / AI"
  ],
  [
    "PERFIL PROFESIONAL",
    "PERFIL PROFESIONAL",
    "PERFIL PROFESSIONAL",
    "PROFESSIONAL PROFILE"
  ],
  [
    "QR al perfil profesional de Angel A. Urbina",
    "QR al perfil profesional de Angel A. Urbina",
    "QR al perfil professional d'Angel A. Urbina",
    "QR code for Angel A. Urbina's professional profile"
  ],
  [
    "Continuemos la conversación",
    "Continuemos la conversación",
    "Continuem la conversa",
    "Let's continue the conversation"
  ],
  [
    "fuente oficial",
    "fuente oficial",
    "font oficial",
    "official source"
  ],
  [
    "Abrir en YouTube ↗",
    "Abrir en YouTube ↗",
    "Obrir a YouTube ↗",
    "Open on YouTube ↗"
  ],
  [
    "Vídeo · demo oficial",
    "Vídeo · demo oficial",
    "Vídeo · demo oficial",
    "Video · official demo"
  ],
  [
    "Frontera · septiembre de 2026",
    "Frontera · septiembre de 2026",
    "Frontera · setembre de 2026",
    "Frontier · September 2026"
  ],
  [
    "No hay un único “modelo ganador”. Hay varias fronteras avanzando a la vez.",
    "No hay un único “modelo ganador”. Hay varias fronteras avanzando a la vez.",
    "No hi ha un únic «model guanyador». Hi ha diverses fronteres avançant alhora.",
    "There is no single “winning model”. Several frontiers are advancing at once."
  ],
  [
    "Autonomía",
    "Autonomía",
    "Autonomia",
    "Autonomy"
  ],
  [
    "GPT-6 Astra lleva el foco hacia tareas largas, computer use y ejecución con herramientas.",
    "GPT-6 Astra lleva el foco hacia tareas largas, uso del ordenador y ejecución con herramientas.",
    "GPT-6 Astra desplaça el focus cap a tasques llargues, ús de l'ordinador i execució amb eines.",
    "GPT-6 Astra shifts the focus toward long-running tasks, computer use and tool execution."
  ],
  [
    "Agentes y código",
    "Agentes y código",
    "Agents i codi",
    "Agents and code"
  ],
  [
    "Claude Opus 5.5 refuerza programación agéntica de larga duración y trabajo de conocimiento.",
    "Claude Opus 5.5 refuerza la programación agéntica de larga duración y el trabajo de conocimiento.",
    "Claude Opus 5.5 reforça la programació agèntica de llarga durada i el treball del coneixement.",
    "Claude Opus 5.5 strengthens long-running agentic coding and knowledge work."
  ],
  [
    "Eficiencia abierta",
    "Eficiencia abierta",
    "Eficiència oberta",
    "Open efficiency"
  ],
  [
    "DeepSeek V4.1-Flash y Kimi muestran que la frontera también compite en coste, contexto y apertura.",
    "DeepSeek V4.1-Flash y Kimi muestran que la frontera también compite en coste, contexto y apertura.",
    "DeepSeek V4.1-Flash i Kimi mostren que la frontera també competeix en cost, context i obertura.",
    "DeepSeek V4.1-Flash and Kimi show that the frontier also competes on cost, context and openness."
  ],
  [
    "Multimodalidad",
    "Multimodalidad",
    "Multimodalitat",
    "Multimodality"
  ],
  [
    "Qwen 3.8 amplía contexto, visión, audio, vídeo y orquestación de herramientas dentro del mismo ecosistema.",
    "Qwen 3.8 amplía contexto, visión, audio, vídeo y orquestación de herramientas dentro del mismo ecosistema.",
    "Qwen 3.8 amplia el context, la visió, l'àudio, el vídeo i l'orquestració d'eines dins del mateix ecosistema.",
    "Qwen 3.8 expands context, vision, audio, video and tool orchestration within the same ecosystem."
  ],
  [
    "La tendencia común:",
    "La tendencia común:",
    "La tendència comuna:",
    "The common trend:"
  ],
  [
    "modelos menos aislados, más conectados a memoria, herramientas, software y mundo físico.",
    "modelos menos aislados, más conectados a memoria, herramientas, software y mundo físico.",
    "models menys aïllats, més connectats a memòria, eines, programari i món físic.",
    "less isolated models, more connected to memory, tools, software and the physical world."
  ],
  [
    "Fuentes oficiales consultadas a 25/09/2026: OpenAI, Anthropic, DeepSeek, Moonshot/Kimi y Alibaba Cloud.",
    "Fuentes oficiales consultadas a 25/09/2026: OpenAI, Anthropic, DeepSeek, Moonshot/Kimi y Alibaba Cloud.",
    "Fonts oficials consultades el 25/09/2026: OpenAI, Anthropic, DeepSeek, Moonshot/Kimi i Alibaba Cloud.",
    "Official sources consulted on 25/09/2026: OpenAI, Anthropic, DeepSeek, Moonshot/Kimi and Alibaba Cloud."
  ],
  [
    "Agentes 2026 · computer use",
    "Agentes 2026 · uso del ordenador",
    "Agents 2026 · ús de l'ordinador",
    "Agents 2026 · computer use"
  ],
  [
    "La frontera ya no es conversar: es ejecutar trabajo dentro del ordenador",
    "La frontera ya no es conversar: es ejecutar trabajo dentro del ordenador",
    "La frontera ja no és conversar: és executar feina dins de l'ordinador",
    "The frontier is no longer conversation: it is doing work inside the computer"
  ],
  [
    "Astra ejemplifica el salto hacia tareas largas con uso del ordenador y herramientas. La cuestión cambia de «¿qué responde?» a «¿qué puede hacer en nuestro nombre?».",
    "Astra ejemplifica el salto hacia tareas largas con uso del ordenador y herramientas. La cuestión cambia de «¿qué responde?» a «¿qué puede hacer en nuestro nombre?».",
    "Astra exemplifica el salt cap a tasques llargues amb ús de l'ordinador i eines. La qüestió passa de «què respon?» a «què pot fer en nom nostre?».",
    "Astra illustrates the shift toward long-running tasks using computers and tools. The question changes from “what does it answer?” to “what can it do on our behalf?”"
  ],
  [
    "Demostración oficial del proveedor. Se utiliza para observar la dirección tecnológica; no como validación independiente de fiabilidad o seguridad.",
    "Demostración oficial del proveedor. Se utiliza para observar la dirección tecnológica; no como validación independiente de fiabilidad o seguridad.",
    "Demostració oficial del proveïdor. S'utilitza per observar la direcció tecnològica, no com a validació independent de fiabilitat o seguretat.",
    "Official provider demonstration. It is used to observe technological direction, not as independent validation of reliability or safety."
  ],
  [
    "04 · IA + biología",
    "04 · IA + biología",
    "04 · IA + biologia",
    "04 · AI + biology"
  ],
  [
    "La inteligencia artificial empieza a aprender el lenguaje de la vida",
    "La inteligencia artificial empieza a aprender el lenguaje de la vida",
    "La intel·ligència artificial comença a aprendre el llenguatge de la vida",
    "Artificial intelligence is beginning to learn the language of life"
  ],
  [
    "Genoma",
    "Genoma",
    "Genoma",
    "Genome"
  ],
  [
    "Modelos que predicen cómo cambios en una sola letra del ADN pueden alterar procesos moleculares.",
    "Modelos que predicen cómo cambios en una sola letra del ADN pueden alterar procesos moleculares.",
    "Models que prediuen com els canvis en una sola lletra de l'ADN poden alterar processos moleculars.",
    "Models that predict how a single-letter DNA change can alter molecular processes."
  ],
  [
    "Proteínas",
    "Proteínas",
    "Proteïnes",
    "Proteins"
  ],
  [
    "La IA ya no sólo predice estructuras: propone secuencias y arquitecturas con propiedades buscadas.",
    "La IA ya no sólo predice estructuras: propone secuencias y arquitecturas con propiedades buscadas.",
    "La IA ja no només prediu estructures: proposa seqüències i arquitectures amb les propietats buscades.",
    "AI no longer only predicts structures: it proposes sequences and architectures with desired properties."
  ],
  [
    "Sistemas vivos",
    "Sistemas vivos",
    "Sistemes vius",
    "Living systems"
  ],
  [
    "La frontera se desplaza hacia modelos que conectan moléculas, células, genomas y experimentación.",
    "La frontera se desplaza hacia modelos que conectan moléculas, células, genomas y experimentación.",
    "La frontera es desplaça cap a models que connecten molècules, cèl·lules, genomes i experimentació.",
    "The frontier is moving toward models that connect molecules, cells, genomes and experimentation."
  ],
  [
    "El cambio filosófico es profundo: pasamos de ",
    "El cambio filosófico es profundo: pasamos de ",
    "El canvi filosòfic és profund: passem de ",
    "The philosophical shift is profound: we are moving from "
  ],
  [
    "leer la vida",
    "leer la vida",
    "llegir la vida",
    "reading life"
  ],
  [
    "modelarla y diseñarla",
    "modelarla y diseñarla",
    "modelar-la i dissenyar-la",
    "modelling and designing it"
  ],
  [
    "Genómica · septiembre de 2026",
    "Genómica · septiembre de 2026",
    "Genòmica · setembre de 2026",
    "Genomics · September 2026"
  ],
  [
    "Nueve mil millones de cambios posibles, convertidos en un mapa predictivo",
    "Nueve mil millones de cambios posibles, convertidos en un mapa predictivo",
    "Nou mil milions de canvis possibles, convertits en un mapa predictiu",
    "Nine billion possible changes, turned into a predictive map"
  ],
  [
    "AlphaGenome Atlas ofrece predicciones moleculares para cada posible variante de una sola letra del genoma humano. Es una imagen poderosa de cómo la IA transforma el genoma en un espacio navegable.",
    "AlphaGenome Atlas ofrece predicciones moleculares para cada posible variante de una sola letra del genoma humano. Es una imagen poderosa de cómo la IA transforma el genoma en un espacio navegable.",
    "AlphaGenome Atlas ofereix prediccions moleculars per a cada possible variant d'una sola lletra del genoma humà. És una imatge potent de com la IA transforma el genoma en un espai navegable.",
    "AlphaGenome Atlas provides molecular predictions for every possible single-letter variant in the human genome. It is a powerful image of how AI turns the genome into a navigable space."
  ],
  [
    "Es una herramienta de investigación. Google DeepMind indica expresamente que no está validada ni aprobada para uso clínico.",
    "Es una herramienta de investigación. Google DeepMind indica expresamente que no está validada ni aprobada para uso clínico.",
    "És una eina de recerca. Google DeepMind indica expressament que no està validada ni aprovada per a ús clínic.",
    "It is a research tool. Google DeepMind explicitly states that it is not validated or approved for clinical use."
  ],
  [
    "Evo 2 · modelo fundacional biológico",
    "Evo 2 · modelo fundacional biológico",
    "Evo 2 · model fundacional biològic",
    "Evo 2 · biological foundation model"
  ],
  [
    "Un contexto de un millón de bases para razonar sobre genomas",
    "Un contexto de un millón de bases para razonar sobre genomas",
    "Un context d'un milió de bases per raonar sobre genomes",
    "A one-million-base context for reasoning about genomes"
  ],
  [
    "Evo 2 fue entrenado con ",
    "Evo 2 fue entrenado con ",
    "Evo 2 es va entrenar amb ",
    "Evo 2 was trained on "
  ],
  [
    "9 billones de pares de bases",
    "9 billones de pares de bases",
    "9 bilions de parells de bases",
    "9 trillion base pairs"
  ],
  [
    " de todos los dominios de la vida y trabaja con contexto de hasta ",
    " de todos los dominios de la vida y trabaja con contexto de hasta ",
    " de tots els dominis de la vida i treballa amb un context de fins a ",
    " from all domains of life and works with a context of up to "
  ],
  [
    "1 millón de nucleótidos",
    "1 millón de nucleótidos",
    "1 milió de nucleòtids",
    "1 million nucleotides"
  ],
  [
    "La analogía con los LLM es útil, pero incompleta: aquí los “tokens” representan secuencias biológicas y las predicciones deben volver al laboratorio para demostrar función.",
    "La analogía con los LLM es útil, pero incompleta: aquí los “tokens” representan secuencias biológicas y las predicciones deben volver al laboratorio para demostrar función.",
    "L'analogia amb els LLM és útil, però incompleta: aquí els «tokens» representen seqüències biològiques i les prediccions han de tornar al laboratori per demostrar funció.",
    "The analogy with LLMs is useful but incomplete: here the “tokens” represent biological sequences, and predictions must return to the laboratory to demonstrate function."
  ],
  [
    "pares de bases en entrenamiento",
    "pares de bases en entrenamiento",
    "parells de bases en l'entrenament",
    "base pairs in training"
  ],
  [
    "ventana de contexto, resolución de nucleótido",
    "ventana de contexto, resolución de nucleótido",
    "finestra de context, resolució de nucleòtid",
    "context window, nucleotide resolution"
  ],
  [
    "Abierto:",
    "Abierto:",
    "Obert:",
    "Open:"
  ],
  [
    "parámetros, código y OpenGenome2.",
    "parámetros, código y OpenGenome2.",
    "paràmetres, codi i OpenGenome2.",
    "weights, code and OpenGenome2."
  ],
  [
    "Diseño biológico",
    "Diseño biológico",
    "Disseny biològic",
    "Biological design"
  ],
  [
    "De predecir estructuras a proponer materia biológica nueva",
    "De predecir estructuras a proponer materia biológica nueva",
    "De predir estructures a proposar nova matèria biològica",
    "From predicting structures to proposing new biological matter"
  ],
  [
    "Predicción",
    "Predicción",
    "Predicció",
    "Prediction"
  ],
  [
    "¿Qué estructura o función es probable que tenga una secuencia?",
    "¿Qué estructura o función es probable que tenga una secuencia?",
    "Quina estructura o funció és probable que tingui una seqüència?",
    "What structure or function is a sequence likely to have?"
  ],
  [
    "Generación",
    "Generación",
    "Generació",
    "Generation"
  ],
  [
    "¿Qué secuencia podría producir una propiedad que buscamos?",
    "¿Qué secuencia podría producir una propiedad que buscamos?",
    "Quina seqüència podria produir una propietat que busquem?",
    "What sequence could produce a property we are looking for?"
  ],
  [
    "Laboratorio",
    "Laboratorio",
    "Laboratori",
    "Laboratory"
  ],
  [
    "La realidad experimental decide si la propuesta funciona, es estable y es segura.",
    "La realidad experimental decide si la propuesta funciona, es estable y es segura.",
    "La realitat experimental decideix si la proposta funciona, és estable i és segura.",
    "Experimental reality determines whether the proposal works, is stable and is safe."
  ],
  [
    "En 2026, trabajos en ",
    "En 2026, trabajos en ",
    "El 2026, treballs a ",
    "In 2026, studies in "
  ],
  [
    " muestran proteínas rediseñadas por IA y ensamblajes proteicos sintéticos capaces de formar vehículos de transferencia de RNA. La frontera es ya ",
    " muestran proteínas rediseñadas por IA y ensamblajes proteicos sintéticos capaces de formar vehículos de transferencia de RNA. La frontera es ya ",
    " mostren proteïnes redissenyades per IA i assemblatges proteics sintètics capaços de formar vehicles de transferència d'RNA. La frontera ja és ",
    " show AI-redesigned proteins and synthetic protein assemblies capable of forming RNA transfer vehicles. The frontier is now "
  ],
  [
    "generativa y experimental",
    "generativa y experimental",
    "generativa i experimental",
    "generative and experimental"
  ],
  [
    "Pregunta de frontera",
    "Pregunta de frontera",
    "Pregunta de frontera",
    "Frontier question"
  ],
  [
    "¿Qué cambia cuando la IA no sólo interpreta la vida…",
    "¿Qué cambia cuando la IA no sólo interpreta la vida…",
    "Què canvia quan la IA no només interpreta la vida…",
    "What changes when AI does not merely interpret life…"
  ],
  [
    "sino que empieza a proponer cómo modificarla?",
    "sino que empieza a proponer cómo modificarla?",
    "sinó que comença a proposar com modificar-la?",
    "but begins to propose how to modify it?"
  ],
  [
    "Conocimiento · salud · bioeconomía · seguridad · propiedad · límites",
    "Conocimiento · salud · bioeconomía · seguridad · propiedad · límites",
    "Coneixement · salut · bioeconomia · seguretat · propietat · límits",
    "Knowledge · health · bioeconomy · security · ownership · limits"
  ],
  [
    "05 · Salud mental",
    "05 · Salud mental",
    "05 · Salut mental",
    "05 · Mental health"
  ],
  [
    "06 · Educación",
    "06 · Educación",
    "06 · Educació",
    "06 · Education"
  ],
  [
    "07 · Poder",
    "07 · Poder",
    "07 · Poder",
    "07 · Power"
  ],
  [
    "energía, chips, datos, modelos, agentes, infraestructuras científicas y canales de distribución",
    "energía, chips, datos, modelos, agentes, infraestructuras científicas y canales de distribución",
    "energia, xips, dades, models, agents, infraestructures científiques i canals de distribució",
    "energy, chips, data, models, agents, scientific infrastructure and distribution channels"
  ],
  [
    "Biología · salud · límites",
    "Biología · salud · límites",
    "Biologia · salut · límits",
    "Biology · health · limits"
  ],
  [
    "Durante esta secuencia, el G1 hace visible el cambio clave: percepción, control y aprendizaje dejan de vivir sólo en una pantalla.",
    "Durante esta secuencia, el G1 hace visible el cambio clave: percepción, control y aprendizaje dejan de vivir sólo en una pantalla.",
    "Durant aquesta seqüència, el G1 fa visible el canvi clau: percepció, control i aprenentatge deixen de viure només en una pantalla.",
    "During this sequence, the G1 makes the key shift visible: perception, control and learning no longer live only on a screen."
  ]
]

const sortedRows = [...rows].sort((a, b) => b[0].length - a[0].length)

const initialLanguage = (): PresentationLang => {
  if (typeof window === 'undefined') return 'es'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  return saved === 'ca' || saved === 'en' || saved === 'es' ? saved : 'es'
}

export const presentationLang = ref<PresentationLang>(initialLanguage())

const originalText = new WeakMap<Text, string>()
const originalAttrs = new WeakMap<Element, Map<string, string>>()

const targetFor = (row: TranslationRow, lang: PresentationLang) =>
  lang === 'ca' ? row[2] : lang === 'en' ? row[3] : row[1]

const translateRaw = (raw: string, lang: PresentationLang) => {
  let value = raw
  for (const row of sortedRows) {
    if (value.includes(row[0]))
      value = value.split(row[0]).join(targetFor(row, lang))
  }
  return value
}

const translateTextNode = (node: Text, lang: PresentationLang) => {
  const base = originalText.get(node) ?? node.nodeValue ?? ''
  if (!originalText.has(node)) originalText.set(node, base)
  const translated = translateRaw(base, lang)
  if (node.nodeValue !== translated) node.nodeValue = translated
}

const translateAttribute = (el: Element, attr: string, lang: PresentationLang) => {
  const current = el.getAttribute(attr)
  if (current == null) return

  let map = originalAttrs.get(el)
  if (!map) {
    map = new Map<string, string>()
    originalAttrs.set(el, map)
  }
  const base = map.get(attr) ?? current
  if (!map.has(attr)) map.set(attr, base)

  const translated = translateRaw(base, lang)
  if (current !== translated) el.setAttribute(attr, translated)
}


const walkAndTranslate = (root: Node, lang: PresentationLang) => {
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root as Text, lang)
    return
  }

  if (!(root instanceof Element) && root !== document.documentElement && root !== document.body)
    return

  if (root instanceof Element) {
    for (const attr of ['alt', 'title', 'aria-label', 'placeholder'])
      translateAttribute(root, attr, lang)
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  let node: Node | null
  while ((node = walker.nextNode()))
    translateTextNode(node as Text, lang)

  if (root instanceof Element || root === document.body || root === document.documentElement) {
    const scope = root as ParentNode
    scope.querySelectorAll?.('[alt],[title],[aria-label],[placeholder]').forEach((el) => {
      for (const attr of ['alt', 'title', 'aria-label', 'placeholder'])
        translateAttribute(el, attr, lang)
    })
  }
}

const titleByLanguage: Record<PresentationLang, string> = {
  es: 'Inteligencia artificial — poder, humanidad y futuro',
  ca: 'Intel·ligència artificial — poder, humanitat i futur',
  en: 'Artificial intelligence — power, humanity and the future',
}

export const applyPresentationLanguage = (lang: PresentationLang = presentationLang.value) => {
  if (typeof document === 'undefined') return
  document.documentElement.lang = lang
  document.documentElement.dataset.presentationLang = lang
  document.title = titleByLanguage[lang]
  walkAndTranslate(document.body, lang)
}

export const setPresentationLanguage = (lang: PresentationLang) => {
  presentationLang.value = lang
  if (typeof window !== 'undefined')
    window.localStorage.setItem(STORAGE_KEY, lang)
  applyPresentationLanguage(lang)
}

export const installPresentationI18n = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return () => {}

  let scheduled = false
  const schedule = () => {
    if (scheduled) return
    scheduled = true
    requestAnimationFrame(() => {
      scheduled = false
      applyPresentationLanguage(presentationLang.value)
    })
  }

  const observer = new MutationObserver((records) => {
    for (const record of records) {
      for (const node of record.addedNodes)
        walkAndTranslate(node, presentationLang.value)
    }
    schedule()
  })

  const start = () => {
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    })
    schedule()
  }

  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', start, { once: true })
  else
    start()

  return () => observer.disconnect()
}
