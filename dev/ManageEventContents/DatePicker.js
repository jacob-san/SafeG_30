/**
 * Created by sandeepj on 30/6/17.
 */
import React, {Component} from "react";
import DateTimeField from 'react-bootstrap-datetimepicker'
class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedStartDate:'',
            selectedEndDate:''
        }
        this.handleStartDateChange=this.handleStartDateChange.bind(this);
        this.handleEndDateChange=this.handleEndDateChange.bind(this);
    }
    handleStartDateChange(day){
        this.setState({
            selectedStartDate:day
        },()=>{console.log('selectedStartDate: '+this.state.selectedStartDate)})
    }
    handleEndDateChange(selectedDate){
        this.setState({
            selectedEndDate:selectedDate
        },()=>{console.log('selectedEndDate: '+this.state.selectedEndDate)})
    }

    render() {
        return (
            <div>
                <div className="col-md-3">
                {/*<DateTimeField onChange={(date)=>{this.setState({selectedStartDate:date}),*/}
                    {/*console.log(this.state.selectedStartDate)}}/>*/}
                    <DateTimeField onChange={this.handleStartDateChange}/>
                </div>
                <div className="col-md-3">
                <DateTimeField onChange={this.handleEndDateChange}/>
                </div>
            </div>
        )
    }
}
export default DatePicker;