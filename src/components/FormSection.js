import React, { Component } from 'react';
import CheckboxGroup from './CheckboxGroup';
import RadioGroup from './RadioGroup';
import Textfield from './Textfield';
import Textarea from './Textarea';
import SelectGroup from './SelectGroup';
import Datepicker from './Datepicker';
import RadioQuestion from './RadioQuestion';
import CheckboxQuestion from './CheckboxQuestion';
import { Button } from 'semantic-ui-react';
import '../css/formSection.css';
// import '../App.css'
import TextfieldQuestion from './TextfieldQuestion';
import RadioQuestionTwo from './RadioQuestionTwo';
import CheckboxQuestionTwo from './CheckboxQuestionTwo';

// import {Icon} from 'semantic-ui-react';
// import {Field} from 'redux-form';
// import ScrollToTop from 'react-scroll-up';
// import Waypoint from 'react-waypoint';


class FormSection extends Component {
  constructor() {
    super();
    // this._checkPosition = this._checkPosition.bind(this);
    // this._testEnter = this._testEnter.bind(this);
    // this._testLeave = this._testLeave.bind(this);
    // this._actLeave = this._actLeave.bind(this);
    // this._actEnter = this._actEnter.bind(this);

    this._isNotFirst = this._isNotFirst.bind(this);
    this._isNotLast = this._isNotLast.bind(this);
    this._isMobile = this._isMobile.bind(this);
  }

  // componentWillMount(){
  //   window.addEventListener('scroll', ()=>{
  //     // this._checkPosition();
  //   });
  // }

  // _testEnter(){
  //   console.log('TOP WP: entering section ' + Object.keys(this.refs)[0]);
  //   const position = Object.keys(this.refs)[0];
  //   this.props._changeAddress(position);
  // }

  // _testLeave(){
  //   console.log('TOP WP: leaving section ' + Object.keys(this.refs)[0]);
  // }

  // _actLeave(){
  //   console.log('Bottom WP: actually leaving ' + Object.keys(this.refs)[0]);
  // }

  // _actEnter(){
  //   console.log('Bottom WP: actually entering ' + Object.keys(this.refs)[0]);
  // }

  // _checkPosition(){
  //       //  window.addEventListener('wheel', (wheelEvent)=>{
  //       //    console.log(wheelEvent);
  //       //  });
  //   const height = window.innerHeight;
  //   // const sectionHeight = this.refs[this.props.sectionPosition].scrollHeight;
  //   for (const x in this.refs){
  //     if(x === this.props.sectionPosition){
  //       const sectionHeight = this.refs[x].scrollHeight + 14;
  //       let scroll = window.scrollY;
  //       // console.log(sectionHeight);
  //       // console.log(scroll);
  //       if((height+scroll) >= sectionHeight){
  //         this.props._changeSection();
  //         // console.log('kör botttom');
  //       }
  //       // console.log(window.scrollY);
  //       window.addEventListener('wheel', (wheelEvent)=> {
  //         // console.log(scroll);
  //         if(wheelEvent.deltaY == -1 && scroll === 0){
  //           this.props._scrollUp();
  //         }
  //       });
  //     }
  //   }
  // }

  _isNotFirst() {
    if (!this.props.isFirst) {
      if (this.props.windowSize > 991) {
        return <Button inverted type="button" color="blue" content="Förgående" className="registration-form__btn back" onClick={() => this.props._navigate(-1)} />
      } else {
        return <Button inverted fluid type="button" color="blue" content="Förgående" className="registration-form__btn back" onClick={() => this.props._navigate(-1)} />
      }
    }
  }

  _isNotLast() {
    if (!this.props.isLast) {
      if (this.props.windowSize > 991) {
        return <Button primary={true} type="button" onClick={() => this.props._navigate(1)} content="Fortsätt" className="registration-form__btn next" />
      } else {
        return <Button primary={true} type="button" fluid onClick={() => this.props._navigate(1)} content="Fortsätt" className="registration-form__btn next" />
      }
    } else {
      if (this.props.windowSize > 991) {
        return <Button color="blue" content="Skicka in" type="submit" className="registration-form__btn submit" />
      } else {
        return <Button color="blue" fluid content="Skicka in" type='submit' className="registration-form__btn submit" />
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
          {this._isNotLast()}
          {this._isNotFirst()}
        </label>

      )
    }
  }

  _renderQuestionType(question) {
    let input;
    switch (question.type) {
      case 'checkboxGroup':
        input = <CheckboxGroup key={question.id} questions={question} />;
        break
      case 'textfield':
        input = <Textfield key={question.id} questions={question} />
        break
      case 'textarea':
        input = <Textarea key={question.id} questions={question} />
        break
      case 'selectGroup':
        input = <SelectGroup key={question.id} questions={question} />
        break
      case 'radioGroup':
        input = <RadioGroup key={question.id} questions={question} />
        break
      case 'datepicker':
        input = <Datepicker key={question.id} questions={question} />
        break
      case 'radioQuestion':
        input = <RadioQuestion key={question.id} questions={question} />
        break;
      case 'checkboxQuestion':
        input = <CheckboxQuestion key={question.id} questions={question} />
        break;
      case 'textfieldQuestion':
        input = <TextfieldQuestion key={question.id} questions={question} />
        break;
      case 'radioQuestionTwo':
        input = <RadioQuestionTwo key={question.id} questions={question} />
        break;
        case 'checkboxQuestionTwo':
        input = <CheckboxQuestionTwo key={question.id} questions={question} />
        break;
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
          <div className='form-buttons'>
            {
              this._isMobile()
            }
          </div>
        </div>
      </section>
    )
  };
}
export default FormSection;
