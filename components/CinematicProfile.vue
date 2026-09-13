<script setup>
import { computed } from 'vue'
const props = defineProps({ videoId:{type:String,default:'9Uch931cDx8'}, start:{type:Number,default:2}, end:{type:Number,default:34} })
const embedUrl = computed(() => {
  const p = new URLSearchParams({autoplay:'1',mute:'1',controls:'0',loop:'1',playlist:props.videoId,playsinline:'1',rel:'0',disablekb:'1',iv_load_policy:'3',fs:'0'})
  if(props.start>0) p.set('start',String(props.start))
  if(props.end>props.start) p.set('end',String(props.end))
  return `https://www.youtube-nocookie.com/embed/${props.videoId}?${p.toString()}`
})
</script>

<template>
  <section class="finale">
    <div class="finale__fallback" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
    <iframe class="finale__video" :src="embedUrl" title="NVIDIA Cosmos — fondo audiovisual" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" loading="eager" tabindex="-1" />
    <div class="finale__veil"></div>
    <div class="finale__noise"></div>

    <div class="finale__copy">
      <div class="finale__eyebrow">GRACIAS · LA CONVERSACIÓN CONTINÚA</div>
      <h1>La tecnología avanza.<br><span>La dirección sigue siendo humana.</span></h1>
      <p>La cuestión no es sólo qué puede hacer la IA, sino qué capacidades, derechos y responsabilidades queremos conservar mientras la incorporamos al mundo.</p>
      <div class="finale__signature">
        <div class="finale__monogram">AAU</div>
        <div><strong>Angel A. Urbina</strong><small>Ingeniería Industrial · Data Science · Ciberseguridad · Rust / IA</small></div>
      </div>
      <div class="finale__links"><span>github.com/ansonTGN</span><span>linkedin.com/in/angelurbina</span></div>
    </div>

    <aside class="finale__card">
      <div class="finale__card-label">PERFIL PROFESIONAL</div>
      <div class="finale__qr"><img src="/angel-urbina-profile-qr.png" alt="QR al perfil profesional de Angel A. Urbina"></div>
      <div class="finale__scan">Continuemos la conversación</div>
      <p>CV · proyectos · publicaciones · líneas de trabajo</p>
      <a href="https://angelurbinacv.netlify.app/" target="_blank" rel="noopener noreferrer">angelurbinacv.netlify.app ↗</a>
    </aside>

    <div class="finale__footer"><span>IA · sociedad · poder · agencia humana</span><span>NVIDIA Cosmos · vídeo oficial</span></div>
  </section>
</template>

<style scoped>
.finale{position:absolute;inset:0;overflow:hidden;background:#02050a;color:#fff;font-family:system-ui,-apple-system,"Segoe UI",sans-serif}
.finale__fallback{position:absolute;inset:-8%;background:radial-gradient(circle at 73% 33%,rgba(93,230,255,.30),transparent 16%),radial-gradient(circle at 82% 64%,rgba(169,120,255,.30),transparent 20%),radial-gradient(circle at 56% 71%,rgba(67,108,255,.18),transparent 23%),linear-gradient(135deg,#02050a,#071524 50%,#080919);overflow:hidden}
.finale__fallback:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(117,233,255,.09) 1px,transparent 1px),linear-gradient(90deg,rgba(117,233,255,.09) 1px,transparent 1px);background-size:64px 64px;transform:perspective(540px) rotateX(62deg) translateY(30%);transform-origin:50% 100%;opacity:.3}
.finale__fallback i{position:absolute;width:8px;height:8px;border-radius:50%;background:#dcfbff;box-shadow:0 0 22px #5de6ff,0 0 55px rgba(93,230,255,.46)}
.finale__fallback i:nth-child(1){left:62%;top:27%}.finale__fallback i:nth-child(2){left:79%;top:38%}.finale__fallback i:nth-child(3){left:69%;top:70%}.finale__fallback i:nth-child(4){left:91%;top:58%}
.finale__video{position:absolute;z-index:1;left:50%;top:50%;width:177.78vh;height:100vh;min-width:100%;min-height:56.25vw;transform:translate(-50%,-50%) scale(1.06);border:0;pointer-events:none;opacity:.62;background:transparent}
.finale__veil{position:absolute;z-index:2;inset:0;background:linear-gradient(90deg,rgba(2,6,14,.97) 0%,rgba(3,9,18,.86) 48%,rgba(2,6,13,.58) 70%,rgba(2,6,13,.76) 100%),linear-gradient(0deg,rgba(2,6,13,.84),transparent 46%,rgba(2,6,13,.34))}
.finale__noise{position:absolute;z-index:2;inset:0;background-image:linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px);background-size:46px 46px;mask-image:linear-gradient(90deg,#000 0 72%,transparent 100%)}
.finale__copy{position:absolute;z-index:4;left:62px;top:49%;transform:translateY(-50%);width:610px}
.finale__eyebrow{display:flex;align-items:center;gap:11px;font-size:10px;font-weight:850;letter-spacing:.19em;color:#7feaff;margin-bottom:15px}.finale__eyebrow:before{content:"";width:34px;height:1px;background:#7feaff}
.finale h1{margin:0!important;font-size:55px!important;line-height:.96!important;letter-spacing:-.056em!important;font-weight:850!important;color:#fff!important;text-wrap:balance}.finale h1 span{background:linear-gradient(110deg,#fff 5%,#a6f1ff 44%,#c4afff 82%);-webkit-background-clip:text;color:transparent}
.finale__copy>p{margin:20px 0 24px!important;max-width:590px;font-size:15.5px!important;line-height:1.47!important;color:#c4d3e7!important}
.finale__signature{display:flex;align-items:center;gap:13px;padding-top:16px;border-top:1px solid rgba(220,240,255,.15);width:575px}.finale__monogram{width:48px;height:48px;border-radius:15px;display:grid;place-items:center;background:linear-gradient(135deg,#e4fcff,#5de6ff 48%,#a978ff);color:#06101d;font-size:14px;font-weight:900;box-shadow:0 12px 38px rgba(93,230,255,.18)}.finale__signature strong{display:block;font-size:18px;line-height:1.1}.finale__signature small{display:block;margin-top:4px;color:#94a9c4;font-size:10.5px;letter-spacing:.015em}
.finale__links{display:flex;gap:17px;margin-top:13px;font-size:9.5px;color:#8296b0}.finale__links span{white-space:nowrap}
.finale__card{position:absolute;z-index:5;right:58px;top:50%;transform:translateY(-50%);width:280px;padding:21px 21px 20px;border:1px solid rgba(214,241,255,.23);border-radius:28px;background:linear-gradient(180deg,rgba(15,31,54,.86),rgba(5,12,25,.88));box-shadow:0 34px 110px rgba(0,0,0,.52),inset 0 1px rgba(255,255,255,.08);backdrop-filter:blur(18px);text-align:center}.finale__card-label{font-size:9px;font-weight:850;letter-spacing:.19em;color:#93a9c5;margin-bottom:14px}.finale__qr{width:176px;height:176px;margin:0 auto 14px;padding:10px;border-radius:20px;background:#fff;box-shadow:0 16px 50px rgba(93,230,255,.17)}.finale__qr img{width:100%;height:100%;display:block;object-fit:contain}.finale__scan{font-size:17px;font-weight:850;letter-spacing:-.02em}.finale__card p{font-size:10.5px!important;line-height:1.35!important;color:#9fb1c8!important;margin:6px 0 11px!important}.finale__card a{font-size:10.5px!important;font-weight:750;color:#66e9ff!important;text-decoration:none;white-space:nowrap}
.finale__footer{position:absolute;z-index:5;left:62px;right:58px;bottom:16px;padding-top:9px;border-top:1px solid rgba(216,240,255,.12);display:flex;justify-content:space-between;text-transform:uppercase;letter-spacing:.14em;font-size:7.5px;color:rgba(204,222,242,.44)}
@media(max-width:900px){.finale__copy{left:38px;width:55%}.finale h1{font-size:44px!important}.finale__card{right:34px;width:250px}.finale__qr{width:155px;height:155px}.finale__footer{left:38px;right:34px}}
</style>
