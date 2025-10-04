import { fromEntries } from '~/helpers/common.ts'

import type { State } from '~/utils.ts'

export const composeI18n = <U extends string, T extends U[]>(t: State['t'], path: string, keys: T): { [K in T[number]]: string } =>
  fromEntries<string, T[number], [T[number], string][]>(keys.map((key) => [key, t(`${path}.${key}`)]))
