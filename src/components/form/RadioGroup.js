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
      value
    });
  };

  render() {
    const question = this.props.questions;
    return (
      <FormSection name={question.id}>
        <QuestionBase title={question.text}>
          {
            question[this.props.targetPath].options.map((option, num) => {
              return (
                <label key={num} className={this.state.value === option.id ? "option selected" : "option"}
                       onChange={() => this._handleChange(option.id)}>
                  <Field name={question.id + option.id} component={renderRadioQuestion}
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
  // console.log(`${props.options.id}`, props);
  return (
    <OptionRow text={props.options.text}>
      <Checkbox radio readOnly={false} value={props.options.id}
                onChange={() => props.input.onChange(props.input.value === "" ? true : "")}
                {...props.checked} />
    </OptionRow>
  );
};



export default RadioGroup;
