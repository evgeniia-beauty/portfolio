import { MaterialIcon } from './MaterialIcon'

type SocialLink = {
  label: string
  href: string
  icon: string
  handle: string
}

const links: SocialLink[] = [
  { label: 'Telegram', href: 'https://t.me/veranoir_atelier', icon: 'send', handle: '@veranoir_atelier' },
  { label: 'WhatsApp', href: 'https://whatsapp.com', icon: 'chat', handle: '+7 926 840-22-11' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'photo_camera', handle: '@vera.noir.atelier' },
  { label: 'ВКонтакте', href: 'https://vk.com', icon: 'group', handle: 'vk.com/veranoir' },
]

interface SocialLinksProps {
  variant: 'hero' | 'footer'
}

export function SocialLinks({ variant }: SocialLinksProps) {
  if (variant === 'hero') {
    return (
      <div className="w-full max-w-xl border-t border-surface-variant/40 pt-space-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">
            Соцсети:
          </span>
          {links.map(({ label, href, icon }) => (
            <a
              key={label}
              aria-label={label}
              className="inline-flex items-center gap-1.5 rounded-full bg-surface-container px-3 py-1.5 font-label-sm text-label-sm uppercase tracking-wider text-primary shadow-sm transition-all hover:bg-primary hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              href={href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MaterialIcon className="text-[16px]" >{icon}</MaterialIcon>
              <span>{label === 'ВКонтакте' ? 'VK' : label}</span>
            </a>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2 pt-space-xs">
      {links.map(({ label, href, icon, handle }) => (
        <a
          key={label}
          aria-label={label}
          className="group inline-flex items-center justify-between gap-2 rounded-lg bg-surface px-3 py-2 text-primary shadow-sm transition-all hover:bg-primary hover:text-on-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="inline-flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-wider">
            <MaterialIcon className="text-[18px]">{icon}</MaterialIcon>
            {label}
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant transition-colors group-hover:text-on-primary">
            {handle}
          </span>
        </a>
      ))}
    </div>
  )
}
