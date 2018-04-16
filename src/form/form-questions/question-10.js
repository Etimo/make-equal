const question = {
  id: "10",
  type: "checkboxGroupWithSubOptions",
  questionText: {
    selfInPresent: "Hur har de kontaktat dig? Du kan kryssa i flera svar.",
    selfInPast: "Hur kontaktade de dig? Du kan kryssa i flera svar.",
    otherInPresent: "Hur har de kontaktat personen? Du kan kryssa i flera svar.",
    otherInPast: "Hur kontaktade de personen? Du kan kryssa i flera svar.",
  },
  options: [
    {
      id: "a", optionText: {noTarget: "Privata meddelanden",},
      subOptions: [
        {id: "aa", optionText: {noTarget: "Messenger"},},
        {id: "ab", optionText: {noTarget: "Mail"},},
        {id: "ac", optionText: {noTarget: "Sms"},},
        {id: "ad", optionText: {noTarget: "Whatsapp"},},
        {id: "ae", optionText: {noTarget: "Skype"},},
        {id: "af", optionText: {noTarget: "Twitch"},},
      ],
    },
    {
      id: "b", optionText: {noTarget: "Sociala medier"},
      subOptions: [
        {id: "ba", optionText: {noTarget: "Snapchat"},},
        {id: "bb", optionText: {noTarget: "Facebook"},},
        {id: "bc", optionText: {noTarget: "Instagram"},},
        {id: "bd", optionText: {noTarget: "Twitter"},},
      ],
    },
    {id: "c", optionText: {noTarget: "Youtube",}, subOptions: [],},
    {id: "d", optionText: {noTarget: "Telefon",}, subOptions: [],},
    {id: "e", optionText: {noTarget: "Brev",}, subOptions: [],},
    {id: "f", optionText: {noTarget: "Fysiskt",}, subOptions: [],},
    {id: "g", optionText: {noTarget: "Annat",}, subOptions: [],},
  ],
};
export default question;
