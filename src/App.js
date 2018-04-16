import React, {Component} from "react";
import {Grid, GridColumn, Progress} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import './view/style/App.css';
import RegistrationForm from "./form/RegistrationForm";
import Header from "./view/components/Header";
import DeterminePath from './form/DeterminePath';
import StartPage from './view/components/FrontPage';
import MockAnswerPage from './view/components/MockAnswerPage';
import {
  generateQuestionListForTarget,
  getIntroductionQuestions
} from "./form/TargetedQuestionListBuilder";

class App extends Component {
  constructor() {
    super();
    this._changeSection = this._changeSection.bind(this);
    this._changeAddress = this._changeAddress.bind(this);
    this._navigate = this._navigate.bind(this);
    this._setScreenSize = this._setScreenSize.bind(this);
    this.state = {
      address: window.location.origin,
      windowSize: '',
      showForm: false,
      showAnswers: false,
      introductionQuestions: getIntroductionQuestions(),
      currentPercentage: 0,
    };
  }

  targetPath = (props) => {
    const formQuestions = generateQuestionListForTarget(props);
    this.setState({
      targetPath: props,
      formQuestions: formQuestions,
      sectionPosition: formQuestions[0].id,
      numberOfSections: formQuestions.length,
      sectionPercentageIncrement: 100 / formQuestions.length,
    })
  };

  componentWillMount() {
    // console.log("will it mount?");
    // this._setScreenSize();
    // window.addEventListener("resize", this._setScreenSize); // for resizing window
  }

  _setScreenSize() {
    const size = window.innerWidth;
    this.setState({windowSize: size});
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
    console.log("assume the position!");
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
      showAnswers: true,
    })
  };

  showForm = () => {
    this.setState({
      showForm: true,
    })
  };

  handleChange = (values) => {
    console.log(values);
  };

  pageContent() {
    let output = <div className={'page-content'}><StartPage showForm={this.showForm}/></div>;
    if (this.state.showForm) {
      if (!this.state.showAnswers) {
        if (!this.state.targetPath) {
          output = <div className={'page-content'}>
            <DeterminePath targetPath={this.targetPath} questions={this.state.introductionQuestions}/>
          </div>;
        } else {
          output = <div className={'page-content'}>
            <div className={"progress-container"}>
              <Progress percent={this.state.currentPercentage}/>
            </div>
            <RegistrationForm onSubmit={this.submit} onChange={this.handleChange}
                              sections={this.state.formQuestions} windowSize={this.state.windowSize}
                              _navigate={this._navigate}  _changeAddress={this._changeAddress}
                              _changeSection={this._changeSection}
                              sectionPosition={this.state.sectionPosition}/>
          </div>;
        }
      } else {
        output = <div className={'page-content'}><MockAnswerPage showForm={this.showForm}/></div>;
      }
    }
    return (output);
  }

  render() {
    const Column = (props) => <GridColumn verticalAlign={props.verticalAlign} className={props.className}
    >{props.children}</GridColumn>;
    const Content = () => this.pageContent();
    return (
      <Grid columns={1} container centered id={'container'}>
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
