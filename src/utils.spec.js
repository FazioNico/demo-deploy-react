import { expect, test } from 'vitest'
import { calculateTax } from './utils.js'

test('calculate tax of 100 with rate 8 return 8', () => {
  expect(calculateTax(100, 8)).toBe(8)
})