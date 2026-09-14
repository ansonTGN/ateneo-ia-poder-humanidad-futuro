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

