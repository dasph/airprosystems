<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { Component } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  import { Section } from '$lib/enums'

  import Phone from '$lib/ui/icons/Phone.svelte'
  import UserA from '$lib/ui/icons/UserA.svelte'
  import UserB from '$lib/ui/icons/UserB.svelte'
  import ContactHero from '$lib/ui/icons/ContactHero.svelte'

  type Card = {
    name: string
    phone: string
    title: string
    description: string
    icon: Component
  }

  const cards: Card[] = [
    {
      icon: UserA,
      name: $_('component.contact.cards.0.name'),
      title: $_('component.contact.cards.0.title'),
      description: $_('component.contact.cards.0.description'),
      phone: $_('component.contact.cards.0.phone'),
    },
    {
      icon: UserB,
      name: $_('component.contact.cards.1.name'),
      title: $_('component.contact.cards.1.title'),
      description: $_('component.contact.cards.1.description'),
      phone: $_('component.contact.cards.1.phone'),
    },
  ]

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()
</script>

{#snippet card(props: Card)}
  <a
    href={`tel:+42${props.phone.replaceAll(' ', '')}`}
    class="rounded-2xl bg-gradient-to-b from-gray-200 to-gray-100 p-px shadow-xl dark:from-gray-700/60 dark:to-gray-800/40 dark:shadow-black/30"
  >
    <div class="flex items-center gap-5 rounded-[calc(1rem-1px)] bg-white p-6 sm:p-8 dark:bg-gray-900">
      <div class="shrink-0 self-start rounded-2xl bg-gray-800 p-2 text-white">
        <props.icon class="h-17 w-auto" />
      </div>

      <div class="flex min-w-0 flex-col gap-1 text-gray-900 dark:text-white">
        <h3 class="text-xl font-bold">{props.name}</h3>

        <p class="text-primary mt-1 text-xs font-medium tracking-widest uppercase">{props.title}</p>

        <p class="mt-3 text-sm tracking-tight text-gray-500 dark:text-gray-400">{props.description}</p>

        <span
          class="text-md mt-3 inline-flex items-center gap-2 font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <Phone class="h-[1.33em] w-auto shrink-0" />

          {props.phone}
        </span>
      </div>
    </div>
  </a>
{/snippet}

<section class={['overflow-x-hidden bg-gray-900 text-white dark:bg-gray-950', className]} {...props}>
  <div class="pt-20 pb-40">
    <div class="contained">
      <div class="flex flex-col items-center justify-between lg:flex-row">
        <div class="max-w-lg text-center lg:text-left">
          <h2 class="mb-4 text-4xl font-bold">
            {$_('component.contact.title')}
          </h2>

          <p class="text-gray-400">{$_('component.contact.description')}</p>
        </div>

        <ContactHero class="mt-10 h-64 w-auto opacity-90 sm:h-80 lg:mt-0" />
      </div>
    </div>
  </div>

  <div id={Section.CONTACT} class="contained -mt-42 grid gap-4 pt-18 sm:gap-6 md:grid-cols-2 lg:-mt-41 lg:pt-17">
    {#each cards as item}
      {@render card(item)}
    {/each}
  </div>
</section>
