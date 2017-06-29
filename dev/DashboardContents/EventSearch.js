/**
 * Created by sandeepj on 23/6/17.
 */
import React, {Component} from 'react';
class EventSearch extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="datatable-tools_filter" className="dataTables_filter pull-right"><label>Search:<input
                type="search" className="" placeholder=""
                aria-controls="datatable-tools"/></label></div>

        )
    }
}
export default EventSearch;