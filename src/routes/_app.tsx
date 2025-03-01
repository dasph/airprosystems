import { defineApp } from '$fresh/server.ts'

export default defineApp<State>((_req, { Component, state: { t } }) => {
  return (
    <html>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{t('generic.brand')}</title>
        <link rel='stylesheet' href='/styles.css' />
      </head>
      <body>
        <Component />
      </body>
    </html>
  )
})
