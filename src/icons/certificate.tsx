import type { HTMLAttributes } from 'preact'

type Props = HTMLAttributes<SVGSVGElement>

export default (props: Props) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20' {...props}>
    <path d='M2 5c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v3.15a4.5 4.5 0 0 0-1-.68V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h7.26l.24.33V15H4a2 2 0 0 1-2-2V5Z' />
    <path d='M18.5 11.5c0 .95-.38 1.82-1 2.45V18a.5.5 0 0 1-.8.4l-1.4-1.05a.5.5 0 0 0-.6 0l-1.4 1.05a.5.5 0 0 1-.8-.4v-4.05A3.49 3.49 0 0 1 15 8a3.5 3.5 0 0 1 3.5 3.5ZM15 15a3.4 3.4 0 0 1-1.5-.34v2.09l1.24-.75a.5.5 0 0 1 .52 0l1.24.75v-2.09A3.4 3.4 0 0 1 15 15Zm0-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM5 6.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm.5 4.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z' />
  </svg>
)
