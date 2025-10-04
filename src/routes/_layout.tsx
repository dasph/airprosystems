import { define } from '~/utils.ts'

import Header from '~/islands/header.tsx'

import { composeI18n } from '~/locales/mod.ts'

export default define.layout(({ Component, state: { t } }) => (
  <>
    <Header t={composeI18n(t, 'generic', ['offerings', 'contact'])} />

    <main>
      <Component />
    </main>
  </>
))
