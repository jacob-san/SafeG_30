/**
 * Created by sandeepj on 30/6/17.
 */
import React, {Component} from "react";
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';
class DatePicker extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <DayPickerInput className="form-group" placeholder="DD/MM/YYYY" format="DD/MM/YYYY"/>
                <DayPickerInput className="form-group" placeholder="DD/MM/YYYY" format="DD/MM/YYYY"/>,
            </div>


        )
    }
}
export default DatePicker;