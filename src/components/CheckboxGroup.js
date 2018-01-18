import React, { Component } from 'react';
import { Checkbox, Form } from 'semantic-ui-react';
import '../css/checkboxGroup.css';
// import 'semantic-ui-css/semantic.min.css';


class CheckboxGroup extends Component {
    render() {
        // console.log(this.props.questions);
        const x = this.props.questions;
        debugger;
        return (
            <Form.Field>
                <label>{x.label}</label>
                {
                    x.options.map((el, num) => {
                        return (
                            <Checkbox className='checkboxGroup__checkbox'
                                key={num}
                                value={el.value}
                                label={el.text}
                            />
                        )
                    })
                }

            </Form.Field>
        )
    }
}
export default CheckboxGroup;
