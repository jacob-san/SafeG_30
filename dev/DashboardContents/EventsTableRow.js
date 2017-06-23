/**
 * Created by sandeepj on 22/6/17.
 */
import React, {Component} from 'react';

class EventsTableRow extends Component{
constructor(props){
    super(props);
}
    render(){
        return(
            <tr role="row" className="odd">
                <td className="sorting_1">{this.props.tableRow.riskCode}</td>
                <td>{this.props.tableRow.eventType}</td>
                <td>{this.props.tableRow.host}</td>
                <td>{this.props.tableRow.time}</td>
            </tr>
        )
    }
}
export default EventsTableRow;
