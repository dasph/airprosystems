import type { FreshContext } from '$fresh/server.ts'

import t from '~/middlewares/i18next.ts'

export const handler = (_req: Request, ctx: FreshContext): Promise<Response> => {
  Object.assign(ctx.state, { t })

  return ctx.next()
}
