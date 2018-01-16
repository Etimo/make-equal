    const sections = [
      {name:'personliga uppgifter',
      id:'pi',
      icon:'user',
      questions:[
        {label: 'Vilken datum?', type:'datepicker'},
        {label: 'Vilken åldersgrupp tillhör du?', type:'selectGroup', 
        options:[{value:'value1', text:'10 till 14'},{value:'value2', text:'15 till 17'},{value:'value3', text:'18 till 21'}] },
        {label: 'Hur många?', type:'radioGroup', options:[{value:'1', text:'1'}, {value:'2', text:'2'}, {value:'3', text:'trea'}] },
        {label: 'QQ', type:'checkboxGroup', options:[{value:'a', text:'a'}, {value:'b', text:'b'}, {value:'c', text:'c'}] }, 
        {label: 'Förnamn', type:'textfield' },
        {label: 'Efternamn', type:'textfield' },
        {label: 'qww', type:'textfield' },
        {label: 'qwe', type:'textfield' },
        {label: 'asda', type:'textfield' },
        {label: 'abasd', type:'textarea' },
        {label: 'Hallå skriv lite om dig själv', type:'textarea' },
        {label: 'Hallå skriv lite om dig själv2', type:'textarea' }
      ]},
      {name:'jobb',
      id:'work',
      icon:'briefcase',
      questions:[
        {label: 'Fråga 1', type:'checkboxGroup', options:[{value:'1', text:'1'}, {value:'2', text:'2'}] }, 
        {label: 'Fyll i alla bla', type:'checkboxGroup', options:[{value:'value1', text:'lite text1'}, {value:'value2', text:'lite text2'}] },
        {label: 'tee', type:'textfield' },
        {label: 'qww', type:'textfield' },
        {label: 'hej1', type:'textarea' },
        {label: 'Välj XX ', type:'selectGroup', options:[{value:'value1', text:'test1'},{value:'value2', text:'test2'}] },
      ]},
      {name:'tillgångar',
      id:'assets',
      icon:'archive',
      questions:[
        {label: 'QQ', type:'checkboxGroup', options:[{value:'1', text:'1'}, {value:'2', text:'2'}] },
        {label: 'name', type:'checkboxGroup', options:[{value:'1', text:'asda'}, {value:'2', text:'asdas'}] },
        {label: 'tee', type:'textfield'},
        {label: 'qww', type:'textfield'},
        {label: 'hej2', type:'textarea'},
        {label: 'Välj det som stämmer bäst', type:'selectGroup', options:[{value:'tri', text:'Tric'}, {value:'bi', text:'Bic'},{value:'5', text:'Five'}, {value:'7', text:'Seven'}, {value:'8', text:'Lite'}, {value:'9', text:'Option'}]},
      ]},
      {name:'bostad',
      id:'acc',
      icon:'building outline',
      questions:[
        {label: 'QQ', type:'checkboxGroup', options:[{value:'1', text:'1'}, {value:'2', text:'2'}] }, 
        {label: 'name', type:'checkboxGroup', options:[{value:'1', text:'qwe'}, {value:'2', text:'wqe'}] },
        {label: 'tee', type:'textfield'},
        {label: 'qww', type:'textfield'},
        {label: 'Hq?', type:'textarea'},
        {label: 'Välj hur många XX', type:'selectGroup', options:[{value:'1', text:'1'}, {value:'2', text:'2'}, {value:'3', text:'seven'}] },
      ]},
      {name:'skulder',
      id:'debt',
      icon:'currency',
      questions:[
        {label: 'QQ', type:'checkboxGroup', options:[{value:'1', text:'Hej'}, {value:'2', text:'Hopp'}] }, 
        {label: 'name', type:'checkboxGroup', options:[{value:'1', text:'abc'}, {value:'1', text:'def'}] }, 
        {label: 'tee', type:'textfield'},
        {label: 'qww', type:'textfield'},
        {label: 'ah?', type:'textarea'},
        {label: 'Hur många XX', type:'selectGroup', options:[{value:'1', text:'1'}, {value:'2', text:'2'}, {value:'3', text:'seven'}] },
        {label: 'Hur många?', type:'radioGroup', options:[{value:'1', text:'1'}, {value:'2', text:'2'}] },
      ]}
      
    ];

export default sections;
