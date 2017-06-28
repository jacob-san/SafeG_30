/**
 * Created by sandeepj on 21/6/17.
 */
import React, {Component} from "react";
import Dashboard from './Dashboard';
import ManageDevices from './ManageDevices'
class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="content-wrapper">

                <Dashboard/>
                <ManageDevices/>

            </div>
        );
    }
}
export default App;
