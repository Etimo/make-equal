import { checkCondition } from '../services/condition';

/*
 * The tips will be shown in order, assuming that the condition is satisfied
 *
 * condition is defined in src/services/condition.js
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
    condition: 'age-adult'
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

export function tipsForAnswers(answers) {
  return tips.filter(tip => checkCondition(tip.condition, answers));
}
