const question = {
  id: "6",
  type: "radioGroup",

  questionText: {
    selfInPresent: "Vet du vem eller vilka det är? (Följdfråga: Är personerna anonyma?)",
    selfInPast: "Vet du vem eller vilka det var? (Följdfråga: Var personerna anonyma?)",
    otherInPresent: "Vet den som utsätts (eller du?) vem eller vilka det är? (Följdfråga: Är personerna anonyma?)",
    otherInPast: "Vet personen (eller du) vem eller vilka det var? (Följdfråga: Var personerna anonyma?)",
  },
  options: [
    {id: "a", optionText: {noTarget: "Ja"}},
    {id: "b", optionText: {noTarget: "Nej"}},
    {id: "c", optionText: {noTarget: "Delvis"}},
  ],
};
export default question;
