import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
// import Textfield from './components/Textfield';
import Steps from './components/Steps';
import RegistrationForm from './components/RegistrationForm';

import sampleSection from './sampleSections';
import { Grid, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import ProgressBar from './components/ProgressBar';


class App extends Component {
    constructor() {
        super();
        this._changeSection = this._changeSection.bind(this);
        this._changeAddress = this._changeAddress.bind(this);
        // this._scrollUp = this._scrollUp.bind(this);
        this._stepsClick = this._stepsClick.bind(this);
        this._navigate = this._navigate.bind(this);
        // this._back = this._back.bind(this);
        this._setScreenSize = this._setScreenSize.bind(this);

        this.state = {
            sectionPosition: sampleSection[0].id,
            address: window.location.origin,
            windowSize: '',
        }

    }

    componentWillMount() {
        this._setScreenSize();
        window.addEventListener("resize", this._setScreenSize); // for resizing window
    }

    _setScreenSize() {
        const size = window.innerWidth;
        this.setState({ windowSize: size });
    }

    //Navigate with Steps
    _stepsClick(number) {
        this.setState({
            sectionPosition: number
        });
    }

    //Navigate BACK and FORTH with button
    _navigate(param) {
        // console.log('g' + this.state.sectionPosition);
        sampleSection.map((obj, num) => {
            // console.log(obj);
            if (obj.id === this.state.sectionPosition) {
                // console.log(num);
                const newSectionPosition = sampleSection[num + param].id;
                this.setState({
                    sectionPosition: newSectionPosition
                });
            }
        });
    }

    _changeAddress(position) {

        if (position === this.state.sectionPosition) {
            sampleSection.map((obj, num) => {
                console.log(obj);
                console.log('change address');
            });
        } else {
            this.setState({
                sectionPosition: position,
                address: `${window.location.origin}/#${position}`,
            });

            window.location.replace(this.state.address);
        }



    }


    _changeSection() {
        let newSectionPosition;
        let lastSection = false;
        sampleSection.map((obj, num) => {
            if (obj.id === this.state.sectionPosition) {
                console.log('with waypoitn');
                // console.log(obj.id + num);
                // console.log(sampleSection[num+1]);
                if ((sampleSection.length - 1) > num) { //if not last section
                    newSectionPosition = sampleSection[num + 1].id;
                    console.log('with waypoitn1');
                } else {
                    newSectionPosition = sampleSection[num].id;
                    lastSection = true;
                    console.log('with waypoitn2');
                }
            }

        });
        this.setState({
            sectionPosition: newSectionPosition,
        });

        if (!lastSection) {
            this._changeAddress();
            console.log('with waypoitnlast');
        }

    }

    //Scrolling

    // _scrollUp(){
    //   // console.log('w');
    //   let x;
    //   sampleSection.map((obj, num)=>{
    //   // //   // console.log(obj);

    //     if(obj.id === this.state.sectionPosition){
    //       // console.log(obj.id + num);
    //   // //     // console.log(sampleSection[num+1]);
    //       if( num >= 1 ){
    //         x = sampleSection[num-1].id;
    //         console.log(this.state.sectionPosition);
    //       }else{
    //         x = sampleSection[num].id;
    //       }
    //     }
    //   });

    //   this.setState({
    //     sectionPosition: x,
    //   });

    //   // if(){
    //     this._changeAddress();
    //   // }

    // }
    submit = (values) => {
        console.log(values);
        console.log('submit');
    }

    handleChange = (values) => {
        console.log(values);
    }


    render() {
        return (
            <div className="App">
                {/* {console.log('g')} */}
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column computer={16} tablet={16} mobile={16} >
                                <Header />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid className="QuestionBox">
                        <Grid.Row>
                            <Grid.Column computer={16} tablet={16} mobile={16} >
                                <ProgressBar />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            {/* <Grid.Column computer={16} tablet={16} mobile={16} >
                                
                                <Steps windowSize={this.state.windowSize} sectionNames={sampleSection} _setScreenSize={this._setScreenSize} _stepsClick={this._stepsClick} activeSection={this.state.sectionPosition} />

                            </Grid.Column> */}
                            <Grid.Column computer={16} tablet={16} mobile={16} >
                                <RegistrationForm onSubmit={this.submit} onChange={this.handleChange} sections={sampleSection} windowSize={this.state.windowSize} _navigate={this._navigate} _back={this._back} _changeAddress={this._changeAddress} _changeSection={this._changeSection} _scrollUp={this._scrollUp} sectionPosition={this.state.sectionPosition} />

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>

            </div>
        );
    }
}

export default App;
