/**
 * Explanation of condition: it can be one of the following
 * - true: Always true
 * - false: Always false
 * - undefined (missing): Always true
 * - "<question>-<answer>": True if the answer was given, for example "where-blogs" will match if the user ticked "blogs" on the question "where"
 * - { not: <condition> }: True if condition evaluates to false
 * - { any: [<condition1>, <condition2>, ...] }: True if any subcondition evaluates to true
 * - { all: [<condition1>, <condition2>, ...] }: True if all subconditions evaluate to true
 */
export function checkCondition(condition, answers) {
  if (condition === true || condition === undefined) {
    return true;
  } else if (condition === false) {
    return false;
  } else if (typeof condition === 'string') {
    let [question, answer] = condition.split('-');
    let checkboxTicked = !!answers[condition];
    let radioBoxSelected = answers[question] === answer;
    return checkboxTicked || radioBoxSelected;
  } else if (condition.not !== undefined) {
    return !checkCondition(condition.not, answers);
  } else if (condition.all !== undefined) {
    for (let subcondition of condition.all) {
      if (!checkCondition(subcondition, answers)) {
        return false;
      }
    }
    return true;
  } else if (condition.any !== undefined) {
    for (let subcondition of condition.any) {
      if (checkCondition(subcondition, answers)) {
        return true;
      }
    }
    return false;
  } else {
    console.error('Invalid tip condition: ', { condition, answers });
    throw new Error('Invalid tip condition');
  }
}
