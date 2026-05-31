import type { ParamMatcher } from '@sveltejs/kit'

import { Locales } from '$lib/enums'

const locales: string[] = Object.values(Locales)

export const match: ParamMatcher = (param) => locales.includes(param)
