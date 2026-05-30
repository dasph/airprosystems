<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements'

  const props: HTMLAttributes<SVGElement> = $props()
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" {...props}>
  <ellipse cx="990" cy="970" rx="580" ry="355" filter="url(#cloud-blur-150)" fill="#9641c1" />

  <ellipse cx="990" cy="1000" rx="455" ry="280" filter="url(#cloud-blur-100)" fill="#ff94c8" />

  <ellipse cx="405" cy="1050" rx="450" ry="330" filter="url(#cloud-blur-150)" fill="#007fec" />

  <ellipse cx="780" cy="985" rx="260" ry="205" filter="url(#cloud-blur-100)" fill="#ffe8ae" />

  <defs>
    <filter id="cloud-blur-100" filterUnits="userSpaceOnUse">
      <feGaussianBlur stdDeviation="100" />
    </filter>

    <filter id="cloud-blur-150" filterUnits="userSpaceOnUse">
      <feGaussianBlur stdDeviation="150" />
    </filter>
  </defs>
</svg>
