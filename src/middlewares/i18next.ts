import i18next from 'i18next'

import pl from '~/locales/pl.json' with { type: 'json' }

export default await i18next.init({
  fallbackLng: 'pl',
  resources: { pl: { translation: pl } },
})
