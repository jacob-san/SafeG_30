/**
 * Created by sandeepj on 28/6/17.
 */
import React, {Component} from "react";
import Header from './header'
import Footer from './footer'
import SideBar from './sidebar'
import DevicesTable from './ManageDeviceContent/DevicesTable'

class ManageDevices extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar-collapsed">
                <div id="page-content">
                    <Header handleNavbarClick={this.props.handleMenuClick}/>
                    <SideBar/>

                    <div className="row row-xl">

                        <div className="col-md-3 text-left">
                            {/*<!-- Begin Panel -->*/}
                            <div className="page-title">
                                <h3>Dashboard</h3>
                                <ol className="breadcrumb">
                                    <li>
                                        <small><i className="fa fa-home fa-fw m-xs-r"></i>Home</small>
                                    </li>
                                    <li><a href="javascript:void(0)" className="text-info">
                                        <small>Manage Device</small>
                                    </a></li>
                                </ol>

                            </div>
                            {/*<!-- End Panel -->*/}
                        </div>

                        <div className="col-md-9 text-right">
                            {/*<!-- Begin Panel -->*/}
                            <div className="ui justified right aligned">

                                <button className="ui btn btn-primary w-75 m-sm-r m-sm-b"> Add <i
                                    className="fa fa-plus fa-fw"></i></button>


                            </div>
                            {/*<!-- End Panel -->*/}
                        </div>
                        {/*<!-- End Panel -->*/}


                        {/*<!-- End Panel -->*/}
                    </div>

                    <DevicesTable/>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default ManageDevices;
