'use strict'

import SwAPI from './SwAPIclass'

let api

beforeEach(() => {
  let mockRes = {
    results: ['Luke', 'Leia', 'Han']
  }
  
  let customFetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockRes)
  })
  
  //api = new SwAPI(fetch)  // this is the global.fetch defined in setupTests
  api = new SwAPI(customFetch)
})

test('getPerson returns non-null result', async () => {
 let result = await api.getPerson(1)

  expect(result).not.toBeNull()
})