'use strict'

import SwAPI from './SwAPIclass';

let api;

beforeEach(() => {
  api = new SwAPI();
});

test('getPerson returns non-null result', async () => {
 let result = await api.getPerson(1)

  expect(result).not.toBeNull();
});