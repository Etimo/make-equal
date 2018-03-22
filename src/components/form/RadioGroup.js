import React, {Component} from "react";
import {Field, FormSection} from "redux-form";
import "../../css/radioGroup.css";
import "semantic-ui-css/semantic.min.css";
import {OptionRow, QuestionBase} from "../QuestionBase";
import {Radio, Checkbox} from "semantic-ui-react";

'../QuestionBase';

class RadioGroup extends Component {
  constructor() {
    super();
    this.state = {value: "",}
  }

  _handleChange(value) {
    this.setState({
      value: value
    })
  }

  render() {
    const question = this.props.questions;

    return (
      <FormSection name={question.id}>
        <QuestionBase title={question.title}>
          {
            question.options.map((option, num) => {
              return (
                <label key={num} className={this.state.value === option.id ? "option selected" : "option"}
                       onChange={() => this._handleChange(option.value)}>
                  <Field name={question.id + option.id} component={this.renderRadioQuestion2}
                         options={option} onChange={() => this._handleChange(option.id)}/>
                </label>
              );
            })
          }
        </QuestionBase>
      </FormSection>
    )
  }

  wawa = (event) => {
    console.log(event.target);
  };
  renderRadioQuestion2 = (props) => {
    console.log(props);
    return (
      <OptionRow text={props.options.text}>
        <Checkbox radio onChange={this.wawa}
                  {...props} />
      </OptionRow>
    );
  };

}

const renderRadioQuestion = (props) => (
  <OptionRow text={props.options.text}>
    <Checkbox radio value={props.options.id}
           onChange={() => props.input.onChange}
           {...props} />
    {/*{console.log(props)}*/}
  </OptionRow>
)

export default RadioGroup;
