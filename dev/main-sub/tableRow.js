/**
 * Created by sandeepj on 22/6/17.
 */
import React, {Component} from 'react';

class TableRow extends Component{
constructor(props){
    super(props);
}
    render(){
        return(
            <tr role="row" className="odd">
                <td className="sorting_1">{this.props.riskCode}</td>
                <td>{this.props.event_type}</td>
                <td>{this.props.host}</td>
                <td>{this.props.time}</td>
            </tr>
        )
    }
}
export default TableRow;
