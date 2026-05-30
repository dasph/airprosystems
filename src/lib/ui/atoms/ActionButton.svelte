<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements'

  import Link from '$lib/ui/atoms/Link.svelte'

  type Props = HTMLAnchorAttributes

  const { children, class: className, ...props }: Props = $props()
</script>

<Link
  class={[
    'group relative inline-block h-11 w-full rounded-lg bg-gradient-to-r from-purple-600 to-sky-500 p-px before:absolute before:inset-0 before:scale-75 before:rounded-md before:bg-gradient-to-r before:from-purple-400 before:to-sky-400 before:opacity-50 before:blur-lg before:transition before:duration-300 hover:before:scale-100 hover:before:opacity-100 focus:before:scale-90 focus:before:opacity-75 active:before:scale-90 sm:w-auto dark:from-purple-600 dark:to-blue-400 dark:before:from-purple-600 dark:before:to-sky-500',
    className,
  ]}
  {...props}
>
  <p
    class="relative flex h-full items-center justify-center rounded-[calc(0.5rem-1px)] bg-gray-950 px-[calc(1.5rem-1px)] text-sm font-medium tracking-wide text-white capitalize transition duration-300 group-hover:bg-gray-900"
  >
    {@render children?.()}
  </p>
</Link>
