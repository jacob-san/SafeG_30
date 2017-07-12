/**
 * Created by sandeepj on 21/6/17.
 */
import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
    Switch
} from 'react-router-dom'
import Dashboard from './Dashboard';
import Header from './header';
import SideBar from './sidebar';
import Footer from './footer';
import ManageDevices from './ManageDevices'
import ManageEvents from './ManageEvents'
import SiteScanner from './SiteScanner'
import SiteAlerts from './SiteAlerts'
import Blacklists from './Blacklists'
import Login from './Login'
import SignUp from './SignUp'
import authActions from './Utils/authActions'
import dashboardActions from './Utils/dashboardActions'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarCollapsed: true,
            isLoggedIn:false,
            profile:''
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
        // this.validateToken = this.validateToken.bind(this);
    }
    componentDidMount(){
        dashboardActions.fetchProfile()
            .then((response)=>{
                this.setState({
                    profile:response.data
                })
                console.log(response.data)
            })
    }

    handleMenuClick() {
        this.setState({
            navbarCollapsed: !this.state.navbarCollapsed
        })
    }
    // validateToken(){
    //     authActions.validateAuthToken()
    //         .then((response)=>{
    //             if(response.data.status==="success"){
    //                 this.setState({
    //                     isLoggedIn:true
    //                 })
    //                 return true
    //             }
    //             return false
    //         })
    // }
    render() {
        console.log("LoggedIn:***"+this.state.isLoggedIn);
        return (
        <Router>
            <div className={this.state.navbarCollapsed ? 'navbar-collapsed' : ''}>
                <div className="content-wrapper">
                    {/*<Login/>*/}
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/login" component={Login}/>
                    <Header handleNavbarClick={this.handleMenuClick} profile={this.state.profile}/>
                    <SideBar/>
                    <Switch>
                        <PrivateRoute exact path="/" component={Dashboard}/>
                        {/*<Route exact path="/" render={()=>{*/}
                             {/*this.state.isLoggedIn?(<Redirect to="/login"/>):(<Dashboard/>)*/}
                        {/*}}/>*/}
                        <PrivateRoute path="/manage-device" component={ManageDevices}/>
                        <PrivateRoute path="/manage-events" component={ManageEvents}/>
                        <PrivateRoute path="/site-scanner" component={SiteScanner}/>
                        <PrivateRoute path="/site-alerts" component={SiteAlerts}/>
                        <PrivateRoute path="/black-list" component={Blacklists}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
        )
    }
}
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
       authActions.validateAuthToken() ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        )
    )}/>
)
export default App;
