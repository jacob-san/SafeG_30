/**
 * Created by sandeepj on 23/6/17.
 */
import React, {Component} from 'react';
class Locations extends Component{
    render(){
        return(
            <div className="ten wide column z-ind-new">
                <div className="panel-x panel-transparent">
                    <div className="panel-body">
                        <p className="header text-uppercase">Locations
                        </p>
                        <div id="dashboard-map">
                            <div id="map">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Locations;