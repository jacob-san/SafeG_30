/**
 * Created by sandeepj on 21/6/17.
 */
import React, {Component} from "react";
var Reactrouter = require('react-router-dom');
var Router = Reactrouter.BrowserRouter;
var Route = Reactrouter.Route;
var Switch = Reactrouter.Switch;
import Dashboard from './Dashboard';
import ManageDevices from './ManageDevices'
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            navbarCollapsed:true
        }
        this.handleMenuClick=this.handleMenuClick.bind(this);
    }
    handleMenuClick(){
        this.setState({
            navbarCollapsed:!this.state.navbarCollapsed
        })
    }
    render(){

        console.log('********navbarCollapsed: '+this.state.navbarCollapsed);

        return(
            <div className={this.state.navbarCollapsed?'navbar-collapsed':''}>
            <div className="content-wrapper">

                    {/*<Dashboard handleMenuClick={this.handleMenuClick}/>*/}
                    <ManageDevices handleMenuClick={this.handleMenuClick}/>


            </div>
            </div>

        );
    }
}
export default App;
