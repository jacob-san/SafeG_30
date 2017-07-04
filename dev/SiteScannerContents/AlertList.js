/**
 * Created by sandeepj on 3/7/17.
 */
import React, {Component} from 'react';
import AlertListItem from './AlertListItem'
class AlertList extends Component{
    constructor(props){
        super(props);
        this.state={
            alerts:[
                {alertName: 'Web Browser XSS Protection',numberOfAlerts:'63',alertType:'red'},
                {alertName: 'X-Content-Type-Option...',numberOfAlerts:'15',alertType:'orange'},
                {alertName: 'X-Frame-Options Header...',numberOfAlerts:'18',alertType:'green'},
                {alertName: 'Cross-Domain JavaScript....',numberOfAlerts:'18',alertType:'gray'},
                ]
        }
    }

    render(){
        return(
            <div>
                <ul id="todo-projects-ul" className="h-200 table-responsive">
                {this.state.alerts.map((alert, index)=>{
                    return(
                    <AlertListItem
                        key={index}
                        alertName={alert.alertName}
                        numberOfAlerts={alert.numberOfAlerts}
                        alertType={alert.alertType}
                        handleAlertClick={this.props.handleAlertClick}
                    />
                    )
                })}
                </ul>
            </div>
        )
    }
}
export default AlertList;