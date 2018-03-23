import React, {Component} from "react";
import {Form} from "semantic-ui-react";
import {reduxForm} from "redux-form";
import FormSection from "./FormSection";
import "../../css/registrationForm.css";

class RegistrationForm extends Component {

  componentDidMount() {
  }

  render() {
    const sectionsArr = this.props.sections;
    let last = false;
    let first = true;
    const {handleSubmit} = this.props;
    // console.log(this.props);

    return (

      <Form onSubmit={handleSubmit}>
        {
          sectionsArr.map((section, num) => {
            if (num === sectionsArr.length - 1) {
              last = true;
            }
            if (num !== 0) {
              first = false;
            }
            return (
              <FormSection key={num} section={section} isLast={last}
                           windowSize={this.props.windowSize}
                           isFirst={first} _navigate={this.props._navigate}
                           _back={this.props._back}
                           _changeAddress={this.props._changeAddress}
                           _changeSection={this.props._changeSection}
                           _scrollUp={this.props._scrollUp}
                           sectionPosition={this.props.sectionPosition}
                           targetPath={this.props.targetPath}/>
            );
          })
        }
      </Form>
    );

  }
}

export default RegistrationForm = reduxForm({
  // a unique name for the form
  form: 'TestForm1'
})(RegistrationForm)


// export default RegistrationForm;
