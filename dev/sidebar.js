import React, {Component} from "react";
class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="page-sidebar">

                {/*<!-- Begin Scrollbar Padder -->*/}
                <div className="scrollbar-padder">
                    {/*<!-- Begin Sidebar Container -->*/}
                    <div className="sidebar-container">
                        {/*<!-- Begin Sidebar Header -->*/}
                        <div className="sidebar-header">
                            <a href="index.html" className="text-uppercase fs-lg"><strong className="header-short-name text-success ls-xs fw-thkr">S</strong><span className="ls-xs fw-thk">afeguard</span></a>
                        </div>
                        {/*<!-- End Sidebar Header -->*/}

                        {/*<!-- Begin Sidebar Avatar -->*/}

                        {/*<!-- End Sidebar Avatar -->*/}

                        {/*<!-- Begin Sidebar Navigation -->*/}
                        <ul className="sidebar-navigation ul-clear">

                            {/*<!-- Begin Dashboard -->*/}
                            <li className="open"><a href="index.html"><i className="fa fa-home fa-fw"></i><span>Dashboard</span></a></li>
                            {/*<!-- End Dashboard -->*/}

                            {/*<!-- Begin Mail -->*/}
                            <li><a href="manage-device.html"><i className="fa fa-tablet  fa-fw"></i><span>Manage Devices</span></a></li>
                            {/*<!-- End Mail -->*/}


                            {/*<!-- Begin Calendar -->*/}
                            <li><a href="manage-events.html"><i className="fa fa-calendar fa-fw"></i><span>Manage Events</span></a></li>
                            {/*<!-- End Calendar -->*/}

                            <li><a href="site-scan.html"><i className="fa fa-search fa-fw"></i><span>Site Scanner</span></a></li>

                            <li><a href="site-alerts.html"><i className="fa fa-bell fa-fw"></i><span>Site Alerts</span></a></li>

                            <li><a href="black-list.html"><i className="fa fa-list-alt fa-fw"></i><span>Black List</span></a></li>

                        </ul>
                        {/*<!-- End Sidebar Navigation -->*/}

                        {/*<!-- Begin Sidebar Stats -->*/}

                        {/*<!-- End Sidebar Stats -->*/}

                        {/*<!-- Begin Sidebar Footer -->*/}
                        <div className="sidebar-footer">

                        </div>
                        {/*<!-- End Sidebar Footer -->*/}
                    </div>
                    {/*<!-- End Sidebar Container -->*/}
                </div>
                {/*<!-- Begin Scrollbar Padder -->*/}
            </div>
        );
    }
}
export default SideBar;