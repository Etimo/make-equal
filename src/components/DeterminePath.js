import React, {Component} from 'react';
import {QuestionBase, OptionRow} from "./QuestionBase";

export default class DeterminePath extends Component {
  constructor() {
    super();
    this.state = {
      subject: "",
      tempus: ""
    };
  }

  // componentWillMount() {
  //   console.log("awdas")
  // }
  determineTargetPath (){
    const subjectAndTempus = this.state.subject + this.state.tempus;
    let targetPath = "";
    console.log(subjectAndTempus);
    switch (subjectAndTempus) {
      case '0a1b':
        targetPath = "selfInPast";
        break;
      case '0b1a':
        targetPath = "otherInPresent";
        break;
      case '0b1b':
        targetPath = "otherInPast";
        break;
      default:
        targetPath = "selfInPresent";
        break;
    }
    this.props.targetPath(targetPath);
    return false;
  };
  handleSubjectChange = (ev) => {
    this.setState(
      {subject: ev.target.value},
      ()=>{if (this.state.tempus !== ""){
        this.determineTargetPath();
      }}
    );
  };
  handleTempusChange = (ev) => {
    this.setState(
      {tempus: ev.target.value},
      () => {
        if (this.state.subject !== "") {
          this.determineTargetPath();
        }
      }
    );

  };

  render() {
    // console.log(this.props);
    const subject = this.props.questions[0];
    const tempus = this.props.questions[1];
    // console.log(subject)
    return (
      <div>
        <QuestionBase title={subject.text}>
          {
            subject.options.map((option, num) => {
              const id = subject.id + option.id;
              return (
                <label key={num} className={this.state.subject === id ? "option selected" : "option"}>
                  <OptionRow text={option.text}>
                    <input value={id} checked={this.state.subject === id} type={"radio"}
                           onChange={this.handleSubjectChange}/>
                  </OptionRow>
                </label>
              );
            })
          }
        </QuestionBase>
        <QuestionBase title={tempus.text}>
          {
            tempus.options.map((option, num) => {
              const id = tempus.id + option.id;
              return (
                <label key={num} className={this.state.tempus === id ? "option selected" : "option"}>
                  <OptionRow text={option.text}>
                    <input value={id} checked={this.state.tempus === id} type={"radio"}
                           onChange={this.handleTempusChange}/>
                  </OptionRow>
                </label>
              );
            })
          }
        </QuestionBase>
      </div>
    );
  }
}
