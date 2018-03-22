import React from 'react';

export const Question = (props) => (
  <div className={"question-base"}>
    <div className={"question-title"}> <h3>{question.title}</h3> </div>
    <div className={"question-options"}>
      {...props.children}
    </div>
  </div>
);
