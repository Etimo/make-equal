const question = {
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
};
export default question;
