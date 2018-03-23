let questionOptions = [];
let generalQuestion = {};
const q0 = {
  id: "0",
  text: "Vem är utsatt?",
  options: [
    {id: "a", text: "Jag"},
    {id: "b", text: "En annan person"}
  ]
};

const q1 = {
  id: "1",
  text: "Pågår det just nu?",
  options: [
    {id: "a", text: "Ja"},
    {id: "b", text: "Nej"}
  ]
};

questionOptions = [
  {id: "a", text: "0-17"},
  {id: "b", text: "18+"}
];
const q2 = {
  id: "2",
  type: "radioGroup",
  selfInPresent: {
    text: "Hur gammal är du?",
    options: questionOptions
  },
  selfInPast: {
    text: "Hur gammal är du?",
    options: questionOptions
  },
  otherInPresent: {
    text: "Hur gammal är personen som är utsatt?",
    options: questionOptions
  },
  otherInPast: {
    text: "Hur gammal är personen?",
    options: questionOptions
  },
};

const q3 = {
  id: "3",
  type: "checkboxGroup",
  selfInPresent: {
    text: "Kryssa i det som bäst stämmer överens med situationen. Du kan kryssa i flera svar.",
    options: [
      {id: "a", text: "Jag är uthängd någonstans"},
      {id: "b", text: "Folk kontaktar mig direkt"},
      {id: "c", text: "Folk kontaktar mina närstående"},
      {id: "d", text: "Folk kontaktar mina arbets/uppdragsgivare"},
      {id: "e", text: "Någon utger sig för att vara jag"},
      {id: "f", text: "Någon skriver om mig"}
    ]
  },
  selfInPast: {
    text: "Kryssa i det som bäst stämde överens med situationen. Du kan kryssa i flera svar.",
    options: [
      {id: "a", text: "Jag var uthängd någonstans"},
      {id: "b", text: "Folk kontaktade mig direkt"},
      {id: "c", text: "Folk kontaktade mina närstående"},
      {id: "d", text: "Folk kontaktade mina arbets/uppdragsgivare"},
      {id: "e", text: "Någon utgav sig för att vara jag"},
      {id: "f", text: "Någon skrev om mig"}
    ]
  },
  otherInPresent: {
    text: "Kryssa i det som bäst stämmer överens med situationen. Du kan kryssa i flera svar.",
    options: [
      {id: "a", text: "Personen är uthängd någonstans"},
      {id: "b", text: "Folk kontaktar personen direkt"},
      {id: "c", text: "Folk kontaktar personens närstående"},
      {id: "d", text: "Folk kontaktar personens arbets/uppdragsgivare"},
      {id: "e", text: "Någon utger sig för att vara personen"},
      {id: "f", text: "Någon skriver om personen"}
    ]
  },
  otherInPast: {
    text: "Kryssa i det som bäst stämde överens med situationen. Du kan kryssa i flera svar",
    options: [
      {id: "a", text: "Personen var uthängd någonstans"},
      {id: "b", text: "Folk kontaktade personen direkt"},
      {id: "c", text: "Folk kontaktade personens närstående"},
      {id: "d", text: "Folk kontaktade personens arbets/uppdragsgivare"},
      {id: "e", text: "Någon utgav sig för att vara personen"},
      {id: "f", text: "Någon skrev om personen"}
    ]
  },
};

const q4 = {
  id: "4",
  type: "checkboxGroup",
  selfInPresent: {
    text: "Hur upplever du situationen? Du kan kryssa i flera svar.",
    options: [
      {id: "a", text: "Jag känner mig hotad"},
      {id: "b", text: "Jag känner mig rädd"},
      {id: "c", text: "Jag känner mig trakasserad"},
      {id: "d", text: "Jag känner mig kränkt"},
      {id: "e", text: "Jag känner mig förföljd"},
      {id: "f", text: "Jag känner mig utpressad"},
      {id: "g", text: "Jag känner mig utfryst"},
      {id: "h", text: "Jag känner mig mobbad"},
      {id: "i", text: "Det sprids lögner om mig"},
    ]
  },
  selfInPast: {
    text: "Hur upplevde du situationen? Du kan kryssa i flera svar.",
    options: [
      {id: "a", text: "Jag kände mig hotad "},
      {id: "b", text: "Jag kände mig rädd "},
      {id: "c", text: "Jag kände mig trakasserad "},
      {id: "d", text: "Jag kände mig kränkt "},
      {id: "e", text: "Jag kände mig förföljd "},
      {id: "f", text: "Jag kände mig utpressad "},
      {id: "g", text: "Jag kände mig utfryst "},
      {id: "h", text: "Jag kände mig mobbad "},
      {id: "i", text: "Det spreds lögner om mig"},
    ]
  },
  otherInPresent: {
    text: "Hur upplever personen situationen? Du kan kryssa i flera svar.",
    options: [
      {id: "a", text: "Hen känner sig hotad"},
      {id: "b", text: "Hen känner sig rädd"},
      {id: "c", text: "Hen känner sig trakasserad"},
      {id: "d", text: "Hen känner sig kränkt"},
      {id: "e", text: "Hen känner sig förföljd"},
      {id: "f", text: "Hen känner sig utpressad"},
      {id: "g", text: "Hen känner sig utfryst"},
      {id: "h", text: "Hen känner sig mobbad"},
      {id: "i", text: "Det sprids lögner om hen"},
    ]
  },
  otherInPast: {
    text: "Hur upplevde personen situationen? Du kan kryssa i flera svar",
    options: [
      {id: "a", text: "Hen kände sig hotad "},
      {id: "b", text: "Hen kände sig rädd "},
      {id: "c", text: "Hen kände sig trakasserad "},
      {id: "d", text: "Hen kände sig kränkt "},
      {id: "e", text: "Hen kände sig förföljd "},
      {id: "f", text: "Henkände sig utpressad "},
      {id: "g", text: "Hen kände sig utfryst "},
      {id: "h", text: "Hen kände sig mobbad "},
      {id: "i", text: "Det spreds lögner om hen"},
    ]
  },
};

questionOptions = [
  {id: "a", text: "En"},
  {id: "b", text: "Flera"},
  {id: "c", text: "Vet ej"},
];
const q5 = {
  id: "5",
  type: "radioGroup",
  selfInPresent: {
    text: "Är det en eller flera personer som utsätter?",
    options: questionOptions
  },
  selfInPast: {
    text: "Var det en eller flera personer som utsatte?",
    options: questionOptions
  },
  otherInPresent: {
    text: "Är det en eller flera personer som utsätter?",
    options: questionOptions
  },
  otherInPast: {
    text: "Var det en eller flera personer som utsatte?",
    options: questionOptions
  },
};

questionOptions = [
  {id: "a", text: "Ja"},
  {id: "b", text: "Nej"},
  {id: "c", text: "Delvis"},
];
const q6 = {
  id: "6",
  type: "radioGroup",
  selfInPresent: {
    text: "Vet du vem eller vilka det är? (Följdfråga: Är personerna anonyma?)",
    options: questionOptions
  },
  selfInPast: {
    text: "Vet du vem eller vilka det var? (Följdfråga: Var personerna anonyma?)",
    options: questionOptions
  },
  otherInPresent: {
    text: "Vet den som utsätts (eller du?) vem eller vilka det är? (Följdfråga: Är personerna anonyma?)",
    options: questionOptions
  },
  otherInPast: {
    text: "Vet personen (eller du) vem eller vilka det var? (Följdfråga: Var personerna anonyma?)",
    options: questionOptions
  },

};

questionOptions = [
  {id: "a", text: "Ja"},
  {id: "b", text: "Nej"},
  {id: "c", text: "Både och"},
];
const q7 = {
  id: "7",
  type: "radioGroup",
  selfInPresent: {
    text: "Är det personer du känner?",
    options: questionOptions
  },
  selfInPast: {
    text: "Var det personer du kände?",
    options: questionOptions
  },
  otherInPresent: {
    text: "Är det personer hen (eller du) känner?",
    options: questionOptions
  },
  otherInPast: {
    text: "Var det personer hen (eller du) kände?",
    options: questionOptions
  },
};

questionOptions = [
  {
    id: "a", text: "Sociala medier",
    subOptions: [
      {id: "aa", text: "Snapchat"},
      {id: "ab", text: "Facebook"},
      {id: "ac", text: "Instagram"},
      {id: "ad", text: "Twitter"},
      {id: "ae", text: "Tumblr"},
    ],
  },
  {
    id: "b", text: "Externa forum",
    subOptions: [
      {id: "ba", text: "Flashback"},
      {id: "bb", text: "Familjeliv"},
      {id: "bc", text: "Annat"},
    ],
  },
  {
    id: "c", text: "Externa bloggar",
    subOptions: [],
  },
  {
    id: "d", text: "Högerextrema/rasistiska sidor",
    subOptions: [
      {id: "da", text: "Nordfront"},
      {id: "db", text: "Samhällsnytt (tidigare Avpixlat)"},
    ],
  },
  {id: "e", text: "YouTube eller andra videokanaler", subOptions: [],},
  {id: "f", text: "Porrsiter", subOptions: [],},
];
const q8 = {
  id: "8",
  type: "checkboxGroupWithSubOptions",
  selfInPresent: {
    text: "Var är du uthängd? Du kan kryssa i flera svar.",
    options: questionOptions
  },
  selfInPast: {
    text: "Var någonstans var du uthängd? Du kan kryssa i flera svar.",
    options: questionOptions
  },
  otherInPresent: {
    text: "Var är personen uthängd? Du kan kryssa i flera svar.",
    options: questionOptions
  },
  otherInPast: {
    text: "Var någonstans var personen uthängd? Du kan kryssa i flera svar.",
    options: questionOptions
  },
};

const q9 = {
  id: "9",
  type: "checkboxGroupWithSubOptions",
  selfInPresent: {
    text: "Vilken information har de lagt upp/skickat om dig? Du kan kryssa i flera svar.",
    options: [
      {
        id: "a", text: "Privata/känsliga bilder", subOptions: [
          {id: "aa", text: "Av sexuell karaktär/nakenbilder"},
          {id: "ab", text: "Andra bilder jag inte vill ska finnas på internet"},
        ]
      },
      {
        id: "b", text: "Privat/känslig information om mig", subOptions: [
          {id: "ba", text: "Personuppgifter (personnr m.m.)"},
          {id: "bb", text: "Mina relationer"},
          {id: "bc", text: "Mina vanor"},
          {id: "bd", text: "Ekonomiska uppgifter"},
          {id: "be", text: "Brottshistorik"},
        ]
      },
      {
        id: "c", text: "Privat/känslig information om mina närstående", subOptions: [
          {id: "ca", text: "Personuppgifter"},
          {id: "cb", text: "Namn"},
          {id: "cc", text: "Bilder"},
        ]
      },
      {
        id: "d", text: "Kränkande påståenden/saker utifrån:", subOptions: [
          {id: "da", text: "(diskrimineringsgrunder)"},
          {id: "db", text: "Politisk åsikt"},
          {id: "dc", text: "Utseende"},
          {id: "dd", text: "Allmänna personangrepp"},
        ]
      },
      {id: "e", text: "Kontaktinformation (telefonnr, adress m.m.)", subOptions: []},
      {id: "f", text: "Falsk information/lögner", subOptions: []},
      {id: "g", text: "Uppmaningar till brottsliga handlingar", subOptions: []},
    ]
  },
  selfInPast: {
    text: "Vilken information lades upp/skickades om dig? Du kan kryssa i flera svar.",
    options: [
      {
        id: "a", text: "Privata/känsliga bilder", subOptions: [
          {id: "aa", text: "Av sexuell karaktär/nakenbilder"},
          {id: "ab", text: "Andra bilder jag inte ville skulle finnas på internet"},
        ]
      },
      {
        id: "b", text: "Privat/känslig information om mig", subOptions: [
          {id: "ba", text: "Personuppgifter (personnr m.m.)"},
          {id: "bb", text: "Mina relationer"},
          {id: "bc", text: "Mina vanor"},
          {id: "bd", text: "Ekonomiska uppgifter"},
          {id: "be", text: "Brottshistorik"},
        ]
      },
      {
        id: "c", text: "Privat/känslig information om mina närstående", subOptions: [
          {id: "ca", text: "Personuppgifter"},
          {id: "cb", text: "Namn"},
          {id: "cc", text: "Bilder"},
        ]
      },
      {
        id: "d", text: "Kränkande påståenden/saker utifrån:", subOptions: [
          {id: "da", text: "(diskrimineringsgrunder)"},
          {id: "db", text: "Politisk åsikt"},
          {id: "dc", text: "Utseende"},
          {id: "dd", text: "Allmänna personangrepp"},
        ]
      },
      {id: "e", text: "Kontaktinformation (telefonnr, adress m.m.)", subOptions: []},
      {id: "f", text: "Falsk information/lögner", subOptions: []},
      {id: "g", text: "Uppmaningar till brottsliga handlingar", subOptions: []},
    ]
  },
  otherInPresent: {
    text: "Vilken information har de lagt upp/skickat om personen? Du kan kryssa i flera svar",
    options: [
      {
        id: "a", text: "Privata/känsliga bilder", subOptions: [
          {id: "aa", text: "Av sexuell karaktär/nakenbilder"},
          {id: "ab", text: "Andra bilder hen inte vill ska finnas på internet"},
        ]
      },
      {
        id: "b", text: "Privat/känslig information om personen", subOptions: [
          {id: "ba", text: "Personuppgifter (personnr m.m.)"},
          {id: "bb", text: "Personens relationer"},
          {id: "bc", text: "Personens vanor"},
          {id: "bd", text: "Ekonomiska uppgifter"},
          {id: "be", text: "Brottshistorik"},
        ]
      },
      {
        id: "c", text: "Privat/känslig information om personens närstående", subOptions: [
          {id: "ca", text: "Personuppgifter"},
          {id: "cb", text: "Namn"},
          {id: "cc", text: "Bilder"},
        ]
      },
      {
        id: "d", text: "Kränkande påståenden/saker utifrån:", subOptions: [
          {id: "da", text: "(diskrimineringsgrunder)"},
          {id: "db", text: "Politisk åsikt"},
          {id: "dc", text: "Utseende"},
          {id: "dd", text: "Allmänna personangrepp"},
        ]
      },
      {id: "e", text: "Kontaktinformation (telefonnr, adress m.m.)", subOptions: []},
      {id: "f", text: "Falsk information/lögner", subOptions: []},
      {id: "g", text: "Uppmaningar till brottsliga handlingar", subOptions: []},
    ]
  },
  otherInPast: {
    text: "Vilken information lades upp/skickades om personen? Du kan kryssa i flera svar",
    options: [
      {
        id: "a", text: "Privata/känsliga bilder", subOptions: [
          {id: "aa", text: "Av sexuell karaktär/nakenbilder"},
          {id: "ab", text: "Andra bilder personen inte ville ska finnas på internet"},
        ]
      },
      {
        id: "b", text: "Privat/känslig information om personen", subOptions: [
          {id: "ba", text: "Personuppgifter (personnr m.m.)"},
          {id: "bb", text: "Personens relationer"},
          {id: "bc", text: "Personens vanor"},
          {id: "bd", text: "Ekonomiska uppgifter"},
          {id: "be", text: "Brottshistorik"},
        ]
      },
      {
        id: "c", text: "Privat/känslig information om personens närstående", subOptions: [
          {id: "ca", text: "Personuppgifter"},
          {id: "cb", text: "Namn"},
          {id: "cc", text: "Bilder"},
        ]
      },
      {
        id: "d", text: "Kränkande påståenden/saker utifrån:", subOptions: [
          {id: "da", text: "(diskrimineringsgrunder)"},
          {id: "db", text: "Politisk åsikt"},
          {id: "dc", text: "Utseende"},
          {id: "dd", text: "Allmänna personangrepp"},
        ]
      },
      {id: "e", text: "Kontaktinformation (telefonnr, adress m.m.)", subOptions: []},
      {id: "f", text: "Falsk information/lögner", subOptions: []},
      {id: "g", text: "Uppmaningar till brottsliga handlingar", subOptions: []},
    ]
  },
};

questionOptions = [
  {
    id: "a", text: "Privata meddelanden", subOptions: [
      {id: "aa", text: "Messenger"},
      {id: "ab", text: "Mail"},
      {id: "ac", text: "Sms"},
      {id: "ad", text: "Whatsapp"},
      {id: "ae", text: "Skype"},
      {id: "af", text: "Twitch"},
    ],
  },
  {
    id: "b", text: "Sociala medier", subOptions: [
      {id: "ba", text: "Snapchat"},
      {id: "bb", text: "Facebook"},
      {id: "bc", text: "Instagram"},
      {id: "bd", text: "Twitter"},
    ],
  },
  {id: "c", text: "Youtube", subOptions: [],},
  {id: "d", text: "Telefon", subOptions: [],},
  {id: "e", text: "Brev", subOptions: [],},
  {id: "f", text: "Fysiskt", subOptions: [],},
  {id: "g", text: "Annat", subOptions: [],},
];
const q10 = {
  id: "10",
  type: "checkboxGroupWithSubOptions",
  selfInPresent: {
    text: "Hur har de kontaktat dig? Du kan kryssa i flera svar.",
    options: questionOptions
  },
  selfInPast: {
    text: "Hur kontaktade de dig? Du kan kryssa i flera svar.",
    options: questionOptions
  },
  otherInPresent: {
    text: "Hur har de kontaktat personen? Du kan kryssa i flera svar.",
    options: questionOptions
  },
  otherInPast: {
    text: "Hur kontaktade de personen? Du kan kryssa i flera svar.",
    options: questionOptions
  },
};

questionOptions = [
  {
    id: "a", text: "Privata meddelanden", subOptions: [
      {id: "aa", text: "Messenger"},
      {id: "ab", text: "Mail"},
      {id: "ac", text: "Sms"},
      {id: "ad", text: "Whatsapp"},
      {id: "ae", text: "Skype"},
      {id: "af", text: "Twitch"},
    ],
  },
  {
    id: "b", text: "Sociala medier", subOptions: [
      {id: "ba", text: "Snapchat"},
      {id: "bb", text: "Facebook"},
      {id: "bc", text: "Instagram"},
      {id: "bd", text: "Twitter"},
    ],
  },
  {id: "c", text: "Telefon", subOptions: [],},
  {id: "d", text: "Brev", subOptions: [],},
  {id: "e", text: "Fysiskt", subOptions: [],},
  {id: "f", text: "Annat", subOptions: [],},
];
const q11 = {
  id: "11",
  type: "checkboxGroupWithSubOptions",
  selfInPresent: {
    text: "Hur har de kontaktat din arbets/uppdragsgivare?",
    options: questionOptions
  },
  selfInPast: {
    text: "Hur kontaktade de din arbets/uppdragsgivare?",
    options: questionOptions
  },
  otherInPresent: {
    text: "Hur har de kontaktat personens arbets/uppdragsgivare?",
    options: questionOptions
  },
  otherInPast: {
    text: "Hur kontaktade de personens arbets/uppdragsgivare?",
    options: questionOptions
  },
};

questionOptions = [
  {id: "a", text: "Ja"},
  {id: "b", text: "Nej"},
];
const q12 = {
  id: "12",
  type: "radioGroup",
  selfInPresent: {
    text: "Vet du om det var en specifik händelse eller handling som startade detta?",
    options: questionOptions
  },
  selfInPast: {
    text: "Vet du om det var en specifik händelse eller handling som startade det?",
    options: questionOptions
  },
  otherInPresent: {
    text: "Vet personen eller du om det var en specifik händelse eller handling som startade detta?",
    options: questionOptions
  },
  otherInPast: {
    text: "Vet personen (eller du) om det var en specifik händelse eller handling som startade det?",
    options: questionOptions
  },
};

questionOptions = [
  {id: "a", text: "Ja"},
  {id: "b", text: "Nej"},
  {id: "c", text: "Vet ej"},
];
const q13 = {
  id: "13",
  type: "radioGroup",
  selfInPresent: {
    text: "Har någon uppmanat andra att kontakta dig?",
    options: questionOptions
  },
  selfInPast: {
    text: "Uppmanade någon andra att kontakta dig?",
    options: questionOptions
  },
  otherInPresent: {
    text: "Har någon uppmanat andra att kontakta personen?",
    options: questionOptions
  },
  otherInPast: {
    text: "Uppmanade någon andra att kontakta personen?",
    options: questionOptions
  },
};
generalQuestion = {
  text: "Var?",
  options: [
    {
      id: "a", text: "Sociala medier", subOptions: [
        {id: "aa", text: "Snapchat"},
        {id: "ab", text: "Facebook"},
        {id: "ac", text: "Instagram"},
        {id: "ad", text: "Twitter"},
        {id: "ae", text: "Tumblr"},
      ],
    },
    {
      id: "b", text: "Externa forum", subOptions: [
        {id: "ba", text: "Flashback"},
        {id: "bb", text: "Familjeliv"},
        {id: "bc", text: "Annat"},
      ],
    },
    {id: "c", text: "Externa bloggar", subOptions: [],},
    {
      id: "d", text: "Högerextrema/rasistiska sidor", subOptions: [
        {id: "da", text: "Nordfront"},
        {id: "db", text: "Samhällsnytt (tidigare Avpixlat)"},
      ],
    },
    {id: "e", text: "YouTube eller andra videokanaler", subOptions: [],},
    {id: "f", text: "Slutna chattgrupper", subOptions: [],},
    {id: "g", text: "Någon annanstans", subOptions: [],},
    {id: "h", text: "Jag vet inte", subOptions: [],},
  ]
};
const q14 = {
  id: "14",
  type: "checkboxGroupWithSubOptions",
  selfInPresent: generalQuestion,
  selfInPast: generalQuestion,
  otherInPresent: generalQuestion,
  otherInPast: generalQuestion,
};

questionOptions = [
  {id: "a", text: "Offentlig person"},
  {id: "b", text: "Privatperson"},
  {id: "c", text: "Yrkesroll"},
];
const q15 = {
  id: "15",
  type: "radioGroup",
  selfInPresent: {
    text: "I vilken roll är du främst utsatt?",
    options: questionOptions
  },
  selfInPast: {
    text: "I vilken roll var du främst utsatt?",
    options: questionOptions
  },
  otherInPresent: {
    text: "I vilken roll är personen främst utsatt?",
    options: questionOptions
  },
  otherInPast: {
    text: "I vilken roll var personen främst utsatt?",
    options: questionOptions
  },
};

questionOptions = [
  {id: "a", text: "Ja"},
  {id: "b", text: "Nej"},
];
const q16 = {
  id: "16",
  type: "radioGroup",
  selfInPresent: {
    text: "Har du en uttalad hotbild mot dig?",
    options: questionOptions
  },
  selfInPast: {
    text: "Hade du en uttalad hotbild mot dig?",
    options: questionOptions
  },
  otherInPresent: {
    text: "Har personen en uttalad hotbild mot sig?",
    options: questionOptions
  },
  otherInPast: {
    text: "Hade personen en uttalad hotbild mot dig?",
    options: questionOptions
  },
};

questionOptions = [
  {id: "a", text: "Ja ofta"},
  {id: "b", text: "Ja någon gång tidigare"},
  {id: "c", text: "Nej aldrig"},
];
const q17 = {
  id: "17",
  type: "radioGroup",
  selfInPresent: {
    text: "Har du varit i liknande situationer tidigare?",
    options: questionOptions
  },
  selfInPast: {
    text: "Hade du varit i liknande situationer tidigare?",
    options: questionOptions
  },
  otherInPresent: {
    text: "Har personen varit i liknande situationer tidigare?",
    options: questionOptions
  },
  otherInPast: {
    text: "Hade hen varit i liknande situationer tidigare?",
    options: questionOptions
  },
};
export const baseQuestions = [q0, q1];
export const questionTree = [q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17];
