import React, {Component} from "react";
import {Field, FormSection} from "redux-form";
import {Checkbox, Accordion, Icon} from "semantic-ui-react";
import {
  OptionRow,
  QuestionContainer,
  OptionRowWithSubOptionContainer,
  SubOptionRow
} from "../../view/components/Layout-components";

class CheckboxGroupWithSubOptions extends Component {
  constructor(props) {
    super();
    this.state = {
      question: props.questions,
    };
  }

  // todo: disable uncheck on parent option that has a child checked.
  _handleChange = (index, subOptionIndex) => {
    console.log(index);
    if (subOptionIndex) {
      console.log(subOptionIndex.target.checked);
    }
    // console.log(this.props);
    let question = this.state.question;
  };
  hasSubOptions = (option) => {
    return option.subOptions && option.subOptions.length > 0;
  };
  hasCheckedSubOptions = (option) => {
    if (this.hasSubOptions(option)) {
      for (let i in option.subOptions) {
        if (option.subOptions[i].isChecked && option.subOptions[i].isChecked === true) {
          return true;
        }
      }
    }
    return false;
  };

  render() {
    const question = this.state.question;
    return (
      <QuestionContainer title={question.text}>
        {question.options.map((option, index) => {
          option.questionId = question.id;
          return (
            <Field key={index} name={`${question.id}-${option.id}`} component={this.renderOptionCheckbox}
                   type={"checkbox"} options={option} index={index}/>
          );
        })}
      </QuestionContainer>
    );
  }

  renderOptionCheckbox = (props) => {
    console.log(props);
    let renderSubOptions;
    let hasSubOptions = false;
    if (this.hasSubOptions(props.options)) {
      renderSubOptions = props.options.subOptions.map((subOption, subIndex) => {
        subOption.parentIndex = props.index;
        subOption.subIndex = subOption;
        hasSubOptions = true;
        return (
          <Accordion.Content key={subIndex} active={props.input.checked}>
            <Field type={"checkbox"} name={`${props.options.questionId}-${subOption.id}`}
                   options={subOption} component={this.renderSubOptionCheckbox}
            />
          </Accordion.Content>
        );
      });
    }
    return (
      <OptionRowWithSubOptionContainer>
        <Accordion.Title active={props.input.checked}>
          <label onChange={() => this._handleChange(props.index)}
                 className={props.input.checked ? "option selected" : "option"}>
            <OptionRow text={props.options.text} icon={hasSubOptions}>
              <Checkbox disabled={this.hasCheckedSubOptions(props.options)} type="checkbox" value={props.options.id}
                        checked={props.input.checked}
                        onChange={() => props.input.onChange(props.input.value === "" ? true : "")}
                        {...props} />
            </OptionRow>
          </label>
        </Accordion.Title>
        {renderSubOptions}
      </OptionRowWithSubOptionContainer>
    );
  };
  renderSubOptionCheckbox = (props) => {
    return (
      <SubOptionRow>
        <label onChange={(e, a) => this._handleChange(props.options.subIndex, e)}
               className={props.input.checked ? "option selected" : "option"}>
          <OptionRow text={props.options.text}>
            <Checkbox type="checkbox" value={props.options.id} checked={props.input.checked}
                      onChange={() => props.input.onChange(props.input.value === "" ? true : "")}
                      {...props} />
          </OptionRow>
        </label>
      </SubOptionRow>
    );
  };


}


export default CheckboxGroupWithSubOptions;
