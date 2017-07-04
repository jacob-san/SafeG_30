/**
 * Created by sandeepj on 3/7/17.
 */
import React, {Component} from 'react'
class AlertListItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <li data-todo-target="Lg-g2" className="todo-projects-li red-dot" onClick={()=>{this.props.handleAlertClick(this.props.alert.alertName)}}>
                <span className="todo-title">{this.props.alert.alertName}</span>
            </li>
        )
    }
}
export default AlertListItem;