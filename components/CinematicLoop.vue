<script setup>
import { computed } from 'vue'

const props = defineProps({
  videoId: { type: String, required: true },
  start: { type: Number, default: 0 },
  end: { type: Number, default: 0 },
  eyebrow: { type: String, default: 'IA · 2026' },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
})

const watchUrl = computed(() => `https://www.youtube.com/watch?v=${props.videoId}${props.start > 0 ? `&t=${props.start}s` : ''}`)
const embedUrl = computed(() => {
  const p = new URLSearchParams({
    autoplay: '1', mute: '1', controls: '0', loop: '1', playlist: props.videoId,
    playsinline: '1', rel: '0', disablekb: '1', iv_load_policy: '3', fs: '0',
  })
  if (props.start > 0) p.set('start', String(props.start))
  if (props.end > props.start) p.set('end', String(props.end))
  return `https://www.youtube-nocookie.com/embed/${props.videoId}?${p.toString()}`
})
</script>

<template>
  <section class="cinematic-loop">
    <div class="cinematic-loop__fallback" aria-hidden="true">
      <i></i><i></i><i></i><i></i><i></i><i></i>
    </div>
    <iframe
      class="cinematic-loop__video"
      :src="embedUrl"
      :title="title"
      allow="autoplay; encrypted-media; picture-in-picture"
      referrerpolicy="strict-origin-when-cross-origin"
      loading="eager"
      tabindex="-1"
    />
    <div class="cinematic-loop__veil" />
    <div class="cinematic-loop__grid" />

    <div class="cinematic-loop__content">
      <div class="cinematic-loop__eyebrow">{{ eyebrow }}</div>
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
      <div class="cinematic-loop__flow" aria-label="Fundamentos de la IA actual">
        <span>datos</span><b>→</b><span>modelos fundacionales</span><b>→</b><span>cómputo</span><b>→</b><span>simulación / mundo</span><b>→</b><span>acción</span>
      </div>
    </div>

    <div class="cinematic-loop__credit">NVIDIA Cosmos · vídeo oficial · bucle silencioso</div>
    <a class="cinematic-loop__source" :href="watchUrl" target="_blank" rel="noreferrer noopener">fuente ↗</a>
  </section>
</template>

<style scoped>
.cinematic-loop{position:absolute;inset:0;overflow:hidden;background:#02050a;color:#fff}
.cinematic-loop__fallback{position:absolute;inset:-8%;background:radial-gradient(circle at 68% 38%,rgba(93,230,255,.34),transparent 14%),radial-gradient(circle at 77% 58%,rgba(169,120,255,.28),transparent 18%),radial-gradient(circle at 58% 68%,rgba(63,116,255,.20),transparent 23%),linear-gradient(135deg,#02050a 0%,#061423 48%,#090a1b 100%);overflow:hidden}
.cinematic-loop__fallback:before,.cinematic-loop__fallback:after{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(117,233,255,.09) 1px,transparent 1px),linear-gradient(90deg,rgba(117,233,255,.09) 1px,transparent 1px);background-size:62px 62px;transform:perspective(560px) rotateX(62deg) translateY(31%);transform-origin:50% 100%;opacity:.36}
.cinematic-loop__fallback:after{background-size:124px 124px;filter:blur(1px);opacity:.22}
.cinematic-loop__fallback i{position:absolute;width:9px;height:9px;border-radius:50%;background:#c8f8ff;box-shadow:0 0 24px #5de6ff,0 0 50px rgba(93,230,255,.5)}
.cinematic-loop__fallback i:nth-child(1){left:58%;top:25%}.cinematic-loop__fallback i:nth-child(2){left:72%;top:34%}.cinematic-loop__fallback i:nth-child(3){left:84%;top:48%}.cinematic-loop__fallback i:nth-child(4){left:62%;top:61%}.cinematic-loop__fallback i:nth-child(5){left:76%;top:72%}.cinematic-loop__fallback i:nth-child(6){left:91%;top:28%}
.cinematic-loop__video{position:absolute;z-index:1;left:50%;top:50%;width:177.78vh;height:100vh;min-width:100%;min-height:56.25vw;transform:translate(-50%,-50%) scale(1.055);border:0;pointer-events:none;opacity:.78;background:transparent}
.cinematic-loop__veil{position:absolute;z-index:2;inset:0;background:linear-gradient(90deg,rgba(2,6,14,.96) 0%,rgba(3,9,19,.77) 43%,rgba(2,6,13,.30) 76%,rgba(2,6,13,.52) 100%),linear-gradient(0deg,rgba(2,6,13,.78),transparent 43%,rgba(2,6,13,.30))}
.cinematic-loop__grid{position:absolute;z-index:2;inset:0;opacity:.13;background-image:linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);background-size:54px 54px;mask-image:linear-gradient(90deg,#000,transparent 80%)}
.cinematic-loop__content{position:absolute;z-index:4;left:58px;top:50%;width:min(790px,76%);transform:translateY(-50%)}
.cinematic-loop__eyebrow{display:flex;align-items:center;gap:12px;font:850 11px/1 system-ui,-apple-system,"Segoe UI",sans-serif;text-transform:uppercase;letter-spacing:.19em;color:#8cecff;margin-bottom:14px}.cinematic-loop__eyebrow:before{content:"";width:38px;height:1px;background:currentColor}
.cinematic-loop h1{font-family:system-ui,-apple-system,"Segoe UI",sans-serif!important;font-size:68px!important;line-height:.94!important;letter-spacing:-.06em!important;font-weight:850!important;max-width:750px;margin:0 0 18px!important;background:linear-gradient(110deg,#fff 5%,#b8f4ff 49%,#d2c0ff 80%);-webkit-background-clip:text;color:transparent!important;text-wrap:balance}
.cinematic-loop p{max-width:690px!important;font:500 20px/1.42 system-ui,-apple-system,"Segoe UI",sans-serif!important;color:#d5e4f8!important;margin:0 0 26px!important;text-wrap:balance}
.cinematic-loop__flow{display:flex;align-items:center;flex-wrap:wrap;gap:8px;font:750 11px/1 system-ui,-apple-system,"Segoe UI",sans-serif;text-transform:uppercase;letter-spacing:.08em;color:#dcecff}.cinematic-loop__flow span{padding:7px 10px;border:1px solid rgba(200,238,255,.18);border-radius:999px;background:rgba(5,15,28,.58);backdrop-filter:blur(8px)}.cinematic-loop__flow b{color:#75e9ff;font-size:15px}
.cinematic-loop__credit{position:absolute;z-index:4;left:58px;bottom:18px;font:500 9px/1.2 system-ui,-apple-system,"Segoe UI",sans-serif;letter-spacing:.04em;color:rgba(225,240,255,.54)}
.cinematic-loop__source{position:absolute;z-index:4;right:26px;bottom:18px;font:700 9px/1.2 system-ui,-apple-system,"Segoe UI",sans-serif;letter-spacing:.08em;text-transform:uppercase;color:rgba(180,239,255,.72);text-decoration:none}.cinematic-loop__source:hover{color:#fff}
@media(max-width:900px){.cinematic-loop__content{left:34px;width:82%}.cinematic-loop h1{font-size:55px!important}.cinematic-loop p{font-size:17px!important}.cinematic-loop__credit{left:34px}}
</style>
