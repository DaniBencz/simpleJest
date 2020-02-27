'use strict'

import { sum, divide } from './math'

test.skip('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe.skip('division', () => {
  it('to divide', () => {
    expect(divide(4, 2)).toBe(2);
  });
})