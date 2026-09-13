<script setup>
import { computed } from 'vue'

const props = defineProps({
  videoId: { type: String, required: true },
  start: { type: Number, default: 0 },
  end: { type: Number, default: 0 },
  company: { type: String, required: true },
  kicker: { type: String, default: 'Vídeo · demo oficial' },
  title: { type: String, required: true },
  caption: { type: String, required: true },
  caveat: { type: String, default: '' },
})

const embedUrl = computed(() => {
  const params = new URLSearchParams({
    rel: '0',
    playsinline: '1',
    controls: '1',
  })
  if (props.start > 0) params.set('start', String(props.start))
  if (props.end > props.start) params.set('end', String(props.end))
  return `https://www.youtube-nocookie.com/embed/${props.videoId}?${params.toString()}`
})

const watchUrl = computed(() => {
  const suffix = props.start > 0 ? `&t=${props.start}s` : ''
  return `https://www.youtube.com/watch?v=${props.videoId}${suffix}`
})

const duration = computed(() => props.end > props.start ? `${props.end - props.start} s` : 'clip')
</script>

<template>
  <div class="short-video">
    <div class="short-video__media glass">
      <div class="short-video__screen">
        <iframe
          :src="embedUrl"
          :title="`${company}: ${title}`"
          loading="eager"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
      <div class="short-video__meta">
        <span class="short-video__company">{{ company }}</span>
        <span class="short-video__duration">{{ duration }} · fuente oficial</span>
      </div>
      <a class="short-video__fallback" :href="watchUrl" target="_blank" rel="noreferrer noopener">
        Abrir en YouTube ↗
      </a>
    </div>

    <div class="short-video__copy">
      <div class="kicker">{{ kicker }}</div>
      <h1>{{ title }}</h1>
      <p class="hero-sub">{{ caption }}</p>
      <div v-if="caveat" class="video-caveat">{{ caveat }}</div>
    </div>
  </div>
</template>

<style scoped>
.short-video{height:100%;display:grid;grid-template-columns:1.55fr .75fr;gap:28px;align-items:center}
.short-video__media{padding:10px;overflow:hidden;box-shadow:0 30px 100px rgba(0,0,0,.42),0 0 70px rgba(93,230,255,.08)}
.short-video__screen{position:relative;aspect-ratio:16/9;border-radius:16px;overflow:hidden;background:#000}
.short-video__screen:after{content:"";position:absolute;inset:0;pointer-events:none;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)}
.short-video__screen iframe{position:absolute;inset:0;width:100%;height:100%;border:0;background:#000}
.short-video__meta{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:11px 8px 2px;font-size:11px;letter-spacing:.04em;color:#8fa0b7}
.short-video__company{color:#e7f7ff;font-weight:750}
.short-video__duration{white-space:nowrap}
.short-video__fallback{display:inline-flex;margin:6px 8px 2px;font-size:11px;color:#86e8ff;text-decoration:none;border-bottom:1px solid rgba(134,232,255,.35)}
.short-video__fallback:hover{color:#fff;border-bottom-color:#fff}
.short-video__copy h1{font-size:39px!important;line-height:1.02!important;margin-bottom:18px!important}
.short-video__copy .hero-sub{font-size:17px!important;line-height:1.45!important}
.video-caveat{margin-top:18px;padding:12px 14px;border-left:2px solid var(--amber);background:linear-gradient(90deg,rgba(255,200,103,.08),transparent);border-radius:0 12px 12px 0;color:#cbd7e7;font-size:12px;line-height:1.42}
@media(max-width:900px){.short-video{grid-template-columns:1.35fr .85fr;gap:18px}.short-video__copy h1{font-size:32px!important}.short-video__copy .hero-sub{font-size:15px!important}}
</style>
