/**
 * This list contains the two initial questions that is used to customize the other questions later on.
 */
export const introductionQuestions = [
  {
    id: 'target',
    type: 'radio',
    text: 'Vem är utsatt?',
    options: [
      { id: 'self', text: 'Jag' },
      { id: 'other', text: 'En annan person' }
    ]
  },
  {
    id: 'tempus',
    text: 'Pågår det just nu?',
    options: [{ id: 'present', text: 'Ja' }, { id: 'past', text: 'Nej' }]
  }
];

/**
 * The questions to be displayed, as well as the possible answers:
 * id: used in conditions to refer back to the answer
 * type: 'radioGroup' (one item may be selected), 'checkboxGroup' (multiple items may be selected),
 *   or 'checkboxGroupWithSubOptions' (like checkboxGroup, but options may reveal sub-options)
 * questionText: the.. text to display, this has five (optional) subkeys:
 *   {target}In{tempus} (see introductionQuestions for definitions of target/tempus) is shown if that option was selected
 *   noTarget: the default if there is no match for the current xInY
 * options: a list of... options, each of which has the following options
 *   id: used in conditions (refer to an option by querying for {question.id}-{answer.id})
 *   optionText: the label (follows the same format as questionText)
 *   subOptions: (only for checkboxGroupWithSubOptions questions) options to be displayed if this is selected, follows
 *     the same format as options
 *
 * NOTE: As a rule of thumb, keep id descriptive: it's much easier to understand a tip that requires age-adult than one
 * that requires q2-b
 */
export const followupQuestions = [
  {
    id: 'age',
    type: 'radioGroup',
    questionText: {
      selfInPresent: 'Hur gammal är du?',
      selfInPast: 'Hur gammal är du?',
      otherInPresent: 'Hur gammal är personen som är utsatt?',
      otherInPast: 'Hur gammal är personen?'
    },
    options: [
      { id: 'child', optionText: { noTarget: '0-17' } },
      { id: 'adult', optionText: { noTarget: '18+' } }
    ]
  },
  {
    id: 'adultConfirm',
    type: 'radioGroup',
    condition: 'age-adult',
    questionText: {
      noTarget: 'Denna fråga visas bara för myndiga'
    },
    options: [{ id: 'ok', optionText: { noTarget: 'OK' } }]
  },
  {
    id: 'q3',
    type: 'checkboxGroup',
    questionText: {
      selfInPresent:
        'Kryssa i det som bäst stämmer överens med situationen. Du kan kryssa i flera svar.',
      selfInPast:
        'Kryssa i det som bäst stämde överens med situationen. Du kan kryssa i flera svar.',
      otherInPresent:
        'Kryssa i det som bäst stämmer överens med situationen. Du kan kryssa i flera svar.',
      otherInPast:
        'Kryssa i det som bäst stämde överens med situationen. Du kan kryssa i flera svar'
    },
    options: [
      {
        id: 'a',
        optionText: {
          selfInPresent: 'Jag är uthängd någonstans',
          selfInPast: 'Jag var uthängd någonstans',
          otherInPresent: 'Personen är uthängd någonstans',
          otherInPast: 'Personen var uthängd någonstans'
        }
      },
      {
        id: 'b',
        optionText: {
          selfInPresent: 'Folk kontaktar mig direkt',
          selfInPast: 'Folk kontaktade mig direkt',
          otherInPresent: 'Folk kontaktar personen direkt',
          otherInPast: 'Folk kontaktade personen direkt'
        }
      },
      {
        id: 'c',
        optionText: {
          selfInPresent: 'Folk kontaktar mina närstående',
          selfInPast: 'Folk kontaktade mina närstående',
          otherInPresent: 'Folk kontaktar personens närstående',
          otherInPast: 'Folk kontaktade personens närstående'
        }
      },
      {
        id: 'd',
        optionText: {
          selfInPresent: 'Folk kontaktar mina arbets/uppdragsgivare',
          selfInPast: 'Folk kontaktade mina arbets/uppdragsgivare',
          otherInPresent: 'Folk kontaktar personens arbets/uppdragsgivare',
          otherInPast: 'Folk kontaktade personens arbets/uppdragsgivare'
        }
      },
      {
        id: 'e',
        optionText: {
          selfInPresent: 'Någon utger sig för att vara jag',
          selfInPast: 'Någon utgav sig för att vara jag',
          otherInPresent: 'Någon utger sig för att vara personen',
          otherInPast: 'Någon utgav sig för att vara personen'
        }
      },
      {
        id: 'f',
        optionText: {
          selfInPresent: 'Någon skriver om mig',
          selfInPast: 'Någon skrev om mig',
          otherInPresent: 'Någon skriver om personen',
          otherInPast: 'Någon skrev om personen'
        }
      }
    ]
  },
  {
    id: 'q4',
    type: 'checkboxGroup',
    questionText: {
      selfInPresent: 'Hur upplever du situationen? Du kan kryssa i flera svar.',
      selfInPast: 'Hur upplevde du situationen? Du kan kryssa i flera svar.',
      otherInPresent:
        'Hur upplever personen situationen? Du kan kryssa i flera svar.',
      otherInPast:
        'Hur upplevde personen situationen? Du kan kryssa i flera svar'
    },
    options: [
      {
        id: 'a',
        optionText: {
          selfInPresent: 'Jag känner mig hotad',
          selfInPast: 'Jag kände mig hotad ',
          otherInPresent: 'Hen känner sig hotad',
          otherInPast: 'Hen kände sig hotad '
        }
      },
      {
        id: 'b',
        optionText: {
          selfInPresent: 'Jag känner mig rädd',
          selfInPast: 'Jag kände mig rädd ',
          otherInPresent: 'Hen känner sig rädd',
          otherInPast: 'Hen kände sig rädd '
        }
      },
      {
        id: 'c',
        optionText: {
          selfInPresent: 'Jag känner mig trakasserad',
          selfInPast: 'Jag kände mig trakasserad ',
          otherInPresent: 'Hen känner sig trakasserad',
          otherInPast: 'Hen kände sig trakasserad '
        }
      },
      {
        id: 'd',
        optionText: {
          selfInPresent: 'Jag känner mig kränkt',
          selfInPast: 'Jag kände mig kränkt ',
          otherInPresent: 'Hen känner sig kränkt',
          otherInPast: 'Hen kände sig kränkt '
        }
      },
      {
        id: 'e',
        optionText: {
          selfInPresent: 'Jag känner mig förföljd',
          selfInPast: 'Jag kände mig förföljd ',
          otherInPresent: 'Hen känner sig förföljd',
          otherInPast: 'Hen kände sig förföljd '
        }
      },
      {
        id: 'f',
        optionText: {
          selfInPresent: 'Jag känner mig utpressad',
          selfInPast: 'Jag kände mig utpressad ',
          otherInPresent: 'Hen känner sig utpressad',
          otherInPast: 'Henkände sig utpressad '
        }
      },
      {
        id: 'g',
        optionText: {
          selfInPresent: 'Jag känner mig utfryst',
          selfInPast: 'Jag kände mig utfryst ',
          otherInPresent: 'Hen känner sig utfryst',
          otherInPast: 'Hen kände sig utfryst '
        }
      },
      {
        id: 'h',
        optionText: {
          selfInPresent: 'Jag känner mig mobbad',
          selfInPast: 'Jag kände mig mobbad ',
          otherInPresent: 'Hen känner sig mobbad',
          otherInPast: 'Hen kände sig mobbad '
        }
      },
      {
        id: 'i',
        optionText: {
          selfInPresent: 'Det sprids lögner om mig',
          selfInPast: 'Det spreds lögner om mig',
          otherInPresent: 'Det sprids lögner om hen',
          otherInPast: 'Det spreds lögner om hen'
        }
      }
    ]
  },
  {
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
  },
  {
    id: 'q6',
    type: 'radioGroup',

    questionText: {
      selfInPresent:
        'Vet du vem eller vilka det är? (Följdfråga: Är personerna anonyma?)',
      selfInPast:
        'Vet du vem eller vilka det var? (Följdfråga: Var personerna anonyma?)',
      otherInPresent:
        'Vet den som utsätts (eller du?) vem eller vilka det är? (Följdfråga: Är personerna anonyma?)',
      otherInPast:
        'Vet personen (eller du) vem eller vilka det var? (Följdfråga: Var personerna anonyma?)'
    },
    options: [
      { id: 'a', optionText: { noTarget: 'Ja' } },
      { id: 'b', optionText: { noTarget: 'Nej' } },
      { id: 'c', optionText: { noTarget: 'Delvis' } }
    ]
  },
  {
    id: 'q7',
    type: 'radioGroup',
    questionText: {
      selfInPresent: 'Är det personer du känner?',
      selfInPast: 'Var det personer du kände?',
      otherInPresent: 'Är det personer hen (eller du) känner?',
      otherInPast: 'Var det personer hen (eller du) kände?'
    },
    options: [
      { id: 'a', optionText: { noTarget: 'Ja' } },
      { id: 'b', optionText: { noTarget: 'Nej' } },
      { id: 'c', optionText: { noTarget: 'Både och' } }
    ]
  },
  {
    id: 'where',
    type: 'checkboxGroupWithSubOptions',
    questionText: {
      selfInPresent: 'Var är du uthängd? Du kan kryssa i flera svar.',
      selfInPast: 'Var någonstans var du uthängd? Du kan kryssa i flera svar.',
      otherInPresent: 'Var är personen uthängd? Du kan kryssa i flera svar.',
      otherInPast:
        'Var någonstans var personen uthängd? Du kan kryssa i flera svar.'
    },
    options: [
      {
        id: 'socialMedia',
        optionText: { noTarget: 'Sociala medier' },
        subOptions: [
          { id: 'snapchat', optionText: { noTarget: 'Snapchat' } },
          { id: 'facebook', optionText: { noTarget: 'Facebook' } },
          { id: 'instagram', optionText: { noTarget: 'Instagram' } },
          { id: 'twitter', optionText: { noTarget: 'Twitter' } },
          { id: 'tumblr', optionText: { noTarget: 'Tumblr' } }
        ]
      },
      {
        id: 'forums',
        optionText: { noTarget: 'Externa forum' },
        subOptions: [
          { id: 'flashback', optionText: { noTarget: 'Flashback' } },
          { id: 'familjeliv', optionText: { noTarget: 'Familjeliv' } },
          { id: 'otherForum', optionText: { noTarget: 'Annat' } }
        ]
      },
      {
        id: 'blogs',
        optionText: { noTarget: 'Externa bloggar' },
        subOptions: []
      },
      {
        id: 'altRight',
        optionText: { noTarget: 'Högerextrema/rasistiska sidor' },
        subOptions: [
          { id: 'nordfront', optionText: { noTarget: 'Nordfront' } },
          {
            id: 'samhällsnytt',
            optionText: { noTarget: 'Samhällsnytt (tidigare Avpixlat)' }
          }
        ]
      },
      {
        id: 'video',
        optionText: { noTarget: 'YouTube eller andra videokanaler' },
        subOptions: []
      },
      {
        id: 'porn',
        optionText: { noTarget: 'Porrsiter' },
        subOptions: []
      }
    ]
  },
  {
    id: 'q9',
    type: 'checkboxGroupWithSubOptions',
    questionText: {
      selfInPresent:
        'Vilken information har de lagt upp/skickat om dig? Du kan kryssa i flera svar.',
      selfInPast:
        'Vilken information lades upp/skickades om dig? Du kan kryssa i flera svar.',
      otherInPresent:
        'Vilken information har de lagt upp/skickat om personen? Du kan kryssa i flera svar',
      otherInPast:
        'Vilken information lades upp/skickades om personen? Du kan kryssa i flera svar'
    },
    options: [
      {
        id: 'a',
        optionText: {
          noTarget: 'Privata/känsliga bilder'
        },
        subOptions: [
          {
            id: 'aa',
            optionText: {
              selfInPresent: 'Av sexuell karaktär/nakenbilder',
              selfInPast: 'Av sexuell karaktär/nakenbilder',
              otherInPresent: 'Av sexuell karaktär/nakenbilder',
              otherInPast: 'Av sexuell karaktär/nakenbilder'
            }
          },
          {
            id: 'ab',
            optionText: {
              selfInPresent:
                'Andra bilder jag inte vill ska finnas på internet',
              selfInPast:
                'Andra bilder jag inte ville skulle finnas på internet',
              otherInPresent:
                'Andra bilder hen inte vill ska finnas på internet',
              otherInPast:
                'Andra bilder personen inte ville ska finnas på internet'
            }
          }
        ]
      },
      {
        id: 'b',
        optionText: {
          selfInPresent: 'Privat/känslig information om mig',
          selfInPast: 'Privat/känslig information om mig',
          otherInPresent: 'Privat/känslig information om personen',
          otherInPast: 'Privat/känslig information om personen'
        },
        subOptions: [
          {
            id: 'ba',
            optionText: {
              selfInPresent: 'Personuppgifter (personnr m.m.)',
              selfInPast: 'Personuppgifter (personnr m.m.)',
              otherInPresent: 'Personuppgifter (personnr m.m.)',
              otherInPast: 'Personuppgifter (personnr m.m.)'
            }
          },
          {
            id: 'bb',
            optionText: {
              selfInPresent: 'Mina relationer',
              selfInPast: 'Mina relationer',
              otherInPresent: 'Personens relationer',
              otherInPast: 'Personens relationer'
            }
          },
          {
            id: 'bc',
            optionText: {
              selfInPresent: 'Mina vanor',
              selfInPast: 'Mina vanor',
              otherInPresent: 'Personens vanor',
              otherInPast: 'Personens vanor'
            }
          },
          {
            id: 'bd',
            optionText: {
              selfInPresent: 'Ekonomiska uppgifter',
              selfInPast: 'Ekonomiska uppgifter',
              otherInPresent: 'Ekonomiska uppgifter',
              otherInPast: 'Ekonomiska uppgifter'
            }
          },
          {
            id: 'be',
            optionText: {
              selfInPresent: 'Brottshistorik',
              selfInPast: 'Brottshistorik',
              otherInPresent: 'Brottshistorik',
              otherInPast: 'Brottshistorik'
            }
          }
        ]
      },
      {
        id: 'c',
        optionText: {
          selfInPresent: 'Privat/känslig information om mina närstående',
          selfInPast: 'Privat/känslig information om mina närstående',
          otherInPresent: 'Privat/känslig information om personens närstående',
          otherInPast: 'Privat/känslig information om personens närstående'
        },
        subOptions: [
          { id: 'ca', optionText: { noTarget: 'Personuppgifter' } },
          { id: 'cb', optionText: { noTarget: 'Namn' } },
          { id: 'cc', optionText: { noTarget: 'Bilder' } }
        ]
      },
      {
        id: 'd',
        optionText: { noTarget: 'Kränkande påståenden/saker utifrån:' },
        subOptions: [
          { id: 'da', optionText: { noTarget: '(diskrimineringsgrunder)' } },
          { id: 'db', optionText: { noTarget: 'Politisk åsikt' } },
          { id: 'dc', optionText: { noTarget: 'Utseende' } },
          { id: 'dd', optionText: { noTarget: 'Allmänna personangrepp' } }
        ]
      },
      {
        id: 'e',
        optionText: { noTarget: 'Kontaktinformation (telefonnr, adress m.m.)' },
        subOptions: []
      },
      {
        id: 'f',
        optionText: { noTarget: 'Falsk information/lögner' },
        subOptions: []
      },
      {
        id: 'g',
        optionText: { noTarget: 'Uppmaningar till brottsliga handlingar' },
        subOptions: []
      }
    ]
  },
  {
    id: 'q10',
    type: 'checkboxGroupWithSubOptions',
    questionText: {
      selfInPresent: 'Hur har de kontaktat dig? Du kan kryssa i flera svar.',
      selfInPast: 'Hur kontaktade de dig? Du kan kryssa i flera svar.',
      otherInPresent:
        'Hur har de kontaktat personen? Du kan kryssa i flera svar.',
      otherInPast: 'Hur kontaktade de personen? Du kan kryssa i flera svar.'
    },
    options: [
      {
        id: 'a',
        optionText: { noTarget: 'Privata meddelanden' },
        subOptions: [
          { id: 'aa', optionText: { noTarget: 'Messenger' } },
          { id: 'ab', optionText: { noTarget: 'Mail' } },
          { id: 'ac', optionText: { noTarget: 'Sms' } },
          { id: 'ad', optionText: { noTarget: 'Whatsapp' } },
          { id: 'ae', optionText: { noTarget: 'Skype' } },
          { id: 'af', optionText: { noTarget: 'Twitch' } }
        ]
      },
      {
        id: 'b',
        optionText: { noTarget: 'Sociala medier' },
        subOptions: [
          { id: 'ba', optionText: { noTarget: 'Snapchat' } },
          { id: 'bb', optionText: { noTarget: 'Facebook' } },
          { id: 'bc', optionText: { noTarget: 'Instagram' } },
          { id: 'bd', optionText: { noTarget: 'Twitter' } }
        ]
      },
      { id: 'c', optionText: { noTarget: 'Youtube' }, subOptions: [] },
      { id: 'd', optionText: { noTarget: 'Telefon' }, subOptions: [] },
      { id: 'e', optionText: { noTarget: 'Brev' }, subOptions: [] },
      { id: 'f', optionText: { noTarget: 'Fysiskt' }, subOptions: [] },
      { id: 'g', optionText: { noTarget: 'Annat' }, subOptions: [] }
    ]
  },
  {
    id: 'q11',
    type: 'checkboxGroupWithSubOptions',
    questionText: {
      selfInPresent: 'Hur har de kontaktat din arbets/uppdragsgivare?',
      selfInPast: 'Hur kontaktade de din arbets/uppdragsgivare?',
      otherInPresent: 'Hur har de kontaktat personens arbets/uppdragsgivare?',
      otherInPast: 'Hur kontaktade de personens arbets/uppdragsgivare?'
    },
    options: [
      {
        id: 'a',
        optionText: { noTarget: 'Privata meddelanden' },
        subOptions: [
          { id: 'aa', optionText: { noTarget: 'Messenger' } },
          { id: 'ab', optionText: { noTarget: 'Mail' } },
          { id: 'ac', optionText: { noTarget: 'Sms' } },
          { id: 'ad', optionText: { noTarget: 'Whatsapp' } },
          { id: 'ae', optionText: { noTarget: 'Skype' } },
          { id: 'af', optionText: { noTarget: 'Twitch' } }
        ]
      },
      {
        id: 'b',
        optionText: { noTarget: 'Sociala medier' },
        subOptions: [
          { id: 'ba', optionText: { noTarget: 'Snapchat' } },
          { id: 'bb', optionText: { noTarget: 'Facebook' } },
          { id: 'bc', optionText: { noTarget: 'Instagram' } },
          { id: 'bd', optionText: { noTarget: 'Twitter' } }
        ]
      },
      { id: 'c', optionText: { noTarget: 'Telefon' }, subOptions: [] },
      { id: 'd', optionText: { noTarget: 'Brev' }, subOptions: [] },
      { id: 'e', optionText: { noTarget: 'Fysiskt' }, subOptions: [] },
      { id: 'f', optionText: { noTarget: 'Annat' }, subOptions: [] }
    ]
  },
  {
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
  },
  {
    id: 'q13',
    type: 'radioGroup',
    questionText: {
      selfInPresent: 'Har någon uppmanat andra att kontakta dig?',
      selfInPast: 'Uppmanade någon andra att kontakta dig?',
      otherInPresent: 'Har någon uppmanat andra att kontakta personen?',
      otherInPast: 'Uppmanade någon andra att kontakta personen?'
    },
    options: [
      { id: 'a', optionText: { noTarget: 'Ja' } },
      { id: 'b', optionText: { noTarget: 'Nej' } },
      { id: 'c', optionText: { noTarget: 'Vet ej' } }
    ]
  },
  {
    id: 'q14',
    type: 'checkboxGroupWithSubOptions',
    questionText: {
      noTarget: 'Var?'
    },
    options: [
      {
        id: 'a',
        optionText: { noTarget: 'Sociala medier' },
        subOptions: [
          { id: 'aa', optionText: { noTarget: 'Snapchat' } },
          { id: 'ab', optionText: { noTarget: 'Facebook' } },
          { id: 'ac', optionText: { noTarget: 'Instagram' } },
          { id: 'ad', optionText: { noTarget: 'Twitter' } },
          { id: 'ae', optionText: { noTarget: 'Tumblr' } }
        ]
      },
      {
        id: 'b',
        optionText: { noTarget: 'Externa forum' },
        subOptions: [
          { id: 'ba', optionText: { noTarget: 'Flashback' } },
          { id: 'bb', optionText: { noTarget: 'Familjeliv' } },
          { id: 'bc', optionText: { noTarget: 'Annat' } }
        ]
      },
      { id: 'c', optionText: { noTarget: 'Externa bloggar' }, subOptions: [] },
      {
        id: 'd',
        optionText: { noTarget: 'Högerextrema/rasistiska sidor' },
        subOptions: [
          { id: 'da', optionText: { noTarget: 'Nordfront' } },
          {
            id: 'db',
            optionText: { noTarget: 'Samhällsnytt (tidigare Avpixlat)' }
          }
        ]
      },
      {
        id: 'e',
        optionText: { noTarget: 'YouTube eller andra videokanaler' },
        subOptions: []
      },
      {
        id: 'f',
        optionText: { noTarget: 'Slutna chattgrupper' },
        subOptions: []
      },
      { id: 'g', optionText: { noTarget: 'Någon annanstans' }, subOptions: [] },
      { id: 'h', optionText: { noTarget: 'Jag vet inte' }, subOptions: [] }
    ]
  },
  {
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
  },
  {
    id: 'q16',
    type: 'radioGroup',
    questionText: {
      selfInPresent: 'Har du en uttalad hotbild mot dig?',
      selfInPast: 'Hade du en uttalad hotbild mot dig?',
      otherInPresent: 'Har personen en uttalad hotbild mot sig?',
      otherInPast: 'Hade personen en uttalad hotbild mot dig?'
    },
    options: [
      { id: 'a', optionText: { noTarget: 'Ja' } },
      { id: 'b', optionText: { noTarget: 'Nej' } }
    ]
  },
  {
    id: 'q17',
    type: 'radioGroup',
    questionText: {
      selfInPresent: 'Har du varit i liknande situationer tidigare?',
      selfInPast: 'Hade du varit i liknande situationer tidigare?',
      otherInPresent: 'Har personen varit i liknande situationer tidigare?',
      otherInPast: 'Hade hen varit i liknande situationer tidigare?'
    },
    options: [
      { id: 'a', optionText: { noTarget: 'Ja' } },
      { id: 'b', optionText: { noTarget: 'Nej' } },
      { id: 'c', optionText: { noTarget: 'Nej aldrig' } }
    ]
  }
];
