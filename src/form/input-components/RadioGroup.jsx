import React, { Component } from 'react';
import { Field, FormSection } from 'redux-form';
import {
  OptionRow,
  QuestionContainer
} from '../../view/components/Layout-components';

class RadioGroup extends Component {
  render() {
    const question = this.props.question;
    return (
      <QuestionContainer title={question.text}>
        {question.options.map((option, num) => {
          return (
            <label key={num} className="option">
              <Field
                name={question.id}
                value={option.id}
                label={option.text}
                component={renderRadioQuestion}
                type="radio"
              />
            </label>
          );
        })}
      </QuestionContainer>
    );
  }
}

const renderRadioQuestion = props => {
  return (
    <OptionRow text={props.label}>
      <input type="radio" {...props.input} />
    </OptionRow>
  );
};

export default RadioGroup;
