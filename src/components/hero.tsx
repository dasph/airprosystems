import type { HTMLAttributes } from 'preact'

import Ac from '~/icons/ac.tsx'
import Arrow from '~/icons/arrow.tsx'
import Couch from '~/icons/couch.tsx'
import CloudBlur from '~/icons/cloud-blur.tsx'
import Link from './link.tsx'

type T = Record<'title' | 'description' | 'contact' | 'slogan' | 'more', string>

type Props = { t: T } & HTMLAttributes<HTMLElement>

export default ({ t, class: className = '', ...props }: Props) => (
  <section
    class={`relative before:scale-y-110 before:absolute before:mx-auto before:inset-x-0 before:-bottom-px before:bg-gradient-to-r before:from-transparent before:via-gray-950/10 dark:before:via-white/20 before:to-transparent before:h-px ${className}`}
    {...props}
  >
    <div class='relative overflow-hidden pt-28 sm:pt-32 bg-gray-50 dark:bg-gray-950'>
      <div aria-hidden='true' class='absolute inset-x-0 bottom-0 z-10 h-10 sm:h-20 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-950' />

      <div class='absolute inset-x-0 -top-20'>
        <CloudBlur class='w-full min-w-[80rem] mx-auto -translate-x-60 md:translate-x-0 -scale-y-100 contrast-150 opacity-50 dark:opacity-25' />
      </div>

      <div class='relative contained max-w-7xl'>
        <div class='relative z-10 mx-auto text-center sm:pb-8 sm:w-4/5 lg:w-8/12 lg:pb-20'>
          <div class='relative mx-auto overflow-hidden rounded-full h-max w-max'>
            <div class='absolute inset-0 w-4 h-16 animate-slide'>
              <div aria-hidden='true' class='absolute inset-0 rotate-[-20deg] scale-y-125 bg-gradient-to-r from-transparent via-white/30 dark:via-white/10' />
            </div>

            <div class='border relative border-whit/50 inline-flex items-center px-2.5 py-1.5 rounded-full border-white/40 dark:border-white/30 bg-gray-950/20 dark:bg-white/10 before:scale-y-110 before:absolute before:inset-x-4 before:-bottom-px before:bg-gradient-to-r before:from-transparent before:via-yellow-50 before:to-transparent before:h-px before:w-3/5'>
              <span class='text-sm tracking-wide text-white'>
                {t.slogan}
              </span>
            </div>
          </div>

          <h1 class='mt-8 text-3xl font-bold sm:text-4xl text-blue-950 dark:text-white lg:text-5xl xl:text-6xl'>
            {t.title}
          </h1>

          <p class='mt-5 text-gray-700 lg:mt-8 sm:text-lg dark:text-gray-200'>
            {t.description}
          </p>

          <div class='items-center mt-6 gap-x-4 lg:gap-x-6 sm:flex sm: sm:justify-center lg:mt-8'>
            <Link
              href='/'
              class='relative inline-block w-full p-px rounded-lg sm:w-auto group h-11 bg-gradient-to-r from-purple-600 to-sky-500 dark:from-purple-600 dark:to-blue-400 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-400 before:to-sky-400 dark:before:from-purple-600 dark:before:to-sky-500 before:scale-75 before:opacity-50 before:rounded-md before:blur-lg before:transition before:duration-300 active:before:scale-90 focus:before:scale-90 focus:before:opacity-75 hover:before:scale-100 hover:before:opacity-100'
            >
              <p class='relative flex justify-center h-full capitalize text-sm font-medium items-center text-white tracking-wide bg-gray-950 px-[calc(1.5rem-1px)] rounded-[calc(0.5rem-1px)] group-hover:bg-gray-900 transition duration-300'>
                {t.contact}
              </p>
            </Link>

            <Link
              href='/'
              class='flex items-center justify-center px-6 mt-4 text-sm font-medium tracking-wide text-gray-700 capitalize transition-all duration-200 transform border border-gray-300 rounded-lg sm:mt-0 gap-x-2 h-11 dark:text-white hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 focus:ring focus:ring-blue-300 dark:focus:ring-white/10 focus:ring-opacity-80'
            >
              {t.more}
              <Arrow class='w-5 h-5' />
            </Link>
          </div>
        </div>
      </div>

      <div class='contained flex flex-col md:flex-row justify-between pt-16 opacity-85'>
        <Ac class='w-1/2 sm:w-auto sm:h-[9rem] ml-auto md:m-0 2xl:h-[13rem]' />

        <Couch class='w-full sm:w-auto sm:h-[16rem] md:h-[13rem] lg:h-[20rem] xl:h-[27rem]' />
      </div>
    </div>
  </section>
)
