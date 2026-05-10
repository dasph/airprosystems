import { define } from '~/utils.ts'

import Hero from '~/components/hero.tsx'
import Contact from '~/components/contact.tsx'
import Offerings from '~/components/offerings.tsx'
import Advantages from '~/components/advantages.tsx'
import Testimonials from '~/components/testimonials.tsx'

import { composeI18n } from '~/locales/mod.ts'

export default define.page(({ state: { t } }) => (
  <>
    <Hero t={{ ...composeI18n(t, 'generic', ['contact']), ...composeI18n(t, 'component.hero', ['title', 'description', 'slogan', 'more']) }} />

    <Advantages items={[...Array(3)].map((_, index) => composeI18n(t, `component.advantages.items.${index}`, ['title', 'description']))} />

    <Contact
      t={composeI18n(t, 'component.contact', ['title', 'description'])}
      cards={[...Array(2)].map((_, index) => composeI18n(t, `component.contact.cards.${index}`, ['name', 'phone', 'title', 'description']))}
    />

    <Offerings items={[...Array(9)].map((_, index) => composeI18n(t, `component.offerings.items.${index}`, ['title', 'description']))} />

    <Testimonials
      t={composeI18n(t, 'component.testimonials', ['title', 'description'])}
      items={[...Array(12)].map((_, index) => composeI18n(t, `component.testimonials.items.${index}`, ['name', 'service', 'description']))}
    />
  </>
))
