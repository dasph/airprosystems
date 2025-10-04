import { computed } from '@preact/signals'
import { createRef, type HTMLAttributes } from 'preact'

import { scroll } from '~/composables/scroll.ts'

import Link from '~/components/link.tsx'
import IconButton from '~/components/icon-button.tsx'

import X from '~/icons/x.tsx'
import Sun from '~/icons/sun.tsx'
import Moon from '~/icons/moon.tsx'
import Burger from '~/icons/burger.tsx'
import LogoLarge from '~/icons/logo-large.tsx'
import LogoSmall from '~/icons/logo-small.tsx'

type T = Record<'offerings' | 'contact', string>

type LinkProps = {
  href: string
  label: string
}

type Props = { t: T } & HTMLAttributes<HTMLElement>

const toggleDarkMode = () => {
  const isDark = document.documentElement.classList.toggle('dark')

  localStorage.setItem('theme', isDark ? 'dark' : 'white')
}

const Logo = () => (
  <Link href='/' class='inline-flex gap-2 sm:gap-3 lg:gap-4'>
    <LogoSmall class='w-auto h-7 sm:h-8 lg:h-9' />
    <LogoLarge class='w-auto h-7 sm:h-8 lg:h-9' />
  </Link>
)

export default ({ t, class: className = '', ...props }: Props) => {
  const dropdown = createRef<HTMLDivElement>()
  const backdrop = createRef<HTMLDivElement>()

  const scrolled = computed<boolean>(() => scroll.value > 0.01)
  const headerBlur = computed<string>(() => scrolled.value ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-md' : '')

  const links: LinkProps[] = [
    { href: '/', label: t.contact },
    { href: '/', label: t.offerings },
  ]

  const toggleDropdown = () => {
    dropdown.current?.classList.toggle('scale-y-0')
    backdrop.current?.classList.toggle('scale-y-100')
  }

  const Links = () => (
    <>
      {links.map(({ href, label }, index) => <Link class='text-sm capitalize' href={href} key={index}>{label}</Link>)}

      <IconButton onClick={toggleDarkMode}>
        <Sun class='w-5 h-5 text-white duration-300 hidden dark:inline-block hover:rotate-180' />
        <Moon class='w-4 h-4 text-gray-700 duration-500 dark:hidden hover:rotate-[360deg]' />
      </IconButton>
    </>
  )

  return (
    <header {...props} class={`fixed z-40 w-full transition-colors duration-300 ${className} ${headerBlur}`}>
      <nav class={`contained relative flex items-center justify-between transition-[padding] duration-300 ${scrolled.value ? 'py-4' : 'py-6'}`}>
        <Logo />

        <div class='flex items-center -mr-2 lg:hidden'>
          <IconButton onClick={toggleDropdown}>
            <Burger class='w-4.5 h-3.5 mx-[3px] my-[5px]' />
          </IconButton>

          <div
            ref={backdrop}
            class='scale-y-0 fixed inset-0 z-10 w-full h-screen transition duration-500 origin-top bg-white/70 backdrop-blur-2xl dark:bg-gray-900/70 lg:hidden'
          />

          <div ref={dropdown} class='absolute inset-x-0 top-0 z-10 p-4 transition origin-top-right transform scale-y-0'>
            <div class='overflow-hidden bg-white border border-gray-100 shadow-md shadow-gray-200/50 dark:shadow-none dark:border-gray-800 rounded-xl dark:bg-gray-900'>
              <div class='flex items-center justify-between px-5 pt-4'>
                <Logo />

                <IconButton class='-mr-2' onClick={toggleDropdown}>
                  <X class='w-5 h-5' />
                </IconButton>
              </div>

              <div class='flex flex-col items-start px-5 pt-4 pb-3 space-y-4'>
                <Links />
              </div>
            </div>
          </div>
        </div>

        <div class='hidden items-center gap-x-8 lg:flex'>
          <Links />
        </div>
      </nav>
    </header>
  )
}
