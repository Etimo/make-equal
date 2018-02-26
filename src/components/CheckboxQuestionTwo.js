import React, { Component } from 'react';
import { Field, FormSection } from 'redux-form';
import { Grid, Form, Checkbox, Input } from 'semantic-ui-react';
import '../css/checkboxGroup.css';
// import 'semantic-ui-css/semantic.min.css';

const CheckboxQuestionTwo = (props) => {
  const x = props.questions;

  // let value = { ...props.input };
  return (
    <FormSection name={x.id}>
      <div className='component-box'>
        <p className='question-box'>{x.text}</p>
        <Grid >
          <Grid.Row>
            <Grid.Column computer={16} tablet={16} mobile={16} >
              <div className='answer-text'>
                {/* <Field name={x.text} options={x.options}
                component={renderSemanticUICheckbox} /> */}
                {
                  x.options.map((option, num) => {
                    return (
                      <Grid key={option.text} >
                        <Grid.Row>
                          <Grid.Column computer={16} tablet={16} mobile={16} >
                            
                              <Field className="bg-border" name={option.id} component={renderSemanticUICheckbox}
                                options={option} onChange={() => console.log("clicky asd")}
                                onClick={() => console.log("clicky clicky")}
                                />
                            
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    )
                  })
                }
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </FormSection>
  );

}

const renderSemanticUICheckbox = (props) => (
  <label className='answer-text'>
    <div className="bg-border">
      <span className='right'>
        <Checkbox type="checkbox" value={props.options.id}
          onChange={() =>
            props.input.onChange(props.input.value == "" ? true : "")}
          {...props} />
      </span>
      {props.options.text}
    </div>
  </label>
)
export default CheckboxQuestionTwo;
