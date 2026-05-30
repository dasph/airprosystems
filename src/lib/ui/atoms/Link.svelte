<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements'

  import { Section } from '$lib/enums'
  import { isExternalUrl, isInEnum, scrollIntoView } from '$lib/helpers'

  type Props = HTMLAnchorAttributes

  const { children, onclick, class: className, ...props }: Props = $props()

  const isSection = $derived.by(() => {
    const section = !!props.href && props.href.startsWith('#') && props.href.slice(1)

    return isInEnum(section, Section) ? section : false
  })

  const isExternal = $derived(props.href && !isSection && isExternalUrl(props.href))
</script>

<a
  onclick={(event) => (onclick?.(event), isSection && scrollIntoView(isSection)(event))}
  class={[
    'text-blue-950 transition-colors duration-300 hover:text-blue-700 dark:text-white dark:hover:text-blue-400',
    className,
  ]}
  {...isExternal && { target: '_blank', rel: 'noopener' }}
  {...props}
>
  {@render children?.()}
</a>
