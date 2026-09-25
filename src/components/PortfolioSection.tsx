import { portfolioItems, type PortfolioItem } from '../data/portfolio'
import { BeforeAfterSection } from './BeforeAfterSection'

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <article className='portfolio-card flex flex-col overflow-hidden rounded-2xl bg-surface-container-low shadow-none transition-shadow duration-300 hover:shadow-[0_12px_32px_-8px_rgba(62,43,37,0.20),0_3px_9px_-4px_rgba(62,43,37,0.10)]'>
      <div className='relative aspect-square w-full overflow-hidden bg-surface-container'>
        <img alt={item.imageAlt} className='h-full w-full object-cover' loading='lazy' src={item.image} />
      </div>
      <div className='flex flex-1 flex-col justify-between space-y-space-sm p-space-md'>
        <h3 className='font-headline-sm text-headline-sm text-primary'>{item.title}</h3>
      </div>
    </article>
  )
}

export function PortfolioSection() {
  return (
    <section aria-labelledby='portfolio-title' className='w-full py-space-xl' id='portfolio'>
      <div className='mx-auto max-w-300 px-margin-mobile md:px-margin'>
        <div className='mb-space-xl flex flex-col justify-between gap-space-md md:flex-row md:items-end'>
          <div className='space-y-space-xs'>
            <span className='font-label-md text-label-md font-semibold uppercase tracking-widest text-secondary'>
              Галерея преображений
            </span>
            <h2 className='font-headline-lg text-headline-lg tracking-tight text-primary' id='portfolio-title'>
              Портфолио авторских работ
            </h2>
            <p className='max-w-xl font-body-md text-body-md text-on-surface-variant'>
              Живые макро-съемки без блюра и замыливания текстуры кожи. Чистота линий, правильное направление и здоровый
              блеск.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-3'>
          {portfolioItems.map((item) => (
            <PortfolioCard item={item} key={item.title} />
          ))}
        </div>

        <BeforeAfterSection />
      </div>
    </section>
  )
}
