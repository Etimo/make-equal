import { checkCondition } from './condition.js';

it('should support constant conditions', () => {
  expect(checkCondition(true, {})).toBe(true);
  expect(checkCondition(false, {})).toBe(false);
});

it('should support inverting conditions', () => {
  expect(checkCondition({ not: true }, {})).toBe(false);
});

it('should support single-choice conditions', () => {
  expect(checkCondition('a-b', { a: 'b' })).toBe(true);
  expect(checkCondition('a-b', { a: 'c' })).toBe(false);
});

it('should support multiple-choice conditions', () => {
  expect(checkCondition('a-b', { 'a-b': true })).toBe(true);
  expect(checkCondition('a-b', { 'a-b': false })).toBe(false);
});
