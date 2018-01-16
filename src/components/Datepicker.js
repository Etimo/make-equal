import React, {Component} from 'react';
import {Form} from 'semantic-ui-react';
// import DayPicker from 'react-day-picker';
// import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import "react-day-picker/lib/style.css";

import '../css/datepicker.css';

class Datepicker extends Component{
  constructor(){
    super();
    this._handleDayChange= this._handleDayChange.bind(this);
    this.state = {
      selectedDay:undefined,
    };

  }

  _handleDayChange= selectedDay =>{
    this.setState({
      selectedDay
    });
  }

  render(){
    const x = this.props.questions;
    const value = this.state.selectedDay ? this.state.selectedDay : '';
    return(
        <Form.Field>
          <label>{x.label}
          <DayPickerInput
            value={value}
            className = 'e'
            placeholder="ÅÅÅÅ/MM/DD" 
            dateFormat="YYYY/MM/DD"
            onDayChange={this._handleDayChange}
            
            dayPickerProps={
              {
                className: 'datepicker__calendar',
                months: ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'],
                weekdaysShort: ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör'],
                firstDayOfWeek: 1,
              }
            }
          />
          </label>
        </Form.Field>
      
    );
  }
}

export default Datepicker;
