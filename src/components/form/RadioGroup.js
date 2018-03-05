import React, {Component} from "react";
import {Form, Grid} from "semantic-ui-react";
import {Field, FormSection} from "redux-form";
import "../../css/radioGroup.css";
import "semantic-ui-css/semantic.min.css";

class RadioGroup extends Component {
  constructor() {
    super();
    this.state = {value: null,}
  }

  _handleChange(value) {
    this.setState({
      value: value
    })
  }

  render() {
    const x = this.props.questions;

    return (
      <FormSection name={x.id}>
        <div className='component-box'>
          <p className='question-box'>{x.text}</p>
          {
            x.options.map((el, num) => {
              return (
                <Grid key={num}>
                  <Grid.Row className={this.state.value === el.value ? 'box-fill' : 'box-nofill'}>
                    <Grid.Column computer={16} tablet={16} mobile={16}>
                      <div className='answer-text'>
                        <label onClick={() => this._handleChange(el.value)}>
                          <Form.Field>
                            <div>
                              {el.text}
                              <span className='right'>
                                <Field name={x.id} label={el.text} value={el.value}
                                       type='radio' component={renderRadioQuestion}/>
                              </span>
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

}

const renderRadioQuestion = (props) => (

  <input type='radio' {...props.input}
         className='radioGroup__radio ui radio checkbox unchecked'/>

)

export default RadioGroup;
