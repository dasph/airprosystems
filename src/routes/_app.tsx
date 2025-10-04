import { asset } from 'fresh/runtime'

import { define } from '~/utils.ts'

export default define.page(({ Component, state: { t } }) => (
  <html>
    <head lang='uk'>
      <meta charset='utf-8' />
      <meta name='theme-color' content='#030712' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <title>{t('generic.brand')}</title>

      <link rel='icon' type='image/x-icon' href={`/${asset('favicon.ico')}`} sizes='64x64' />
      <link rel='icon' type='image/svg+xml' href={`/${asset('favicon.svg')}`} />

      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin='anonymous' />
      <link href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap' rel='stylesheet' />

      <script
        // deno-lint-ignore react-no-danger
        dangerouslySetInnerHTML={{
          __html:
            `document.documentElement.classList.toggle('dark', ((theme) => theme ? theme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches)(localStorage.getItem('theme')))`,
        }}
      />
    </head>

    <body class='relative text-gray-950 bg-white dark:text-white dark:bg-gray-950'>
      <Component />
    </body>
  </html>
))
