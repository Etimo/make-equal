import React, { PureComponent } from 'react';
import { Field, FormSection } from 'redux-form';
import {
  OptionRow,
  QuestionContainer
} from '../../view/components/Layout-components';

class CheckboxGroup extends PureComponent {
  render() {
    const question = this.props.question;
    return (
      <QuestionContainer title={question.text}>
        {question.options.map((option, num) => {
          return (
            <label key={num} className="option">
              <Field
                name={`${question.id}-${option.id}`}
                label={option.text}
                component={this.renderSemanticUICheckbox}
                type="checkbox"
              />
            </label>
          );
        })}
      </QuestionContainer>
    );
  }

  renderSemanticUICheckbox = props => (
    <OptionRow text={props.label}>
      <input type="checkbox" {...props.input} />
    </OptionRow>
  );
}

export default CheckboxGroup;
