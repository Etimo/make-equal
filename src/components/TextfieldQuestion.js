import React from 'react';
import { Field } from 'redux-form';
import { Form, Input } from 'semantic-ui-react';
// import { Grid, Form, Input, Button, Checkbox, Radio } from 'semantic-ui-react';
import '../css/radioGroup.css';
import 'semantic-ui-css/semantic.min.css';


function wawa(value) {
  var isInt = true;
  try {
    for (const index in value) {
      // console.log(index)
      if (Number.isNaN(Number.parseInt(value[index]))) {
        // console.log("is NaN: " + value[index])
        isInt = !isInt;
      }
      if (!isInt) {
        break;
      }
    }
    console.log(isInt)
  } catch (error) {
    isInt = false;
  }
  return (isInt)
}

const TextfieldQuestion = (props) => {
  const x = props.questions;
  let value = { ...props.input };
  // const gaga = wawa("123asd123");
  // console.log(gaga);
  // console.log(x)
  // console.log(parseInt("101",10))
  // console.log(parseInt("101",2))
  return (
    <div className='component-box'>
      <p className='question-box'>{x.text}</p>
      <Field name={x.label} type='text' label={x.label} placeholder="Text" component={renderSemanticUITextfield} />
    </div>
  );
  
}

const renderSemanticUITextfield = (props) => (
  <Form.Field>
    <label>
      {props.label}
    </label>
    <Input placeholder={"lite text"}
      {...props.input}
    />

  </Form.Field>
)
export default TextfieldQuestion;
