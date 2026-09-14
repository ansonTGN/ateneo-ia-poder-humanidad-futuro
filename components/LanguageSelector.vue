<script setup lang="ts">
import {
  presentationLang,
  setPresentationLanguage,
  type PresentationLang,
} from '../i18n/presentation'

const options: Array<{ code: PresentationLang; short: string; label: string }> = [
  { code: 'es', short: 'ES', label: 'Español' },
  { code: 'ca', short: 'CA', label: 'Català' },
  { code: 'en', short: 'EN', label: 'English' },
]
</script>

<template>
  <aside class="language-selector" aria-label="Idioma · Llengua · Language">
    <div class="language-selector__label">Idioma · Llengua · Language</div>
    <div class="language-selector__buttons">
      <button
        v-for="option in options"
        :key="option.code"
        type="button"
        class="language-selector__button"
        :class="{ 'is-active': presentationLang === option.code }"
        :aria-pressed="presentationLang === option.code"
        @click="setPresentationLanguage(option.code)"
      >
        <strong>{{ option.short }}</strong>
        <span>{{ option.label }}</span>
      </button>
    </div>
  </aside>
</template>

<style scoped>
.language-selector{
  position:absolute;
  z-index:12;
  right:24px;
  top:84px;
  width:178px;
  padding:11px;
  border:1px solid rgba(216,240,255,.16);
  border-radius:17px;
  background:linear-gradient(180deg,rgba(6,16,31,.84),rgba(4,10,22,.72));
  box-shadow:0 18px 56px rgba(0,0,0,.27),inset 0 1px rgba(255,255,255,.045);
  backdrop-filter:blur(14px);
}
.language-selector__label{
  margin:0 0 8px;
  color:#92a7bf;
  font-size:7.2px;
  font-weight:850;
  line-height:1;
  letter-spacing:.08em;
  text-transform:uppercase;
  text-align:center;
}
.language-selector__buttons{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:5px;
}
.language-selector__button{
  appearance:none;
  min-width:0;
  padding:7px 3px 6px;
  border:1px solid rgba(214,239,255,.12);
  border-radius:10px;
  background:rgba(255,255,255,.035);
  color:#aab9ca;
  cursor:pointer;
  transition:border-color .16s ease,background .16s ease,transform .16s ease,color .16s ease;
}
.language-selector__button:hover{
  transform:translateY(-1px);
  border-color:rgba(127,234,255,.42);
  color:#fff;
}
.language-selector__button.is-active{
  border-color:rgba(127,234,255,.62);
  background:linear-gradient(180deg,rgba(93,230,255,.14),rgba(102,136,255,.10));
  box-shadow:0 0 22px rgba(93,230,255,.08);
  color:#fff;
}
.language-selector__button strong{
  display:block;
  font-size:8.5px;
  line-height:1;
  letter-spacing:.06em;
}
.language-selector__button span{
  display:block;
  margin-top:3px;
  overflow:hidden;
  font-size:6.5px;
  line-height:1;
  text-overflow:ellipsis;
  white-space:nowrap;
}
@media(max-width:900px){
  .language-selector{right:14px;top:72px;width:160px;padding:9px}
}
</style>
