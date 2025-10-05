import type { HTMLAttributes } from 'preact'

type Props = HTMLAttributes<HTMLDivElement>

const Line = ({ class: className = '' }: HTMLAttributes<HTMLDivElement>) => <div class={`absolute inset-x-0 border-white/5 ${className}`} />

export default ({ children, class: className = '', ...props }: Props) => (
  <div class={`group/row relative isolate pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)] ${className}`} {...props}>
    <div aria-hidden='true' class='absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2'>
      <Line class='top-0 border-t' />
      <Line class='top-2 border-t' />
      <Line class='bottom-0 hidden border-b group-last/row:block' />
      <Line class='bottom-2 hidden border-b group-last/row:block' />
    </div>

    {children}
  </div>
)
