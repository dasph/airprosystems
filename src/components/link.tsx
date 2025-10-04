import type { AnchorHTMLAttributes } from 'preact'

type Props = {
  external?: boolean
} & AnchorHTMLAttributes

export default ({ children, external, class: className = '', ...props }: Props) => (
  <a
    {...props}
    {...external && { target: '_blank', rel: 'noopener' }}
    class={`transition-colors duration-300 text-blue-950 dark:text-white dark:hover:text-blue-400 hover:text-blue-700 ${className}`}
  >
    {children}
  </a>
)
