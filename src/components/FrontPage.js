import React, {Component} from 'react';
import {SectionedTextContainer, TextColumn, TextRow} from "../view/components/Layout-components";
import {frontPageSectionOne, frontPageSectionTwo, frontPageTitle} from '../resources/other/page-text-content';
import {Button} from "semantic-ui-react";
import WordDefinitionModal from './WordDefinistionModal';

class FrontPage extends Component {
  constructor() {
    super();
    this.state = {
      words: []
    };
  }

  componentDidUpdate() {
    console.log("something happened");
  }

  handleWordsFromApi = (props) => {
    console.log(props);
  };

  render() {
    const test1 = {word: "Ålder", definition: "Ålder handlar om en persons uppnådda levnadslängd. Lagskyddet omfattar både unga och gamla som behandlas illa eller orättvist med koppling till sin ålder. I många sammanhang, även där det i övrigt inte är okej att skämta negativt om människor och grupper, finns en jargong där det är accepterat att generalisera och stereotypifiera människor och grupper kopplat till ålder. I arbetslivet kan det ibland märkas genom att personer tilldelas arbetsuppgifter utifrån sin ålder snarare än de kompetenser och kunskaper den har."};
    const test2 = {word: "Funktionsnedsättning", definition: 	"Funktionsnedsättning är en varaktig nedsättning av en persons [fysiska|fysisk], [psykiska|psykisk], [neuropsykiatriska|neuropsykiatrisk] eller [intellektuella|intellektuell] funktionsförmåga. Nedsättningen kan ha varit medfödd eller uppstått senare av en skada eller sjukdom. Att den ska vara varaktig kan t.ex. innebära att ett brutet ben inte omfattas, men att vara permanent halt till följd av en fallolycka och ett brutet ben kan göra det. I lagen kallas den här diskrimineringsgrunden för funktionshinder. Vi har valt att använda en annan benämning för att markera att hindret inte ligger hos personen utan i mötet med omgivningen som inte är tillgänglig och anpassad för alla. Viktigt att komma ihåg är att alla människors funktionsförmåga varierar både över tid och mellan personer. Som beslutsfattare i en organisation är detta viktigt att tänka på för att fler ska känna sig inkluderade och kunna komma till sin fulla potential. Av den anledningen kan det vara bättre att arbeta utifrån begreppet funktionsvariation för att markera att alla funkar olika, men att det finns normer kring hur vi ska fungera som gör det lättare i samhället för vissa på bekostnad av andra. Det som är nödvändiga anpassningar för vissa kommer att förbättra för många och ofta vara positivt för alla."};

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
            <Button content={"Tryck här för att komma igång"} onClick={() => this.props.showForm()}/>
          </TextColumn>
        </TextRow>
        <TextRow>
          <TextColumn>
            <WordDefinitionModal word={test1.word} wordDefinition={test1.definition}/>
            <WordDefinitionModal word={test2.word} wordDefinition={test2.definition}/>
          </TextColumn>
        </TextRow>
      </SectionedTextContainer>
    );
  }
}

export default FrontPage;
