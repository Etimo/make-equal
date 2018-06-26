import React, {PureComponent} from "react";
import {Field, FormSection} from "redux-form";
import {Checkbox} from "semantic-ui-react";
import {OptionRow, QuestionContainer} from "../../view/components/Layout-components";


class CheckboxGroup extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      question: props.questions,
    }
  }


  _handleChange = (index) => {
    let question = this.state.question;
    if (index) {
      question = this._superOptionChanged(index);
    }
    // question.options[index].isChecked = !question.options[index].isChecked;
    this.setState({
      question
    })
  };

  _superOptionChanged = (index) => {
    const question = this.state.question;
    if (question.options[index].isChecked) {
      if (question.options[index].isChecked === true) {
          question.options[index].isChecked = false;
      } else {
        question.options[index].isChecked = true;
      }
    }
    return question;
  };

  render() {
    const question = this.state.question;
    return (
      <QuestionContainer title={question.text}>
        {question.options.map((option, num) => {
          return (
            <label key={num} onChange={() => this._handleChange(num)}
              className={option.isChecked ? "option selected" : "option"}>
              <Field name={`${question.id}-${option.id}`} component={this.renderSemanticUICheckbox}
                     options={option}/>
            </label>
          );
        })}
      </QuestionContainer>
    );
  }

  renderSemanticUICheckbox = (props) => (
    <OptionRow text={props.options.text}>
      <Checkbox type="checkbox" value={props.options.id} checked={props.options.isChecked}
                onChange={() => props.input.onChange(props.input.value === "" ? true : "")}
                {...props} />
    </OptionRow>
  );
}


export default CheckboxGroup;
