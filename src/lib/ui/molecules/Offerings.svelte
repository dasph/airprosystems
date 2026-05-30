<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { Component } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import { Section } from '$lib/enums'

  import Bag from '$lib/ui/icons/Bag.svelte'
  import Home from '$lib/ui/icons/Home.svelte'
  import Tools from '$lib/ui/icons/Tools.svelte'
  import Wallet from '$lib/ui/icons/Wallet.svelte'
  import Wrench from '$lib/ui/icons/Wrench.svelte'
  import Building from '$lib/ui/icons/Building.svelte'
  import Ventilation from '$lib/ui/icons/Ventilation.svelte'
  import Recuperation from '$lib/ui/icons/Recuperation.svelte'
  import AirConditioner from '$lib/ui/icons/AirConditioner.svelte'

  type Card = {
    icon: Component
    title: string
    description: string
  }

  const cards: Card[] = [AirConditioner, Wrench, Wallet, Bag, Ventilation, Recuperation, Home, Building, Tools].map(
    (icon, index) => ({
      icon,
      title: $_(`component.offerings.items.${index}.title`),
      description: $_(`component.offerings.items.${index}.description`),
    }),
  )

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()
</script>

{#snippet card(props: Card)}
  <div class="flex max-w-xl gap-4">
    <props.icon class="mt-0.5 h-7 w-7 shrink-0 text-white" />

    <div class="space-y-1">
      <span class="mb-1 inline-block text-lg font-medium text-white">{props.title}</span>

      <p class="text-sm text-gray-400">{props.description}</p>
    </div>
  </div>
{/snippet}

<section id={Section.OFFERINGS} class={['bg-gray-900 pt-18 pb-12 md:pt-24 md:pb-20 dark:bg-gray-950', className]} {...props}>
  <div class="contained grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
    {#each cards as item}
      {@render card(item)}
    {/each}
  </div>
</section>
