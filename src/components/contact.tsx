import type { FunctionComponent, HTMLAttributes } from 'preact'

import { Section } from '~/enums/mod.ts'

import Phone from '~/icons/phone.tsx'
import UserA from '~/icons/user-a.tsx'
import UserB from '~/icons/user-b.tsx'
import ContactHero from '~/icons/contact-hero.tsx'

type T = Record<'title' | 'description', string>

type CardData = Record<'name' | 'phone' | 'title' | 'description', string>

type Props = {
  t: T
  cards: CardData[]
} & HTMLAttributes<HTMLElement>

const Card: FunctionComponent<CardData & { index: number }> = ({ name, title, description, phone, index }) => (
  <a
    href={`tel:+42${phone.replaceAll(' ', '')}`}
    class='p-px rounded-2xl bg-gradient-to-b from-gray-200 to-gray-100 dark:from-gray-700/60 dark:to-gray-800/40 shadow-xl dark:shadow-black/30'
  >
    <div class='flex items-center gap-5 rounded-[calc(1rem-1px)] bg-white dark:bg-gray-900 p-6 sm:p-8'>
      <div class='shrink-0 rounded-2xl bg-gray-800 p-2 text-white self-start'>
        {index % 2 ? <UserB class='h-17 w-auto' /> : <UserA class='h-17 w-auto' />}
      </div>

      <div class='flex flex-col gap-1 min-w-0 text-gray-900 dark:text-white'>
        <h3 class='text-xl font-bold'>{name}</h3>

        <p class='mt-1 text-xs font-medium uppercase tracking-widest text-primary'>{title}</p>

        <p class='mt-3 text-sm text-gray-500 dark:text-gray-400 tracking-tight'>{description}</p>

        <span class='mt-3 inline-flex items-center gap-2 text-md font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'>
          <Phone class='h-[1.33em] w-auto shrink-0' />

          {phone}
        </span>
      </div>
    </div>
  </a>
)

export default ({ t, cards, class: className = '', ...props }: Props) => (
  <section class={`overflow-x-hidden bg-gray-900 dark:bg-gray-950 text-white ${className}`} {...props}>
    <div class='pb-40 pt-20'>
      <div class='contained'>
        <div class='flex flex-col items-center justify-between lg:flex-row'>
          <div class='max-w-lg text-center lg:text-left'>
            <h2 class='mb-4 text-4xl font-bold'>
              {t.title}
            </h2>

            <p class='text-gray-400'>{t.description}</p>
          </div>

          <ContactHero class='mt-10 h-64 w-auto opacity-90 sm:h-80 lg:mt-0' />
        </div>
      </div>
    </div>

    <div id={Section.CONTACT} class='contained pt-18 lg:pt-17 -mt-42 lg:-mt-41 grid gap-4 sm:gap-6 md:grid-cols-2'>
      {cards.map((card, index) => <Card key={index} index={index} {...card} />)}
    </div>
  </section>
)
