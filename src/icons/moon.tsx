import type { HTMLAttributes } from 'preact'

type Props = HTMLAttributes<SVGSVGElement>

export default (props: Props) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' aria-hidden='true' viewBox='0 0 24 24' {...props}>
    <path d='M9.53 1.72a.75.75 0 0 1 .16.82A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.46-.69.75.75 0 0 1 .98.98 10.5 10.5 0 0 1-9.69 6.46 10.5 10.5 0 0 1-4.04-20.2.75.75 0 0 1 .82.17z' />
  </svg>
)
