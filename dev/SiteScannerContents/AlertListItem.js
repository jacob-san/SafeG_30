/**
 * Created by sandeepj on 3/7/17.
 */
import React, {Component} from 'react';
class AlertListItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
                <li data-todo-target="webbrouwser" className="todo-projects-li red-dot" onClick={()=>{this.props.handleAlertClick(this.props.alertName)}}>
                    <span className="todo-title">{this.props.alertName}</span>
                    <small className="text-grey m-xs-l">{this.props.numberOfAlerts} alerts</small>
                </li>
        )
    }
}
export default AlertListItem;