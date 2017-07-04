/**
 * Created by sandeepj on 3/7/17.
 */
import React, {Component} from 'react';
class ScanSiteInput extends Component{
    render(){
        return(
            <form id="eventForm" method="post" className="form-horizontal">

                <div className="col-md-5 m-md-t">
                    <div className="md-group">
                        <input type="text" className="form-control" id="exampleInputUsername1" required=""/>
                        <span className="md-highlight"></span>
                        <span className="md-bar"></span>
                        <label htmlFor="exampleInputUsername1"><i className="fa m-xs-r"></i>Search</label>
                    </div>
                </div>


                <div className="col-md-2 m-md-t">

                    <button className="ui btn btn-primary w-100"> Scan Site <i className="fa fa-search fa-fw"></i>
                    </button>

                </div>
            </form>
        )
    }
}
export default ScanSiteInput;
