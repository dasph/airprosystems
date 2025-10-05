import { define } from '~/utils.ts'

import Hero from '~/components/hero.tsx'
import Advantages from '~/components/advantages.tsx'

import { composeI18n } from '~/locales/mod.ts'

export default define.page(({ state: { t } }) => (
  <>
    <Hero t={{ ...composeI18n(t, 'generic', ['contact']), ...composeI18n(t, 'component.hero', ['title', 'description', 'slogan', 'more']) }} />

    <Advantages items={[...Array(3)].map((_, index) => composeI18n(t, `component.advantages.items.${index}`, ['title', 'description']))} />
  </>
))
