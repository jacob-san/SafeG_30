/**
 * Created by sandeepj on 21/6/17.
 */
import React, {Component} from "react";
import SideBar from './sidebar';
import Header from './header';
import Footer from './footer';
import InformationBar from './DashboardContents/InformationBar';
import EventsTable from './DashboardContents/EventsTable';
import LatestMembers from './DashboardContents/LatestMembers';
import Locations from './DashboardContents/Locations';
import Country from './DashboardContents/Country';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {id: 1, number: "5484", textLight: "Registerd ", textBold: "users", type: "pink"},
                {id: 2, number: "500", textLight: "Active ", textBold: "users", type: "green"},
                {id: 3, number: "89", textLight: "Events", textBold: "", type: "blue"}
            ],
            sideBarVisible:false
        }
        this.handleNavbarClick = this.handleNavbarClick.bind(this);
    }
    handleNavbarClick(){
        this.setState({sideBarVisible:!this.state.sideBarVisible});
    }
    render() {
        return (
            <div className={this.state.sideBarVisible?'':'navbar-collapse'}>
                <SideBar sideBarVisible={this.state.sideBarVisible}/>
                <Header handleNavbarClick={this.handleNavbarClick}/>
                <Footer/>
                <main id="page-content">
                    <div className="page-title">
                        <h3>Dashboard</h3>
                        <ol className="breadcrumb">
                            <li>
                                <small><i className="fa fa-home fa-fw m-xs-r"></i>Home</small>
                            </li>
                            <li><a href="javascript:void(0)" className="text-info">
                                <small>Dashboard</small>
                            </a></li>
                        </ol>
                    </div>
                    <div className="row row-xl">
                        <div className="col-md-12 text-center">
                            <div className="panel-x panel-transparent m-n">
                                <div className="column">
                                    <h1 className="txt-head">
                                        Welcome to <strong className="text-uppercase">SAFEGUARD</strong> Admin Dashboard
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="ui two column stackable grid">
                        <div className="five wide column">
                            {this.state.columns.map((col) => {
                                return (<InformationBar key={col.id} number={col.number} textLight={col.textLight}
                                                        textBold={col.textBold} type={col.type}/>);
                            })}
                        </div>
                        <EventsTable/>
                    </div>
                    <div className="row row-xl">
                        <div className="col-md-12">
                            <div className="panel-x panel-transparent">
                                <p className="header text-uppercase">LATEST MEMBERS</p>
                            </div>
                        </div>
                    </div>
                    <LatestMembers/>
                    <div className="ui two column stackable grid">
                        <Locations/>
                        <Country/>
                    </div>
                </main>
            </div>
        );
    }
}
export default Dashboard;