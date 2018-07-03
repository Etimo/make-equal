/*
 * The tips will be shown in order, assuming that the condition is satisfied
 *
 * Explanation of condition: it can be one of the following
 * - true: Always true
 * - false: Always true
 * - undefined (missing): Always true
 * - "<question>-<answer>": True if the answer was given, for example "where-blogs" will match if the user ticked "blogs" on the question "where"
 * - { not: <condition> }: True if condition evaluates to false
 * - { any: [<condition1>, <condition2>, ...] }: True if any subcondition evaluates to true
 * - { all: [<condition1>, <condition2>, ...] }: True if all subconditions evaluate to true
 */
const tips = [
  {
    title: 'Ett ovanligt tips',
    text:
      'Detta tips visas bara om du har haft problem med (bloggar eller Nordfront) och Tumblr men inte (Flashback eller Samhällsnytt)',
    condition: {
      all: [
        {
          any: ['where-blogs', 'where-nordfront']
        },
        'where-tumblr',
        {
          not: {
            any: ['where-flashback', 'where-samhällsnytt']
          }
        }
      ]
    }
  },
  {
    title: 'Myndig',
    text: 'Vi kommer bara inkludera detta för myndiga',
    condition: 'q2-b'
  },
  {
    title: 'En testtitel',
    text:
      'Anmäl opassande beteenden via respektive sajters eller sociala mediers anmälningsfunktioner. Dock kan det vara bra att veta att kränkande material inte säkert tas bort bara för att det anmäls.',
    condition: {
      any: [
        'where-socialMedia',
        'where-otherForum',
        'where-blogs',
        'where-video',
        'where-porn'
      ]
    }
  },
  {
    title: 'En annan testtitel',
    text:
      'Om du orkar och kan - säg ifrån eller ta diskussionen! Gå ihop flera stycken om det känns svårt. Tänk på att fråga personen först, ibland kan det trigga mer än att hjälpa.',
    condition: {
      all: ['target-other', { not: 'q14-d' }]
    }
  },
  {
    title: 'En tredje testtitel',
    text:
      'Tänk på att ta det som hänt på lika stort allvar som om kränkningen ägt rum utanför nätet.'
  }
];

function checkCondition(condition, answers) {
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

export function tipsForAnswers(answers) {
  return tips.filter(tip => checkCondition(tip.condition, answers));
}
