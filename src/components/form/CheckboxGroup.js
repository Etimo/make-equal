import React, {Component} from "react";
import {Field, FormSection} from "redux-form";
import {Checkbox, Grid} from "semantic-ui-react";
import "../../css/checkboxGroup.css";
import {QuestionBase, OptionRow} from "../QuestionBase";

// import 'semantic-ui-css/semantic.min.css';

class CheckboxGroup extends Component {
  constructor(props) {
    super();
    props = this.initUnchecked(props)
    this.state = {
      question: props.questions,
    }
  }

  initUnchecked(props) {
    props.questions.options.forEach(option => {
      option.isChecked = false
    });
    return props;
  }

  _handleChange(num) {
    const question = this.state.question
    question.options[num].isChecked = !question.options[num].isChecked;
    this.setState({
      question: question
    })
  }

  render() {
    const question = this.state.question;

    return (
      <FormSection name={question.id}>
        <QuestionBase title={question.title}>
          {
            question.options.map((option, num) => {
              return (
                <OptionRow key={num} selected={option.isChecked} text={option.text}>
                    <Field name={question.id + " " + option.id} component={renderSemanticUICheckbox}
                           options={option} onChange={() => this._handleChange(num)}/>
                </OptionRow>
            )
            })
            }
        </QuestionBase>
      </FormSection>
    );
  }

}


const renderSemanticUICheckbox = (props) => (
  <Checkbox type="checkbox" value={props.options.id}
            onChange={() => props.input.onChange(props.input.value == "" ? true : "")}
            {...props} />
);

export default CheckboxGroup;
