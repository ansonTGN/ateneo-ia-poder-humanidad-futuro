<script setup lang="ts">
import { computed } from 'vue'
import { presentationLang } from '../i18n/presentation'
const label = computed(() => ({ es: 'v7.3 · 3 de octubre de 2026', ca: 'v7.3 · 3 d’octubre de 2026', en: 'v7.3 · 3 October 2026' })[presentationLang.value])
</script>
<template><div class="edition-stamp" data-native-i18n>{{ label }}</div></template>
<style scoped>.edition-stamp{position:absolute;left:36px;bottom:12px;z-index:30;color:#b8cce0;font-size:10px;letter-spacing:.04em}</style>
