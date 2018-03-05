import React from "react";
import {Field, FormSection} from "redux-form";
import {Form, Input} from "semantic-ui-react";
import "../../css/radioGroup.css";
import "semantic-ui-css/semantic.min.css";

const Textfield = (props) => {
  const x = props.questions;
  let value = {...props.input};
  // const gaga = wawa("123asd123");
  // console.log(gaga);
  // console.log(x)
  // console.log(parseInt("101",10))
  // console.log(parseInt("101",2))
  return (
    <FormSection name={x.id}>
      <label className='component-box'>
        <p className='question-box'>{x.title}</p>
        <Field name="input" type='text' label={x.label} placeholder="Text" component={renderSemanticUITextfield}/>
      </label>
    </FormSection>
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


export default Textfield;
