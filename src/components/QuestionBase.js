import React from 'react';

export const QuestionBase = (props) => {
  return (
    <div className={"question-base"}>
      <div className={"question-title"}><h3>{props.title}</h3></div>
      <div className={"option-container"}>
        {props.children}
      </div>
    </div>
  );
};
export const OptionRow = (props) => {
  return (
    <label className={props.selected ? "option-row-selected" : "option-row"}>
      <div >
        {props.text}
        <div className={"pull-right"}>
          {props.children}
        </div>
      </div>
    </label>
  );
};
