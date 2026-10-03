# Actualización v7.2 · 3 de octubre de 2026

Esta edición mantiene el argumento central: la IA amplía lo que podemos hacer,
pero exige decidir qué queremos delegar, cómo distribuimos el poder y qué
capacidades humanas queremos preservar. La fecha de corte es el 03/10/2026,
en horario de Madrid. La base pública utilizada es el commit `30760d4`.

## Narrativa y estética

Se conserva el orden: capacidad y trabajo → verdad y ciberseguridad → biología
y salud mental → educación y poder → futuros y agencia humana. Las preguntas
de debate siguen en su lugar y el cierre conserva su mensaje.

Se mantienen la portada y el cierre cinematográficos, la paleta oscura con
cian/violeta, la tipografía, las imágenes de la institución y del ponente,
los diagramas originales y la disposición de los vídeos. Las nuevas páginas
usan los mismos recursos visuales y fuentes de estilo. No se ha sustituido
la presentación por otra plantilla.

La base tenía 39 diapositivas; esta edición tiene 48. Ocho páginas amplían el
contenido, tres actualizan páginas anteriores y una incorpora un nuevo vídeo.
Todos los bloques nuevos están en español, catalán e inglés.

## Mapa de cambios

| Diapositiva | Tema | Función dentro del relato |
|---|---|---|
| 5 | Agentes persistentes y memoria | Del diálogo aislado al trabajo entre sesiones; control de la persona |
| 6 | Vídeo oficial de dots | Fragmento de lanzamiento de 60 s que visualiza esa propuesta |
| 8 | Modelos de frontera | Capacidad, coste y acceso: GPT-6.1 Sol, Sonnet 5.5 y Gemini 4 Argon |
| 9 | Ecosistema chino | Eficiencia y multimodalidad: DeepSeek, Kimi y Qwen |
| 17 | ENISA 2026 | Actualizar el panorama europeo; publicación en 2026, observaciones de 2025 |
| 21 | Incidentes con agentes | Los límites de una tarea y las herramientas pueden ser distintos |
| 22 | Argumentos de seguridad | Contención, supervisión y responsabilidad con evidencia |
| 27 | Sistema enzimático ART | Hipótesis propuestas por agentes y comprobación humana en laboratorio |
| 28 | SynthID Bio | Procedencia de diseños biológicos; identificación no equivale a inocuidad |
| 31 | Evaluación de salud mental | Mejoras medidas, ambigüedad persistente y condiciones de uso |
| 35 | Complementariedad humana | Diversidad de ideas y contraste entre hipótesis |
| 38 | AI Act | Calendario vigente y responsabilidades según uso y papel |
| 40 | Aceleración de la investigación | Escenario de investigación, con incertidumbres explícitas |

Las referencias principales aparecen al pie de las nuevas diapositivas.
`SOURCES.md` contiene la bibliografía ampliada y los criterios de interpretación.
Las notas del ponente incluyen las fuentes y los límites de las afirmaciones.

## Vídeos y uso en directo

Se conserva la selección anterior y se incorpora el lanzamiento oficial de
dots de OpenAI, publicado el 29/09/2026:
https://www.youtube.com/watch?v=uXspbC2srEQ

El fragmento 00:29–01:29 va después de continuidad y memoria. Se identifica
como pieza promocional con escenas preparadas, no como prueba independiente
de fiabilidad. La fuente de las características del producto es:
https://openai.com/index/introducing-dots/

Los vídeos de YouTube muestran una miniatura guardada localmente y cargan el
reproductor al pulsar «Reproducir». Al salir de la diapositiva se retira el
reproductor para detener el vídeo. Se conserva el enlace «Abrir en YouTube».
Las miniaturas evitan depender de una carga externa para mostrar la página;
los vídeos siguen necesitando Internet. No se redistribuyen copias de esos
vídeos. La animación de apertura que ya estaba en el proyecto sigue siendo local.

La copia compilada del paquete abre sin contraseña y sin instalar Node.
El instalador también retira la función `presentation-auth` y su enlace en
`netlify.toml`, conservando el resto de la configuración local.

## Alcance de las afirmaciones

- Los anuncios de modelos describen lo que comunican sus proveedores. No
  constituyen un ranking independiente ni una garantía para todas las tareas.
- El acceso inicial a Gemini 4 Argon está restringido; no se presenta como
  disponibilidad general. API, pesos abiertos y licencia son cosas distintas.
- El informe de incidentes de Transluce es del 30/09; los hechos ocurrieron
  meses antes. No se afirma que se obtuvieran datos no públicos.
- ART requiere caracterización posterior; no se presenta como herramienta
  de edición genética validada.
- SynthID Bio es una prueba de concepto de procedencia. La resistencia a
  manipulación deliberada sigue siendo un reto de investigación.
- Las conversaciones simuladas de salud mental miden conducta del sistema,
  no eficacia terapéutica ni resultados clínicos.
- Los preprints sobre teoría social y aceleración de I+D tienen alcance
  limitado. Las implicaciones educativas y políticas se identifican como
  interpretaciones o preguntas.
- El calendario europeo se recoge de la Comisión Europea a la fecha de
  corte; las obligaciones concretas dependen del caso.

La selección prioriza novedades que ayudan al argumento de la charla.
No pretende inventariar todos los productos existentes ni prometer una fecha
de llegada de la inteligencia artificial general.

## Validación de la entrega

La compilación de producción ha pasado y el archivo de dependencias se ha
comprobado con `npm ci --dry-run`. Se han recorrido las 48 páginas en cada
idioma y revisado visualmente los bloques nuevos, los vídeos, la portada y
el cierre. No se detectaron páginas vacías ni desbordamientos de los bloques
nuevos. Se comprobó la apertura manual y la retirada del reproductor al avanzar.
El navegador de pruebas no permitió Wake Lock (mantener la pantalla despierta),
una función previa del proyecto; la navegación y la reproducción manual no
dependen de ella. La disponibilidad externa de YouTube se debe comprobar
en el equipo y la red de la charla.

El instalador se probó sobre una copia con cambios locales similares a los
descritos: preserva notas y configuración de desarrollo, no toca las credenciales,
retira la autenticación, crea copia previa, se puede ejecutar de nuevo y rechaza
conflictos antes de escribir.
