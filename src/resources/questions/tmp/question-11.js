const question = {
  id: "11",
  type: "checkboxGroupWithSubOptions",
  questionText: {
    selfInPresent: "Hur har de kontaktat din arbets/uppdragsgivare?",
    selfInPast: "Hur kontaktade de din arbets/uppdragsgivare?",
    otherInPresent: "Hur har de kontaktat personens arbets/uppdragsgivare?",
    otherInPast: "Hur kontaktade de personens arbets/uppdragsgivare?",
  },
  options: [
    {
      id: "a", optionText: {noTarget: "Privata meddelanden",}, subOptions: [
        {id: "aa",  optionText: {noTarget: "Messenger"},},
        {id: "ab",  optionText: {noTarget: "Mail"},},
        {id: "ac",  optionText: {noTarget: "Sms"},},
        {id: "ad",  optionText: {noTarget: "Whatsapp"},},
        {id: "ae",  optionText: {noTarget: "Skype"},},
        {id: "af",  optionText: {noTarget: "Twitch"},},
      ],
    },
    {
      id: "b",  optionText: {noTarget: "Sociala medier",}, subOptions: [
        {id: "ba",  optionText: {noTarget: "Snapchat"},},
        {id: "bb",  optionText: {noTarget: "Facebook"},},
        {id: "bc",  optionText: {noTarget: "Instagram"},},
        {id: "bd",  optionText: {noTarget: "Twitter"},},
      ],
    },
    {id: "c",  optionText: {noTarget: "Telefon",}, subOptions: [],},
    {id: "d",  optionText: {noTarget: "Brev",}, subOptions: [],},
    {id: "e",  optionText: {noTarget: "Fysiskt",}, subOptions: [],},
    {id: "f",  optionText: {noTarget: "Annat",}, subOptions: [],},
  ],
};
export default question;
