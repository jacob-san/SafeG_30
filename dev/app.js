/**
 * Created by sandeepj on 21/6/17.
 */
import React, {Component} from "react";
var Reactrouter = require('react-router-dom');
var Router = Reactrouter.BrowserRouter;
var Route = Reactrouter.Route;
var Switch = Reactrouter.Switch;
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
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarCollapsed: true,
            isLoggedIn:false
        }
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.validateToken = this.validateToken.bind(this);
    }

    handleMenuClick() {
        this.setState({
            navbarCollapsed: !this.state.navbarCollapsed
        })
    }
    validateToken(){
        authActions.validateAuthToken()
            .then((response)=>{
                if(response.data.status==="success"){
                    this.setState({
                        isLoggedIn:true
                    })
                }
            })
    }
    // componentDidMount(){
    //    this.isLoggedIn()
    // }
    render() {
        console.log("LoggedIn:***"+this.state.isLoggedIn)
        return (
        <Router>
            <div className={this.state.navbarCollapsed ? 'navbar-collapsed' : ''}>
                <div className="content-wrapper">
                    {/*<Login/>*/}
                    {/*<Route path="/login" component={Login}/>*/}
                    <Header handleNavbarClick={this.handleMenuClick}/>
                    <SideBar/>
                    <Switch>
                        <Route exact path="/" component={Dashboard}/>
                        {/*<Route exact path="/" render={()=>{*/}
                             {/*this.state.isLoggedIn?(<Redirect to="/login"/>):(<Dashboard/>)*/}
                        {/*}}/>*/}
                        <Route path="/manage-device" component={ManageDevices}/>
                        <Route path="/manage-events" component={ManageEvents}/>
                        <Route path="/site-scanner" component={SiteScanner}/>
                        <Route path="/site-alerts" component={SiteAlerts}/>
                        <Route path="/black-list" component={Blacklists}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
        )
    }
}
const SignIn = () => (
    <Route path="/login" component={Login}/>
)
const Main = () => (
    <main>

    </main>
)
export default App;
