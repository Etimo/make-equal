import React, {Component} from "react";
import {Field, FormSection} from "redux-form";
import {Checkbox} from "semantic-ui-react";
import "../../css/checkboxGroup.css";
import {OptionRow, QuestionBase} from "../QuestionBase";

// import 'semantic-ui-css/semantic.min.css';

class CheckboxGroup extends Component {
  constructor(props) {
    super();
    props = this.initUnchecked(props);
    this.state = {
      question: props.questions,
    }
  }

  initUnchecked(props) {
    // console.log(props.questions[props.targetPath]);
    props.questions.options.forEach(option => {
      option.isChecked = false
    });
    return props;
  }

  _handleChange(num) {
    const question = this.state.question;
    question.options[num].isChecked = !question.options[num].isChecked;
    this.setState({
      question: question
    })
  }

  render() {
    const question = this.state.question;
    const options = question.options;
    return (
      <FormSection name={question.id}>
        <QuestionBase title={question.text}>
          {
            options.map((option, num) => {
              return (
                <label key={num} onChange={() => this._handleChange(num)}
                       className={option.isChecked ? "option selected" : "option"}>
                  <Field name={question.id + option.id} component={renderSemanticUICheckbox}
                         options={option} onChange={() => this._handleChange(num)}/>
                </label>
              )
            })
          }
        </QuestionBase>
      </FormSection>
    );
  }

}


const renderSemanticUICheckbox = (props) => (
  <OptionRow text={props.options.text}>
    <Checkbox type="checkbox" value={props.options.id}
              onChange={() => props.input.onChange(props.input.value === "" ? true : "")}
              {...props} />
  </OptionRow>
);


export default CheckboxGroup;
