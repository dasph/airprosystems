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
    d="M49 42a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V13a4 4 0 0 1 4-4h20.171l8.099-2.934a.99.99 0 0 1 1.268.589L37.391 9H41a4 4 0 0 1 4 4v2a4 4 0 0 1 4 4v23ZM7 11a2 2 0 0 0 0 4h3.634c.013-.005.021-.016.034-.021L21.65 11H7Zm29.078.181-1.062-2.924L32.964 9h.003l-5.514 2h-.01l-11.039 4h21.062l-1.388-3.819ZM43 13a2 2 0 0 0-2-2h-2.883l1.454 4H43v-2Zm2 4H7c-.732 0-1.41-.211-2-.555V42a3 3 0 0 0 3 3h36a3 3 0 0 0 3-3v-7h-4a4 4 0 0 1 0-8h4v-8a2 2 0 0 0-2-2Zm2 16v-4h-4a2 2 0 0 0 0 4h4Zm-4-3h2v2h-2v-2Z"
  />
</svg>
