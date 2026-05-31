<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { HTMLAttributes } from 'svelte/elements'

  import { scroll } from '$lib/composables/scroll'

  import { Section } from '$lib/enums'

  import Link from '$lib/ui/atoms/Link.svelte'
  import IconButton from '$lib/ui/atoms/IconButton.svelte'
  import LanguageSelector from '$lib/ui/molecules/LanguageSelector.svelte'

  import X from '$lib/ui/icons/X.svelte'
  import Sun from '$lib/ui/icons/Sun.svelte'
  import Moon from '$lib/ui/icons/Moon.svelte'
  import Burger from '$lib/ui/icons/Burger.svelte'
  import LogoLarge from '$lib/ui/icons/LogoLarge.svelte'
  import LogoSmall from '$lib/ui/icons/LogoSmall.svelte'

  type LinkProps = {
    href: string
    label: string
  }

  const links: LinkProps[] = [
    { href: `#${Section.CONTACT}`, label: $_('generic.contact') },
    { href: `#${Section.OFFERINGS}`, label: $_('generic.offerings') },
  ]

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()

  let dropdown: HTMLDivElement
  let backdrop: HTMLDivElement

  const scrolled = $derived<boolean>($scroll > 0.01)

  const toggleDropdown = () => {
    dropdown.classList.toggle('scale-y-0')
    backdrop.classList.toggle('scale-y-100')
  }

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle('dark')

    localStorage.setItem('theme', isDark ? 'dark' : 'white')
  }
</script>

{#snippet logo()}
  <Link href="/" class="inline-flex gap-2 sm:gap-3 lg:gap-4" aria-label={$_('generic.brand')}>
    <LogoSmall class="h-7 w-auto sm:h-8 lg:h-9" />
    <LogoLarge class="h-7 w-auto sm:h-8 lg:h-9" />
  </Link>
{/snippet}

{#snippet navLinks(onClick?: () => void)}
  {#each links as { href, label }}
    <Link {href} class="text-sm capitalize" onclick={onClick}>
      {label}
    </Link>
  {/each}
{/snippet}

{#snippet toggleTheme()}
  <IconButton aria-label={$_('component.header.toggleTheme')} onclick={toggleDarkMode}>
    <Sun class="hidden h-5 w-5 text-white duration-300 hover:rotate-180 dark:inline-block" />
    <Moon class="h-4 w-4 text-gray-700 duration-500 hover:rotate-[360deg] dark:hidden" />
  </IconButton>
{/snippet}

<header
  class={[
    'fixed z-40 w-full transition-colors duration-300',
    className,
    { 'bg-white/70 backdrop-blur-md dark:bg-gray-900/70': scrolled },
  ]}
  {...props}
>
  <nav
    class={[
      'relative contained flex items-center justify-between transition-[padding] duration-300',
      scrolled ? 'py-4' : 'py-6',
    ]}
  >
    {@render logo()}

    <div class="-mr-2 flex items-center gap-6 sm:gap-8 lg:hidden">
      <LanguageSelector />

      <IconButton aria-label={$_('component.header.openMenu')} onclick={toggleDropdown}>
        <Burger class="mx-[3px] my-[5px] h-3.5 w-4.5" />
      </IconButton>

      <div
        bind:this={dropdown}
        class="fixed inset-0 z-10 h-screen w-full origin-top scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 lg:hidden dark:bg-gray-900/70"
      ></div>

      <div bind:this={backdrop} class="absolute inset-x-0 top-0 z-10 origin-top-right scale-y-0 transform p-4 transition">
        <div
          class="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md shadow-gray-200/50 dark:border-gray-800 dark:bg-gray-900 dark:shadow-none"
        >
          <div class="flex items-center justify-between px-5 pt-4">
            {@render logo()}

            <IconButton aria-label={$_('component.header.closeMenu')} class="-mr-2" onclick={toggleDropdown}>
              <X class="h-5 w-5" />
            </IconButton>
          </div>

          <div class="flex flex-col items-start space-y-4 px-5 pt-4 pb-3">
            {@render navLinks(toggleDropdown)}

            {@render toggleTheme()}
          </div>
        </div>
      </div>
    </div>

    <div class="hidden items-center gap-x-8 lg:flex">
      {@render navLinks()}

      <LanguageSelector />

      {@render toggleTheme()}
    </div>
  </nav>
</header>
