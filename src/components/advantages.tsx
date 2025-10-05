import type { FunctionalComponent, HTMLAttributes } from 'preact'

import Crew from '~/icons/crew.tsx'
import Speed from '~/icons/speed.tsx'
import Certificate from '~/icons/certificate.tsx'

type Item = {
  title: string
  description: string
}

type Props = {
  items: Item[]
} & HTMLAttributes<HTMLElement>

const icons = [Certificate, Speed, Crew]

const Item: FunctionalComponent<Item> = ({ description, title, children }) => (
  <div class='flex gap-6'>
    {children}

    <div class='space-y-4 w-[calc(100%-3rem)]'>
      <h2 class='text-md md:text-lg font-medium'>
        {title}
      </h2>

      <p class='text-sm md:text-base text-gray-500 dark:text-gray-300'>
        {description}
      </p>
    </div>
  </div>
)

export default ({ items, class: className = '', ...props }: Props) => (
  <section {...props} class={`mt-8 md:mt-20 ${className}`}>
    <div class='contained px-4 py-6 mx-auto sm:px-6'>
      <div class='grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8 text-gray-800 dark:text-white'>
        {items.map((props, index) => {
          const Icon = icons[index % icons.length]

          return (
            <Item key={index} {...props}>
              <Icon class='w-8 self-start' />
            </Item>
          )
        })}
      </div>
    </div>
  </section>
)
