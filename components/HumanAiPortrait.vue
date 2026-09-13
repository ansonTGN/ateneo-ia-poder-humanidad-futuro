<template>
  <div class="portrait" aria-label="Diálogo visual entre persona e inteligencia artificial">
    <svg viewBox="0 0 620 620" role="img">
      <defs>
        <linearGradient id="skin" x1="0" x2="1"><stop stop-color="#69e6ff"/><stop offset="1" stop-color="#a978ff"/></linearGradient>
        <radialGradient id="core"><stop offset="0" stop-color="#fff"/><stop offset=".12" stop-color="#69e6ff"/><stop offset="1" stop-color="#5968ff" stop-opacity="0"/></radialGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="9" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <circle cx="310" cy="310" r="238" fill="none" stroke="#7cecff" stroke-opacity=".08"/>
      <circle cx="310" cy="310" r="184" fill="none" stroke="#b48aff" stroke-opacity=".08" stroke-dasharray="8 14"/>
      <path d="M257 136c-75 12-125 80-125 169 0 98 57 177 144 188 36 5 54 23 54 54" fill="none" stroke="url(#skin)" stroke-width="8" stroke-linecap="round"/>
      <path d="M242 196c-32 26-45 58-45 96 0 37 15 70 42 94M212 271h64M229 232l41 18M228 334l43-16" fill="none" stroke="#8eefff" stroke-width="3" stroke-linecap="round" opacity=".74"/>
      <circle cx="263" cy="282" r="7" fill="#fff" filter="url(#glow)"/>
      <path d="M364 144c84 25 127 91 127 170 0 93-52 167-132 180-38 7-58 25-58 53" fill="none" stroke="url(#skin)" stroke-width="8" stroke-linecap="round"/>
      <g fill="none" stroke="#b98dff" stroke-width="3" stroke-linecap="round" opacity=".82">
        <path d="M370 205h72M397 177v57M363 261h97M393 236v56M365 318h84M414 292v54M357 374h93M384 347v52"/>
      </g>
      <circle cx="376" cy="282" r="7" fill="#fff" filter="url(#glow)"/>
      <circle cx="319" cy="304" r="72" fill="url(#core)" opacity=".66"/>
      <path d="M319 232v144M247 304h144" stroke="#fff" stroke-opacity=".18"/>
      <g fill="#fff"><circle cx="162" cy="164" r="4"/><circle cx="454" cy="123" r="4"/><circle cx="503" cy="410" r="4"/><circle cx="126" cy="431" r="4"/></g>
    </svg>
    <span class="label a">capacidad</span><span class="label b">agencia</span><span class="label c">criterio</span><span class="label d">responsabilidad</span>
  </div>
</template>
<style scoped>
.portrait{position:relative;width:100%;max-width:560px;margin:auto}.portrait svg{width:100%;display:block;filter:drop-shadow(0 0 28px rgba(93,230,255,.08))}.label{position:absolute;padding:.38rem .65rem;border-radius:999px;border:1px solid rgba(255,255,255,.12);background:rgba(4,9,20,.76);font-size:.67rem;color:#e7f7ff;letter-spacing:.03em}.a{left:7%;top:16%}.b{right:5%;top:18%}.c{left:4%;bottom:16%}.d{right:0;bottom:13%}
</style>
