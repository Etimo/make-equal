import React,{Component} from 'react';

import CheckboxGroup from './CheckboxGroup';
import RadioGroup from './RadioGroup';
import Textfield from './Textfield';
import Textarea from './Textarea';
import SelectGroup from './SelectGroup';
// import {Icon} from 'semantic-ui-react';
import Datepicker from './Datepicker';

// import {Field} from 'redux-form';

import {Button} from 'semantic-ui-react';
// import ScrollToTop from 'react-scroll-up';
// import Waypoint from 'react-waypoint';

import '../css/formSection.css';



class FormSection extends Component{
  constructor(){
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

  _isNotFirst(){

    if(!this.props.isFirst){
      if(this.props.windowSize > 991){
        return <Button inverted type="button" color="blue" content="Förgående" className="registration-form__btn back" onClick={()=>this.props._navigate(-1)}/>
      } else{
        return <Button inverted fluid type="button" color="blue" content="Förgående" className="registration-form__btn back" onClick={()=>this.props._navigate(-1)}/>
      }
      
    }
  }

  _isNotLast(){
    if(!this.props.isLast){
      if(this.props.windowSize > 991){
        return <Button primary={true} type="button" onClick = {()=>this.props._navigate(1)} content="Fortsätt" className="registration-form__btn next" />
      } else{
        return <Button primary={true} type="button" fluid onClick = {()=>this.props._navigate(1)} content="Fortsätt" className="registration-form__btn next" />
      }
    } else{
      if(this.props.windowSize > 991){
        return <Button color="blue" content="Skicka in" type="submit" className="registration-form__btn submit"/>
      } else{
        return <Button color="blue" fluid content="Skicka in" type='submit' className="registration-form__btn submit"/>
      }
      
    }

  }

  _isMobile(){
    if(this.props.windowSize > 991){
      return(
        <Button.Group widths='3'>
          {this._isNotFirst()}
          {this._isNotLast()}
        </Button.Group>
      )
    }else{
      return(
        <div>
          {this._isNotFirst()}
          {this._isNotLast()}
        </div>
      )
    }

  }

  render(){
    const section = this.props.section;
    const sameSection = this.props.sectionPosition === section.id;
    // const windowSize = this.props.windowSize;

    return(
      <section className={`form-section ${sameSection ? '' : ('hidden') }`} id={section.id}>

        <h1 className='form-section__header'>{section.name}</h1>

        {section.questions.map((question, num)=>{
          let input;

          switch (question.type) {
            case 'checkboxGroup':
              input = <CheckboxGroup key={num} questions ={question}/>;
              break
            case 'textfield':
              input = <Textfield key={num} questions ={question}/>
              break
            case 'textarea':
              input = <Textarea key={num} questions ={question}/>
              break
            case 'selectGroup':
              input = <SelectGroup key={num} questions ={question}/>
              break
            case 'radioGroup':
              input = <RadioGroup key={num} questions ={question}/>
              break
            case 'datepicker':
              input = <Datepicker key={num} questions ={question}/>
              break
            default:
              break;
          }

          return input;
        }) }
        
        {
          this._isMobile()
        }




      </section>

    )
  };
}
export default FormSection;