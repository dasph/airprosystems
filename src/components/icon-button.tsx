import type { HTMLAttributes } from 'preact'

type Props = HTMLAttributes<HTMLButtonElement>

export default ({ class: className = '', ...props }: Props) => (
  <button
    {...props}
    class={`inline-flex items-center justify-center p-2 cursor-pointer text-gray-700 rounded-lg dark:hover:bg-gray-800 dark:text-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus-ring-inset dark:focus:ring-gray-700 focus:ring-gray-200 ${className}`}
  />
)
