<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements'

  const props: HTMLAttributes<SVGElement> = $props()
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="currentColor" {...props}>
  <path
    d="M32 0a32 32 0 1 1 0 64 32 32 0 0 1 0-64Zm1.5 9v30.2a6.6 6.6 0 1 1-4.7-6.3v-7.5a14 14 0 1 0 12 13.8V24A20 20 0 0 0 52 27.5v-7.7A10.8 10.8 0 0 1 41.2 9h-7.7Z"
  />
</svg>
