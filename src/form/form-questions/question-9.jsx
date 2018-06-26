const question = {
  id: "9",
  type: "checkboxGroupWithSubOptions",
  questionText: {
    selfInPresent: "Vilken information har de lagt upp/skickat om dig? Du kan kryssa i flera svar.",
    selfInPast: "Vilken information lades upp/skickades om dig? Du kan kryssa i flera svar.",
    otherInPresent: "Vilken information har de lagt upp/skickat om personen? Du kan kryssa i flera svar",
    otherInPast: "Vilken information lades upp/skickades om personen? Du kan kryssa i flera svar",
  },
  options: [
    {
      id: "a",
      optionText: {
        noTarget: "Privata/känsliga bilder",
      },
      subOptions: [
        {
          id: "aa", optionText: {
            selfInPresent: "Av sexuell karaktär/nakenbilder",
            selfInPast: "Av sexuell karaktär/nakenbilder",
            otherInPresent: "Av sexuell karaktär/nakenbilder",
            otherInPast: "Av sexuell karaktär/nakenbilder",
          },
        },
        {
          id: "ab", optionText: {
            selfInPresent: "Andra bilder jag inte vill ska finnas på internet",
            selfInPast: "Andra bilder jag inte ville skulle finnas på internet",
            otherInPresent: "Andra bilder hen inte vill ska finnas på internet",
            otherInPast: "Andra bilder personen inte ville ska finnas på internet"
          },
        },

      ],
    },
    {
      id: "b",
      optionText: {
        selfInPresent: "Privat/känslig information om mig",
        selfInPast: "Privat/känslig information om mig",
        otherInPresent: "Privat/känslig information om personen",
        otherInPast: "Privat/känslig information om personen",
      },
      subOptions: [
        {
          id: "ba", optionText: {
            selfInPresent: "Personuppgifter (personnr m.m.)",
            selfInPast: "Personuppgifter (personnr m.m.)",
            otherInPresent: "Personuppgifter (personnr m.m.)",
            otherInPast: "Personuppgifter (personnr m.m.)",
          },
        },
        {
          id: "bb", optionText: {
            selfInPresent: "Mina relationer",
            selfInPast: "Mina relationer",
            otherInPresent: "Personens relationer",
            otherInPast: "Personens relationer",
          },
        },
        {
          id: "bc", optionText: {
            selfInPresent: "Mina vanor",
            selfInPast: "Mina vanor",
            otherInPresent: "Personens vanor",
            otherInPast: "Personens vanor",
          },
        },
        {
          id: "bd", optionText: {
            selfInPresent: "Ekonomiska uppgifter",
            selfInPast: "Ekonomiska uppgifter",
            otherInPresent: "Ekonomiska uppgifter",
            otherInPast: "Ekonomiska uppgifter",
          },
        },
        {
          id: "be", optionText: {
            selfInPresent: "Brottshistorik",
            selfInPast: "Brottshistorik",
            otherInPresent: "Brottshistorik",
            otherInPast: "Brottshistorik",
          },
        },
      ],
    },
    {
      id: "c", optionText: {
        selfInPresent: "Privat/känslig information om mina närstående",
        selfInPast: "Privat/känslig information om mina närstående",
        otherInPresent: "Privat/känslig information om personens närstående",
        otherInPast: "Privat/känslig information om personens närstående",
      },
      subOptions: [
        {id: "ca", optionText: {noTarget: "Personuppgifter"},},
        {id: "cb", optionText: {noTarget: "Namn"},},
        {id: "cc", optionText: {noTarget: "Bilder"},},
      ],
    },
    {
      id: "d",
      optionText: {noTarget: "Kränkande påståenden/saker utifrån:",},
      subOptions: [
        {id: "da", optionText: {noTarget: "(diskrimineringsgrunder)"},},
        {id: "db", optionText: {noTarget: "Politisk åsikt"},},
        {id: "dc", optionText: {noTarget: "Utseende"},},
        {id: "dd", optionText: {noTarget: "Allmänna personangrepp"},},
      ]
    },
    {
      id: "e", optionText: {noTarget: "Kontaktinformation (telefonnr, adress m.m.)"},
      subOptions: [],
    },
    {
      id: "f", optionText: {noTarget: "Falsk information/lögner",},
      subOptions: []
    },
    {
      id: "g", optionText: {noTarget: "Uppmaningar till brottsliga handlingar",},
      subOptions: []
    },

  ],
};
export default question;
