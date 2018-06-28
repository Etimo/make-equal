const question = {
  id: 'q7',
  type: 'radioGroup',
  questionText: {
    selfInPresent: 'Är det personer du känner?',
    selfInPast: 'Var det personer du kände?',
    otherInPresent: 'Är det personer hen (eller du) känner?',
    otherInPast: 'Var det personer hen (eller du) kände?'
  },
  options: [
    { id: 'a', optionText: { noTarget: 'Ja' } },
    { id: 'b', optionText: { noTarget: 'Nej' } },
    { id: 'c', optionText: { noTarget: 'Både och' } }
  ]
};
export default question;
