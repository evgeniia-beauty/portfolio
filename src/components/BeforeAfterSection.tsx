import { beforeAfterItems, type BeforeAfterItem } from '../data/portfolio'

function BeforeAfterCard({ item }: { item: BeforeAfterItem }) {
  return (
    <article className="before-after-card flex flex-col overflow-hidden rounded-2xl bg-surface-container-low shadow-none transition-shadow duration-300 hover:shadow-[0_12px_32px_-8px_rgba(62,43,37,0.20),0_3px_9px_-4px_rgba(62,43,37,0.10)]">
      <div className="relative aspect-[5/3] w-full overflow-hidden bg-surface-container">
        <img alt={item.imageAlt} className="h-full w-full object-cover" loading="lazy" src={item.image} />
        <span className="absolute left-2 top-2 rounded bg-surface/85 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary backdrop-blur">
          До
        </span>
        <span className="absolute right-2 top-2 rounded bg-primary/90 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-on-primary backdrop-blur">
          После
        </span>
      </div>
      <div className="p-space-md">
        <h3 className="font-headline-sm text-[18px] leading-snug text-primary">{item.title}</h3>
      </div>
    </article>
  )
}

export function BeforeAfterSection() {
  return (
    <section
      aria-labelledby="before-after-title"
      className="mt-space-xl py-space-lg lg:py-space-xl"
    >
      <div className="mb-space-lg space-y-space-xs text-center">
        <span className="font-label-md text-label-md font-semibold uppercase tracking-widest text-secondary">
          Честный результат
        </span>
        <h3 className="font-headline-md text-headline-md text-primary" id="before-after-title">
          Результаты: До и После
        </h3>
        <p className="mx-auto max-w-xl font-body-sm text-body-sm text-on-surface-variant">
          Естественная анатомия волосков без заломов и утяжеления
        </p>
      </div>
      <div className="grid grid-cols-1 gap-space-lg sm:grid-cols-2 lg:grid-cols-3">
        {beforeAfterItems.map((item) => (
          <BeforeAfterCard item={item} key={item.title} />
        ))}
      </div>
    </section>
  )
}
