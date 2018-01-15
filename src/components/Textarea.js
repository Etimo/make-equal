import React, {Component} from 'react';
import {Form, TextArea} from 'semantic-ui-react';
import {Field} from 'redux-form'

const Textarea = props => {
  const x = props.questions;
  const value = {...props.input};

  // function handleChange (value) {
  //   console.log(value);
  // }

  return(
    <Field name={x.label} label={x.label} placeholder="Text" component={renderSemanticUITextarea}/>
  );

}

  const renderSemanticUITextarea = props =>{
    return(
      <Form.Field>
        <label>{props.label}</label>
        <TextArea
          type={props.type}
          placeholder="Text"
          {...props.input}
        />
      </Form.Field>
    );
  }

export default Textarea;