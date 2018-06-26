import React, { PureComponent } from 'react';
import CheckboxGroup from './input-components/CheckboxGroup';
import CheckboxGroupWithSubOptions from './input-components/CheckboxGroupWithSubOptions';
import RadioGroup from './input-components/RadioGroup';
import { Button } from 'semantic-ui-react';
import '../view/style/formSection.css';
// import "../view/style/FormBase.css";

class FormSection extends PureComponent {
  constructor() {
    super();
    this._isNotFirst = this._isNotFirst.bind(this);
    this._isNotLast = this._isNotLast.bind(this);
    this._isMobile = this._isMobile.bind(this);
  }

  _isNotFirst() {
    if (!this.props.isFirst) {
      return (
        <Button
          fluid
          type="button"
          content="Förgående"
          className="form-button alternate"
          onClick={() => this.props._navigate(-1)}
        />
      );
    }
  }

  _isNotLast() {
    if (!this.props.isLast) {
      return (
        <Button
          type="button"
          fluid
          onClick={() => this.props._navigate(1)}
          content="Fortsätt"
          className="form-button"
        />
      );
    } else {
      return (
        <Button
          color="blue"
          fluid
          content="Skicka in"
          type="submit"
          className="form-button"
        />
      );
    }
  }

  _isMobile() {
    return (
      <Button.Group widths="2">
        {this._isNotFirst()}
        {this._isNotLast()}
      </Button.Group>
    );
  }

  _renderQuestionType(question) {
    let input;
    switch (question.type) {
      case 'checkboxGroup':
        input = <CheckboxGroup key={question.id} questions={question} />;
        break;
      case 'checkboxGroupWithSubOptions':
        input = (
          <CheckboxGroupWithSubOptions key={question.id} questions={question} />
        );
        break;
      case 'radioGroup':
        input = <RadioGroup key={question.id} questions={question} />;
        break;
      default:
        break;
    }
    return input;
  }

  render() {
    const question = this.props.section;

    if (this.props.sectionPosition === question.id) {
      return (
        <div className="form-section" id={question.id}>
          <div className="form-section-base">
            <div className="form-section-content">
              {this._renderQuestionType(question)}
            </div>
            <div className="form-section-buttons">{this._isMobile()}</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default FormSection;
