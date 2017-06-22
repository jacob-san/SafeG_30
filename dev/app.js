/**
 * Created by sandeepj on 21/6/17.
 */
import React, {Component} from "react";
import SideBar from './sidebar';
import Header from './header';
import Main from './main_content';
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
                <Main/>
                <Footer/>
            </div>
        );
    }
}
export default App;
