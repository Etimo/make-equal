const question = {
  id: 'q17',
  type: 'radioGroup',
  questionText: {
    selfInPresent: 'Har du varit i liknande situationer tidigare?',
    selfInPast: 'Hade du varit i liknande situationer tidigare?',
    otherInPresent: 'Har personen varit i liknande situationer tidigare?',
    otherInPast: 'Hade hen varit i liknande situationer tidigare?'
  },
  options: [
    { id: 'a', optionText: { noTarget: 'Ja' } },
    { id: 'b', optionText: { noTarget: 'Nej' } },
    { id: 'c', optionText: { noTarget: 'Nej aldrig' } }
  ]
};
export default question;
