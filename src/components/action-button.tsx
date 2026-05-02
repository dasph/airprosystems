import type { AnchorHTMLAttributes } from 'preact'

import Link from '~/components/link.tsx'

export default ({ children, class: className = '', ...props }: AnchorHTMLAttributes) => (
  <Link
    {...props}
    class={`relative inline-block w-full p-px rounded-lg sm:w-auto group h-11 bg-gradient-to-r from-purple-600 to-sky-500 dark:from-purple-600 dark:to-blue-400 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-400 before:to-sky-400 dark:before:from-purple-600 dark:before:to-sky-500 before:scale-75 before:opacity-50 before:rounded-md before:blur-lg before:transition before:duration-300 active:before:scale-90 focus:before:scale-90 focus:before:opacity-75 hover:before:scale-100 hover:before:opacity-100 ${className}`}
  >
    <p class='relative flex justify-center h-full capitalize text-sm font-medium items-center text-white tracking-wide bg-gray-950 px-[calc(1.5rem-1px)] rounded-[calc(0.5rem-1px)] group-hover:bg-gray-900 transition duration-300'>
      {children}
    </p>
  </Link>
)
