<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements'

  const { children, class: className, ...props }: HTMLAttributes<HTMLDivElement> = $props()
</script>

{#snippet line(className: string)}
  <div class={['absolute inset-x-0 border-black/10 dark:border-white/5', className]}></div>
{/snippet}

<div class={['group/row relative isolate pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)]', className]} {...props}>
  <div aria-hidden="true" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2">
    {@render line('top-0 border-t')}
    {@render line('top-2 border-t')}
    {@render line('bottom-0 hidden border-b group-last/row:block')}
    {@render line('bottom-2 hidden border-b group-last/row:block')}
  </div>

  {@render children?.()}
</div>
