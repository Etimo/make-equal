import React, { Component } from 'react';
import { Radio, Form } from 'semantic-ui-react';
import '../css/radioGroup.css';
import { Field } from 'redux-form';
import 'semantic-ui-css/semantic.min.css';


class RadioGroup extends Component {
    constructor() {
        super();
        // this._handleChange = this._handleChange(bind);
        this.state = {
            value: null,
        }
    }

    _handleChange(value) {
        this.setState({
            value: value
        })
    }

    render() {
        const x = this.props.questions;
        return (
            <Form.Field>
                <label>{x.label}</label>
                {
                    x.options.map((el, num) => {
                        return (
                            <Radio className='radioGroup__radio'
                                key={num}
                                value={el.value}
                                label={el.text}
                                checked={this.state.value === el.value}
                                onClick={() => this._handleChange(el.value)}
                            />
                        )
                    })
                }

            </Form.Field>
        )
    }
}
export default RadioGroup;
// const RadioGroup = props=>{
//   const x = props.questions;
//   return(
//     <Form.Field>

//       <label>{x.label}</label>

//       {x.options.map((el, num)=>{
//         return(
//           <Field key={num} name={x.label} type='radio' value={el.value} label={el.text} component={renderSemanticUIRadioGroup}/>
//         );
//        })
//       }

//    </Form.Field>
//   );
// }

// const renderSemanticUIRadioGroup =(props)=>{
//   // console.log(...props);
//   return(
//     <Radio
//       {...props.input}
//       className='radioGroup__radio'
//       label={props.label}

//     />
//   );
// }

// export default RadioGroup;
