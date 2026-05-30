<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { HTMLAttributes } from 'svelte/elements'

  import Lined from '$lib/ui/atoms/Lined.svelte'
  import Spaced from '$lib/ui/atoms/Spaced.svelte'

  import { avatars } from '$lib/assets/images/testimonials'

  type Testimonial = {
    name: string
    avatar: string
    service: string
    description: string
  }

  const testimonials: Testimonial[] = avatars.map((avatar, index) => ({
    avatar,
    name: $_(`component.testimonials.items.${index}.name`),
    service: $_(`component.testimonials.items.${index}.service`),
    description: $_(`component.testimonials.items.${index}.description`),
  }))

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()
</script>

{#snippet grid(columnCount: number)}
  {@const columnLength = Math.ceil(testimonials.length / columnCount)}

  {#each { length: columnCount }, index}
    <div class="space-y-5 md:space-y-8">
      {#each testimonials.slice(index * columnLength, (index + 1) * columnLength) as item}
        {@render testimonial(item)}
      {/each}
    </div>
  {/each}
{/snippet}

{#snippet testimonial({ avatar, description, name, service }: Testimonial)}
  <figure class="rounded-xl bg-gradient-to-b from-gray-100 to-white p-px dark:from-gray-800 dark:to-gray-950">
    <div class="space-y-4 rounded-[calc(0.75rem-1px)] bg-gray-50/80 p-[calc(1.5rem-1px)] dark:bg-gray-950/80">
      <div class="flex items-center gap-4">
        <img
          class="h-12 w-12 rounded-full outline-2 -outline-offset-1 outline-gray-50 dark:outline-gray-950"
          src={avatar}
          alt={`${name}'s avatar'`}
        />

        <div class="w-[calc(100%-4rem)]">
          <span class="text-base font-semibold text-blue-950 dark:text-white">{name}</span>

          <p class="text-gray-500 dark:text-gray-400">{service}</p>
        </div>
      </div>

      <blockquote>
        <p class="text-gray-500 dark:text-gray-400">{`“${description}”`}</p>
      </blockquote>
    </div>
  </figure>
{/snippet}

<section class={['overflow-x-hidden pb-16', className]} {...props}>
  <div class="contained">
    <div>
      <Lined class="flex justify-center">
        <div>
          <Spaced>
            <span
              class="mx-auto inline-block p-4 pb-3 text-center text-3xl font-semibold text-blue-950 sm:p-6 md:text-4xl dark:text-white"
            >
              {$_('component.testimonials.title')}
            </span>
          </Spaced>
        </div>
      </Lined>

      <p class="text-center text-base text-gray-600 dark:text-gray-400">{$_('component.testimonials.description')}</p>
    </div>

    <div class="mt-12 grid grid-cols-1 gap-5 md:hidden xl:grid xl:grid-cols-3 xl:gap-8">
      {@render grid(3)}
    </div>

    <div class="mt-12 hidden grid-cols-2 gap-6 md:grid lg:gap-8 xl:hidden">
      {@render grid(2)}
    </div>
  </div>
</section>
