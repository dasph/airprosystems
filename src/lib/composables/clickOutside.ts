import type { Attachment } from 'svelte/attachments'

export const clickOutside =
  <T extends HTMLElement>(cleanup: () => void): Attachment<T> =>
  (element) => {
    const onPointerDown = (event: PointerEvent) => !event.composedPath().includes(element) && cleanup()

    document.addEventListener('pointerdown', onPointerDown)

    return () => document.removeEventListener('pointerdown', onPointerDown)
  }
