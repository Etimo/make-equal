import React, { Component } from 'react';
import { Form, reduxForm } from 'redux-form';
import FormSection from './FormSection';

// import "../view/style/registrationForm.css";

class NetHateHelpForm extends Component {
  componentDidMount() {}

  render() {
    const sectionsArr = this.props.sections;
    let last = false;
    let first = true;
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        {sectionsArr.map((section, num) => {
          if (num === sectionsArr.length - 1) {
            last = true;
          }
          if (num !== 0) {
            first = false;
          }
          return (
            <FormSection
              key={num}
              section={section}
              isLast={last}
              isFirst={first}
              _navigate={this.props._navigate}
              _changeAddress={this.props._changeAddress}
              _changeSection={this.props._changeSection}
              sectionPosition={this.props.sectionPosition}
            />
          );
        })}
      </Form>
    );
  }
}

export default (NetHateHelpForm = reduxForm({
  // a unique name for the form-form
  form: 'NetHateHelpForm',
  destroyOnUnmount: false,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(NetHateHelpForm));

// export default RegistrationForm;
