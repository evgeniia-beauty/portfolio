export function SiteFooter() {
  return (
    <footer className='mt-space-xl w-full border-t border-surface-variant/40 bg-surface-container py-space-xl'>
      <div className='mx-auto flex max-w-300 flex-col gap-space-md px-margin-mobile md:flex-row md:items-center md:justify-between md:px-margin'>
        <p className='font-headline-md text-headline-md text-primary'>Евгения Ванюшова</p>
        <div
          aria-label='Контакты'
          className='flex flex-col gap-space-sm font-title-md text-title-md sm:flex-row sm:gap-space-lg'
        >
          <a className='text-on-surface-variant transition-colors hover:text-primary' href='tel:+79268402211'>
            +7 (926) 840-22-11
          </a>
          <a
            className='text-on-surface-variant transition-colors hover:text-primary'
            href='mailto:vanyushova_93@mail.ru'
          >
            vanyushova_93@mail.ru
          </a>
        </div>
      </div>
    </footer>
  )
}
