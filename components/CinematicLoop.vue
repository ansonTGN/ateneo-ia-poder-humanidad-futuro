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
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    controls: '0',
    loop: '1',
    playlist: props.videoId,
    playsinline: '1',
    rel: '0',
    disablekb: '1',
  })
  if (props.start > 0) params.set('start', String(props.start))
  if (props.end > props.start) params.set('end', String(props.end))
  return `https://www.youtube-nocookie.com/embed/${props.videoId}?${params.toString()}`
})
</script>

<template>
  <div class="cinematic-loop">
    <iframe
      class="cinematic-loop__video"
      :src="embedUrl"
      :title="title"
      allow="autoplay; encrypted-media; picture-in-picture"
      referrerpolicy="strict-origin-when-cross-origin"
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

    <div class="cinematic-loop__credit">NVIDIA Cosmos · vídeo oficial · reproducción en bucle y sin sonido</div>
    <a class="cinematic-loop__source" :href="watchUrl" target="_blank" rel="noreferrer noopener">fuente ↗</a>
  </div>
</template>

<style scoped>
.cinematic-loop{position:absolute;inset:0;overflow:hidden;background:#02050a}
.cinematic-loop__video{position:absolute;left:50%;top:50%;width:177.78vh;height:100vh;min-width:100%;min-height:56.25vw;transform:translate(-50%,-50%) scale(1.04);border:0;pointer-events:none}
.cinematic-loop__veil{position:absolute;inset:0;background:linear-gradient(90deg,rgba(3,7,15,.91) 0%,rgba(3,8,17,.68) 47%,rgba(2,6,13,.30) 77%,rgba(2,6,13,.46) 100%),linear-gradient(0deg,rgba(2,6,13,.72),transparent 42%,rgba(2,6,13,.28));}
.cinematic-loop__grid{position:absolute;inset:0;opacity:.18;background-image:linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);background-size:54px 54px;mask-image:linear-gradient(90deg,#000,transparent 78%)}
.cinematic-loop__content{position:absolute;z-index:2;left:58px;top:50%;width:min(790px,76%);transform:translateY(-50%)}
.cinematic-loop__eyebrow{display:flex;align-items:center;gap:12px;font-size:11px;text-transform:uppercase;letter-spacing:.19em;font-weight:850;color:#8cecff;margin-bottom:14px}.cinematic-loop__eyebrow:before{content:"";width:38px;height:1px;background:currentColor}
.cinematic-loop h1{font-size:68px!important;line-height:.94!important;letter-spacing:-.06em!important;max-width:750px;margin:0 0 18px!important;background:linear-gradient(110deg,#fff 5%,#b8f4ff 49%,#d2c0ff 80%);-webkit-background-clip:text;color:transparent!important;text-wrap:balance}
.cinematic-loop p{max-width:690px!important;font-size:20px!important;line-height:1.42!important;color:#d5e4f8!important;margin:0 0 26px!important;text-wrap:balance}
.cinematic-loop__flow{display:flex;align-items:center;flex-wrap:wrap;gap:8px;font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:#dcecff}.cinematic-loop__flow span{padding:7px 10px;border:1px solid rgba(200,238,255,.18);border-radius:999px;background:rgba(5,15,28,.44);backdrop-filter:blur(8px)}.cinematic-loop__flow b{color:#75e9ff;font-size:15px}
.cinematic-loop__credit{position:absolute;z-index:2;left:58px;bottom:18px;font-size:9px;letter-spacing:.04em;color:rgba(225,240,255,.54)}
.cinematic-loop__source{position:absolute;z-index:3;right:26px;bottom:18px;font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:rgba(180,239,255,.72);text-decoration:none}.cinematic-loop__source:hover{color:#fff}
@media(max-width:900px){.cinematic-loop__content{left:34px;width:80%}.cinematic-loop h1{font-size:55px!important}.cinematic-loop p{font-size:17px!important}.cinematic-loop__credit{left:34px}}
</style>
