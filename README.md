# Inteligencia artificial — poder, humanidad y futuro

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
