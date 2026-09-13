<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{
  opacity?: number
  poster?: string
}>(), {
  opacity: 1,
  poster: '/media/ai-world-foundation-poster.jpg',
})

const VIDEO_ID = '9Uch931cDx8'
const mount = ref<HTMLDivElement | null>(null)
const playing = ref(false)
const showManualPlay = ref(false)
let player: any = null
let manualTimer: number | undefined
let retryTimer: number | undefined

let apiPromise: Promise<any> | null = null

function loadYouTubeApi(): Promise<any> {
  const w = window as any
  if (w.YT?.Player) return Promise.resolve(w.YT)
  if (apiPromise) return apiPromise

  apiPromise = new Promise((resolve, reject) => {
    const previousReady = w.onYouTubeIframeAPIReady
    w.onYouTubeIframeAPIReady = () => {
      if (typeof previousReady === 'function') previousReady()
      resolve(w.YT)
    }

    let script = document.querySelector<HTMLScriptElement>('script[data-aau-youtube-api="1"]')
    if (!script) {
      script = document.createElement('script')
      script.src = 'https://www.youtube.com/iframe_api'
      script.async = true
      script.dataset.aauYoutubeApi = '1'
      script.onerror = () => reject(new Error('No se pudo cargar YouTube IFrame API'))
      document.head.appendChild(script)
    }

    window.setTimeout(() => {
      if (w.YT?.Player) resolve(w.YT)
    }, 1200)
  })

  return apiPromise
}

function forcePlay() {
  if (!player) return
  try {
    player.mute?.()
    player.setVolume?.(0)
    player.playVideo?.()
  } catch {
    // El poster local permanece visible hasta que el navegador permita la reproducción.
  }
}

onMounted(async () => {
  try {
    const YT = await loadYouTubeApi()
    if (!mount.value) return

    player = new YT.Player(mount.value, {
      videoId: VIDEO_ID,
      width: '100%',
      height: '100%',
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 0,
        disablekb: 1,
        fs: 0,
        loop: 1,
        playlist: VIDEO_ID,
        playsinline: 1,
        rel: 0,
        iv_load_policy: 3,
        cc_load_policy: 0,
        enablejsapi: 1,
        origin: window.location.origin,
      },
      events: {
        onReady(event: any) {
          try {
            const iframe = event.target.getIframe?.()
            iframe?.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture')
            iframe?.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin')
            iframe?.setAttribute('tabindex', '-1')
          } catch {}
          forcePlay()
          retryTimer = window.setTimeout(forcePlay, 650)
        },
        onStateChange(event: any) {
          if (event.data === YT.PlayerState.PLAYING) {
            playing.value = true
            showManualPlay.value = false
          }
          if (event.data === YT.PlayerState.ENDED) {
            try {
              event.target.seekTo(0, true)
              event.target.playVideo()
            } catch {}
          }
        },
      },
    })

    // Firefox puede bloquear el autoplay de un iframe hasta el primer gesto.
    // En ese caso aparece un control discreto; el poster nunca desaparece.
    manualTimer = window.setTimeout(() => {
      if (!playing.value) showManualPlay.value = true
    }, 2400)

    window.addEventListener('pointerdown', forcePlay, { passive: true })
    window.addEventListener('keydown', forcePlay)
    window.addEventListener('focus', forcePlay)
  } catch {
    showManualPlay.value = true
  }
})

onBeforeUnmount(() => {
  if (manualTimer) window.clearTimeout(manualTimer)
  if (retryTimer) window.clearTimeout(retryTimer)
  window.removeEventListener('pointerdown', forcePlay)
  window.removeEventListener('keydown', forcePlay)
  window.removeEventListener('focus', forcePlay)
  try { player?.destroy?.() } catch {}
  player = null
})
</script>

<template>
  <div class="nvidia-cosmos-bg" aria-hidden="true">
    <img class="nvidia-cosmos-bg__poster" :src="props.poster" alt="">
    <div
      ref="mount"
      class="nvidia-cosmos-bg__player"
      :class="{ 'nvidia-cosmos-bg__player--playing': playing }"
      :style="{ opacity: playing ? String(props.opacity) : '0' }"
    />
    <button
      v-if="showManualPlay"
      class="nvidia-cosmos-bg__play"
      type="button"
      aria-label="Activar vídeo oficial de NVIDIA Cosmos"
      @click.stop="forcePlay"
    >
      ▶ Activar vídeo NVIDIA
    </button>
  </div>
</template>

<style scoped>
.nvidia-cosmos-bg{position:absolute!important;inset:0!important;overflow:hidden!important;background:#02060d!important;pointer-events:none!important}
.nvidia-cosmos-bg__poster{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;object-fit:cover!important;object-position:center!important;opacity:1!important}
.nvidia-cosmos-bg__player{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;opacity:0!important;transition:opacity .65s ease!important;pointer-events:none!important;background:#02060d!important}
.nvidia-cosmos-bg__player--playing{opacity:1!important}
.nvidia-cosmos-bg__player :deep(iframe){position:absolute!important;inset:0!important;width:100%!important;height:100%!important;border:0!important;pointer-events:none!important}
.nvidia-cosmos-bg__play{position:absolute!important;right:22px!important;bottom:19px!important;z-index:8!important;pointer-events:auto!important;border:1px solid rgba(163,235,255,.35)!important;border-radius:999px!important;padding:8px 13px!important;background:rgba(2,10,22,.78)!important;color:#b9f4ff!important;font:700 8px/1 system-ui,-apple-system,"Segoe UI",sans-serif!important;letter-spacing:.08em!important;text-transform:uppercase!important;backdrop-filter:blur(10px)!important;cursor:pointer!important}
</style>
