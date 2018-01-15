import React from 'react';
import {Form, Input} from 'semantic-ui-react';
import {Field} from 'redux-form'
// import 'semantic-ui-css/semantic.min.css';

const Textfield = (props)=> {
  const x = props.questions;
  let value = {...props.input};

  return(
    <Field name={x.label} type='text' label={x.label} placeholder="Text" component={renderSemanticUITextfield}/>
  );

}

const renderSemanticUITextfield = (props) =>(
  <Form.Field>
    <label>
      {props.label}
    </label>
      <Input
        placeholder="lite text"
        {...props.input}
      />

  </Form.Field>
)


export default Textfield;