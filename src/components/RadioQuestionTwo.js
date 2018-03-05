import React, { Component } from 'react';
import { Grid, Form, Input, Radio } from 'semantic-ui-react';
import { Field, FormSection } from 'redux-form';
import '../css/radioGroup.css';
import 'semantic-ui-css/semantic.min.css';

class RadioQuestionTwo extends Component {
  constructor(props) {
    super();
    this.state = {
      question: props.questions,
      selectedOption: null,
    }
    console.log(this)
  }

  _handleChange(id) {
    const selectedOption = id;
    this.state.selectedOption = null;
    this.setState({
      selectedOption: selectedOption
    })
  }
  _clearOther(ev, va) {
    // console.log(ev)
    // console.log(va)
  }

  render() {
    const x = this.state.question;

    return (
      <FormSection name={x.id}>
        <div className='component-box'>
          <p className='question-box'>{x.text}</p>
          {
            x.options.map((option, num) => {
              return (
                <Grid key={num}>
                  <Grid.Row className={this.state.selectedOption === option.id ? 'box-fill' : 'box-nofill'}>
                    <Grid.Column computer={16} tablet={16} mobile={16}>
                      <div className='answer-text'>
                        <label onChange={() => this._handleChange(option.id)}>
                          <Form.Field>
                            <div>
                              <span className='right'>
                                <Field name={option.id} component={renderRadioQuestion}
                                  type="radio"
                                  checked={this.state.selectedOption === option.id}
                                  onChange={() => this._handleChange(option.id)}
                                />

                              </span>
                              {option.text}
                            </div>
                          </Form.Field>
                        </label>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              );
            })
          }
        </div>
      </FormSection>
    )
  }

  renderRadioQuestion2 = (props) => (
    <div>
      <Radio type='radio'
        onChange={() => props.input.onChange(props.input.checked === true ? true : "")}
        {...props} />
      {/* {console.log(props)} */}
    </div>
  )
}

const renderRadioQuestion = (props) => {
  // debugger;
  
  return (
    <div>
      <Radio type='radio'
        checked={props.checked}
        onChange={() => props.input.onChange(props.input.checked === true ? true : "")}
        {...props} />
        
        { console.log("props")}
        { console.log(props)}
    </div>
  )
}

// const renderRadioQuestion = (props) => (
//   <Radio type='radio'
//     checked={props.checked}
//     onChange={() => props.input.onChange(props.input.checked === true ? true : "")}
//     {...props} />
// )

export default RadioQuestionTwo;
