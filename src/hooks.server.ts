import { langToLocale } from '$lib/helpers'

export const handle = ({ event, resolve }) =>
  resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', langToLocale(event.params.lang)),
  })
