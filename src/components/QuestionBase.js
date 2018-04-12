import React from 'react';

export const QuestionBase = (props) => {
  return (
    <div className={"question-base"}>
      <div className={"question-title"}>
        <h3>{props.title}</h3>
      </div>
      <div className={"option-container"}>
        {props.children}
      </div>
    </div>
  );
};
export const OptionRow = (props) => {
  return (
    <div className={"option-row"}>
      {props.text}
      <span className={"pull-right"}>
        {props.children}
      </span>
    </div>
  );
};
export const OptionRowAlt = (props) => {
  return (
<div className={"option-row"}>
  {props.text}
  <div className={"option-row"}>
    {props.children}
  </div>
</div>
  );
};


export const QuestionWithSubOptionBase = (props) => {
  return (
    <div className={"question-base"}>
      <div className={"question-title"}>
        <h3>{props.title}</h3>
      </div>
      <div className={"option-container"}>

      </div>
    </div>
  );
};
