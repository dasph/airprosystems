import { i18n } from '$lib/i18n'

export const prerender = true

export const load = async () => void (await i18n())
