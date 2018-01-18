import React from 'react';
import {Form, Input} from 'semantic-ui-react';
import {Field} from 'redux-form';
import '../css/QuestionText.css';
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
      <text className="fontStyling">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </text>
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
