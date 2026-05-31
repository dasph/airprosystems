import type { Locales } from '$lib/enums'

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    interface PageData {
      locale: Locales
    }
    // interface PageState {}
    // interface Platform {}
  }
}

export {}
