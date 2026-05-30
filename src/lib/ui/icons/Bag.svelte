<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements'

  const props: HTMLAttributes<SVGElement> = $props()
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 52 52"
  fill="currentColor"
  clip-rule="evenodd"
  fill-rule="evenodd"
  {...props}
>
  <path
    d="M45 48H7a4 4 0 0 1-4-4l4-24c.678-3.442 2.668-4 4.877-4h2.652C16.037 9.052 20.602 4 26 4s9.963 5.052 11.471 12h2.652c2.209 0 4.199.558 4.877 4l4 24a4 4 0 0 1-4 4ZM26 6c-4.352 0-8.045 4.178-9.418 10h18.837C34.045 10.178 30.353 6 26 6Zm17 14c-.308-1.351-.957-2-2.37-2h-2.828c.123.976.198 1.975.198 3a1 1 0 1 1-2 0c0-1.027-.069-2.031-.201-3H16.201A22.413 22.413 0 0 0 16 21a1 1 0 1 1-2 0c0-1.025.075-2.024.197-3h-2.828c-1.412 0-2.06.649-2.369 2L5 44a2 2 0 0 0 2 2h38a2 2 0 0 0 2-2l-4-24Z"
  />
</svg>
