<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements'

  type Props = {
    external?: boolean
  } & HTMLAnchorAttributes

  const { external, children, class: className, ...props }: Props = $props()
</script>

<a
  {...props}
  {...external && { target: '_blank', rel: 'noopener' }}
  class={[
    'text-blue-950 transition-colors duration-300 hover:text-blue-700 dark:text-white dark:hover:text-blue-400',
    className,
  ]}
>
  {@render children?.()}
</a>
