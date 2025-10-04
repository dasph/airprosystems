import type { HTMLAttributes } from 'preact'

type Props = HTMLAttributes<SVGSVGElement>

export default (props: Props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    viewBox='0 0 18 14'
    stroke='currentColor'
    stroke-width='2'
    {...props}
  >
    <path d='M1 1H17M1 7H17M1 13H17' />
  </svg>
)
