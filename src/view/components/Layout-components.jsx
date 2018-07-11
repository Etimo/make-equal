import React from 'react';
import '../style/layout-components.css';
import '../style/simple-grid.css';
import { Icon, Accordion } from 'semantic-ui-react';
import { AnnotateText } from '../components/AnnotateText';

export const InformationBox = props => (
  <div className={'information-box'}>
    {props.title}
    {props.text}
  </div>
);
// ---- Simple grid components
export const SimpleGridContainer = props => (
  <div className={'simple-grid-container'}>{props.children}</div>
);

export const SimpleGridRow = props => (
  <div className={'simple-row'}>{props.children}</div>
);

/**
 * Simple Grid Column with variable width.
 * The width variables are between 1 and 10 (where 1 is 10% and 10 is 100%)
 * default width is 10
 * use the prop 'centered' for content to be placed in the middle of the column.
 */
export const SimpleGridColumn = props => {
  let style = `simple-column col-width-10`;
  if (props.width) {
    style = `simple-column col-width-${props.width}`;
    if (props.centered) {
      style = style + ' centered';
    }
  }
  if (!props.width && props.centered) {
    style = style + ' centered';
  }
  return <div className={style}>{props.children}</div>;
};
// ---- Question layout components

export const QuestionContainer = props => {
  return (
    <div className="question-base">
      <div className="question-title">
        <h3>
          <AnnotateText text={props.title} />
        </h3>
      </div>
      {props.tip && (
        <div className="question-tip">
          <AnnotateText text={props.tip} />
        </div>
      )}
      <div className="option-container">{props.children}</div>
    </div>
  );
};
const DropdownIcon = <Icon name="dropdown" />;
export const OptionRow = props => {
  return (
    <div className={'option-row'}>
      {props.icon ? DropdownIcon : ''}
      <AnnotateText text={props.text} />
      <span className={'pull-right'}>{props.children}</span>
    </div>
  );
};

export const OptionRowWithSubOptionContainer = props => {
  return (
    <Accordion styled fluid className={'option-container'}>
      {props.children}
    </Accordion>
  );
};

export const SubOptionRow = props => {
  return (
    <div className={'sub-option-container option-container'}>
      {props.children}
    </div>
  );
};
