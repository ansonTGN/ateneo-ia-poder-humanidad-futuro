<template>
  <div class="cyber" aria-label="Equilibrio entre ataque y defensa asistidos por IA">
    <svg viewBox="0 0 740 500" role="img">
      <defs>
        <linearGradient id="cbline" x1="0" x2="1"><stop stop-color="#ff7487"/><stop offset=".49" stop-color="#a978ff"/><stop offset=".51" stop-color="#5de6ff"/><stop offset="1" stop-color="#62e8b8"/></linearGradient>
        <filter id="cg"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <g font-family="Inter, Segoe UI, sans-serif">
        <rect x="24" y="48" width="292" height="386" rx="30" fill="#20111e" stroke="#ff7487" stroke-opacity=".55"/>
        <rect x="424" y="48" width="292" height="386" rx="30" fill="#0d201d" stroke="#62e8b8" stroke-opacity=".55"/>
        <text x="56" y="91" fill="#ff9caa" font-size="21" font-weight="900">ATAQUE</text>
        <text x="456" y="91" fill="#8df0ce" font-size="21" font-weight="900">DEFENSA</text>
        <text x="56" y="115" fill="#aeb7c7" font-size="11">la IA reduce coste y aumenta escala</text>
        <text x="456" y="115" fill="#aeb7c7" font-size="11">la IA reduce tiempo de detección</text>

        <g>
          <rect x="54" y="145" width="232" height="72" rx="18" fill="#2b1725" stroke="#ff7487" stroke-opacity=".36"/><text x="77" y="176" fill="#fff" font-size="16" font-weight="800">Phishing a escala</text><text x="77" y="198" fill="#c9b8c1" font-size="12">personalización automática</text>
          <rect x="54" y="235" width="232" height="72" rx="18" fill="#2b1725" stroke="#ff7487" stroke-opacity=".36"/><text x="77" y="266" fill="#fff" font-size="16" font-weight="800">Engaño adaptativo</text><text x="77" y="288" fill="#c9b8c1" font-size="12">voz · texto · contexto</text>
          <rect x="54" y="325" width="232" height="72" rx="18" fill="#2b1725" stroke="#ff7487" stroke-opacity=".36"/><text x="77" y="356" fill="#fff" font-size="16" font-weight="800">Exploración rápida</text><text x="77" y="378" fill="#c9b8c1" font-size="12">más intentos, más superficie</text>
        </g>
        <g>
          <rect x="454" y="145" width="232" height="72" rx="18" fill="#122923" stroke="#62e8b8" stroke-opacity=".36"/><text x="477" y="176" fill="#fff" font-size="16" font-weight="800">Detección asistida</text><text x="477" y="198" fill="#b9cdc5" font-size="12">correlación de señales</text>
          <rect x="454" y="235" width="232" height="72" rx="18" fill="#122923" stroke="#62e8b8" stroke-opacity=".36"/><text x="477" y="266" fill="#fff" font-size="16" font-weight="800">Respuesta más rápida</text><text x="477" y="288" fill="#b9cdc5" font-size="12">priorización + automatización</text>
          <rect x="454" y="325" width="232" height="72" rx="18" fill="#122923" stroke="#62e8b8" stroke-opacity=".36"/><text x="477" y="356" fill="#fff" font-size="16" font-weight="800">Contexto operativo</text><text x="477" y="378" fill="#b9cdc5" font-size="12">identidad · permisos · trazas</text>
        </g>

        <path d="M297 241H443" stroke="url(#cbline)" stroke-width="7" stroke-linecap="round"/>
        <circle cx="370" cy="241" r="58" fill="#091426" stroke="#a978ff" stroke-width="3" filter="url(#cg)"/>
        <text x="370" y="232" fill="#fff" font-size="27" font-weight="900" text-anchor="middle">IA</text>
        <text x="370" y="256" fill="#d7c9ff" font-size="11" font-weight="800" text-anchor="middle">MULTIPLICADOR</text>
        <text x="370" y="470" fill="#dce8f6" font-size="14" font-weight="800" text-anchor="middle">La ventaja sostenible está en identidad · permisos · contexto · trazabilidad</text>
      </g>
    </svg>
  </div>
</template>
<style scoped>.cyber{width:100%;max-width:680px;margin:auto}.cyber svg{width:100%;display:block}</style>
