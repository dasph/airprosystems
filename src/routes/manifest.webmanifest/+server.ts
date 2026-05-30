import type { RequestHandler } from '@sveltejs/kit'

import faviconsvg from '$lib/assets/favicon/favicon.svg'

export const prerender = true

const manifest = JSON.stringify({
  start_url: '/',
  name: 'AirPro Systems',
  short_name: 'AirPro Systems',
  display: 'standalone',
  orientation: 'portrait',
  theme_color: '#030712',
  background_color: '#101828',
  icons: [{ src: faviconsvg, type: 'image/svg+xml', sizes: '144x144' }],
})

export const GET: RequestHandler = () => new Response(manifest, { headers: { 'content-type': 'application/manifest+json' } })
