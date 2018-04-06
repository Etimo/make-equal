import React, {Component} from "react";
import {Button, Grid, GridColumn, Progress} from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import './page-layout.css';
import "./css/formSection.css";
import './css/questionBase.css';
import RegistrationForm from "./components/form/RegistrationForm";
import Header from "./components/Header";
import DeterminePath from './components/DeterminePath';

// import {baseQuestions, questionTree} from "./resources/questions/tmp/QuestionTree";
import {getIntroductionQuestions,generateQuestionListForTarget} from "./resources/questions/TargetedQuestionListBuilder";
// import './layout.css';
// import "./App.css";

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
      address: window.location.origin,
      windowSize: '',
      showForm: true,
      introductionQuestions: getIntroductionQuestions(),
      currentPercentage: 0,
    };
    // this.wawa();
  }

  targetPath = (props) => {
    const formQuestions = generateQuestionListForTarget(props);
    console.log(formQuestions);
    this.setState({
      targetPath: props,
      formQuestions:formQuestions,
      sectionPosition: formQuestions[0].id,
      numberOfSections: formQuestions.length,
      sectionPercentageIncrement: 100 / formQuestions.length,
    })
  };


  wawa() {
    console.log(generateQuestionListForTarget("selfInPresent"));
    // console.log(generateQuestionListForTarget("selfInPast"));
    console.log(generateQuestionListForTarget("otherInPresent"));
    // console.log(generateQuestionListForTarget("otherInPast"));
  }

  componentWillMount() {
    this._setScreenSize();
    window.addEventListener("resize", this._setScreenSize); // for resizing window
  }

  _setScreenSize() {
    const size = window.innerWidth;
    this.setState({windowSize: size});
  }

  //Navigate with Steps
  _stepsClick(number) {
    this.setState({
      sectionPosition: number
    });
  }

  //Navigate BACK and FORTH with button
  _navigate(param) {
    const formQuestions = this.state.formQuestions;
    formQuestions.map((obj, num) => {
      if (obj.id === this.state.sectionPosition) {
        const newSectionPosition = formQuestions[num + param].id;
        this.setState({
          sectionPosition: newSectionPosition,
          currentPercentage: param > 0 ? this.state.currentPercentage + this.state.sectionPercentageIncrement : this.state.currentPercentage - this.state.sectionPercentageIncrement,
        });
      }
      return false;
    });
  }

  _changeAddress(position) {
    if (position === this.state.sectionPosition) {
      this.state.formQuestions.map((obj, num) => {
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
    this.state.formQuestions.map((obj, num) => {
      if (obj.id === this.state.sectionPosition) {
        console.log('with waypoitn');
        if ((this.state.formQuestions.length - 1) > num) { //if not last section
          newSectionPosition = this.state.formQuestions[num + 1].id;
          console.log('with waypoitn1');
        } else {
          newSectionPosition = this.state.formQuestions[num].id;
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
  };

  showForm = () => {
    this.setState({
      showForm: true,
    })
  };

  handleChange = (values) => {
    // console.log(values);
  };

  regForm() {
    return (
      <RegistrationForm onSubmit={this.submit} onChange={this.handleChange}
                        sections={this.state.formQuestions} windowSize={this.state.windowSize}
                        _navigate={this._navigate} _back={this._back}
                        _changeAddress={this._changeAddress} _changeSection={this._changeSection}
                        _scrollUp={this._scrollUp} sectionPosition={this.state.sectionPosition}/>
    );
  }

  welcomeBox() {
    return (
      <div className='welcome-box'>
        <h2>Welcome to this page</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.</p>
        <Button primary={true} type="button" fluid onClick={() => this.showForm()} content="Fortsätt"
                className="registration-form__btn next"/>
      </div>
    );
  }

  progbar() {
    return (
      <div className={"progress-container"}>
        <Progress percent={this.state.currentPercentage} color='yellow'/>
      </div>
    );
  }



  pageContent() {
    let output = <div className={'page-content'}>{this.welcomeBox()}</div>;
    if (this.state.showForm) {
      if (!this.state.targetPath) {
        output = <div className={'page-content'}>
          <DeterminePath targetPath={this.targetPath} questions={this.state.introductionQuestions}/></div>;
      } else {
        output = <div className={'page-content'}>
          {this.progbar()}
          {this.regForm()}
        </div>;
      }
    }
    return (output);
  }

  render() {
    const Column = (props) => <GridColumn verticalAlign={props.verticalAlign} className={props.className} computer={10}
                                          tablet={16} mobile={16}>{props.children}</GridColumn>;
    const Content = () => this.pageContent();
    return (
      <Grid columns={1} container centered className={'test-class'} id={'container'}>
        <Column className={'page-header'}>
          <Header/>
        </Column>
        <Column className={'page-content-container'}>
          <Content/>
        </Column>
      </Grid>
    );
  }
}

export default App;
