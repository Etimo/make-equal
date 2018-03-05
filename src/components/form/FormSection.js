import React, {Component} from "react";
import CheckboxGroup from "./CheckboxGroup";
import RadioGroup from "./RadioGroup";
import Textfield from "./Textfield";
import Textarea from "./Textarea";
import SelectGroup from "./SelectGroup";
import Datepicker from "./Datepicker";
import {Button} from "semantic-ui-react";
import "../../css/formSection.css";

// import {Icon} from 'semantic-ui-react';
// import {Field} from 'redux-form';
// import ScrollToTop from 'react-scroll-up';
// import Waypoint from 'react-waypoint';


class FormSection extends Component {
  constructor() {
    super();
    this._isNotFirst = this._isNotFirst.bind(this);
    this._isNotLast = this._isNotLast.bind(this);
    this._isMobile = this._isMobile.bind(this);
  }

  _isNotFirst() {
    if (!this.props.isFirst) {
      if (this.props.windowSize > 991) {
        return <Button inverted type="button" color="blue" content="Förgående" className="registration-form__btn back"
                       onClick={() => this.props._navigate(-1)}/>
      } else {
        return <Button inverted fluid type="button" color="blue" content="Förgående"
                       className="registration-form__btn back" onClick={() => this.props._navigate(-1)}/>
      }
    }
  }

  _isNotLast() {
    if (!this.props.isLast) {
      if (this.props.windowSize > 991) {
        return <Button primary={true} type="button" onClick={() => this.props._navigate(1)} content="Fortsätt"
                       className="registration-form__btn next"/>
      } else {
        return <Button primary={true} type="button" fluid onClick={() => this.props._navigate(1)} content="Fortsätt"
                       className="registration-form__btn next"/>
      }
    } else {
      if (this.props.windowSize > 991) {
        return <Button color="blue" content="Skicka in" type="submit" className="registration-form__btn submit"/>
      } else {
        return <Button color="blue" fluid content="Skicka in" type='submit' className="registration-form__btn submit"/>
      }
    }
  }

  _isMobile() {
    if (this.props.windowSize > 991) {
      return (
        <label>
          <Button.Group widths='3'>
            {this._isNotFirst()}
            {this._isNotLast()}
          </Button.Group>
        </label>
      )
    } else {
      return (
        <label>
          <Button.Group widths='2'>
            {this._isNotFirst()}
            {this._isNotLast()}
          </Button.Group>
        </label>
      )
    }
  }

  _renderQuestionType(question) {
    let input;
    switch (question.type) {
      case 'checkboxGroup':
        input = <CheckboxGroup key={question.id} questions={question}/>;
        break
      case 'textfield':
        input = <Textfield key={question.id} questions={question}/>
        break
      case 'textarea':
        input = <Textarea key={question.id} questions={question}/>
        break
      case 'selectGroup':
        input = <SelectGroup key={question.id} questions={question}/>
        break
      case 'radioGroup':
        input = <RadioGroup key={question.id} questions={question}/>
        break
      case 'datepicker':
        input = <Datepicker key={question.id} questions={question}/>
        break

      default:
        break;
    }
    return input;
  }

  render() {
    const question = this.props.section;
    const sameSection = this.props.sectionPosition === question.id;
    // const windowSize = this.props.windowSize;
    // console.log(question)
    return (
      <div>
        <section className={`form-section ${sameSection ? '' : ('hidden')}`} id={question.id}>
          <div className='child-container'>
            <div className='content'>
              {/* <h1 className='form-section__header Roboto'>{section.name}</h1> */}
              {/* {
             question.questions.map((question, num) => {

             })
             } */}
              {this._renderQuestionType(question)}
            </div>
          </div>
          <div className='form-buttons'>
            { this._isMobile() }
          </div>
        </section>
      </div>
    )
  };
}
export default FormSection;
