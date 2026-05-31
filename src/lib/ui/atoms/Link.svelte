<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements'

  import { page } from '$app/state'

  import { Section } from '$lib/enums'
  import { isExternalUrl, isInEnum, scrollIntoView } from '$lib/helpers'

  type Props = HTMLAnchorAttributes & {
    'no-locale'?: boolean
  }

  const { children, onclick, class: className, href: link, 'no-locale': noLocale, ...props }: Props = $props()

  const isMailto = $derived(link?.startsWith('mailto:'))

  const isSection = $derived.by(() => {
    const section = !!link && link.startsWith('#') && link.slice(1)

    return isInEnum(section, Section) ? section : false
  })

  const isExternal = $derived(link && !isSection && !isMailto && isExternalUrl(link))

  const href = $derived.by(() => {
    const prefix = page.params.lang ? `/${page.params.lang}` : ''

    return !noLocale && !isExternal && link?.startsWith('/') ? `${prefix}${link}` : link
  })
</script>

<a
  onclick={(event) => (onclick?.(event), isSection && scrollIntoView(isSection)(event))}
  class={[
    'text-blue-950 transition-colors duration-300 hover:text-blue-700 dark:text-white dark:hover:text-blue-400',
    className,
  ]}
  {href}
  {...isExternal && { target: '_blank', rel: 'noopener' }}
  {...props}
>
  {@render children?.()}
</a>
