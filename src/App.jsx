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
import { WordAnnotator } from './services/WordAnnotator';

class App extends Component {
  constructor() {
    super();
    this.wordAnnotator = new WordAnnotator();
    this.state = {
      showForm: false,
      showAnswers: false,
      introductionQuestions: getIntroductionQuestions()
    };
  }

  targetPath(targetInTime) {
    let { target, tempus } = targetInTime;
    let targetInTimeStr = `${targetInTime.target}In${titleCase(
      targetInTime.tempus
    )}`;
    const formQuestions = generateQuestionListForTarget(targetInTimeStr);
    this.setState({
      targetPath: targetInTime,
      formQuestions: formQuestions
    });
  }

  submit(answers) {
    console.log('submit');
    console.log(answers);
    this.setState({
      showAnswers: true,
      answers: answers
    });
  }

  showForm() {
    this.setState({
      showForm: true
    });
  }

  pageContent() {
    if (this.state.showForm) {
      if (!this.state.targetPath) {
        return (
          <div className={'page-content'}>
            <DeterminePath
              targetPath={targetInTime => this.targetPath(targetInTime)}
              questions={this.state.introductionQuestions}
            />
          </div>
        );
      } else if (!this.state.showAnswers) {
        return (
          <div className={'page-content'}>
            <NetHateHelpForm
              onSubmit={values => this.submit(values)}
              sections={this.state.formQuestions}
              initialValues={this.state.targetPath}
            />
          </div>
        );
      } else {
        return (
          <div className={'page-content'}>
            <MockAnswerPage
              showForm={() => this.showForm()}
              answers={this.state.answers}
            />
          </div>
        );
      }
    } else {
      return (
        <div className={'page-content'}>
          <StartPage
            wordAnnotator={this.wordAnnotator}
            showForm={() => this.showForm()}
          />
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
