import { contacts } from '../data/contacts'
import { MaterialIcon } from './MaterialIcon'

const portraitUrl = new URL('../assets/IMG_4855.jpg', import.meta.url).href

export function HeroSection() {
  return (
    <section aria-labelledby='hero-title' className='relative w-full overflow-hidden pb-space-xl lg:pb-24 pt-10'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-secondary-fixed/40 blur-3xl'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -left-20 top-1/2 h-80 w-80 rounded-full bg-surface-container-high/60 blur-2xl'
      />

      <div className='mx-auto max-w-300 px-margin-mobile pt-space-lg md:px-margin lg:pt-space-xl'>
        <div className='grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12'>
          <div className='z-10 flex flex-col items-start space-y-space-md lg:col-span-7 xl:col-span-8'>
            <div className='flex items-center gap-space-sm'>
              <span aria-hidden='true' className='h-px w-8 bg-secondary' />
              <span className='font-label-md text-label-md font-semibold uppercase tracking-widest text-secondary'>
                Brow &amp; lash master
              </span>
            </div>

            <h1
              className='font-headline-lg text-display-lg-mobile leading-[1.08] tracking-tight text-primary sm:text-display-lg'
              id='hero-title'
            >
              Евгения Ванюшова
            </h1>

            <div className='inline-flex items-center gap-2 rounded-full border border-surface-variant/40 bg-secondary-fixed/40 px-3.5 py-1.5 text-primary'>
              <MaterialIcon className='text-secondary' size={18}>
                workspace_premium
              </MaterialIcon>
              <span className='font-label-md text-label-md font-semibold uppercase tracking-wider'>
                Опыт работы более 2 лет
              </span>
            </div>

            <p className='font-body-lg text-body-lg text-on-surface-variant'>
              Подчеркну вашу естественную красоту и аккуратно оформлю взгляд: архитектура, коррекция и окрашивание
              бровей, окрашивание и ламинирование бровей и ресниц. Индивидуально подбираю форму и оттенок, чтобы
              результат выглядел гармонично, естественно и подходил именно вам.
            </p>

            <div className='flex w-full flex-col gap-space-sm pt-space-xs md:grid md:grid-cols-2 xl:flex xl:flex-row xl:flex-nowrap'>
              <a
                className='inline-flex h-11 w-full shrink-0 items-center justify-center gap-3 rounded-lg bg-primary px-4 font-label-md text-label-lg uppercase tracking-wider text-on-primary shadow-lg transition-colors hover:bg-primary-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary md:col-span-2 xl:col-span-1 xl:w-fit'
                href='#portfolio'
              >
                <MaterialIcon size={18}>auto_awesome</MaterialIcon>
                <span>Портфолио</span>
              </a>
              <a
                className='inline-flex h-11 w-full shrink-0 items-center justify-center gap-3 rounded-lg bg-surface-container px-4 font-body-sm text-body-sm text-primary shadow-lg transition-colors hover:bg-surface-variant focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary xl:w-fit'
                href={`tel:${contacts.phone.number}`}
              >
                <MaterialIcon className='text-secondary' size={20}>
                  call
                </MaterialIcon>
                <span className='whitespace-nowrap'>{contacts.phone.label}</span>
              </a>
              <a
                className='inline-flex h-11 w-full shrink-0 items-center justify-center gap-3 rounded-lg bg-surface-container px-4 font-body-sm text-body-sm text-primary shadow-lg transition-colors hover:bg-surface-variant focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary xl:w-fit'
                href={`mailto:${contacts.email}`}
              >
                <MaterialIcon className='text-secondary' size={20}>
                  mail
                </MaterialIcon>
                <span className='whitespace-nowrap'>{contacts.email}</span>
              </a>
            </div>
          </div>

          <div className='relative mt-space-md flex justify-center lg:col-span-5 lg:mt-0 xl:col-span-4'>
            <div className='relative aspect-square w-full max-w-110 overflow-hidden rounded-2xl bg-surface-container shadow-2xl'>
              <img
                alt='Фотом мастера Евгении Ванюшовой с идеальной формой бровей и ламинированием ресниц'
                className='h-full w-full object-cover'
                fetchPriority='high'
                src={portraitUrl}
              />
              <div
                aria-hidden='true'
                className='absolute inset-0 bg-linear-to-t from-primary/30 via-transparent to-transparent'
              />
            </div>
            <div
              aria-hidden='true'
              className='absolute -bottom-6 -left-6 -z-10 h-24 w-24 rounded-full bg-secondary-fixed-dim/30 blur-xl'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
