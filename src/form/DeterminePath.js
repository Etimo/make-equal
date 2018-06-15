import React, {Component} from 'react';
// import {} from "../view/components/QuestionBase";
import {QuestionContainer, OptionRow,SimpleGridContainer, SimpleGridRow, SimpleGridColumn, InformationBox} from "../view/components/Layout-components";
import {Button} from 'semantic-ui-react'

export default class DeterminePath extends Component {
  constructor() {
    super();
    this.state = {};
  }

  determineTargetPath() {
    this.props.targetPath(this.state);
    return false;
  };

  handleAnswerChange = (questionId) => (ev) => {
    let newState = {};
    newState[questionId] = ev.target.value;
    this.setState(newState);
  }
  checkFieldsReady = () => {
    return this.state.tempus && this.state.target;
  };

  render() {
    const target = this.props.questions[0];
    const tempus = this.props.questions[1];
    return (
      <SimpleGridContainer>
        <SimpleGridRow>
          <SimpleGridColumn>
            <InformationBox title={informationHeader} text={pathSetupInformationText}/>
          </SimpleGridColumn>
        </SimpleGridRow>
        <SimpleGridRow>
          {
            this.props.questions.map(
              (question) =>
                <SimpleGridColumn key={`question-${question.id}`} width={5}>
                    <QuestionContainer title={target.text}>
                        {
                          question.options.map(
                            (option, num) =>
                              <label key={num} className={this.state[question.id] === option.id ? "option selected" : "option"}>
                                  <OptionRow text={option.text}>
                                      <input value={option.id} checked={this.state[question.id] === option.id} type={"radio"}
                                               onChange={this.handleAnswerChange(question.id)}/>
                                    </OptionRow>
                                </label>
                          )
                        }
                    </QuestionContainer>
                </SimpleGridColumn>
            )
          }
        </SimpleGridRow>
        <SimpleGridRow>
          <SimpleGridColumn centered>
            <Button content={"Fortsätt med nästa fråga"} className={"form-button"}
                    disabled={!this.checkFieldsReady()}
                    onClick={() => this.determineTargetPath()}/>
          </SimpleGridColumn>
        </SimpleGridRow>
      </SimpleGridContainer>
    );
  }
}
// placing the text here so it doesn't get in the way
const informationHeader = <h1>Information</h1>;
const pathSetupInformationText = <p>
  För att frågorna ska vara relevanta för dig behöver du först svara på dessa frågor.
</p>;
