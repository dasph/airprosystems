import { i18n } from '$lib/i18n'
import { langToLocale } from '$lib/helpers'

export const prerender = true

export const load = async ({ params: { lang } }) => {
  const locale = langToLocale(lang)

  await i18n(locale)

  return { locale }
}
