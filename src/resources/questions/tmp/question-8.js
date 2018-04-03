const question = {
  id: "8",
  type: "checkboxGroupWithSubOptions",
  questionText: {
    selfInPresent: "Var är du uthängd? Du kan kryssa i flera svar.",
    selfInPast: "Var någonstans var du uthängd? Du kan kryssa i flera svar.",
    otherInPresent: "Var är personen uthängd? Du kan kryssa i flera svar.",
    otherInPast: "Var någonstans var personen uthängd? Du kan kryssa i flera svar.",
  },
  options: [{
    id: "a", optionText: {noTarget: "Sociala medier"},
    subOptions: [
      {id: "aa", optionText: {noTarget: "Snapchat"},},
      {id: "ab", optionText: {noTarget: "Facebook"},},
      {id: "ac", optionText: {noTarget: "Instagram"},},
      {id: "ad", optionText: {noTarget: "Twitter"},},
      {id: "ae", optionText: {noTarget: "Tumblr"},},
    ],
  },
    {
      id: "b", optionText: "Externa forum",
      subOptions: [
        {id: "ba", optionText: {noTarget: "Flashback"},},
        {id: "bb", optionText: {noTarget: "Familjeliv"},},
        {id: "bc", optionText: {noTarget: "Annat"},},
      ],
    },
    {
      id: "c", optionText: {noTarget: "Externa bloggar"}, subOptions: [],
    },
    {
      id: "d", optionText: {noTarget: "Högerextrema/rasistiska sidor"},
      subOptions: [
        {id: "da", optionText: {noTarget: "Nordfront"},},
        {id: "db", optionText: {noTarget: "Samhällsnytt (tidigare Avpixlat)"},},
      ],
    },
    {
      id: "e", optionText: {noTarget: "YouTube eller andra videokanaler"}, subOptions: [],
    },
    {
      id: "f", optionText: {noTarget: "Porrsiter"}, subOptions: [],
    },
  ],
};
export default question;
