import { define } from '~/utils.ts'

import t from '~/middlewares/i18next.ts'

export default define.middleware((ctx) => {
  Object.assign(ctx.state, { t })

  return ctx.next()
})
