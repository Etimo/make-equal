import React, {Component} from "react";
import {Field, FormSection} from "redux-form";
import {OptionRow, QuestionContainer} from "../../view/components/Layout-components";
import {Checkbox} from "semantic-ui-react";


class RadioGroup extends Component {
  constructor(props) {
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
      <QuestionContainer title={question.text}>
        {question.options.map((option, num) => {
          return (
            <label key={num} className={this.state.value === option.id ? "option selected" : "option"}
                   onChange={() => this._handleChange(option.id)}>
              <Field name={`${question.id}-${option.id}`} component={renderRadioQuestion} value={option.id}
                     options={option} checked={this.state.value === option.id}
                     />
            </label>
          );
        })}
      </QuestionContainer>
    );
  }
}

const renderRadioQuestion = (props) => {
  return (
    <OptionRow text={props.options.text}>
      <Checkbox type={"radio"} radio value={props.options.checked}
                onChange={(e) => props.input.onChange(e.target.checked)}
                {...props} />
    </OptionRow>
  );
};


export default RadioGroup;
