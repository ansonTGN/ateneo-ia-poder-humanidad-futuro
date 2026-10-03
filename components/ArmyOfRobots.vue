<script setup lang="ts">
import { computed } from 'vue'
import { presentationLang } from '../i18n/presentation'
const content = {
  "es": {
    "kicker": "Poder · Ucrania · anuncio de 2026",
    "title": "La guerra también busca autonomía",
    "caption": "Army of Robots propone máquinas para misiones peligrosas frente a la invasión rusa. La autonomía completa es un objetivo del proyecto, no una capacidad probada por estas imágenes.",
    "caveat": "Se anunció a Alex Karp, CEO de Palantir, como inversor en una empresa de Fedorov. No confirma financiación corporativa de Palantir para este programa.",
    "badge": "VÍDEO GENERADO CON IA · CONCEPTO",
    "sourceLabel": "anuncio conceptual",
    "source": "Mykhailo Fedorov · 26/09/2026. Vídeo difundido por Kyiv Independent. La autonomía letal no queda demostrada."
  },
  "ca": {
    "kicker": "Poder · Ucraïna · anunci de 2026",
    "title": "La guerra també busca autonomia",
    "caption": "Army of Robots proposa màquines per a missions perilloses davant la invasió russa. L’autonomia completa és un objectiu del projecte, no una capacitat provada per aquestes imatges.",
    "caveat": "Es va anunciar Alex Karp, CEO de Palantir, com a inversor en una empresa de Fedorov. No confirma finançament corporatiu de Palantir per a aquest programa.",
    "badge": "VÍDEO GENERAT AMB IA · CONCEPTE",
    "sourceLabel": "anunci conceptual",
    "source": "Mykhailo Fedorov · 26/09/2026. Vídeo difós per Kyiv Independent. L’autonomia letal no queda demostrada."
  },
  "en": {
    "kicker": "Power · Ukraine · 2026 announcement",
    "title": "War also seeks autonomy",
    "caption": "Army of Robots proposes machines for dangerous missions against the Russian invasion. Full autonomy is a project objective, not a capability proved by these images.",
    "caveat": "Alex Karp, Palantir’s CEO, was announced as an investor in a Fedorov company. This does not confirm corporate Palantir funding for this programme.",
    "badge": "AI-GENERATED VIDEO · CONCEPT",
    "sourceLabel": "concept announcement",
    "source": "Mykhailo Fedorov · 26 Sep 2026. Video shared by Kyiv Independent. Lethal autonomy is not demonstrated."
  }
}
const entry = computed(() => content[presentationLang.value])
</script>
<template>
  <div class="army-of-robots" data-native-i18n>
    <ShortVideo
      company="Mykhailo Fedorov · Army of Robots"
      video-src="/media/army-of-robots-announcement-20260926.mp4"
      poster="/media/army-of-robots-poster-20260926.jpg"
      source-link="https://kyivindependent.com/ex-defense-minister-fedorov-announces-new-army-of-robots-initiative-in-latest-move-since-leaving-office/"
      :source-label="entry.sourceLabel"
      :badge="entry.badge"
      :kicker="entry.kicker"
      :title="entry.title"
      :caption="entry.caption"
      :caveat="entry.caveat"
      :end="60"
    />
    <div class="source">{{ entry.source }}</div>
  </div>
</template>
<style scoped>
.army-of-robots{height:100%;min-height:0}
</style>
