import React, {Component} from 'react';
// import {} from "../view/components/QuestionBase";
import {QuestionContainer, OptionRow,SimpleGridContainer, SimpleGridRow, SimpleGridColumn, InformationBox} from "../view/components/Layout-components";
import {Button} from 'semantic-ui-react'

export default class DeterminePath extends Component {
  constructor() {
    super();
    this.state = {
      target: "",
      tempus: "",
    };
  }

  determineTargetPath() {
    const selectedTargetAndTime = this.state.target + this.state.tempus;
    let targetInTime = "";
    switch (selectedTargetAndTime) {
      case '0a1b':
        targetInTime = "selfInPast";
        break;
      case '0b1a':
        targetInTime = "otherInPresent";
        break;
      case '0b1b':
        targetInTime = "otherInPast";
        break;
      default: // '0a1a'
        targetInTime = "selfInPresent";
        break;
    }
    this.props.targetPath(targetInTime);
    return false;
  };

  handleTargetChange = (ev) => {
    this.setState(
      {target: ev.target.value}
    );
  };
  handleTimeChange = (ev) => {
    this.setState(
      {tempus: ev.target.value}
    );
  };
  checkFieldsReady = () => {
    return this.state.tempus !== "" && this.state.target !== "";
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
          <SimpleGridColumn width={5}>
            <QuestionContainer title={target.text}>
              {
                target.options.map((option, num) => {
                  const id = target.id + option.id;
                  return (
                    <label key={num} className={this.state.target === id ? "option selected" : "option"}>
                      <OptionRow text={option.text}>
                        <input value={id} checked={this.state.target === id} type={"radio"}
                               onChange={this.handleTargetChange}/>
                      </OptionRow>
                    </label>
                  );
                })
              }
            </QuestionContainer>
            </SimpleGridColumn>
            <SimpleGridColumn width={5}>
            <QuestionContainer title={tempus.text}>
              {
                tempus.options.map((option, num) => {
                  const id = tempus.id + option.id;
                  return (
                    <label key={num} className={this.state.tempus === id ? "option selected" : "option"}>
                      <OptionRow text={option.text}>
                        <input value={id} checked={this.state.tempus === id} type={"radio"}
                               onChange={this.handleTimeChange}/>
                      </OptionRow>
                    </label>
                  );
                })
              }
            </QuestionContainer>
          </SimpleGridColumn>
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
