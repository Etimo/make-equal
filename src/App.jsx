import React, { Component } from 'react';
import { Grid, GridColumn, Progress } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './view/style/App.css';
import NetHateHelpForm from './form/NetHateHelpForm';
import Header from './view/components/Header';
import DeterminePath from './form/DeterminePath';
import StartPage from './view/components/FrontPage';
import MockAnswerPage from './view/components/MockAnswerPage';
import {
  generateQuestionListForTarget,
  getIntroductionQuestions
} from './form/TargetedQuestionListBuilder';
import titleCase from 'title-case';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      showAnswers: false,
      introductionQuestions: getIntroductionQuestions()
    };
  }

  targetPath = targetInTime => {
    let { target, tempus } = targetInTime;
    let targetInTimeStr = `${targetInTime.target}In${titleCase(
      targetInTime.tempus
    )}`;
    const formQuestions = generateQuestionListForTarget(targetInTimeStr);
    this.setState({
      targetPath: targetInTime,
      formQuestions: formQuestions
    });
  };

  submit = values => {
    console.log('submit');
    console.log(values);
    this.setState({
      currentPercentage: 100,
      showAnswers: true
    });
  };

  showForm = () => {
    this.setState({
      showForm: true
    });
  };

  pageContent() {
    if (this.state.showForm) {
      if (!this.state.targetPath) {
        return (
          <div className={'page-content'}>
            <DeterminePath
              targetPath={this.targetPath}
              questions={this.state.introductionQuestions}
            />
          </div>
        );
      } else if (!this.state.showAnswers) {
        return (
          <div className={'page-content'}>
            <NetHateHelpForm
              onSubmit={this.submit}
              onChange={this.handleChange}
              sections={this.state.formQuestions}
            />
          </div>
        );
      } else {
        return (
          <div className={'page-content'}>
            <MockAnswerPage showForm={this.showForm} />
          </div>
        );
      }
    } else {
      return (
        <div className={'page-content'}>
          <StartPage showForm={this.showForm} />
        </div>
      );
    }
  }

  render() {
    const Column = props => (
      <GridColumn
        verticalAlign={props.verticalAlign}
        className={props.className}
      >
        {props.children}
      </GridColumn>
    );
    return (
      <Grid columns={1} container centered id={'container'}>
        <Column className={'page-header'}>
          <Header />
        </Column>
        <Column className={'page-content-container'}>
          {this.pageContent()}
        </Column>
      </Grid>
    );
  }
}

export default App;
