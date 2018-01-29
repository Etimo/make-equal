
const sections = [
  {
    name: 'question 1',
    id: '1',
    icon: 'archive',
    questions: [{
      label: "Vem är utsatt?",
      type: 'radioQuestion',
      options: [
        { value: 'a', text: 'Jag' },
        { value: 'b', text: 'En annan person' },
        ]
    },]
  },
  {
    name: 'Checkbox question',
    id: 'checkbox22',
    icon: 'archive',
    questions: [{
      label: "This component can be used where the answer can be either one or multiple of the alternatives.",
      type: 'checkboxQuestion',
      options: [
        { value: '1', text: 'lots and lots of text to see what happens to the button' },
        { value: '2', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { value: '3', text: 'trea' }]
    },]
  },
  {
    name: 'Textfield Question',
    id: 'textfield',
    icon: 'briefcase',
    questions: [
      { label: 'Enter a number:', type: 'textfieldQuestion', text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    ]
  },
  {
    name: 'Checkbox question',
    id: 'checkbox',
    icon: 'archive',
    questions: [{
      label: "This component can be used where the answer can be either one or multiple of the alternatives.",
      type: 'checkboxQuestion',
      options: [
        { value: '1', text: 'lots and lots of text to see what happens to the button' },
        { value: '2', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { value: '3', text: 'trea' }]
    },]
  },
  {
    name: 'Radio question',
    id: 'radio',
    icon: 'archive',
    questions: [{
      label: "This component can be used for a question where a single answer is suitable. the number of options can vary.",
      type: 'radioQuestion',
      options: [
        { value: '1', text: 'lots and lots of text to see what happens to the button' },
        { value: '2', text: 'even more text now, the first button just got wider and does not get larger atm' },
        { value: '3', text: 'trea' }]
    },]
  },
  {
    name: 'personliga uppgifter',
    id: 'pi',
    icon: 'user',
    questions: [
      {
        label: "Vilken datum?",
        type: 'datepicker'
      },
      {
        label: 'Vilken åldersgrupp tillhör du?', type: 'selectGroup', text: 'wawa',
        options: [{ value: 'value1', text: '10 till 14' }, { value: 'value2', text: '15 till 17' }, { value: 'value3', text: '18 till 21' }]
      },
      { label: 'Hur många?', type: 'radioGroup', options: [{ value: '1', text: '1' }, { value: '2', text: '2' }, { value: '3', text: 'trea' }] },
      { label: 'QQ', type: 'checkboxGroup', options: [{ value: 'a', text: 'a' }, { value: 'b', text: 'b' }, { value: 'c', text: 'c' }] },
      { label: 'Förnamn', type: 'textfield' },
      { label: 'abasd', type: 'textarea' }
    ]
  },
  // {
  //   name: 'jobb',
  //   id: 'work',
  //   icon: 'briefcase',
  //   questions: [
  //     { label: 'Fråga 1', type: 'checkboxGroup', options: [{ value: '1', text: '1' }, { value: '2', text: '2' }] },
  //     { label: 'Hur många?', type: 'radioGroup', options: [{ value: '1', text: '1' }, { value: '2', text: '2' }, { value: '3', text: 'trea' }] },
  //     { label: 'tee', type: 'textfield' },
  //     { label: 'hej1', type: 'textarea' },
  //     { label: 'Välj XX ', type: 'selectGroup', options: [{ value: 'value1', text: 'test1' }, { value: 'value2', text: 'test2' }] },
  //   ]
  // },
  // {
  //   name: 'tillgångar',
  //   id: 'assets',
  //   icon: 'archive',
  //   questions: [
  //     { label: 'QQ', type: 'checkboxGroup', options: [{ value: '1', text: '1' }, { value: '2', text: '2' }] },
  //     { label: 'name', type: 'checkboxGroup', options: [{ value: '1', text: 'asda' }, { value: '2', text: 'asdas' }] },
  //     { label: 'tees', type: 'textfield' },
  //     { label: 'hej2', type: 'textarea' },
  //     { label: 'Välj det som stämmer bäst', type: 'selectGroup', options: [{ value: 'tri', text: 'Tric' }, { value: 'bi', text: 'Bic' }, { value: '5', text: 'Five' }, { value: '7', text: 'Seven' }, { value: '8', text: 'Lite' }, { value: '9', text: 'Option' }] },
  //   ]
  // },
  // {
  //   name: 'bostad',
  //   id: 'acc',
  //   icon: 'building outline',
  //   questions: [
  //     { label: 'QQ', type: 'checkboxGroup', options: [{ value: '1', text: '1' }, { value: '2', text: '2' }] },
  //     { label: 'teeq', type: 'textfield' },
  //     { label: 'Hq?', type: 'textarea' },
  //     { label: 'Välj hur många XX', type: 'selectGroup', options: [{ value: '1', text: '1' }, { value: '2', text: '2' }, { value: '3', text: 'seven' }] },
  //   ]
  // },
  // {
  //   name: 'skulder',
  //   id: 'debt',
  //   icon: 'currency',
  //   questions: [
  //     { label: 'QQ', type: 'checkboxGroup', options: [{ value: '1', text: 'Hej' }, { value: '2', text: 'Hopp' }] },
  //     { label: 'tee', type: 'textfield' },
  //     { label: 'ah?', type: 'textarea' },
  //     { label: 'Hur många XX', type: 'selectGroup', options: [{ value: '1', text: '1' }, { value: '2', text: '2' }, { value: '3', text: 'seven' }] },
  //     { label: 'Hur många?', type: 'radioGroup', options: [{ value: '1', text: '1' }, { value: '2', text: '2' }] },
  //   ]
  // },
];

export default sections;
