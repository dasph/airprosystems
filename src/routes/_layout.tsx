import { define } from '~/utils.ts'

import Header from '~/islands/header.tsx'

import Footer from '~/components/footer.tsx'

import { composeI18n } from '~/locales/mod.ts'

export default define.layout(({ Component, state: { t } }) => (
  <>
    <Header t={composeI18n(t, 'generic', ['offerings', 'contact'])} />

    <main>
      <Component />
    </main>

    <Footer
      t={{
        generic: composeI18n(t, 'generic', ['brand', 'offerings', 'contact']),
        sections: composeI18n(t, 'component.footer.sections', ['sitemap', 'social']),
        banner: composeI18n(t, 'component.footer.banner', ['title', 'subTitle', 'description', 'action']),
      }}
    />
  </>
))
