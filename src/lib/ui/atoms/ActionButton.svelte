<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements'

  import Link from '$lib/ui/atoms/Link.svelte'

  type Props = HTMLAnchorAttributes

  const { children, class: className, ...props }: Props = $props()
</script>

<Link class={['group action h-11 w-full rounded-lg p-px before:rounded-md sm:w-auto', className]} {...props}>
  <p
    class="relative flex h-full items-center justify-center rounded-[calc(0.5rem-1px)] bg-gray-950 px-[calc(1.5rem-1px)] text-sm font-medium tracking-wide text-white capitalize transition duration-300 group-hover:bg-gray-900"
  >
    {@render children?.()}
  </p>
</Link>
