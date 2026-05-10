import type { FunctionalComponent, HTMLAttributes } from 'preact'

import { Section } from '~/enums/mod.ts'

import Bag from '~/icons/bag.tsx'
import Home from '~/icons/home.tsx'
import Tools from '~/icons/tools.tsx'
import Wallet from '~/icons/wallet.tsx'
import Wrench from '~/icons/wrench.tsx'
import Building from '~/icons/building.tsx'
import Ventilation from '~/icons/ventilation.tsx'
import Recuperation from '~/icons/recuperation.tsx'
import AirConditioner from '~/icons/air-conditioner.tsx'

type Item = Record<'title' | 'description', string>

type Props = {
  items: Item[]
} & HTMLAttributes<HTMLElement>

const icons = [
  AirConditioner,
  Wrench,
  Wallet,
  Bag,
  Ventilation,
  Recuperation,
  Home,
  Building,
  Tools,
]

const Icon: FunctionalComponent<HTMLAttributes<SVGSVGElement> & { index: number }> = ({ index, ...props }) => {
  const Item = icons[index % icons.length]

  return <Item {...props} />
}

export default ({ items, class: className = '', ...props }: Props) => (
  <section id={Section.OFFERINGS} class={`bg-gray-900 dark:bg-gray-950 pt-18 pb-12 md:pt-24 md:pb-20 ${className}`} {...props}>
    <div class='contained grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3'>
      {items.map(({ title, description }, index) => (
        <div key={index} class='flex max-w-xl gap-4'>
          <Icon index={index} class='mt-0.5 h-7 w-7 shrink-0 text-white' />

          <div class='space-y-1'>
            <span class='mb-1 inline-block text-lg font-medium text-white'>{title}</span>

            <p class='text-sm text-gray-400'>{description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
)
