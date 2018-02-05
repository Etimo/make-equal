import React, { Component } from 'react';
import Header from './components/Header';
// import Steps from './components/Steps';
import RegistrationForm from './components/RegistrationForm';
// import FormSection from './sampleSections';
import { Grid, Container, Progress } from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import './css/formSection.css';
// import Textfield from './components/Textfield';
// import './layout.css';
import QuestionSection from './resources/questions/FormQuestions';

class App extends Component {
  constructor() {
    super();
    this._changeSection = this._changeSection.bind(this);
    this._changeAddress = this._changeAddress.bind(this);
    // this._scrollUp = this._scrollUp.bind(this);
    this._stepsClick = this._stepsClick.bind(this);
    this._navigate = this._navigate.bind(this);
    // this._back = this._back.bind(this);
    this._setScreenSize = this._setScreenSize.bind(this);
    this.state = {
      sectionPosition: QuestionSection[0].id,
      address: window.location.origin,
      windowSize: '',
      showForm: false,
      numberOfSections: QuestionSection.length,
      currentPercentage: 0,
      sectionPercentageIncrement: 100 / QuestionSection.length,
    }
  }

  componentWillMount() {
    this._setScreenSize();
    window.addEventListener("resize", this._setScreenSize); // for resizing window
  }

  _setScreenSize() {
    const size = window.innerWidth;
    this.setState({ windowSize: size });
  }

  //Navigate with Steps
  _stepsClick(number) {
    this.setState({
      sectionPosition: number
    });
  }

  //Navigate BACK and FORTH with button
  _navigate(param) {
    QuestionSection.map((obj, num) => {
      if (obj.id === this.state.sectionPosition) {
        const newSectionPosition = QuestionSection[num + param].id;
        this.setState({
          sectionPosition: newSectionPosition,
          currentPercentage: param > 0 ? this.state.currentPercentage + this.state.sectionPercentageIncrement : this.state.currentPercentage - this.state.sectionPercentageIncrement,
        });
      }
    });
  }

  _changeAddress(position) {
    if (position === this.state.sectionPosition) {
      QuestionSection.map((obj, num) => {
        console.log(obj);
        console.log('change address');
      });
    } else {
      this.setState({
        sectionPosition: position,
        address: `${window.location.origin}/#${position}`,
      });

      window.location.replace(this.state.address);
    }
  }

  _changeSection() {
    let newSectionPosition;
    let lastSection = false;
    QuestionSection.map((obj, num) => {
      if (obj.id === this.state.sectionPosition) {
        console.log('with waypoitn');
        if ((QuestionSection.length - 1) > num) { //if not last section
          newSectionPosition = QuestionSection[num + 1].id;
          console.log('with waypoitn1');
        } else {
          newSectionPosition = QuestionSection[num].id;
          lastSection = true;
          console.log('with waypoitn2');
        }
      }

    });
    this.setState({
      sectionPosition: newSectionPosition,
    });

    if (!lastSection) {
      this._changeAddress();
      console.log('with waypoitnlast');
    }
  }


  submit = (values) => {
    console.log('submit');
    console.log(values);
    this.setState({
      currentPercentage: 100,
    })
  }
  showForm = function () {
    this.setState({
      showForm: true,
    })
  }

  handleChange = (values) => {
    // console.log(values);
  }

  regForm() {
    return (
      <RegistrationForm onSubmit={this.submit} onChange={this.handleChange} 
      sections={QuestionSection} windowSize={this.state.windowSize} 
      _navigate={this._navigate} _back={this._back} 
      _changeAddress={this._changeAddress} _changeSection={this._changeSection} 
      _scrollUp={this._scrollUp} sectionPosition={this.state.sectionPosition} />
    );
  }
  welcomeBox() {
    return (
      <div className='welcome-box'>
        <h2 >Welcome to this page</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <Button primary={true} type="button" fluid onClick={() => this.showForm()} content="Fortsätt" className="registration-form__btn next" />
      </div>
    );
  }
  progbar() {
    return (
      <Progress percent={this.state.currentPercentage} color='yellow' />
    );
  }


  render() {
    return (
      <Container className='App' >
        <Grid className="l-container" verticalAlign='middle' >

          <Grid.Row className='l-top' centered columns={1}>
            <Grid.Column computer={10} tablet={16} mobile={16} >
              <Header />
            </Grid.Column>
            <Grid.Column computer={10} tablet={16} mobile={16}>
              {this.state.showForm === true ? this.progbar() : ''}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row className='l-middle' centered>
            <Grid.Column computer={10} tablet={16} mobile={16} >
              {/* <RegistrationForm onSubmit={this.submit} onChange={this.handleChange} sections={sampleSection} windowSize={this.state.windowSize} _navigate={this._navigate} _back={this._back} _changeAddress={this._changeAddress} _changeSection={this._changeSection} _scrollUp={this._scrollUp} sectionPosition={this.state.sectionPosition} /> */}
              {this.state.showForm === true ? this.regForm() : this.welcomeBox()}
            </Grid.Column>
          </Grid.Row>

        </Grid>
        {/* <Grid>
          <Grid.Row className='l-bottom'>
            <Grid.Column computer={16} tablet={16} mobile={16} >
              <p>Footer</p>
            </Grid.Column>
          </Grid.Row>
        </Grid> */}
      </Container>
    );
  }



    //Scrolling
  // _scrollUp(){
  //   // console.log('w');
  //   let x;
  //   sampleSection.map((obj, num)=>{
  //   // //   // console.log(obj);
  //     if(obj.id === this.state.sectionPosition){
  //       // console.log(obj.id + num);
  //   // //     // console.log(sampleSection[num+1]);
  //       if( num >= 1 ){
  //         x = sampleSection[num-1].id;
  //         console.log(this.state.sectionPosition);
  //       }else{
  //         x = sampleSection[num].id;
  //       }
  //     }
  //   });
  //   this.setState({
  //     sectionPosition: x,
  //   });
  //   // if(){
  //     this._changeAddress();
  //   // }
  // }


  // render() {
  //   return (
  //     <div className="l-container" >
  //       <div className='l-top'>
  //         <Header />
  //         <Progress percent={this.state.currentPercentage} className='bar' color='yellow' />
  //       </div>
  //       <div className='l-middle'>
  //         <RegistrationForm onSubmit={this.submit} onChange={this.handleChange} sections={sampleSection} windowSize={this.state.windowSize} _navigate={this._navigate} _back={this._back} _changeAddress={this._changeAddress} _changeSection={this._changeSection} _scrollUp={this._scrollUp} sectionPosition={this.state.sectionPosition} />

  //       </div>
  //       <div className='l-bottom'>
  //         <p>wawa</p>
  //       </div>
  //     </div>
  //   );
  // }

  // render() {
  //   return (
  //     <div className="App" >
  //       <Container>
  //         <Grid className="QuestionBox">
  //           <Grid.Row>
  //             {/* <Grid.Column computer={16} tablet={16} mobile={16} >
  //               <Steps windowSize={this.state.windowSize} sectionNames={sampleSection} _setScreenSize={this._setScreenSize} _stepsClick={this._stepsClick} activeSection={this.state.sectionPosition} />
  //             </Grid.Column> */}
  //             <Grid.Column computer={16} tablet={16} mobile={16} >
  //               <Header />
  //               <Progress percent={this.state.currentPercentage} className='bar' color='yellow' />
  //               <RegistrationForm onSubmit={this.submit} onChange={this.handleChange} sections={sampleSection} windowSize={this.state.windowSize} _navigate={this._navigate} _back={this._back} _changeAddress={this._changeAddress} _changeSection={this._changeSection} _scrollUp={this._scrollUp} sectionPosition={this.state.sectionPosition} />
  //             </Grid.Column>
  //           </Grid.Row>
  //         </Grid>
  //       </Container>
  //     </div>
  //   );
  // }
}

export default App;
