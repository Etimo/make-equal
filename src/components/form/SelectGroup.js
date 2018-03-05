import React, {Component} from "react";
import {Form, Select} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class SelectGroup extends Component {

  render() {
    const x = this.props.questions;
    return (
      <Form.Field>
        <label>{x.label}</label>
        <Select placeholder="Välj" options={x.options}/>
      </Form.Field>
    );

  }

}
export default SelectGroup;
