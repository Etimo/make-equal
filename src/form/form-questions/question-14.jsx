const question = {
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
};
export default question;
