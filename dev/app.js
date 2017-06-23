/**
 * Created by sandeepj on 21/6/17.
 */
import React, {Component} from "react";
import SideBar from './sidebar';
import Header from './header';
import Dashboard from './Dashboard';
import Footer from './footer';
class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="content-wrapper">
                <SideBar/>
                <Header/>
                <Dashboard/>
                <Footer/>
            </div>
        );
    }
}
export default App;
