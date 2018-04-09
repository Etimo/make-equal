import React from 'react';
import '../../resources/style/TextContainer.css'

export const SectionedTextContainer = (props) => (
  <div className={'text-container'}>
    {props.children}
  </div>
);
export const TextRow = (props) => (<div className={'text-row'}>{props.children}</div>);

export const TextColumn = (props) => {
  let style = `text-column col-width-10`;
  if (props.width) {
    style = `text-column col-width-${props.width}`;
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
export const InformationBox = (props) => {
  let title = props.title;
  let text = props.text;
  return (
    <div className={"information-box"}>
      {title}
      {text}
    </div>
  );
}
