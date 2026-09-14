import { defineAppSetup } from '@slidev/types'
import { watch } from 'vue'
import {
  applyPresentationLanguage,
  installPresentationI18n,
  presentationLang,
} from '../i18n/presentation'

export default defineAppSetup(({ router }) => {
  installPresentationI18n()

  watch(
    presentationLang,
    (lang) => {
      applyPresentationLanguage(lang)
    },
    { immediate: true },
  )

  router.afterEach(() => {
    requestAnimationFrame(() => applyPresentationLanguage(presentationLang.value))
    setTimeout(() => applyPresentationLanguage(presentationLang.value), 80)
  })
})
