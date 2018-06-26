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
  }

  get prevBtn() {
    if (!this.props.isFirst) {
      return (
        <Button
          fluid
          type="button"
          content="Förgående"
          className="form-button alternate"
          onClick={() => this.props.goBack()}
        />
      );
    }
  }

  get nextBtn() {
    if (!this.props.isLast) {
      return (
        <Button
          key="next"
          type="button"
          fluid
          onClick={() => this.props.goForward()}
          content="Fortsätt"
          className="form-button"
        />
      );
    } else {
      return (
        <Button
          key="submit"
          color="blue"
          fluid
          content="Skicka in"
          type="submit"
          className="form-button"
        />
      );
    }
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

    return (
      <div className="form-section" id={question.id}>
        <div className="form-section-base">
          <div className="form-section-content">
            {this._renderQuestionType(question)}
          </div>
          <div className="form-section-buttons">
            <Button.Group widths="2">
              {this.prevBtn}
              {this.nextBtn}
            </Button.Group>
          </div>
        </div>
      </div>
    );
  }
}

export default FormSection;
