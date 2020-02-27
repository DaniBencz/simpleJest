'use strict'

import SwStat from './SwStat'

let stat

beforeEach(() => {
  let mockRes = {
    results: ['Luke', 'Leia', 'Han']
  }
  
  let fetch = jest.fn().mockResolvedValue({ // this fetch overwrites global.fetch
    json: jest.fn().mockResolvedValue(mockRes)
  })

  stat = new SwStat(fetch)
})

test('counting people', async () => {
  let result = await stat.count()

  expect(result).toBe(3)
})