import { init, register } from 'svelte-i18n'

import { Locales } from '$lib/enums'

export const i18n = async (locale: Locales) => {
  register(Locales.PL, () => import('$lib/i18n/locales/pl.json'))
  register(Locales.BE, () => import('$lib/i18n/locales/be.json'))
  register(Locales.UK, () => import('$lib/i18n/locales/uk.json'))

  return init({
    initialLocale: locale,
    fallbackLocale: locale,
  })
}
