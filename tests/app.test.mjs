import assert from 'node:assert/strict'
import { after, test } from 'node:test'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'

const server = await createServer({ server: { middlewareMode: true } })
const { default: App } = await server.ssrLoadModule('/src/App.tsx')
const { BeforeAfterSection } = await server.ssrLoadModule('/src/components/BeforeAfterSection.tsx')
const { beforeAfterItems, portfolioItems } = await server.ssrLoadModule('/src/data/portfolio.ts')

after(async () => {
  await server.close()
})

test('renders the approved Vera Noir page and its source galleries', () => {
  const markup = renderToStaticMarkup(React.createElement(App))

  assert.match(markup, /<main\b/)
  assert.match(markup, /<h1[^>]*>Евгения Ванюшова<\/h1>/)
  assert.match(markup, /Портфолио авторских работ/)
  assert.equal((markup.match(/class="portfolio-card\b/g) ?? []).length, 6)
  assert.ok([3, 4, 6].includes(beforeAfterItems.length))
  assert.equal((markup.match(/class="before-after-card\b/g) ?? []).length, beforeAfterItems.length)
  assert.match(markup, /<footer\b/)
})

const comparisonFixture = Array.from({ length: 6 }, (_, index) => ({
  id: `comparison-${index + 1}`,
  title: `Работа ${index + 1}`,
  image: `/comparison-${index + 1}.png`,
  imageAlt: `Результат работы ${index + 1}`,
}))

for (const count of [3, 4, 6]) {
  test(`renders ${count} before-and-after photos from supplied data`, () => {
    const markup = renderToStaticMarkup(
      React.createElement(BeforeAfterSection, { items: comparisonFixture.slice(0, count) }),
    )

    assert.equal((markup.match(/class="before-after-card\b/g) ?? []).length, count)
    assert.match(markup, new RegExp(`Работа ${count}`))
    assert.doesNotMatch(markup, new RegExp(`Работа ${count + 1}`))
  })
}

test('gallery image descriptions are Russian and reflect their titles', () => {
  const serviceTerms = [
    [/бров/i, /бров/i],
    [/ресниц/i, /ресниц/i],
    [/окраш/i, /окраш/i],
    [/коррекц/i, /коррекц/i],
    [/ламинир/i, /ламинир/i],
    [/архитектур/i, /архитектур/i],
    [/botox/i, /ботокс/i],
  ]

  for (const item of [...portfolioItems, ...beforeAfterItems]) {
    assert.match(item.imageAlt, /[А-Яа-яЁё]/, item.title)
    assert.doesNotMatch(item.imageAlt, /[A-Za-z]/, item.title)

    for (const [titleTerm, altTerm] of serviceTerms) {
      if (titleTerm.test(item.title)) {
        assert.match(item.imageAlt, altTerm, item.title)
      }
    }
  }
})

test('gallery items have unique stable IDs, including cards with repeated titles', () => {
  for (const items of [portfolioItems, beforeAfterItems]) {
    assert.ok(items.every((item) => typeof item.id === 'string' && item.id.length > 0))
    assert.equal(new Set(items.map((item) => item.id)).size, items.length)
  }
})
