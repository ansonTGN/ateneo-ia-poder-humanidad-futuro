<script setup>
import { computed, ref, watch } from 'vue'
import { useSlideContext } from '@slidev/client/context.ts'
import { presentationLang } from '../i18n/presentation'

const showVideo = ref(false)
const { $slidev, $route } = useSlideContext()
watch(() => $route?.no === $slidev?.nav.currentSlideNo, active => {
  if (!active) showVideo.value = false
})
const playLabel = computed(() => props.videoSrc
  ? ({ es: 'Reproducir · vídeo local', ca: 'Reproduir · vídeo local', en: 'Play · local video' })[presentationLang.value]
  : ({ es: 'Reproducir · requiere conexión', ca: 'Reproduir · requereix connexió', en: 'Play · requires Internet' })[presentationLang.value])

const sourceLinkLabel = computed(() => ({ es: 'Ver fuente y contexto ↗', ca: 'Veure font i context ↗', en: 'View source and context ↗' })[presentationLang.value])

const props = defineProps({
  videoId: { type: String, default: '' },
  videoSrc: { type: String, default: '' },
  poster: { type: String, default: '' },
  sourceLink: { type: String, default: '' },
  sourceLabel: { type: String, default: 'fuente oficial' },
  badge: { type: String, default: '' },
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
  if (props.sourceLink) return props.sourceLink
  const suffix = props.start > 0 ? `&t=${props.start}s` : ''
  return `https://www.youtube.com/watch?v=${props.videoId}${suffix}`
})

const duration = computed(() => props.end > props.start ? `${props.end - props.start} s` : 'clip')
</script>

<template>
  <div class="short-video">
    <div class="short-video__media glass">
      <div class="short-video__screen">
        <video
          v-if="showVideo && videoSrc"
          :src="videoSrc"
          :poster="poster"
          :aria-label="`${company}: ${title}`"
          controls autoplay playsinline preload="metadata"
        />
        <iframe
          v-else-if="showVideo"
          :src="embedUrl"
          :title="`${company}: ${title}`"
          loading="eager"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
        <button v-else class="short-video__preview" data-native-i18n :aria-label="playLabel" @click="showVideo = true">
          <img :src="poster || `/video-posters/${videoId}.jpg`" :alt="company" />
          <span class="short-video__play">▶ <span>{{ playLabel }}</span></span>
        </button>
        <span v-if="badge" class="short-video__badge">{{ badge }}</span>
      </div>
      <div class="short-video__meta">
        <span class="short-video__company">{{ company }}</span>
        <span class="short-video__duration">{{ duration }} · {{ sourceLabel }}</span>
      </div>
      <a class="short-video__fallback" :href="watchUrl" target="_blank" rel="noreferrer noopener">
        {{ videoSrc ? sourceLinkLabel : 'Abrir en YouTube ↗' }}
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
.short-video{height:100%;min-height:0;display:grid;grid-template-columns:minmax(0,1.48fr) minmax(0,.82fr);gap:24px;align-items:center;padding-bottom:14px}
.short-video__media{padding:9px;overflow:hidden;box-shadow:0 30px 100px rgba(0,0,0,.42),0 0 70px rgba(93,230,255,.08)}
.short-video__screen{position:relative;aspect-ratio:16/9;border-radius:16px;overflow:hidden;background:#000}
.short-video__screen:after{content:"";position:absolute;inset:0;pointer-events:none;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08)}
.short-video__screen iframe,.short-video__screen video{position:absolute;inset:0;width:100%;height:100%;border:0;background:#000}
.short-video__preview{position:absolute;inset:0;width:100%;height:100%;padding:0;border:0;cursor:pointer;background:#07111f;color:#fff}
.short-video__preview img{width:100%;height:100%;object-fit:cover;opacity:.82}
.short-video__play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:12px;font-size:30px;background:linear-gradient(180deg,transparent,rgba(0,0,0,.38))}
.short-video__play span{font-size:12px;padding:9px 12px;border:1px solid rgba(255,255,255,.32);border-radius:8px;background:rgba(4,12,24,.82)}
.short-video__meta{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:9px 7px 1px;font-size:10px;letter-spacing:.035em;color:#8fa0b7}
.short-video__company{color:#e7f7ff;font-weight:750}.short-video__duration{white-space:nowrap}
.short-video__fallback{display:inline-flex;margin:5px 7px 1px;font-size:10px;color:#86e8ff;text-decoration:none;border-bottom:1px solid rgba(134,232,255,.35)}
.short-video__copy{min-width:0;align-self:center;padding-right:2px}
.short-video__copy .kicker{font-size:9.5px;margin-bottom:10px;letter-spacing:.12em}
.short-video__copy h1{font-size:31px!important;line-height:1.04!important;letter-spacing:-.038em!important;margin-bottom:13px!important;text-wrap:balance}
.short-video__copy .hero-sub{font-size:14.5px!important;line-height:1.38!important;margin-bottom:0!important;color:#c7d6ea!important}
.video-caveat{margin-top:12px;padding:10px 11px;border-left:2px solid var(--amber);background:linear-gradient(90deg,rgba(255,200,103,.08),transparent);border-radius:0 10px 10px 0;color:#cbd7e7;font-size:10.5px;line-height:1.34}
.short-video__badge{position:absolute;z-index:3;top:12px;left:12px;max-width:calc(100% - 24px);padding:6px 10px;border:1px solid #ffc867;border-radius:6px;background:rgba(5,9,20,.94);color:#ffe1a6;font-size:12px;font-weight:800;letter-spacing:.02em;pointer-events:none}
@media(max-width:900px){.short-video{grid-template-columns:minmax(0,1.38fr) minmax(0,.88fr);gap:17px}.short-video__copy h1{font-size:28px!important}.short-video__copy .hero-sub{font-size:13.5px!important}.video-caveat{font-size:10px}}
</style>
