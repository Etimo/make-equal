import React, { Component } from 'react';
import { tipsForAnswers } from '../../form/tips';
import { AnnotateText } from './AnnotateText';

export class AnswerPage extends Component {
  render() {
    let tips = tipsForAnswers(this.props.answers);
    let tipViews = tips.map((tip, index) => (
      <li className="tip" key={index}>
        <h2>
          <AnnotateText text={tip.title} />
        </h2>
        <p>
          <AnnotateText text={tip.text} />
        </p>
      </li>
    ));

    return <ul className="tips">{tipViews}</ul>;
  }
}
