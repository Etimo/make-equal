import React, { Component } from 'react';
import {
  SimpleGridContainer,
  SimpleGridColumn,
  SimpleGridRow
} from './Layout-components';
import {
  frontPageSectionOne,
  frontPageSectionTwo,
  frontPageTitle
} from '../other/page-text-content';
import { Button } from 'semantic-ui-react';
import { AnnotateText } from '../components/AnnotateText';

class FrontPage extends Component {
  constructor() {
    super();
    this.state = {
      words: []
    };
  }

  componentDidUpdate() {
    console.log('something happened');
  }

  handleWordsFromApi = props => {
    console.log(props);
  };

  render() {
    return (
      <SimpleGridContainer>
        <SimpleGridRow>
          <SimpleGridColumn width={10}>
            {frontPageTitle}
            <p>
              <AnnotateText text={frontPageSectionOne} />
            </p>
          </SimpleGridColumn>
        </SimpleGridRow>
        <SimpleGridRow>
          <SimpleGridColumn width={10}>
            {frontPageSectionTwo.map((paragraph, index) => (
              <p key={index}>
                <AnnotateText text={paragraph} />
              </p>
            ))}
          </SimpleGridColumn>
        </SimpleGridRow>
        <SimpleGridRow>
          <SimpleGridColumn centered>
            <Button
              content={'Tryck här för att komma igång'}
              onClick={() => this.props.showForm()}
            />
          </SimpleGridColumn>
        </SimpleGridRow>
      </SimpleGridContainer>
    );
  }
}

export default FrontPage;
