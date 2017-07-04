/**
 * Created by sandeepj on 3/7/17.
 */
import React, {Component} from "react";
class Blacklist_listItem extends Component{
    render(){
        return(
            <li data-todo-target="Blacklist" className="todo-projects-li orange-dot" onClick={()=>{this.props.handleBlacklistItemClick(this.props.item.name)}}>
                <span className="todo-title">{this.props.item.name}</span>
                <small className="text-grey m-xs-l">Host Count {this.props.item.hostCount}</small>
            </li>
        )
    }
}
export default Blacklist_listItem;