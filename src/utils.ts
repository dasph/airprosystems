import { createDefine } from 'fresh'

export type State = {
  t: (...args: unknown[]) => string
}

export const define = createDefine<State>()
