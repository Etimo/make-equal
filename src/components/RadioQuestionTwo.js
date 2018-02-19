import React, { Component } from 'react';
import { Grid, Form, Input, Radio } from 'semantic-ui-react';
import { Field } from 'redux-form';
import '../css/radioGroup.css';
import 'semantic-ui-css/semantic.min.css';

class RadioQuestionTwo extends Component {
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
      <div className='component-box'>
        <p className='question-box'>{x.text}</p>
        {
          x.options.map((el, num) => {
            return (
              <Grid key={num}>
                <Grid.Row className={this.state.value === el.value ? 'box-fill' : 'box-nofill'}
                  onClick={() => this._handleChange(el.value)}>
                  <Grid.Column computer={16} tablet={16} mobile={16}>
                    <div className='answer-text'>

                      <Field name={x.id} label={el.text} value={el.value}
                         type='radio' component={this.testComp} />
                      {/* {el.text} */}
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            );
          })
        }
      </div>
    )
  }

  testComp(props) {
    return (
          <label>
      <Form.Field>
        <div>
            {props.label}
            <span className='right'>
              <input type='radio' {...props.input}
                className='radioGroup__radio ui radio checkbox unchecked' />
            </span>
        </div>
      </Form.Field>
          </label>
    );
  }

}

const renderRadioQuestion = (props) => (
  <Form.Field>
    <div className='answer-text' onClick={() => console.log("clicked")}>
      <span className='right'>
        <Field type='radio' className='radioGroup__radio' onClick={() => console.log("clicked")} {...props.input} />
      </span>
      {props.label}
    </div>
  </Form.Field>
)

// const renderRadioQuestion = (props) => (
//   <Form.Field>
//     {console.log(props.input.checked)}
//     <Radio type='radio' className='radioGroup__radio'
//     onClick={() => console.log("clicked")}
//     {...props.input}/>
//   </Form.Field>
// )

// render() {
//   const x = this.props.questions;

//   return (
//     <div className='component-box'>
//       <p className='question-box'>{x.text}</p>
//       {
//         x.options.map((el, num) => {
//           return (
//             <Grid key={num}>
//               <Grid.Row className={this.state.value === el.value ? 'box-fill' : 'box-nofill'}
//                 onClick={() => this._handleChange(el.value)}>
//                 <Grid.Column computer={16} tablet={16} mobile={16}>
//                   <div className='answer-text'>
//                     <span className='right'>
//                       <Field name={x.id} label={el.text} value={el.value}
//                       type='radio' component={renderRadioQuestion} />
//                     </span>
//                     {el.text}
//                   </div>
//                 </Grid.Column>
//               </Grid.Row>
//             </Grid>
//           )
//         })
//       }
//     </div>
//   )

export default RadioQuestionTwo;
