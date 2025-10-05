import type { FunctionalComponent, HTMLAttributes } from 'preact'

import Lined from '~/components/lined.tsx'
import Spaced from '~/components/spaced.tsx'

import { avatars } from '~/assets/images/testimonials/mod.ts'

type T = Record<'title' | 'description', string>

type Item = {
  name: string
  service: string
  description: string
}

type TestimonialProps = {
  name: string
  avatar: string
  service: string
  description: string
} & HTMLAttributes<HTMLElement>

type Props = {
  t: T
  items: Item[]
} & HTMLAttributes<HTMLElement>

const Testimonial: FunctionalComponent<TestimonialProps> = ({ avatar, name, service, description, class: className = '', ...props }: TestimonialProps) => (
  <figure class={`p-px rounded-xl bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-950 ${className}`} {...props}>
    <div class='space-y-4 p-[calc(1.5rem-1px)] rounded-[calc(0.75rem-1px)] bg-gray-50/80 dark:bg-gray-950/80'>
      <div class='flex items-center gap-4'>
        <img class='h-12 w-12 rounded-full outline-2 -outline-offset-1 outline-gray-50 dark:outline-gray-950' src={avatar} alt={`${name} avatar`} />

        <div class='w-[calc(100%-4rem)]'>
          <h3 class='text-base font-semibold text-blue-950 dark:text-white'>
            {name}
          </h3>

          <p class='text-gray-500 dark:text-gray-400'>
            {service}
          </p>
        </div>
      </div>

      <blockquote>
        <p class='text-gray-500 dark:text-gray-400'>
          {`“${description}”`}
        </p>
      </blockquote>
    </div>
  </figure>
)

export default ({ t, items, class: className = '', ...props }: Props) => {
  const Grid = ({ columnCount }: { columnCount: number }) => {
    const columnLength = Math.ceil(items.length / columnCount)

    return [...Array(columnLength)].map((_, outerIndex) => (
      <div class='space-y-5 md:space-y-8'>
        {items.slice(outerIndex * columnLength, (outerIndex + 1) * columnLength).map(({ name, description, service }, innerIndex) => (
          <Testimonial key={outerIndex} avatar={avatars[outerIndex * columnLength + innerIndex]} name={name} description={description} service={service} />
        ))}
      </div>
    ))
  }

  return (
    <section class={`py-16 mt-6 md:mt-12 overflow-x-hidden ${className}`} {...props}>
      <div class='contained'>
        <div>
          <Lined class='flex justify-center'>
            <div>
              <Spaced>
                <span class='mx-auto inline-block p-4 pb-3 text-center text-3xl font-semibold text-blue-950 dark:text-white md:text-4xl sm:p-6'>
                  {t.title}
                </span>
              </Spaced>
            </div>
          </Lined>

          <p class='text-center text-base text-gray-600 dark:text-gray-400'>{t.description}</p>
        </div>

        <div class='mt-12 grid grid-cols-1 gap-5 md:hidden xl:grid xl:grid-cols-3 xl:gap-8'>
          <Grid columnCount={3} />
        </div>

        <div class='mt-12 hidden grid-cols-2 gap-6 md:grid lg:gap-8 xl:hidden'>
          <Grid columnCount={2} />
        </div>
      </div>
    </section>
  )
}
