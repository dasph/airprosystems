<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { HTMLAttributes } from 'svelte/elements'

  import Link from '$lib/ui/atoms/Link.svelte'
  import ActionButton from '$lib/ui/atoms/ActionButton.svelte'

  import Ac from '$lib/ui/icons/Ac.svelte'
  import Arrow from '$lib/ui/icons/Arrow.svelte'
  import Couch from '$lib/ui/icons/Couch.svelte'
  import CloudBlur from '$lib/ui/icons/CloudBlur.svelte'

  import { Section } from '$lib/enums'
  import { scrollIntoView } from '$lib/helpers'

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()
</script>

<section
  class={[
    'relative before:absolute before:inset-x-0 before:-bottom-px before:mx-auto before:h-px before:scale-y-110 before:bg-gradient-to-r before:from-transparent before:via-gray-950/10 before:to-transparent dark:before:via-white/20',
    className,
  ]}
  {...props}
>
  <div class="relative overflow-hidden bg-gray-50 pt-28 sm:pt-32 dark:bg-gray-950">
    <div
      aria-hidden="true"
      class="absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-b from-transparent to-gray-50 sm:h-20 dark:to-gray-950"
    ></div>

    <div class="absolute inset-x-0 -top-20">
      <CloudBlur
        class="mx-auto w-full min-w-[80rem] -translate-x-60 -scale-y-100 opacity-50 contrast-150 md:translate-x-0 dark:opacity-25"
      />
    </div>

    <div class="relative contained max-w-7xl">
      <div class="relative z-10 mx-auto text-center sm:w-4/5 sm:pb-8 lg:w-8/12 lg:pb-20">
        <div class="relative mx-auto h-max w-max overflow-hidden rounded-full">
          <div class="absolute inset-0 h-16 w-4 animate-slide">
            <div
              aria-hidden="true"
              class="absolute inset-0 scale-y-125 rotate-[-20deg] bg-gradient-to-r from-transparent via-white/30 dark:via-white/10"
            ></div>
          </div>

          <div
            class="border-whit/50 relative inline-flex items-center rounded-full border border-white/40 bg-gray-950/20 px-2.5 py-1.5 before:absolute before:inset-x-4 before:-bottom-px before:h-px before:w-3/5 before:scale-y-110 before:bg-gradient-to-r before:from-transparent before:via-yellow-50 before:to-transparent dark:border-white/30 dark:bg-white/10"
          >
            <span class="text-sm tracking-wide text-white">
              {$_('component.hero.slogan')}
            </span>
          </div>
        </div>

        <h1 class="mt-8 text-3xl font-bold text-blue-950 sm:text-4xl lg:text-5xl xl:text-6xl dark:text-white">
          {$_('component.hero.title')}
        </h1>

        <p class="mt-5 text-gray-700 sm:text-lg lg:mt-8 dark:text-gray-200">
          {$_('component.hero.description')}
        </p>

        <div class="sm: mt-6 items-center gap-x-4 sm:flex sm:justify-center lg:mt-8 lg:gap-x-6">
          <ActionButton href={`#${Section.CONTACT}`} onclick={scrollIntoView(Section.CONTACT)}>
            {$_('generic.contact')}
          </ActionButton>

          <Link
            href={`#${Section.OFFERINGS}`}
            onclick={scrollIntoView(Section.OFFERINGS)}
            class="focus:ring-opacity-80 mt-4 flex h-11 transform items-center justify-center gap-x-2 rounded-lg border border-gray-300 px-6 text-sm font-medium tracking-wide text-gray-700 capitalize transition-all duration-200 hover:border-gray-400 focus:ring focus:ring-blue-300 sm:mt-0 dark:border-gray-700 dark:text-white dark:hover:border-gray-500 dark:focus:ring-white/10"
          >
            {$_('component.hero.more')}
            <Arrow class="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>

    <div class="contained flex flex-col justify-between pt-16 opacity-85 md:flex-row">
      <Ac class="ml-auto w-1/2 sm:h-[9rem] sm:w-auto md:m-0 2xl:h-[13rem]" />

      <Couch class="w-full sm:h-[16rem] sm:w-auto md:h-[13rem] lg:h-[20rem] xl:h-[27rem]" />
    </div>
  </div>
</section>
