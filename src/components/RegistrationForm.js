import React, {Component} from 'react';

// import {Field, reduxForm, initialize} from 'redux-form';
// import {connect} from 'react-redux';
import FormSection from './FormSection';
// import TriangleDown from './TriangleDown';
// import TriangleUp from './TriangleUp';

// import{BrowserRouter as Router, Link, Route} from 'react-router-dom';

import {Form, Button} from 'semantic-ui-react';
import '../css/registrationForm.css';

import {reduxForm} from 'redux-form'


class RegistrationForm extends Component{
  // constructor(){
  //   super();
  //   // this._checkPosition = this._checkPosition.bind(this);

  // }

  componentDidMount(){
    // this._getSectionSize();
    // window.addEventListener('scroll', ()=>{
    // //   this._scrollToNextSection();
    // //   this._hide();
    //   this._checkPosition();

    // });
  }

  // _checkPosition(){
  //   const height = window.innerHeight;
  //   const scroll = window.scrollY;
    
  //   const sectionHeight = this.refs[this.props.sectionPosition].scrollHeight;
  //   console.log(this);
  //   if((height+scroll) >= sectionHeight){
  //     console.log('bottom');
  //   }


  // }

  // _getSectionSize(){
  //   for(const x in this.refs){
  //     console.log(this.refs[x].scrollHeight);
  //   }

  // }


  // _scrollToNextSection(){
  //   // console.log(document.URL);
  //   const height = window.innerHeight;
  //   const scroll = window.scrollY;
  //   // const sectionHeight = this.refs
  //   for(const x in this.refs){
  //     // console.log(x);
  //     const sectionHeight = this.refs[x].scrollHeight;
  //     if ((height + scroll) >= sectionHeight) {
  //       // you're at the bottom of the page
  //       // console.log(x);

  //     }
  //   }

  // }

  // _hide(){
  //   if(!window.location.hash){
  //     console.log('på topp');
  //   }else{
  //     // console.log(window.location.hash);

  //   }
  // }
  render(){
    const sectionsArr = this.props.sections;
    let last = false;
    let first = true;
    const {handleSubmit} = this.props;
    // console.log(this.props);
    
      return(

        <Form  onSubmit={handleSubmit}>
          {
            sectionsArr.map((section, num) =>{
              if(num === sectionsArr.length-1){
                last = true;
              }
              if(num !== 0){
                first= false;
              }
              
              return(<FormSection  key={num} section={section} isLast = {last} windowSize={this.props.windowSize} 
                isFirst={first} _navigate={this.props._navigate} _back={this.props._back} _changeAddress={this.props._changeAddress} 
                _changeSection={this.props._changeSection} _scrollUp={this.props._scrollUp} sectionPosition={this.props.sectionPosition}/>);
            })
          }
          
           {/* <Button fluid inverted color="blue" content="Riktig" className="registration-form__btn submit"/>  */}
      
        </Form>
      );
  
  }
}
export default RegistrationForm = reduxForm({
  // a unique name for the form
  form: 'TestForm1'
})(RegistrationForm)


// export default RegistrationForm;
