import React, {Component} from "react";
import {Field, FormSection} from "redux-form";
import "../../css/radioGroup.css";
import "semantic-ui-css/semantic.min.css";
import {OptionRow, QuestionBase} from "../QuestionBase";
import {Checkbox} from "semantic-ui-react";


class RadioGroup extends Component {
  constructor() {
    super();
    this.state = {value: "",};
  }

  _handleChange(value) {
    // console.log(value);
    this.setState({
      value: value,
    });
  };

  render() {
    const question = this.props.questions;
    return (
      <FormSection name={question.id}>
        <QuestionBase title={question.text}>
          {
            question.options.map((option, num) => {
              return (
                <label key={num} className={this.state.value === option.id ? "option selected" : "option"}
                       onChange={() => this._handleChange(option.id)}>
                  <Field name={question.id + option.id} component={renderRadioQuestion} value={option.id}
                         options={option} checked={this.state.value === option.id}
                  />
                </label>
              );
            })
          }
        </QuestionBase>
      </FormSection>
    )
  }

}

const renderRadioQuestion = (props) => {
  return (
    <OptionRow text={props.options.text}>
      <Checkbox type={"radio"} radio value={props.options.id}
                onChange={() => props.input.onChange(props.input.value === "" ? true : "")}
                {...props} />
    </OptionRow>
  );
};


export default RadioGroup;
