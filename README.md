# Inteligencia artificial — poder, humanidad y futuro

## Edición actual v7.2.0 · 03/10/2026

Actualiza la frontera de modelos, asistentes persistentes, incidentes con agentes,
argumentos de seguridad, investigación biológica, SynthID Bio, salud mental,
complementariedad humana y calendario europeo. Los bloques nuevos tienen versiones
ES/CA/EN reactivas y fuentes enlazadas. Conserva el diseño institucional y los vídeos.

El acceso es directo, sin contraseña. `dist/` contiene la publicación estática.
Los vídeos de YouTube muestran miniaturas locales y cargan al pulsar Reproducir;
al cambiar de diapositiva se detiene el reproductor. Los vídeos externos siguen necesitando conexión. La edición no promete operación
totalmente sin Internet ni disponibilidad general de modelos con acceso restringido.

Las secciones siguientes describen la evolución histórica del proyecto.


**Acceso actualizado: directo sin contraseña. Las instrucciones históricas de acceso protegido quedan obsoletas.**


Presentación web profesional en **Slidev + Vue 3**, preparada para GitHub y Netlify.

## Edición v5

La v5 refuerza la narrativa audiovisual con vídeos oficiales breves situados donde añaden significado:

- **NVIDIA Cosmos** — apertura cinematográfica en bucle: datos → modelos fundacionales → cómputo → simulación/mundo → acción.
- **Unitree G1** — embodied AI y control físico.
- **NVIDIA GR00T N1** — arquitectura Vision-Language-Action y modelos fundacionales para robótica.
- **UBTECH Walker S2** — automatización física y trabajo industrial.
- **AGIBOT G2** — ecosistema chino de embodied AI industrial.
- **Google DeepMind Veo 3** — contenido sintético y crisis de la evidencia visual.
- **Palantir AIP** — datos, permisos, agentes y trazabilidad.
- **Palantir TITAN** — sensores, IA, decisión y poder.
- **Google DeepMind Gemini Robotics 2** — frontera 2026: control corporal, destreza y colaboración entre robots.

Los vídeos se incrustan desde `youtube-nocookie.com`; no se redistribuyen copias locales. Las demos corporativas se presentan como artefactos visuales, **no como evidencia independiente de rendimiento**.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir: `http://localhost:3030/`

## Build de producción

```bash
npm run build
```

Salida: `dist/`.

Validación del build:

```bash
python3 -m http.server 8080 --directory dist
```

Abrir: `http://127.0.0.1:8080/`

## Publicar en un repositorio GitHub nuevo con `gh`

El repositorio recomendado es:

```text
ansonTGN/ateneo-ia-poder-humanidad-futuro
```

Ejecuta:

```bash
bash scripts/publicar-github.sh
```

El script verifica el build, inicializa Git, crea el repositorio con GitHub CLI y hace el primer `push`.

Para crearlo privado:

```bash
bash scripts/publicar-github.sh --private
```

## Netlify

`netlify.toml` ya define:

- build: `npm run build`
- publish: `dist`
- Node 22
- fallback SPA para Slidev
- headers básicos de seguridad

En Netlify: **Add new project → Import an existing project → GitHub → `ansonTGN/ateneo-ia-poder-humanidad-futuro`**. No es necesario cambiar los parámetros detectados desde `netlify.toml`.

También se puede desplegar con CLI:

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

## Estructura

- `slides.md` — narrativa completa.
- `components/CinematicLoop.vue` — apertura audiovisual en bucle.
- `components/ShortVideo.vue` — clips contextuales.
- `components/*.vue` — visualizaciones SVG/Vue.
- `public/deck.css` — sistema visual.
- `styles/index.css` — entrada CSS de Slidev.
- `netlify.toml` — configuración de despliegue.
- `.github/workflows/build.yml` — build automático en push/PR.
- `SOURCES.md` — fuentes utilizadas.
- `VIDEO-CATALOG.md` — vídeos seleccionados y candidatos editoriales.

## Revisión visual 5.1

Correcciones de legibilidad y composición tras revisión en pantalla: portada cinematográfica, gráficos de capacidades, trabajo, confianza, ciberseguridad, salud mental, consciencia, poder y futuros 2030; además de ajuste de las diapositivas de vídeo con textos largos.

## Revisión de producción 5.2

- CSS global integrado en `styles/index.css` para entrar en el bundle de Vite; `/deck.css` queda sólo como fallback compatible.
- Eliminadas las fuentes web externas: los SVG y el deck usan tipografía de sistema para evitar variaciones por bloqueo de terceros.
- Netlify sin rewrite global: `routerMode: hash` no lo necesita.
- Postprocesado de Netlify desactivado para conservar intactos HTML/CSS/JS del build.
- `index.html` se sirve sin caché; los assets con hash mantienen caché `immutable`.
- Apertura y cierre cinematográficos tienen un fondo CSS de fallback, por lo que siguen siendo legibles aunque el iframe de YouTube sea bloqueado.
- La última diapositiva reutiliza el vídeo de apertura y añade el perfil profesional + QR.


## Nota de producción v5.3.0

La portada y el cierre usan HTML directo dentro de `slides.md`: el texto permanece visible aunque YouTube no cargue. Los diagramas principales se publican como SVG estáticos en `public/visuals/` para evitar diferencias de herencia CSS entre desarrollo y producción. Node se fija en 22.14.0 para reproducibilidad.

## Revisión visual v6.3 — Centre d’Amics de Reus

Parte exactamente de **v5.7.0** (`6bfe18f`) y conserva la arquitectura audiovisual desplegada en GitHub/Netlify.

Además de integrar la identidad del **Centre d’Amics de Reus**, esta edición incorpora la fotografía del ponente de forma contenida:

- mini retrato en la portada junto a la autoría;
- retrato profesional en el bloque de identidad del cierre;
- no se repite en las slides de contenido para evitar ruido visual.

La fotografía se mantiene sin reinterpretación gráfica y se recorta únicamente mediante CSS (`object-fit`) dentro del layout.

## Ajuste v6.3.1 — marca institucional global

El logotipo del **Centre d’Amics de Reus** pasa a una única capa global (`global-top.vue`) para mantener exactamente el mismo tratamiento en todas las diapositivas:

- esquina superior derecha;
- tamaño discreto y constante;
- misma tarjeta blanca del cierre;
- sin duplicidades en portada, slide institucional ni cierre;
- pequeña zona de seguridad tipográfica para reducir solapamientos.

El objetivo es que la marca identifique la sede sin competir con títulos, gráficos, vídeos o mensajes principales.

## Ajuste v6.3.2 — logo persistente

El logo del Centre d’Amics de Reus se renderiza ahora mediante una capa CSS global sobre `.slidev-layout`. Esta solución sustituye `global-top.vue` para garantizar que la marca aparezca también en layouts cinematográficos y en todas las diapositivas del build estático.


## Preview multilingüe v6.4

Rama de prueba local con selector de idioma en la portada:

- **ES** — Español
- **CA** — Català
- **EN** — English

La selección se conserva en `localStorage`, se aplica dinámicamente a las diapositivas y también cambia las variantes SVG de los diagramas. No modifica la estructura narrativa ni la estética de v6.3.2.

Esta rama es de **prueba local** y no debe publicarse hasta completar la revisión visual de los tres idiomas.

### Corrección de diagramas multilingües

Los diagramas SVG se renderizan mediante `I18nDiagram.vue`. El componente
selecciona reactivamente la ruta apropiada según el idioma:

- `/visuals/*.svg` -> español
- `/visuals/ca/*.svg` -> català
- `/visuals/en/*.svg` -> English

Esto evita depender de mutaciones manuales del atributo `src`, que no eran
fiables con el ciclo de renderizado de Slidev/Vue.

## Acceso protegido en Netlify — base v7.1

La presentación incorpora una pantalla de acceso previa mediante una Netlify
Edge Function. No utiliza la función comercial de Password Protection de
Netlify.

Las credenciales se leen exclusivamente de:

- `PRESENTATION_USER`
- `PRESENTATION_PASSWORD`
- `PRESENTATION_SESSION_SECRET`

Nunca deben guardarse en GitHub ni en `netlify.toml`.

La sesión utiliza una cookie firmada HMAC-SHA256, `HttpOnly` y
`SameSite=Strict`, con una duración de 8 horas.

### Prueba local

```bash
python3 scripts/configure-local-auth.py
npx netlify-cli@latest dev
```

Abrir `http://localhost:8888/`.

No abrir directamente el puerto 3030 durante la prueba, porque ese puerto es el
servidor Slidev interno y no pasa por la capa Edge simulada por Netlify Dev.


## Revisión de autenticación — 03/10/2026

Base de contenido: v7.1. Esta revisión corrige redirecciones, usuarios con puntos,
validación del origen del POST y caché del contenido autenticado.

El configurador conserva `.env` por defecto. `--replace` lo sustituye y rota
el secreto LOCAL. No cambia las variables de producción de Netlify.
Para invalidar todas las sesiones de producción, rotar
`PRESENTATION_SESSION_SECRET` en Netlify. Cambiar solo la contraseña no las revoca.
Las cookies antiguas de usuarios sin puntos siguen siendo válidas hasta caducar.

La espera de 650 ms no es una limitación efectiva de intentos. Antes de abrir
el servicio públicamente, configurar un control efectivo de solicitudes al login
o sustituir el acceso compartido por un proveedor de identidad.
Los cambios de caché no borran copias descargadas o guardadas anteriormente.
