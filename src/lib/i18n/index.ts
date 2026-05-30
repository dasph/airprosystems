import { init, register } from 'svelte-i18n'

import { Locales } from '$lib/enums'

export const i18n = async () => {
  register(Locales.PL, () => import('$lib/i18n/locales/pl.json'))

  return init({
    fallbackLocale: Locales.PL,
    initialLocale: Locales.PL,
  })
}
