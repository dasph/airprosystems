import i18next from 'i18next'

import uk from '~/locales/uk.json' with { type: 'json' }

export default await i18next.init({
  fallbackLng: 'uk',
  resources: { uk: { translation: uk } },
})
