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

it('should support aggregate conditions', () => {
  expect(
    checkCondition(
      {
        all: ['a-b', 'a-c']
      },
      { 'a-b': true, 'a-c': true }
    )
  ).toBe(true);
  expect(
    checkCondition(
      {
        all: ['a-b', 'a-c']
      },
      { 'a-c': true }
    )
  ).toBe(false);
  expect(
    checkCondition(
      {
        all: ['a-b', 'a-c']
      },
      { 'a-c': true }
    )
  ).toBe(false);
  expect(
    checkCondition(
      {
        all: ['a-b', 'a-c']
      },
      {}
    )
  ).toBe(false);

  expect(
    checkCondition(
      {
        any: ['a-b', 'a-c']
      },
      { 'a-b': true, 'a-c': true }
    )
  ).toBe(true);
  expect(
    checkCondition(
      {
        any: ['a-b', 'a-c']
      },
      { 'a-c': true }
    )
  ).toBe(true);
  expect(
    checkCondition(
      {
        any: ['a-b', 'a-c']
      },
      { 'a-c': true }
    )
  ).toBe(true);
  expect(
    checkCondition(
      {
        any: ['a-b', 'a-c']
      },
      {}
    )
  ).toBe(false);
});

it('should support arbitrary nesting of conditions', () => {
  expect(
    checkCondition(
      {
        any: [
          {
            not: {
              all: ['a-b', 'a-c']
            }
          },
          {
            not: {
              any: ['d-a']
            }
          }
        ]
      },
      { 'd-a': true }
    )
  ).toBe(true);
});
