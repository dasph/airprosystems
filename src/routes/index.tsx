import { define } from '~/utils.ts'

import Hero from '~/components/hero.tsx'

import { composeI18n } from '~/locales/mod.ts'

export default define.page(({ state: { t } }) => (
  <>
    <Hero t={{ ...composeI18n(t, 'generic', ['contact']), ...composeI18n(t, 'component.hero', ['title', 'description', 'slogan', 'more']) }} />
  </>
))
