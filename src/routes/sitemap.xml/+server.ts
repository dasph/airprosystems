import type { RequestHandler } from '@sveltejs/kit'

import type { RouteId } from '$app/types'

import { PUBLIC_ORIGIN } from '$env/static/public'

import { Locales } from '$lib/enums'
import { localeToPrefix } from '$lib/helpers'

const locales = Object.values(Locales).map(localeToPrefix)

const pages: RouteId[] = ['/']

const urls = locales.map((prefix) =>
  pages.map((page) => `<url><loc>${PUBLIC_ORIGIN}${prefix}${page.replace(/\/$/, '')}</loc></url>`),
)

const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
\t${urls.join('\n\t')}
</urlset>`.trim()

export const GET: RequestHandler = () => new Response(sitemap, { headers: { 'content-type': 'application/xml' } })

export const prerender = true
