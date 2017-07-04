/**
 * Created by sandeepj on 21/6/17.
 */
import React, {Component} from "react";
import InformationBar from './DashboardContents/InformationBar';
import EventsTable from './DashboardContents/EventsTable';
import LatestMembers from './DashboardContents/LatestMembers';
import Locations from './DashboardContents/Locations';
import Country from './DashboardContents/Country';
import api from './Utils/api'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {id: 1, number: "5484", textLight: "Registerd ", textBold: "users", type: "pink"},
                {id: 2, number: "500", textLight: "Active ", textBold: "users", type: "green"},
                {id: 3, number: "89", textLight: "Events", textBold: "", type: "blue"}
            ],
                deviceCount:'',
            usersCount:'',
            eventsCount:''
        }
    }
    componentDidMount(){
        api.getDashboardCounts()
            .then((response)=>{
                console.log(response.data);
                this.setState({
                    deviceCount:response.data.counts.deviceCount,
                    eventsCount:response.data.counts.eventCount
                })
            })
    }

    render() {
        return (
            <div >


                <div id="page-content">
                    <div className="row row-xl">

                        <div className="col-md-3 text-left">
                            {/*<!-- Begin Panel -->*/}
                            <div className="page-title">
                                <h3>Dashboard</h3>
                                <ol className="breadcrumb">
                                    <li><small><i className="fa fa-home fa-fw m-xs-r"></i>Home</small></li>
                                    <li><a href="javascript:void(0)" className="text-info"><small>Dashboard</small></a></li>
                                </ol>

                            </div>
                            {/*<!-- End Panel -->*/}
                        </div>
                        <div className="col-md-9 text-center">
                            {/*<!-- Begin Panel -->*/}
                            <div className="panel-x panel-transparent m-n">
                                <div className="column">
                                    <h1 className="txt-head">



                                        Welcome to <strong className="text-uppercase">SAFEGUARD</strong> Admin Dashboard</h1>

                                </div>
                            </div>
                            {/*<!-- End Panel -->*/}
                        </div>
                    </div>
                    <br/>
                    <div className="ui two column stackable grid">
                        <div className="five wide column">
                            <InformationBar deviceCount={this.state.deviceCount} eventsCount={this.state.eventsCount}/>
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
                </div>
            </div>
        );
    }
}
export default Dashboard;