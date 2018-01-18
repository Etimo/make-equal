import section from './resources/sections/individual-section'
const sections = [
  {
    name: 'Gaga',
    id: 'gaga',
    icon: 'archive',
    questions: [{
      label: "Wawa",
      type: 'textfield'
    }]
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
  {
    name: 'jobb',
    id: 'work',
    icon: 'briefcase',
    questions: [
      { label: 'Fråga 1', type: 'checkboxGroup', options: [{ value: '1', text: '1' }, { value: '2', text: '2' }] },
      { label: 'Hur många?', type: 'radioGroup', options: [{ value: '1', text: '1' }, { value: '2', text: '2' }, { value: '3', text: 'trea' }] },
      { label: 'tee', type: 'textfield' },
      { label: 'hej1', type: 'textarea' },
      { label: 'Välj XX ', type: 'selectGroup', options: [{ value: 'value1', text: 'test1' }, { value: 'value2', text: 'test2' }] },
    ]
  },
  {
    name: 'tillgångar',
    id: 'assets',
    icon: 'archive',
    questions: [
      { label: 'QQ', type: 'checkboxGroup', options: [{ value: '1', text: '1' }, { value: '2', text: '2' }] },
      { label: 'name', type: 'checkboxGroup', options: [{ value: '1', text: 'asda' }, { value: '2', text: 'asdas' }] },
      { label: 'tee', type: 'textfield' },
      { label: 'hej2', type: 'textarea' },
      { label: 'Välj det som stämmer bäst', type: 'selectGroup', options: [{ value: 'tri', text: 'Tric' }, { value: 'bi', text: 'Bic' }, { value: '5', text: 'Five' }, { value: '7', text: 'Seven' }, { value: '8', text: 'Lite' }, { value: '9', text: 'Option' }] },
    ]
  },
  {
    name: 'bostad',
    id: 'acc',
    icon: 'building outline',
    questions: [
      { label: 'QQ', type: 'checkboxGroup', options: [{ value: '1', text: '1' }, { value: '2', text: '2' }] },
      { label: 'tee', type: 'textfield' },
      { label: 'Hq?', type: 'textarea' },
      { label: 'Välj hur många XX', type: 'selectGroup', options: [{ value: '1', text: '1' }, { value: '2', text: '2' }, { value: '3', text: 'seven' }] },
    ]
  },
  {
    name: 'skulder',
    id: 'debt',
    icon: 'currency',
    questions: [
      { label: 'QQ', type: 'checkboxGroup', options: [{ value: '1', text: 'Hej' }, { value: '2', text: 'Hopp' }] },
      { label: 'tee', type: 'textfield' },
      { label: 'ah?', type: 'textarea' },
      { label: 'Hur många XX', type: 'selectGroup', options: [{ value: '1', text: '1' }, { value: '2', text: '2' }, { value: '3', text: 'seven' }] },
      { label: 'Hur många?', type: 'radioGroup', options: [{ value: '1', text: '1' }, { value: '2', text: '2' }] },
    ]
  },
  {
    name: 'Wawa',
    id: 'wawa',
    icon: 'currency',
    questions: [
      { label: 'QQ', type: 'checkboxGroup', options: [{ value: '1', text: 'Hej' }, { value: '2', text: 'Hopp' }] },
      { label: 'tee', type: 'textfield' },
      { label: 'ah?', type: 'textarea' },
      { label: 'Hur många XX', type: 'selectGroup', options: [{ value: '1', text: '1' }, { value: '2', text: '2' }, { value: '3', text: 'seven' }] },
      { label: 'Hur många?', type: 'radioGroup', options: [{ value: '1', text: '1' }, { value: '2', text: '2' }] },
    ]
  },

  // {section}

];

export default sections;
