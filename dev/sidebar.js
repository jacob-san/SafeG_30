import React, {Component} from "react";
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

class SideBar extends Component{
    constructor(props){
        super(props);
        this.state={visible:false};
    }

    render(){
        return(
            <div id="page-sidebar">

                <div className="scrollbar-padder">

                    <div className="sidebar-container">

                        <div className="sidebar-header">
                            <a href="index.html" className="text-uppercase fs-lg"><strong
                                className="header-short-name text-success ls-xs fw-thkr">S</strong><span className="ls-xs fw-thk">afeguard</span></a>
                        </div>

                        {/*<ul className="sidebar-navigation ul-clear">*/}


                            {/*<li className="open"><a href="javascript:void(0)"><i className="fa fa-home fa-fw"></i><span>Dashboard</span></a>*/}
                            {/*</li>*/}



                            {/*<li><a href="#"><i className="fa fa-tablet  fa-fw"></i><span>Manage Device</span></a></li>*/}



                            {/*<li><a href="#"><i className="fa fa-user fa-fw"></i><span>Manage User</span></a></li>*/}



                            {/*<li><a href="#"><i className="fa fa-calendar fa-fw"></i><span>Manage Events</span></a></li>*/}


                            {/*<li><a href="#"><i className="fa fa-search fa-fw"></i><span>Site Scanner</span></a></li>*/}

                            {/*<li><a href="#"><i className="fa fa-bell fa-fw"></i><span>Site Alerts</span></a></li>*/}

                            {/*<li><a href="#"><i className="fa fa-list-alt fa-fw"></i><span>Black List</span></a></li>*/}

                        {/*</ul>*/}


                                <Menu.Item name='home'>
                                    <i className="fa fa-home fa-fw"></i><span>Dashboard</span>
                                </Menu.Item>
                                <Menu.Item name='gamepad'>
                                    <Icon name='gamepad' />
                                    Games
                                </Menu.Item>
                                <Menu.Item name='camera'>
                                    <Icon name='camera' />
                                    Channels
                                </Menu.Item>




                        <div className="sidebar-footer">

                        </div>

                    </div>

                </div>

            </div>

        );
    }
}

export default SideBar;