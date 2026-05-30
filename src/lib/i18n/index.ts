import { init, register } from 'svelte-i18n'

export enum Locales {
  EN = 'en',
  PL = 'pl',
  UK = 'uk',
}

export const i18n = () => {
  register(Locales.PL, () => import('$lib/i18n/locales/pl.json'))

  return init({
    fallbackLocale: Locales.PL,
    initialLocale: Locales.PL,
  })
}
