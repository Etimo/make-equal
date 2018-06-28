const question = {
  id: 'q5',
  type: 'radioGroup',
  questionText: {
    selfInPresent: 'Är det en eller flera personer som utsätter?',
    selfInPast: 'Var det en eller flera personer som utsatte?',
    otherInPresent: 'Är det en eller flera personer som utsätter?',
    otherInPast: 'Var det en eller flera personer som utsatte?'
  },
  options: [
    { id: 'a', optionText: { noTarget: 'En' } },
    { id: 'b', optionText: { noTarget: 'Flera' } },
    { id: 'c', optionText: { noTarget: 'Vet ej' } }
  ]
};
export default question;
