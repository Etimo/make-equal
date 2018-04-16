import React, {Component} from 'react';
import {SectionedTextContainer, TextColumn, TextRow} from "./layout/Layout-components";
import {Button} from "semantic-ui-react";
import MakeEqualAnalyticsWordsApi from "./external-api/MakeEqualAnalyticsWordsApi";
import WordDefinitionModal from './WordDefinistionModal';
import {QuestionBase, OptionRow} from "./QuestionBase";
import {InformationBox} from "./layout/Layout-components";
import {Accordion, Icon, Segment} from 'semantic-ui-react'

class FrontPage extends Component {
  state = {activeIndex: 0};

  handleClick = (e, titleProps) => {
    const {index} = titleProps
    const {activeIndex} = this.state
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({activeIndex: newIndex})
  }

  render() {
    const {activeIndex} = this.state;
    const tip1 = {
      title: "Tips 1",
      text: <p>Ta det som hänt på lika stort allvar som om kränkningen ägt rum utanför nätet.</p>
    };
    const tip2 = {
      title: "Tips 2",
      text: <p>Prata med personen och fråga hur du kan vara till hjälp.</p>
    };
    const tip3 = {
      title: "Tips 3",
      text: <p>Anmäl opassande beteenden via respektive sajters eller sociala mediers anmälningsfunktioner.</p>
    };

    return (
      <SectionedTextContainer>
        <TextRow>
          <TextColumn width={7}>
            <Accordion fluid styled>
              <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                <Icon name='dropdown'/>
                Tips 1 - texten från själva frågan som ställdes?
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                {tip1.text}
              </Accordion.Content>
              <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                <Icon name='dropdown'/>
                {tip2.title}
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                {tip2.text}
              </Accordion.Content>
              <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                <Icon name='dropdown'/>
                {tip3.title}
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                {tip3.text}
              </Accordion.Content>
            </Accordion>
          </TextColumn>
          <TextColumn width={3}>
            <InformationBox title={<h1>Exempel</h1>}
                            text={<p>Förra gången pratade vi om att ha ett fält för mer generella råd detta är ett
                              exempel på hur det kan se ut.</p>}/>
          </TextColumn>
        </TextRow>
        <TextRow>
          <TextColumn width={10}>
            <Segment>
            <Accordion>
              <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                <Icon name='dropdown'/>
                Tips 1 - texten från själva frågan som ställdes?
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <p>
                  Ta det som hänt på lika stort allvar som om kränkningen ägt rum utanför nätet.
                </p>
              </Accordion.Content>
              <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                <Icon name='dropdown'/>
                Tips 2
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <p>
                  Prata med personen och fråga hur du kan vara till hjälp.
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                <Icon name='dropdown'/>
                Tips 3
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <p>
                  Anmäl opassande beteenden via respektive sajters eller sociala mediers anmälningsfunktioner.
                </p>
              </Accordion.Content>
            </Accordion>
          </Segment>
          </TextColumn>
        </TextRow>
      </SectionedTextContainer>
    );
  }
}

export default FrontPage;
