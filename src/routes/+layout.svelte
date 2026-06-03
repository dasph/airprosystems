<script lang="ts">
  import { _ } from 'svelte-i18n'

  import { PUBLIC_R2_ORIGIN } from '$env/static/public'

  import faviconsvg from '$lib/assets/favicon/favicon.svg'
  import faviconpng from '$lib/assets/favicon/favicon.png'

  import Header from '$lib/ui/molecules/Header.svelte'
  import Footer from '$lib/ui/molecules/Footer.svelte'

  import './layout.css'

  let { children } = $props()
</script>

<svelte:head>
  <link rel="icon" href={faviconsvg} type="image/svg+xml" />
  <link rel="icon" href={faviconpng} type="image/png" sizes="64x64" />

  <title>{$_('meta.title')}</title>

  <meta name="title" property="og:title" content={$_('meta.title')} />
  <meta name="description" property="og:description" content={$_('meta.description')} />
  <meta name="keywords" content={$_('meta.keywords')} />

  <meta property="og:type" content="website" />

  <meta property="og:image" content={`${PUBLIC_R2_ORIGIN}/opengraph.jpg`} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:alt" content={$_('meta.imagealt')} />

  <meta property="og:image" content={`${PUBLIC_R2_ORIGIN}/opengraph-square.jpg`} />
  <meta property="og:image:width" content="630" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:alt" content={$_('meta.imagealt')} />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap" />

  <script>
    document.documentElement.classList.toggle(
      'dark',
      ((theme) => (theme ? theme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches))(
        localStorage.getItem('theme'),
      ),
    )
  </script>
</svelte:head>

<Header />

<main>
  {@render children()}
</main>

<Footer />
