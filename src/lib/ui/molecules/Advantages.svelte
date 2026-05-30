<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { Component } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import Crew from '$lib/ui/icons/Crew.svelte'
  import Speed from '$lib/ui/icons/Speed.svelte'
  import Certificate from '$lib/ui/icons/Certificate.svelte'

  type Card = {
    icon: Component
    title: string
    description: string
  }

  const cards: Card[] = [Certificate, Speed, Crew].map((icon, index) => ({
    icon,
    title: $_(`component.advantages.items.${index}.title`),
    description: $_(`component.advantages.items.${index}.description`),
  }))

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()
</script>

{#snippet card(props: Card)}
  <div class="flex gap-6">
    <props.icon class="w-8 self-start" />

    <div class="w-[calc(100%-3rem)] space-y-4">
      <h2 class="text-md font-medium md:text-lg">{props.title}</h2>

      <p class="text-sm text-gray-500 md:text-base dark:text-gray-300">{props.description}</p>
    </div>
  </div>
{/snippet}

<section class={['mt-8 md:mt-12 md:mb-4', className]} {...props}>
  <div class="contained mx-auto px-4 py-6 sm:px-6">
    <div class="grid gap-6 text-gray-800 md:grid-cols-2 lg:grid-cols-3 xl:gap-8 dark:text-white">
      {#each cards as item}
        {@render card(item)}
      {/each}
    </div>
  </div>
</section>
