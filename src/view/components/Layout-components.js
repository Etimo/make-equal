import React from 'react';
import '../style/layout-components.css'
import '../style/simple-grid.css';

export const InformationBox = (props) => (
  <div className={"information-box"}>
    {props.title}
    {props.text}
  </div>
);
// ---- Simple grid components
export const SimpleGridContainer = (props) => (
  <div className={'simple-grid-container'}>
    {props.children}
  </div>
);

export const SimpleGridRow = (props) => (
  <div className={'simple-row'}>{props.children}</div>
);

/**
 * Simple Grid Column with variable width.
 * The width variables are between 1 and 10 (where 1 is 10% and 10 is 100%)
 * default width is 10
 * use the prop 'centered' for content to be placed in the middle of the column.
 */
export const SimpleGridColumn = (props) => {
  let style = `simple-column col-width-10`;
  if (props.width) {
    style = `simple-column col-width-${props.width}`;
    if (props.centered) {
      style = style + " centered";
    }
  }
  if (!props.width && props.centered) {
    style = style + " centered";
  }
  return (
    <div className={style}>{props.children}</div>
  );
};
// ---- Question layout components


export const QuestionContainer = (props) => {
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

export const OptionRowWithSubOptionContainer = (props) => {
  return (
    <div className={"question-base"}>
      <div className={"option-container"}>
        {props.children}
      </div>
    </div>
  );
};

export const SubOptionRow = (props) => {
  return (
    <div className={"sub-option-container"}>
      {props.children}
    </div>
  );
};

