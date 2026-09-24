import { SocialLinks } from './SocialLinks'

const logoUrl =
  'https://lh3.googleusercontent.com/aida/AEtjO1Vu_gkKeFTsD2nNh-9gzolwErgcbxsJS1MRCQ_Iaz5zmM-Xe6xjFXmo5xbAY0AGxSnoxKr2FMz98dXo6L1SbGxDE9osnWQCHTP1ETYW8hNWtQcrp_Mx8pbpG7q5l6iM-m6oDEnPVzWJP0DeJ21QuGmZkagRWyLY3M7pIs4IyBi-G7McslP3xmJr4seclggzTtg_hug_kWVlN_T8GWYrNOVPXasDWcFQd9rdhldH46mI1dHUXU3WMMNMqg'

function BrandSummary() {
  return (
    <div className="space-y-space-md lg:col-span-5">
      <div className="flex items-center gap-space-sm">
        <img
          alt="Vera Noir Atelier Logo"
          className="h-8 w-auto object-contain"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.hidden = true
          }}
          src={logoUrl}
        />
        <span className="font-headline-sm text-headline-sm uppercase tracking-wide text-primary">
          Vera Noir Atelier
        </span>
      </div>
      <p className="max-w-sm font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
        Искусство естественного взгляда и безупречной формы. Индивидуальный подход к эстетике бровей и ресниц.
      </p>
      <div className="flex items-center gap-space-sm pt-space-xs">
        <span aria-hidden="true" className="h-px w-6 bg-secondary" />
        <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">
          Вера Новикова
        </span>
      </div>
    </div>
  )
}

function ContactDetails() {
  return (
    <div className="space-y-space-md lg:col-span-4">
      <h2 className="font-headline-sm text-headline-sm font-normal text-primary">Контакты</h2>
      <dl className="space-y-space-sm font-body-sm text-body-sm">
        <div>
          <dt className="mb-1 block font-label-sm text-label-sm uppercase tracking-wider text-secondary">
            Телефон для записи
          </dt>
          <dd>
            <a className="inline-block font-title-md text-title-md text-primary transition-colors hover:text-secondary" href="tel:+79268402211">
              +7 (926) 840-22-11
            </a>
          </dd>
        </div>
        <div>
          <dt className="mb-1 block font-label-sm text-label-sm uppercase tracking-wider text-secondary">
            Электронная почта
          </dt>
          <dd>
            <a className="text-on-surface-variant transition-colors hover:text-primary" href="mailto:atelier@veranoir.ru">
              atelier@veranoir.ru
            </a>
          </dd>
        </div>
        <div>
          <dt className="mb-1 block font-label-sm text-label-sm uppercase tracking-wider text-secondary">Локация</dt>
          <dd className="text-on-surface-variant">Москва, Большая Никитская</dd>
        </div>
        <div>
          <dt className="mb-1 block font-label-sm text-label-sm uppercase tracking-wider text-secondary">
            Формат посещения
          </dt>
          <dd className="text-on-surface-variant">По предварительной договоренности</dd>
        </div>
      </dl>
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="mt-space-xl w-full border-t border-surface-variant/40 bg-surface-container py-space-xl">
      <div className="mx-auto max-w-[1200px] px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 gap-space-lg sm:grid-cols-2 lg:grid-cols-12 lg:gap-space-xl">
          <BrandSummary />
          <ContactDetails />
          <div className="space-y-space-md lg:col-span-3">
            <h2 className="font-headline-sm text-headline-sm font-normal text-primary">
              Связь и социальные сети
            </h2>
            <SocialLinks variant="footer" />
          </div>
        </div>
      </div>
    </footer>
  )
}
