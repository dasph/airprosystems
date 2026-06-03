<script lang="ts">
  import { page } from '$app/state'
  import { PUBLIC_ORIGIN } from '$env/static/public'

  import { localeToPrefix } from '$lib/helpers'

  import Hero from '$lib/ui/molecules/Hero.svelte'
  import Contact from '$lib/ui/molecules/Contact.svelte'
  import Offerings from '$lib/ui/molecules/Offerings.svelte'
  import Advantages from '$lib/ui/molecules/Advantages.svelte'
  import Testimonials from '$lib/ui/molecules/Testimonials.svelte'
</script>

<svelte:head>
  <meta property="og:url" content={`${PUBLIC_ORIGIN}${localeToPrefix(page.data.locale)}`} />
</svelte:head>

<Hero />

<Advantages />

<Contact />

<Offerings />

<Testimonials />
