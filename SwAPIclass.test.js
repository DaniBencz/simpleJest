'use strict'

import SwAPI from './SwAPIclass'

//Arrange
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
  //Act
  let result = await api.getPerson(1)

  //Assert
  expect(result).not.toBeNull()
})