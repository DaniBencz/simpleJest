'use strict'

import SwStat from './SwStat'

let stat

beforeEach(() => {
  stat = new SwStat()
})

test('counting people', async () => {
  let result = await stat.count()

  expect(result).toBe(3);
})