import type { HTMLAttributes } from 'preact'

type Props = HTMLAttributes<SVGSVGElement>

export default (props: Props) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' {...props}>
    <path d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3' />
  </svg>
)
