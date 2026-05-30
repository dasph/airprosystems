<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements'

  const props: HTMLAttributes<SVGElement> = $props()
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
  viewBox="0 0 24 24"
  stroke="currentColor"
  stroke-width="2"
  {...props}
>
  <path d="M6 18L18 6M6 6l12 12" />
</svg>
