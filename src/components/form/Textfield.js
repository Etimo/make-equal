import React from "react";
import {Field, FormSection} from "redux-form";
import {Form, Input} from "semantic-ui-react";
import "../../css/radioGroup.css";
import "semantic-ui-css/semantic.min.css";

const Textfield = (props) => {
  const x = props.questions;
  return (
    <FormSection name={x.id}>
      <label className='component-box'>
        <p className='question-box'>{x.title}</p>
        <Field name="input" type='text' label={x.label} placeholder="Text" component={renderSemanticUITextfield}/>
      </label>
    </FormSection>
  );

};

const renderSemanticUITextfield = (props) => (
  <Form.Field>
    <label>
      {props.label}
    </label>
    <Input placeholder={"lite text"}
           {...props.input}
    />
  </Form.Field>
);

export default Textfield;
