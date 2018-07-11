import React, { PureComponent } from 'react';
import { Field } from 'redux-form';
import {
  OptionRow,
  QuestionContainer
} from '../../view/components/Layout-components';

class CheckboxGroup extends PureComponent {
  render() {
    const question = this.props.question;
    return (
      <QuestionContainer title={question.text} tip={question.tip}>
        {question.options.map((option, num) => {
          return (
            <Field
              key={num}
              name={`${question.id}-${option.id}`}
              label={option.text}
              component={this.renderSemanticUICheckbox}
              type="checkbox"
            />
          );
        })}
      </QuestionContainer>
    );
  }

  renderSemanticUICheckbox = props => (
    <label className={props.input.checked ? 'option selected' : 'option'}>
      <OptionRow text={props.label}>
        <input type="checkbox" {...props.input} />
      </OptionRow>
    </label>
  );
}

export default CheckboxGroup;
