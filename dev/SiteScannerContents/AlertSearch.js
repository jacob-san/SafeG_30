/**
 * Created by sandeepj on 3/7/17.
 */
import React, {Component} from 'react';
class AlertSearch extends Component{
    render(){
        return(
            <div className="input-group panel-body">

                <input type="text" className="form-control input-sm" id="exampleInputAmount3"
                       placeholder="Search Alert"/>
                <div className="input-group-addon"><i className="fa fa-search"></i></div>
            </div>
        )
    }
}
export default AlertSearch;