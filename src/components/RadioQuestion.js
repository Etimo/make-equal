import React, { Component } from 'react';
import { Grid, Form, Radio } from 'semantic-ui-react';
import { Field } from 'redux-form';
import '../css/radioGroup.css';
import 'semantic-ui-css/semantic.min.css';


class RadioQuestion extends Component {
  constructor() {
    super();
    this.state = { value: null, }
  }
  _handleChange(value) {
    this.setState({
      value: value
    })
  }

  render() {
    const x = this.props.questions;

    return (
      <label className='component-box'>
        <Form.Field>
          <p className='question-box'>{x.text}</p>
          {
            x.options.map((el, num) => {
              return (
                <Grid key={num}>
                  <Grid.Row className={this.state.value === el.value ? 'box-fill' : 'box-nofill'}
                    onClick={() => this._handleChange(el.value)}>
                    <Grid.Column computer={16} tablet={16} mobile={16}>
                      <label className='answer-text'>
                        <span className='right'>
                          <Radio className='radioGroup__radio' key={num}
                            value={el.value} checked={this.state.value === el.value}
                            onClick={() => this._handleChange(el.value)} />
                        </span>
                        {el.text}
                      </label>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              )
            })
          }
        </Form.Field>
      </label>
    )
  }
}
export default RadioQuestion;
