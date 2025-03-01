import i18next from 'i18next'

import ua from '~/locales/ua.json' with { type: 'json' }

export default await i18next.init({
  fallbackLng: 'ua',
  resources: { ua: { translation: ua } },
})
