import { signal } from '@preact/signals'
import { IS_BROWSER } from 'fresh/runtime'

export const scroll = signal(0)

const event = () => (scroll.value = globalThis.scrollY / (globalThis.document.documentElement.scrollHeight - globalThis.innerHeight))

IS_BROWSER && event()

globalThis.addEventListener('scroll', event)
