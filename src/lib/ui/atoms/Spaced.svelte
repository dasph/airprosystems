<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements'

  import { Axis } from '$lib/enums'

  type Props = HTMLAttributes<HTMLDivElement> & {
    axis?: Axis
  }

  const { children, class: className, axis = Axis.HORIZONTAL, ...props }: Props = $props()
</script>

{#snippet spacer(className: string)}
  <svg viewBox="0 0 15 15" aria-hidden="true" class={['absolute size-[15px] fill-black/20 dark:fill-white/10', className]}>
    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
  </svg>
{/snippet}

<div class={['group/item relative', className]} {...props}>
  {#if axis === Axis.VERTICAL}
    {@render spacer('-top-2 -left-2 hidden group-first/item:block')}
    {@render spacer('-top-2 -right-2')}
    {@render spacer('-bottom-2 -left-2')}
    {@render spacer('-bottom-2 -right-2 hidden group-last/item:block')}
  {:else}
    {@render spacer('-top-2 -left-2 hidden group-first/item:block')}
    {@render spacer('-top-2 -right-2')}
    {@render spacer('-bottom-2 -left-2 hidden group-first/item:group-last/row:block')}
    {@render spacer('-right-2 -bottom-2 hidden group-last/row:block')}
  {/if}

  {@render children?.()}
</div>
