<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { page } from '$app/state'

  import { clickOutside } from '$lib/composables/clickOutside'

  import { Locales } from '$lib/enums'
  import { localeToPrefix } from '$lib/helpers'

  import Link from '$lib/ui/atoms/Link.svelte'
  import IconButton from '$lib/ui/atoms/IconButton.svelte'

  import Chevron from '$lib/ui/icons/Chevron.svelte'

  let open = $state(false)

  const locale = $derived(page.data.locale)
</script>

<div class="relative" {@attach clickOutside(() => (open = false))}>
  <IconButton
    class="gap-1.5 bg-white/50 px-2.5  text-sm  backdrop-blur-sm dark:bg-gray-900/25"
    aria-label={$_('component.header.selectLanguage')}
    aria-expanded={open}
    aria-haspopup="listbox"
    onclick={() => (open = !open)}
  >
    <span class="min-w-4">{locale}</span>

    <Chevron class={['h-4 w-4 shrink-0 transition-transform', { 'rotate-180': open }]} />
  </IconButton>

  <ul
    role="listbox"
    class={[
      'absolute right-0 z-50 mt-1.5 min-w-full overflow-hidden rounded-lg border border-gray-200 bg-white py-1 shadow-lg shadow-gray-200/50 dark:border-gray-700 dark:bg-gray-900 dark:shadow-none',
      { hidden: !open },
    ]}
  >
    {#each Object.values(Locales) as option}
      <li role="option" aria-selected={option === locale}>
        <Link
          href={localeToPrefix(option)}
          no-locale
          data-sveltekit-reload
          data-sveltekit-preload-data="off"
          class={[
            'block px-3 py-1.5 text-sm transition-colors',
            option === locale
              ? 'bg-gray-100 font-medium text-gray-900 dark:bg-gray-800 dark:text-white'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white',
          ]}
          onclick={() => (open = false)}
        >
          {option}
        </Link>
      </li>
    {/each}
  </ul>
</div>
