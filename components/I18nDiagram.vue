<script setup lang="ts">
import { computed } from 'vue'
import { presentationLang } from '../i18n/presentation'

const props = defineProps<{
  src: string
}>()

const localizedSrc = computed(() => {
  const lang = presentationLang.value

  if (lang === 'es')
    return props.src

  if (props.src.startsWith('/visuals/'))
    return props.src.replace('/visuals/', `/visuals/${lang}/`)

  return props.src
})
</script>

<template>
  <img :src="localizedSrc">
</template>
