import type { HTMLAttributes } from 'preact'

import { Axis } from '~/enums/mod.ts'

type Props = HTMLAttributes<HTMLDivElement> & {
  axis?: Axis
}

const Spacer = ({ class: className = '' }: HTMLAttributes<SVGSVGElement>) => (
  <svg viewBox='0 0 15 15' aria-hidden='true' class={`absolute size-[15px] fill-white/10 ${className}`}>
    <path d='M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z' />
  </svg>
)

export default ({ axis, children, class: className = '', ...props }: Props) => (
  <div class={`group/item relative ${className}`} {...props}>
    {axis === Axis.VERTICAL
      ? (
        <>
          <Spacer class='-top-2 -left-2 hidden group-first/item:block' />
          <Spacer class='-top-2 -right-2' />
          <Spacer class='-bottom-2 -left-2' />
          <Spacer class='-bottom-2 -right-2 hidden group-last/item:block' />
        </>
      )
      : (
        <>
          <Spacer class='-top-2 -left-2 hidden group-first/item:block' />
          <Spacer class='-top-2 -right-2' />
          <Spacer class='-bottom-2 -left-2 hidden group-first/item:group-last/row:block' />
          <Spacer class='-right-2 -bottom-2 hidden group-last/row:block' />
        </>
      )}

    {children}
  </div>
)
