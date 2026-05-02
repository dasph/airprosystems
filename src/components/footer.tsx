import type { AnchorHTMLAttributes, FunctionComponent, HTMLAttributes } from 'preact'

import { Section } from '~/enums/mod.ts'
import { isInEnum } from '~/helpers/common.ts'
import { SocialLink } from '~/constants/mod.ts'

import Lined from '~/components/lined.tsx'
import Spaced from '~/components/spaced.tsx'
import ActionButton from '~/components/action-button.tsx'

import Tiktok from '~/icons/tiktok.tsx'
import Facebook from '~/icons/facebook.tsx'
import Instagram from '~/icons/instagram.tsx'
import LogoSmall from '~/icons/logo-small.tsx'
import LogoLarge from '~/icons/logo-large.tsx'

import CloudBlur from '~/icons/cloud-blur.tsx'

type ColumnLink = {
  href: Section | SocialLink | `${string}`
  label: string
  logo?: FunctionComponent<{ class: string }>
}

type Column = {
  name: string
  links: ColumnLink[]
}

type T = {
  sections: Record<'sitemap' | 'social', string>
  generic: Record<'brand' | 'offerings' | 'contact', string>
  banner: Record<'title' | 'subTitle' | 'description' | 'action', string>
}

type Props = { t: T } & HTMLAttributes<HTMLElement>

export default ({ t, class: className = '', ...props }: Props) => {
  const siteLinks: ColumnLink[] = [
    { href: Section.OFFERINGS, label: t.generic.offerings },
    { href: Section.CONTACT, label: t.generic.contact },
  ]

  const socialLinks: ColumnLink[] = [
    { href: SocialLink.TIKTOK, label: 'TikTok', logo: Tiktok },
    { href: SocialLink.INSTAGRAM, label: 'Instagram', logo: Instagram },
    { href: SocialLink.FACEBOOK, label: 'Facebook', logo: Facebook },
  ]

  const columns: Column[] = [
    { name: t.sections.sitemap, links: siteLinks },
    { name: t.sections.social, links: socialLinks },
  ]

  const copyright = `© ${new Date().getFullYear()} ${t.generic.brand}`

  const applyLink = (url: ColumnLink['href']) => {
    const isAnchor = isInEnum(url, Section)
    const isExternal = !isAnchor && isInEnum(url, SocialLink)

    return {
      href: isAnchor ? `/#${url}` : url,
      ...(!isAnchor && isExternal && { target: '_blank', rel: 'noopener noreferrer' }),
    } satisfies Partial<AnchorHTMLAttributes>
  }

  const FooterSection: FunctionComponent<{ column: Column }> = ({ column: { name, links } }) => (
    <div class='text-sm/6 font-medium text-gray-600 dark:text-gray-400'>
      <h5 class='text-gray-800 dark:text-gray-200'>{name}</h5>

      <ul class='mt-4 -ml-1.5 capitalize'>
        {links.map(({ href, label }) => (
          <li>
            <a {...applyLink(href)} class='inline-flex p-1.5 hover:text-gray-900 dark:hover:text-white transition-colors'>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <footer class={`relative border border-gray-800/50 overflow-x-hidden ${className}`} {...props}>
      <div class='z-0 absolute inset-0 overflow-hidden rotate-180'>
        <CloudBlur class='w-full min-w-[80rem] mx-auto -translate-x-60 md:translate-x-0 -scale-y-100 contrast-150 opacity-50 dark:opacity-25' />
      </div>

      <div class='bg-white/50 dark:bg-gray-900/50'>
        <div class='contained'>
          <div class='pt-20 pb-16 text-center sm:py-24'>
            <hgroup>
              <p class='text-lg font-medium text-primary sm:text-2xl'>
                {t.banner.subTitle}
              </p>

              <p class='mx-auto mt-6 max-w-[600px] text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl'>
                {t.banner.title}
              </p>
            </hgroup>

            <p class='mx-auto mt-6 max-w-xs text-sm text-gray-500 dark:text-gray-300 sm:text-base'>
              {t.banner.description}
            </p>

            <ActionButton
              class='mt-6'
              href={`#${Section.CONTACT}`}
            >
              {t.banner.action}
            </ActionButton>
          </div>

          <div class='pb-10'>
            <Lined>
              <div class='flex flex-col justify-between gap-y-10 pb-8 sm:flex-row sm:pb-6'>
                <div class='flex w-min flex-col'>
                  <Spaced class='pt-6 inline-flex gap-2 sm:gap-3 lg:gap-4'>
                    <LogoSmall class='w-auto h-7 sm:h-8 lg:h-9' />

                    <LogoLarge class='w-auto h-7 sm:h-8 lg:h-9' />
                  </Spaced>

                  <div class='flex justify-between items-center gap-1 mt-2'>
                    {socialLinks.map(({ href, label, logo: Logo }) => (
                      <a
                        aria-label={label}
                        class='p-2 hover:opacity-75 transition-opacity cursor-pointer'
                        {...applyLink(href)}
                      >
                        {Logo && <Logo class='h-5 w-auto' />}
                      </a>
                    ))}
                  </div>
                </div>

                <div class='flex gap-x-20 sm:pt-6'>
                  {columns.map((item, index) => <FooterSection column={item} key={index} />)}
                </div>
              </div>
            </Lined>

            <Lined class='flex justify-center'>
              <div>
                <Spaced class='px-2 py-3'>
                  <div class='text-sm/6 text-primary'>{copyright}</div>
                </Spaced>
              </div>
            </Lined>
          </div>
        </div>
      </div>
    </footer>
  )
}
