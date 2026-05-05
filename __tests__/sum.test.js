// sum.test.js
import { sum as sum2 } from '../code-to-unit-test/sum';

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(4);
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum2(1, 2)).toBe(4);
});