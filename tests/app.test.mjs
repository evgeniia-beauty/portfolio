import assert from 'node:assert/strict'
import { after, test } from 'node:test'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'

const server = await createServer({ server: { middlewareMode: true } })
const { default: App } = await server.ssrLoadModule('/src/App.tsx')

after(async () => {
  await server.close()
})

test('renders the approved Vera Noir page and its source galleries', () => {
  const markup = renderToStaticMarkup(React.createElement(App))

  assert.match(markup, /<main\b/)
  assert.match(markup, /<h1[^>]*>Евгения Ванюшова<\/h1>/)
  assert.match(markup, /Портфолио авторских работ/)
  assert.equal((markup.match(/class="portfolio-card\b/g) ?? []).length, 6)
  assert.equal((markup.match(/class="before-after-card\b/g) ?? []).length, 3)
  assert.match(markup, /<footer\b/)
})
