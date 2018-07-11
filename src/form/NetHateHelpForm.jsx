import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, reduxForm, getFormValues } from 'redux-form';
import FormSection from './FormSection';
import { Progress } from 'semantic-ui-react';
import _ from 'lodash';
import { checkCondition } from '../models/condition';

// import "../view/style/registrationForm.css";

class NetHateHelpForm extends Component {
  constructor() {
    super();
    this.state = {
      currentSection: 0
    };
  }

  componentDidMount() {}

  navigateTo(index) {
    this.setState({
      currentSection: index
    });
  }

  render() {
    const currentSection = this.props.sections[this.state.currentSection];
    console.log(this.state.currentSection, currentSection);

    const prev = _.findLastIndex(
      this.props.sections,
      question => checkCondition(question.condition, this.props.answers),
      this.state.currentSection - 1
    );
    const next = _.findIndex(
      this.props.sections,
      question => checkCondition(question.condition, this.props.answers),
      this.state.currentSection + 1
    );

    return (
      <Form onSubmit={this.props.handleSubmit}>
        <div className={'progress-container'}>
          <Progress
            value={this.state.currentSection}
            total={this.props.sections.length}
          />
        </div>
        <FormSection
          section={currentSection}
          isFirst={this.state.currentSection === 0 || prev === -1}
          isLast={next === -1}
          goBack={() => this.navigateTo(prev)}
          goForward={() => this.navigateTo(next)}
        />
      </Form>
    );
  }
}

function addAnswersToProps(state, ownProps) {
  return {
    answers: getFormValues(ownProps.form)(state, {}),
    ...ownProps
  };
}

export default (NetHateHelpForm = reduxForm({
  // a unique name for the form-form
  form: 'NetHateHelpForm',
  destroyOnUnmount: false,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(connect(addAnswersToProps)(NetHateHelpForm)));
