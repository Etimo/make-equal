import React, { Component } from 'react';
// import { Field } from 'redux-form';
import { Grid, Form, Checkbox } from 'semantic-ui-react';
import '../css/radioGroup.css';
// import 'semantic-ui-css/semantic.min.css';


class CheckboxQuestion extends Component {
  constructor(props) {
    super();
    this.state = {
      items: Array(props.questions.options.length).fill(false),
      checked: false,
      itemChecked: {},
    }
  }
  _handleChange(num) {
    const items = this.state.items.slice();
    items[num] = !items[num];
    this.setState({
      checked: !this.state.checked,
      items: items,
    })
  }

  _isChecked(num) {
    return this.state.items[num];
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
                  
                    <Grid.Row columns={2} className={this._isChecked(num) ? 'box-fill' : 'box-nofill'}
                      onClick={() => this._handleChange(num)}>
                      <Grid.Column columns={2} computer={16} tablet={16} mobile={16} >
                        <label className='answer-text'>
                          <span className='right'>
                            <Checkbox className='checkboxGroup__checkbox  toggle' value={el.value}
                              onClick={() => this._handleChange(num)} checked={this._isChecked(num)} />
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
export default CheckboxQuestion;
