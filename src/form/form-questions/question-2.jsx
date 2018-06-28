const question = {
  id: 'q2',
  type: 'radioGroup',
  questionText: {
    selfInPresent: 'Hur gammal är du?',
    selfInPast: 'Hur gammal är du?',
    otherInPresent: 'Hur gammal är personen som är utsatt?',
    otherInPast: 'Hur gammal är personen?'
  },
  options: [
    { id: 'a', optionText: { noTarget: '0-17' } },
    { id: 'b', optionText: { noTarget: '18+' } }
  ]
};
export default question;
