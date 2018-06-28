const question = {
  id: 'q12',
  type: 'radioGroup',
  questionText: {
    selfInPresent:
      'Vet du om det var en specifik händelse eller handling som startade detta?',
    selfInPast:
      'Vet du om det var en specifik händelse eller handling som startade det?',
    otherInPresent:
      'Vet personen eller du om det var en specifik händelse eller handling som startade detta?',
    otherInPast:
      'Vet personen (eller du) om det var en specifik händelse eller handling som startade det?'
  },
  options: [
    { id: 'a', optionText: { noTarget: 'Ja' } },
    { id: 'b', optionText: { noTarget: 'Nej' } }
  ]
};
export default question;
