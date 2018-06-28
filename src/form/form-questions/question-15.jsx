const question = {
  id: 'q15',
  type: 'radioGroup',
  questionText: {
    selfInPresent: 'I vilken roll är du främst utsatt?',
    selfInPast: 'I vilken roll var du främst utsatt?',
    otherInPresent: 'I vilken roll är personen främst utsatt?',
    otherInPast: 'I vilken roll var personen främst utsatt?'
  },
  options: [
    { id: 'a', optionText: { noTarget: 'Offentlig person' } },
    { id: 'b', optionText: { noTarget: 'Privatperson' } },
    { id: 'c', optionText: { noTarget: 'Yrkesroll' } }
  ]
};
export default question;
