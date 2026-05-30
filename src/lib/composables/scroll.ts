import { writable } from 'svelte/store'

import { browser } from '$app/environment'

export const scroll = writable<number>(0)

const event = () => scroll.set(globalThis.scrollY / (globalThis.document.documentElement.scrollHeight - globalThis.innerHeight))

browser && event()
browser && globalThis.addEventListener('scroll', event)
