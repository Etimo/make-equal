import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';
import '../css/step.css';

// import{BrowserRouter as Router, Link, Route} from 'react-router-dom';

class Steps extends Component{



  render(){

    const arr = this.props.sectionNames;
    return(
      <div className="step">

        {/* {this.props.windowSize <= 991 && (<a href="#"><Icon name="angle left" size="big"/></a>)} */}
        
        {

          arr.map((section, num) =>{
            let active = false
            if(section.id===this.props.activeSection){
              active = true;
            }  
              return(
         
                <div className={`step__section-wrapper ${active? 'step__section-wrapper--active': ''}`} key={num}>
                  <a className='step__section' href={`#${section.id}`} onClick={()=>this.props._stepsClick(section.id)}>
                    {this.props.windowSize <= 991? 
                      <span className='step__number'>{num+1}</span> : 
                      (
                        active ?
                        (<span className='step__circle step__circle--active'> 
                          <Icon className="step__icon step__icon--active" inverted name={section.icon} size="large"/> 
                        </span>) : 
                        (<span className='step__circle'>
                          <Icon className="step__icon" name={section.icon} size="large"/>
                        </span>) 
                      )
                    } 

                    <span className='step__text'>{section.name}</span>
                  </a>
                  {(arr.length - 1) !== num &&
                  <div className="step__line"></div>
                  }

                </div>
              );
          })

        }
        {/* {this.props.windowSize <= 991 && (<a href="#"><Icon name="angle right" size="big"/></a>)} */}
      </div>
    )

  }

}

export default Steps;