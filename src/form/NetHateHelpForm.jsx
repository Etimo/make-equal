import React, { Component } from 'react';
import { Form, reduxForm } from 'redux-form';
import FormSection from './FormSection';
import { Progress } from 'semantic-ui-react';

// import "../view/style/registrationForm.css";

class NetHateHelpForm extends Component {
  constructor() {
    super();
    this.state = {
      currentSection: 0
    };
  }

  componentDidMount() {}

  navigate(offset) {
    this.setState({
      currentSection: this.state.currentSection + offset
    });
  }

  render() {
    const sectionsArr = this.props.sections;
    const { handleSubmit } = this.props;

    const currentSection = this.props.sections[this.state.currentSection];
    console.log(this.state.currentSection, currentSection);

    const first = this.state.currentSection === 0;
    const last = this.state.currentSection === this.props.sections.length - 1;

    return (
      <Form onSubmit={handleSubmit}>
        <div className={'progress-container'}>
          <Progress
            value={this.state.currentSection}
            total={this.props.sections.length}
          />
        </div>
        <FormSection
          section={currentSection}
          isFirst={first}
          isLast={last}
          goBack={() => this.navigate(-1)}
          goForward={() => this.navigate(1)}
        />
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
