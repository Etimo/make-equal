import React, { Component } from 'react';
import {
  InformationBox,
  SimpleGridContainer,
  SimpleGridColumn,
  SimpleGridRow
} from './Layout-components';
import { Accordion, Icon, Segment } from 'semantic-ui-react';
import { tipsForAnswers } from '../../form/tips/tips.jsx';

class FrontPage extends Component {
  render() {
    let tips = tipsForAnswers(this.props.answers);
    let tipViews = tips.map((tip, index) => (
      <li className="tip" key={index}>
        <h2>{tip.title}</h2>
        <p>{tip.text}</p>
      </li>
    ));

    return <ul className="tips">{tipViews}</ul>;
  }
}

export default FrontPage;
