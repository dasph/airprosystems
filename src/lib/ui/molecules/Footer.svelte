<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { Component } from 'svelte'
  import type { RouteId } from '$app/types'
  import type { HTMLAttributes } from 'svelte/elements'

  import { Section, SocialLink } from '$lib/enums'

  import Tiktok from '$lib/ui/icons/Tiktok.svelte'
  import Facebook from '$lib/ui/icons/Facebook.svelte'
  import Instagram from '$lib/ui/icons/Instagram.svelte'
  import LogoSmall from '$lib/ui/icons/LogoSmall.svelte'
  import LogoLarge from '$lib/ui/icons/LogoLarge.svelte'
  import CloudBlur from '$lib/ui/icons/CloudBlur.svelte'

  import Link from '$lib/ui/atoms/Link.svelte'
  import Lined from '$lib/ui/atoms/Lined.svelte'
  import Spaced from '$lib/ui/atoms/Spaced.svelte'
  import ActionButton from '$lib/ui/atoms/ActionButton.svelte'

  type Link = {
    href: Section | SocialLink | RouteId | `${string}`
    label: string
    logo?: Component
  }

  type Column = {
    name: string
    links: Link[]
  }

  const siteLinks: Link[] = [
    { href: `#${Section.OFFERINGS}`, label: $_('generic.offerings') },
    { href: `#${Section.CONTACT}`, label: $_('generic.contact') },
  ]

  const socialLinks: Link[] = [
    { href: SocialLink.TIKTOK, label: 'TikTok', logo: Tiktok },
    { href: SocialLink.INSTAGRAM, label: 'Instagram', logo: Instagram },
    { href: SocialLink.FACEBOOK, label: 'Facebook', logo: Facebook },
  ]

  const columns: Column[] = [
    { name: $_('component.footer.sections.sitemap'), links: siteLinks },
    { name: $_('component.footer.sections.social'), links: socialLinks },
  ]

  const copyright = `© ${new Date().getFullYear()} ${$_('generic.brand')}`

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()
</script>

{#snippet section({ name, links }: Column)}
  <div class="text-sm/6 font-medium text-gray-600 dark:text-gray-400">
    <h2 class="text-gray-800 dark:text-gray-200">{name}</h2>

    <ul class="mt-4 -ml-1.5 capitalize">
      {#each links as { href, label }}
        <li>
          <Link {href} class="inline-flex p-1.5 transition-colors hover:text-gray-900 dark:hover:text-white">
            {label}
          </Link>
        </li>
      {/each}
    </ul>
  </div>
{/snippet}

<footer class={['relative overflow-x-hidden border border-gray-800/50', className]} {...props}>
  <div class="absolute inset-0 z-0 rotate-180 overflow-hidden">
    <CloudBlur
      class="mx-auto w-full min-w-[80rem] -translate-x-60 -scale-y-100 opacity-50 contrast-150 md:translate-x-0 dark:opacity-25"
    />
  </div>

  <div class="bg-white/50 dark:bg-gray-900/50">
    <div class="contained">
      <div class="pt-20 pb-16 text-center sm:py-24">
        <hgroup>
          <p class="text-primary text-lg font-medium sm:text-2xl">
            {$_('component.footer.banner.subTitle')}
          </p>

          <p class="mx-auto mt-6 max-w-[600px] text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            {$_('component.footer.banner.title')}
          </p>
        </hgroup>

        <p class="mx-auto mt-6 max-w-xs text-sm text-gray-500 sm:text-base dark:text-gray-300">
          {$_('component.footer.banner.description')}
        </p>

        <ActionButton class="mt-6" href={`#${Section.CONTACT}`}>
          {$_('component.footer.banner.action')}
        </ActionButton>
      </div>

      <div class="pb-10">
        <Lined>
          <div class="flex flex-col justify-between gap-y-10 pb-8 sm:flex-row sm:pb-6">
            <div class="flex w-min flex-col">
              <Spaced class="inline-flex gap-2 pt-6 sm:gap-3 lg:gap-4">
                <LogoSmall class="h-7 w-auto sm:h-8 lg:h-9" />

                <LogoLarge class="h-7 w-auto sm:h-8 lg:h-9" />
              </Spaced>

              <div class="mt-2 flex items-center justify-between gap-1">
                {#each socialLinks as link}
                  <Link href={link.href} aria-label={link.label} class="cursor-pointer p-2 transition-opacity hover:opacity-75">
                    <link.logo class="h-5 w-auto" />
                  </Link>
                {/each}
              </div>
            </div>

            <div class="flex gap-x-20 sm:pt-6">
              {#each columns as item}
                {@render section(item)}
              {/each}
            </div>
          </div>
        </Lined>

        <Lined class="flex justify-center">
          <div>
            <Spaced class="px-2 py-3">
              <div class="text-primary text-sm/6">{copyright}</div>
            </Spaced>
          </div>
        </Lined>
      </div>
    </div>
  </div>
</footer>
