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
                <td className="sorting_1" style={{width: 272+'px'}}>{this.props.tableRow.riskCode}</td>
                <td style={{width: 404+'px'}}>{this.props.tableRow.eventType}</td>
                <td style={{width: 214+'px'}}>{this.props.tableRow.host}</td>
                <td style={{width: 182+'px'}}>{this.props.tableRow.time}</td>
            </tr>

        )
    }
}
export default EventsTableRow;
