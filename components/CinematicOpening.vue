<template>
  <section class="opening-v56">
    <NvidiaCosmosBackground :opacity="0.98" />

    <div class="opening-v56__veil" aria-hidden="true" />
    <div class="opening-v56__grid" aria-hidden="true" />

    <div class="opening-v56__content">
      <div class="opening-v56__kicker"><span /> INTELIGENCIA ARTIFICIAL · PODER · HUMANIDAD · 2026</div>
      <h1 class="opening-v56__headline">Inteligencia artificial<br><em>Poder, humanidad y futuro</em></h1>
      <p class="opening-v56__lead">Datos, modelos fundacionales y cómputo ya pueden percibir, simular, razonar y actuar. La cuestión política empieza cuando esa cadena entra en el mundo.</p>
      <div class="opening-v56__flow" aria-label="Datos, modelos fundacionales, cómputo, mundo y acción">
        <span>datos</span><b>→</b><span>modelos fundacionales</span><b>→</b><span>cómputo</span><b>→</b><span>mundo</span><b>→</b><span>acción</span>
      </div>
    </div>

    <div class="opening-v63__speaker">
      <img src="/brand/angel-urbina-ponente.png" alt="Angel A. Urbina">
      <div>
        <strong>Angel A. Urbina</strong>
        <span>Centre d’Amics de Reus · 2026</span>
      </div>
    </div>
    <div class="opening-v56__source">NVIDIA Cosmos · vídeo oficial · bucle completo</div>
  </section>
</template>

<style scoped>
.opening-v56{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;overflow:hidden!important;box-sizing:border-box!important;background:#02060d!important;color:#fff!important;font-family:system-ui,-apple-system,"Segoe UI",sans-serif!important}
.opening-v56__veil{position:absolute!important;z-index:1!important;inset:0!important;background:linear-gradient(90deg,rgba(1,5,12,.84) 0%,rgba(2,7,15,.70) 38%,rgba(2,8,17,.26) 66%,rgba(2,7,14,.04) 100%),linear-gradient(0deg,rgba(1,5,12,.56),transparent 52%,rgba(1,5,12,.10))!important}
.opening-v56__grid{position:absolute!important;z-index:2!important;inset:0!important;opacity:.09!important;background-image:linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)!important;background-size:52px 52px!important;pointer-events:none!important}
.opening-v56__content{position:absolute!important;z-index:3!important;left:60px!important;top:70px!important;width:650px!important;max-width:66%!important}
.opening-v56__kicker{display:flex!important;align-items:center!important;gap:10px!important;color:#7feaff!important;font-size:9.5px!important;font-weight:850!important;letter-spacing:.18em!important;line-height:1.2!important}.opening-v56__kicker span{display:block!important;width:34px!important;height:1px!important;background:#7feaff!important}
.opening-v56 .opening-v56__headline{margin:26px 0 16px!important;color:#fff!important;font-size:59px!important;line-height:.94!important;letter-spacing:-.055em!important;font-weight:900!important;text-shadow:0 5px 28px rgba(0,0,0,.52)!important}.opening-v56 .opening-v56__headline em{font-style:normal!important;color:#a8f0ff!important}
.opening-v56 .opening-v56__lead{margin:0!important;width:590px!important;max-width:100%!important;color:#d8e5f4!important;font-size:15.2px!important;line-height:1.42!important;font-weight:500!important;text-shadow:0 2px 12px rgba(0,0,0,.45)!important}
.opening-v56__flow{display:flex!important;align-items:center!important;flex-wrap:wrap!important;gap:7px!important;margin-top:23px!important;color:#dcecff!important;font-size:8.8px!important;font-weight:850!important;letter-spacing:.06em!important;text-transform:uppercase!important}.opening-v56__flow span{padding:6px 9px!important;border:1px solid rgba(207,240,255,.23)!important;border-radius:999px!important;background:rgba(3,12,25,.68)!important;backdrop-filter:blur(8px)!important}.opening-v56__flow b{color:#7feaff!important;font-size:13px!important}
.opening-v56__author,.opening-v56__source{position:absolute!important;z-index:3!important;bottom:24px!important;font-weight:750!important;line-height:1!important}.opening-v56__author{left:60px!important;color:#b7c7da!important;font-size:9px!important;letter-spacing:.04em!important}.opening-v56__source{right:28px!important;color:rgba(183,235,248,.66)!important;text-transform:uppercase!important;font-size:7.2px!important;letter-spacing:.10em!important}

.opening-v63__speaker{
  position:absolute!important;
  z-index:4!important;
  left:60px!important;
  bottom:18px!important;
  display:flex!important;
  align-items:center!important;
  gap:11px!important;
  padding:7px 11px 7px 7px!important;
  border:1px solid rgba(222,240,255,.14)!important;
  border-radius:999px!important;
  background:rgba(4,13,26,.64)!important;
  box-shadow:0 12px 38px rgba(0,0,0,.22)!important;
  backdrop-filter:blur(11px)!important;
}
.opening-v63__speaker img{
  width:42px!important;
  height:42px!important;
  border-radius:50%!important;
  object-fit:cover!important;
  object-position:50% 27%!important;
  border:1px solid rgba(255,255,255,.28)!important;
}
.opening-v63__speaker>div{
  display:grid!important;
  gap:2px!important;
}
.opening-v63__speaker strong{
  color:#fff!important;
  font-size:10.5px!important;
  line-height:1.05!important;
  font-weight:850!important;
}
.opening-v63__speaker span{
  color:#92a7bf!important;
  font-size:7.6px!important;
  line-height:1.05!important;
  letter-spacing:.025em!important;
}

</style>
