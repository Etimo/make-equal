import React, { Component } from 'react';
import { Field, FormSection } from 'redux-form';
import { Checkbox, Accordion, Icon } from 'semantic-ui-react';
import {
  OptionRow,
  QuestionContainer,
  OptionRowWithSubOptionContainer,
  SubOptionRow
} from '../../view/components/Layout-components';

class CheckboxGroupWithSubOptions extends Component {
  hasSubOptions = option => {
    return option.subOptions && option.subOptions.length > 0;
  };

  render() {
    const question = this.props.question;
    return (
      <QuestionContainer title={question.text}>
        {question.options.map((option, index) => {
          option.questionId = question.id;
          return (
            <Field
              key={index}
              name={`${question.id}-${option.id}`}
              component={this.renderOptionCheckbox}
              type="checkbox"
              options={option}
              index={index}
            />
          );
        })}
      </QuestionContainer>
    );
  }

  renderOptionCheckbox = props => {
    console.log(props);
    let renderSubOptions;
    let hasSubOptions = false;
    if (this.hasSubOptions(props.options)) {
      renderSubOptions = props.options.subOptions.map((subOption, subIndex) => {
        hasSubOptions = true;
        // TODO: uncheck all suboptions if the parent option is unchecked
        return (
          <Accordion.Content key={subIndex} active={props.input.checked}>
            <Field
              type="checkbox"
              name={`${props.options.questionId}-${subOption.id}`}
              options={subOption}
              component={this.renderSubOptionCheckbox}
            />
          </Accordion.Content>
        );
      });
    }
    return (
      <OptionRowWithSubOptionContainer>
        <Accordion.Title active={props.input.checked}>
          <label className="option">
            <OptionRow text={props.options.text} icon={hasSubOptions}>
              <input type="checkbox" {...props.input} />
            </OptionRow>
          </label>
        </Accordion.Title>
        {renderSubOptions}
      </OptionRowWithSubOptionContainer>
    );
  };
  renderSubOptionCheckbox = props => {
    return (
      <SubOptionRow>
        <label className={props.input.checked ? 'option selected' : 'option'}>
          <OptionRow text={props.options.text}>
            <input type="checkbox" value={props.options.id} {...props.input} />
          </OptionRow>
        </label>
      </SubOptionRow>
    );
  };
}

export default CheckboxGroupWithSubOptions;
