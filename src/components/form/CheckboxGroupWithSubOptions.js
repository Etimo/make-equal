import React, {Component} from "react";
import {Field, FormSection} from "redux-form";
import {Checkbox, Accordion} from "semantic-ui-react";
import "../../css/checkboxGroup.css";
import {OptionRow, QuestionBase, OptionRowAlt, SubOptionContainer,SubOptionBase} from "../QuestionBase";
import {TextRow, TextColumn} from "../layout/Layout-components";

// import 'semantic-ui-css/semantic.min.css';

class CheckboxGroupWithSubOptions extends Component {
  constructor(props) {
    super();
    this.state = {
      question: props.questions,
    }
  }

  render() {
    const question = this.state.question;
    return (
      <FormSection name={question.id}>
        <QuestionBase title={question.text}>
          {
            question.options.map((option, index) => {
              option.questionId = question.id;
              if (option.subOptions && option.subOptions.length >= 1) {
                return (
                  <label key={index} onChange={() => this._handleChange(index)}
                         className={option.isChecked ? "option selected" : "option"}>
                    <Field name={question.id + option.id} index={index}
                           component={this.renderCheckboxForOptionWithSubOptions}
                           options={option} onChange={() => this._handleChange(index)}/>
                  </label>
                )
              } else {
                return (
                  <label key={index} onChange={() => this._handleChange(index)}
                         className={option.isChecked ? "option selected" : "option"}>
                    <Field name={question.id + option.id} component={this.renderSingleCheckbox}
                           options={option} />
                  </label>
                )
              }
            })
          }
        </QuestionBase>
      </FormSection>
    );
  }

  _handleChange = (index, subOptionIndex) => {
    let question = this.state.question;
    if (index && !subOptionIndex) {
      question = this._superOptionChanged(index);
    } else if (index && subOptionIndex) {
      question = this._subOptionChanged(index, subOptionIndex);
    }

    // question.options[index].isChecked = !question.options[index].isChecked;
    this.setState({
      question
    })
  };
  hasSubOptionsChecked = (option) => {
    for (let i in option.subOptions) {
      if (option.subOptions[i].isChecked && option.subOptions[i].isChecked === true) {
        return true;
      }
    }
    return false;
  };
  _superOptionChanged = (index) => {
    const question = this.state.question;
    if (question.options[index].isChecked) {
      if (question.options[index].isChecked === true) {
        if (this.hasSubOptionsChecked(question.options[index])) {
          question.options[index].isChecked = true;
        } else {
          question.options[index].isChecked = false;
        }
      } else {
        question.options[index].isChecked = true;
      }
    }
    return question;
  };
  _subOptionChanged = (index, subOptionIndex) => {
    const question = this.state.question;
    if (!question.options[index].subOptions[subOptionIndex].isChecked ) {
      question.options[index].isChecked = true;
      question.options[index].subOptions[subOptionIndex].isChecked = true;
    } else {
      question.options[index].subOptions[subOptionIndex].isChecked = false;
    }
    return question;
  };

  renderCheckboxForOptionWithSubOptions = (props) => (
    <SubOptionBase>
      <OptionRow text={props.options.text}>
        <Checkbox type="checkbox" value={props.options.id} checked={props.options.isChecked}
                  onChange={() => props.input.onChange(props.input.value === "" ? true : "")}
                  {...props} />
      </OptionRow>
      <SubOptionContainer>
        {
          props.options.subOptions ?
            props.options.subOptions.map((subOption, subOptionIndex) => {
              return (
                <label key={subOptionIndex} onChange={() => this._handleChange(props.index, subOptionIndex)}
                       className={subOption.isChecked ? "option selected" : "option"}>
                  <Field name={props.options.questionId + subOption.id} component={this.renderSingleCheckbox}
                         options={subOption} onChange={() => this._handleChange(props.index, subOptionIndex)}/>
                </label>
              );
            }) : "wawaw"
        }
      </SubOptionContainer>
    </SubOptionBase>
  );

  renderSingleCheckbox = (props) => (
    <OptionRow text={props.options.text}>
      <Checkbox type="checkbox" value={props.options.id} checked={props.options.isChecked}
                onChange={() => props.input.onChange(props.input.value === "" ? true : "")}
                {...props} />
    </OptionRow>
  );

}


export default CheckboxGroupWithSubOptions;
