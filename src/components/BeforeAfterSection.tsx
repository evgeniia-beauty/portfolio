import { beforeAfterItems, type BeforeAfterItem } from '../data/portfolio'

function BeforeAfterCard({ item }: { item: BeforeAfterItem }) {
  return (
    <article className="before-after-card flex flex-col space-y-space-sm rounded-xl border border-surface-variant/40 bg-surface-container-low p-3.5 shadow-sm">
      <div className="grid grid-cols-2 gap-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-surface-container">
          <img alt={item.beforeAlt} className="h-full w-full object-cover" loading="lazy" src={item.beforeImage} />
          <span className="absolute left-2 top-2 rounded bg-surface/85 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary backdrop-blur">
            До
          </span>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-surface-container">
          <img alt={item.afterAlt} className="h-full w-full object-cover" loading="lazy" src={item.afterImage} />
          <span className="absolute left-2 top-2 rounded bg-primary/90 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-on-primary backdrop-blur">
            После
          </span>
        </div>
      </div>
      <div>
        <h3 className="font-headline-sm text-[18px] leading-snug text-primary">{item.title}</h3>
        <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">{item.description}</p>
      </div>
    </article>
  )
}

export function BeforeAfterSection() {
  return (
    <section
      aria-labelledby="before-after-title"
      className="mt-space-xl rounded-2xl bg-surface-container p-space-lg lg:p-space-xl"
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
      <div className="grid grid-cols-1 gap-space-md md:grid-cols-3">
        {beforeAfterItems.map((item) => (
          <BeforeAfterCard item={item} key={item.title} />
        ))}
      </div>
    </section>
  )
}
