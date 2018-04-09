import React from 'react';
import {SectionedTextContainer, TextColumn, TextRow} from "./layout/Layout-components";
import {frontPageSectionOne, frontPageSectionTwo, frontPageTitle} from '../resources/other/page-text-content';
import {Button} from "semantic-ui-react";


const FrontPage = (props) => {
  return (
    <SectionedTextContainer>
      <TextRow>
        <TextColumn width={10}>
          {frontPageTitle}
          {frontPageSectionOne}
        </TextColumn>
      </TextRow>
      <TextRow>
        <TextColumn width={10}>
          {frontPageSectionTwo}
        </TextColumn>
      </TextRow>
      <TextRow>
        <TextColumn centered>
          <Button content={"Tryck här för att komma igång"} onClick={() => props.showForm()}/>
        </TextColumn>
      </TextRow>
    </SectionedTextContainer>
  );
};

export default FrontPage;
