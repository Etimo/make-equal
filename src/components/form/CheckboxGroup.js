import React, {Component} from "react";
import {Field, FormSection} from "redux-form";
import {Checkbox, Grid} from "semantic-ui-react";
import "../../css/checkboxGroup.css";
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
    const x = this.state.question;

    return (
      <FormSection name={x.id}>
        <div className='component-box'>
          <p className='question-box'>{x.text}</p>
          <Grid >
            <Grid.Row>
              <Grid.Column computer={16} tablet={16} mobile={16}>
                <div >
                  {
                    x.options.map((option, num) => {
                      return (
                        <Grid key={option.text}>
                          <Grid.Row className={ option.isChecked ? 'box-fill' : 'box-nofill'}>
                            <Grid.Column computer={16} tablet={16} mobile={16}>
                              <label className='answer-text' onChange={() => this._handleChange(num)}>
                                <div>
                                  <span className='right'>
                                    <Field name={option.id} component={renderSemanticUICheckbox}
                                           options={option} onChange={() => this._handleChange(num)}/>
                                  </span>
                                  {option.text}
                                </div>
                              </label>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      )
                    })
                  }
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </FormSection>
    );
  }

}


const renderSemanticUICheckbox = (props) => (
  <Checkbox type="checkbox" value={props.options.id}
            onChange={() => props.input.onChange(props.input.value == "" ? true : "")}
            {...props} />
)

export default CheckboxGroup;
