<script lang="ts">
  import { _ } from 'svelte-i18n'

  import type { Action } from 'svelte/action'
  import type { HTMLAttributes } from 'svelte/elements'

  const src =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.6035230901048!2d20.99166167757766!3d52.250584756140064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa7416e36c6159767%3A0xeb0531085595c67f!2sAirProSystems!5e0!3m2!1sen!2spl!4v1780530555343!5m2!1sen!2spl'

  const { class: className, ...props }: HTMLAttributes<HTMLElement> = $props()

  const onIntersect: Action<HTMLIFrameElement> = (node) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return

        Object.assign(entry.target, { src })

        observer.disconnect()
      },
      { threshold: 1, rootMargin: '100%' },
    )

    observer.observe(node)

    return {
      destroy: () => observer.disconnect(),
    }
  }
</script>

<section class={[className]} {...props}>
  <iframe use:onIntersect width="100%" height="450" class="border-0" title={$_('component.mapLocation.title')}></iframe>
</section>
