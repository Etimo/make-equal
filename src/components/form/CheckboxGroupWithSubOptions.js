import React, {Component} from "react";
import {Field, FormSection} from "redux-form";
import {Checkbox, Accordion} from "semantic-ui-react";
import "../../css/checkboxGroup.css";
import {OptionRow, QuestionBase, OptionRowAlt} from "../QuestionBase";
import {TextRow, TextColumn} from "../layout/Layout-components";

// import 'semantic-ui-css/semantic.min.css';

class CheckboxGroupWithSubOptions extends Component {
  constructor(props) {
    super();
    props = this.initUnchecked(props);
    this.state = {
      question: props.questions,
      targetPath: props.targetPath,
    }
  }

  initUnchecked(props) {
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

    const renderSemanticUICheckbox = (props) => {
      console.log(props.options.subOptions);

      return (
        props.options.subOptions && props.options.subOptions.length > 0 ?
          <OptionRowAlt text={props.options.text}>
            {
              props.options.subOptions.map((option, num) => {
                return (
                  <label key={num} onChange={() => this._handleChange(num)}
                         className={option.isChecked ? "option selected" : "option"}>
                    <Field name={option.id} component={renderSemanticUICheckboxSubOptions}
                           options={option} onChange={() => this._handleChange(num)}/>
                  </label>
                );
              })
            }
          </OptionRowAlt>
          : <OptionRow text={props.options.text}>
            <Checkbox type="checkbox" value={props.options.id}
                      onChange={() => props.input.onChange(props.input.value === "" ? true : "")}
                      {...props} />
            {console.log(props)}
          </OptionRow>
      );
    };


    return (
      <FormSection name={question.id}>
        <QuestionBase title={question.text}>
          {
            options.map((option, num) => {
              return (
                <label key={num} onChange={() => this._handleChange(num)}
                       className={option.isChecked ? "option selected" : "option"}>
                  <Field name={question.id + option.id} component={renderSemanticUICheckbox}
                         qid={question.id} options={option} onChange={() => this._handleChange(num)}/>
                </label>
              )
            })
          }
        </QuestionBase>
      </FormSection>
    );
  }

}


const renderSemanticUICheckboxSubOptions = (props) => (
  <OptionRow text={props.options.text}>
    <Checkbox type="checkbox" value={props.options.id}
              onChange={() => props.input.onChange(props.input.value === "" ? true : "")}
              {...props} />
  </OptionRow>
);

export default CheckboxGroupWithSubOptions;
