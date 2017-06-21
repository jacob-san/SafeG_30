/**
 * Created by sandeepj on 21/6/17.
 */
import React, {Component} from "react";

class Main extends Component{
    render(){
        return(
            <div>
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


                                        Welcome to <strong className="text-uppercase">SAFEGUARD</strong> Admin Dashboard</h1>

                                </div>
                            </div>

                        </div>
                    </div>
                    <br/>

                        <div className="ui two column stackable grid">
                            <div className="five wide column">

                                <div className="column">
                                    <div className="mini-stats-container mini-stats-pink">
                                        <div className="mini-stats-content">
                                            <h1 className="m-n fw-thk text-white">5484</h1>
                                            <small className="text-uppercase text-white">Registerd <strong>Device </strong></small>
                                        </div>
                                        <div className="mini-stats-icon">
                                            <i className="fa fa-mobile fa-5x"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="mini-stats-container mini-stats-violet">
                                        <div className="mini-stats-content">
                                            <h1 className="m-n fw-thk text-white">500</h1>
                                            <small className="text-uppercase text-white">Active <strong>Users </strong></small>
                                        </div>
                                        <div className="mini-stats-icon">
                                            <i className="fa fa-user fa-5x"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="mini-stats-container mini-stats-green">
                                        <div className="mini-stats-content">
                                            <h1 className="m-n fw-thk text-white left floated">89</h1>
                                            <div className="fw-right">
                                                <h1 className="fw-thk text-white">89 <span>Existng Active</span></h1>
                                                <h1 className="fw-thk text-white">9 <span>Registered Device</span></h1>
                                            </div>
                                            <small className="text-uppercase text-white">Events</small>
                                        </div>

                                        <div className="mini-stats-icon">
                                            <i className="fa fa-calendar fa-5x"></i>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="eleven wide column bg-color">

                                <div className="column">

                                    <p></p>

                                    <div className="col-md-12 ">
                                        <div className="panel-transparent">
                                            <div className="">


                                                <div id="datatable-tools_wrapper" className="dataTables_wrapper no-footer">
                                                    <div className="pull-left">
                                                        <p className="header text-uppercase">Latest Alert Event</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. tenetur. Quas.</p>
                                                    </div>
                                                    <div className="DTTT_container"></div>
                                                    <div className="clear"></div>

                                                    <div id="datatable-tools_filter" className="dataTables_filter pull-right"><label>Search:<input
                                                        type="search" className="" placeholder=""
                                                        aria-controls="datatable-tools"/></label></div>

                                                    <div className="h-250 table-responsive col-md-12">
                                                        <table id="datatable-tools" className="table dataTable no-footer" role="grid"
                                                               aria-describedby="datatable-tools_info">
                                                            <thead>
                                                            <tr role="row">
                                                                <th className="sorting_asc" tabIndex="0" aria-controls="datatable-tools"
                                                                    rowSpan="1" colSpan="1" aria-sort="ascending"
                                                                    aria-label="Name: activate to sort column descending"
                                                                    style={{width: '272px'}}>RISK CODE
                                                                </th>
                                                                <th className="sorting" tabIndex="0" aria-controls="datatable-tools"
                                                                    rowSpan="1" colSpan="1"
                                                                    aria-label="Position: activate to sort column ascending"
                                                                    style={{width: '404px'}}>EVENT TYPE
                                                                </th>
                                                                <th className="sorting" tabIndex="0" aria-controls="datatable-tools"
                                                                    rowSpan="1" colSpan="1"
                                                                    aria-label="Office: activate to sort column ascending"
                                                                    style={{width: '214px'}}>HOST
                                                                </th>
                                                                <th className="sorting" tabIndex="0" aria-controls="datatable-tools"
                                                                    rowSpan="1" colSpan="1"
                                                                    aria-label="Salary: activate to sort column ascending"
                                                                    style={{width: '182px'}}>TIME
                                                                </th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>

                                                            <tr role="row" className="odd">
                                                                <td className="sorting_1">1</td>
                                                                <td>ALERT_SITE_TYPE</td>
                                                                <td>http://mypeeps.me</td>
                                                                <td>FRI Feb 26 2016</td>
                                                            </tr>
                                                            <tr role="row" className="even">
                                                                <td className="sorting_1">2</td>
                                                                <td>ALERT_SITE_TYPE</td>
                                                                <td>http://mypeeps.me</td>
                                                                <td>FRI Feb 26 2016</td>
                                                            </tr>
                                                            <tr role="row" className="odd">
                                                                <td className="sorting_1">3</td>
                                                                <td>ALERT_SITE_TYPE</td>
                                                                <td>http://mypeeps.me</td>
                                                                <td>FRI Feb 26 2016</td>
                                                            </tr>
                                                            <tr role="row" className="even">
                                                                <td className="sorting_1">4</td>
                                                                <td>ALERT_SITE_TYPE</td>
                                                                <td>http://mypeeps.me</td>
                                                                <td>FRI Feb 26 2016</td>
                                                            </tr>
                                                            <tr role="row" className="odd">
                                                                <td className="sorting_1">Brenden Wagner</td>
                                                                <td>Software Engineer</td>
                                                                <td>San Francisco</td>
                                                                <td>$206,850</td>
                                                            </tr>
                                                            <tr role="row" className="even">
                                                                <td className="sorting_1">Brielle Williamson</td>
                                                                <td>Integration Specialist</td>
                                                                <td>New York</td>
                                                                <td>$372,000</td>
                                                            </tr>
                                                            <tr role="row" className="odd">
                                                                <td className="sorting_1">Bruno Nash</td>
                                                                <td>Software Engineer</td>
                                                                <td>London</td>
                                                                <td>$163,500</td>
                                                            </tr>
                                                            <tr role="row" className="even">
                                                                <td className="sorting_1">Caesar Vance</td>
                                                                <td>Pre-Sales Support</td>
                                                                <td>New York</td>
                                                                <td>$106,450</td>
                                                            </tr>
                                                            <tr role="row" className="odd">
                                                                <td className="sorting_1">Cara Stevens</td>
                                                                <td>Sales Assistant</td>
                                                                <td>New York</td>
                                                                <td>$145,600</td>
                                                            </tr>
                                                            <tr role="row" className="even">
                                                                <td className="sorting_1">Cedric Kelly</td>
                                                                <td>Senior Javascript Developer</td>
                                                                <td>Edinburgh</td>
                                                                <td>$433,060</td>
                                                            </tr>

                                                            <tr role="row" className="even">
                                                                <td className="sorting_1">Cedric Kelly</td>
                                                                <td>Senior Javascript Developer</td>
                                                                <td>Edinburgh</td>
                                                                <td>$433,060</td>
                                                            </tr>

                                                        <tr role="row" className="even">
                                                            <td className="sorting_1">Cedric Kelly</td>
                                                            <td>Senior Javascript Developer</td>
                                                            <td>Edinburgh</td>
                                                            <td>$433,060</td>
                                                        </tr>

                                                    <tr role="row" className="even">
                                                        <td className="sorting_1">Cedric Kelly</td>
                                                        <td>Senior Javascript Developer</td>
                                                        <td>Edinburgh</td>
                                                        <td>$433,060</td>
                                                    </tr>

                                                <tr role="row" className="even">
                                                    <td className="sorting_1">Cedric Kelly</td>
                                                    <td>Senior Javascript Developer</td>
                                                    <td>Edinburgh</td>
                                                    <td>$433,060</td>
                                                </tr>

                                            <tr role="row" className="even">
                                                <td className="sorting_1">Cedric Kelly</td>
                                                <td>Senior Javascript Developer</td>
                                                <td>Edinburgh</td>
                                                <td>$433,060</td>
                                            </tr>

                                        <tr role="row" className="even">
                                            <td className="sorting_1">Cedric Kelly</td>
                                            <td>Senior Javascript Developer</td>
                                            <td>Edinburgh</td>
                                            <td>$433,060</td>
                                        </tr>

                                    <tr role="row" className="even">
                                        <td className="sorting_1">Cedric Kelly</td>
                                        <td>Senior Javascript Developer</td>
                                        <td>Edinburgh</td>
                                        <td>$433,060</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="dataTables_info" id="datatable-tools_info" role="status"
                             aria-live="polite">Showing 1 to 10 of 57 entries
                        </div>
                        <div className="dataTables_paginate paging_simple_numbers"
                             id="datatable-tools_paginate"><a className="paginate_button previous disabled"
                                                              aria-controls="datatable-tools"
                                                              data-dt-idx="0" tabIndex="0"
                                                              id="datatable-tools_previous">Previous</a><span><a
                            className="paginate_button current" aria-controls="datatable-tools"
                            data-dt-idx="1" tabIndex="0">1</a><a className="paginate_button "
                                                                 aria-controls="datatable-tools"
                                                                 data-dt-idx="2" tabIndex="0">2</a><a
                            className="paginate_button " aria-controls="datatable-tools" data-dt-idx="3"
                            tabIndex="0">3</a><a className="paginate_button "
                                                 aria-controls="datatable-tools" data-dt-idx="4"
                                                 tabIndex="0">4</a><a className="paginate_button "
                                                                      aria-controls="datatable-tools"
                                                                      data-dt-idx="5" tabIndex="0">5</a><a
                            className="paginate_button " aria-controls="datatable-tools" data-dt-idx="6"
                            tabIndex="0">6</a></span><a className="paginate_button next"
                                                        aria-controls="datatable-tools" data-dt-idx="7"
                                                        tabIndex="0" id="datatable-tools_next">Next</a>
                        </div>
            </div>
    </div>
    </div>
    </div>





        </div>
        </div>


        </div>

        <div className="row row-xl">

        <div className="col-md-12">

        <div className="panel-x panel-transparent">

        <p className="header text-uppercase">LATEST MEMBERS</p>

        </div>

        </div>

        </div>





        <div className="ui four column stackable grid dis-table">


            <div className="column">
            <div className="mini-user-widget  grey-button">
            <div className="media">
            <div className="media-left">
            <img src="images/avatar5.png" alt="Avatar"/>
            </div>
            <div className="media-body">
            <h3 className="text-white">Louis Bennett</h3>
        <small className="text-white">2 days ago</small>


        </div>
        </div>
        </div>

        </div>


        <div className="column">
            <div className="mini-user-widget grey-button">
            <div className="media">
            <div className="media-left">
            <img src="images/avatar5.png" alt="Avatar"/>
            </div>
            <div className="media-body">
            <h3 className="text-white">Louis Bennett</h3>
        <small className="text-white">2 days ago</small>


        </div>
        </div>
        </div>
        </div>

        <div className="column">
            <div className="mini-user-widget grey-button">
            <div className="media">
            <div className="media-left">
            <img src="images/avatar5.png" alt="Avatar"/>
            </div>
            <div className="media-body">
            <h3 className="text-white">Louis Bennett</h3>
        <small className="text-white">2 days ago</small>


        </div>
        </div>
        </div>
        </div>

        <div className="column">
            <div className="mini-user-widget grey-button">
            <div className="media">
            <div className="media-left">
            <img src="images/avatar5.png" alt="Avatar"/>
            </div>
            <div className="media-body">
            <h3 className="text-white">Louis Bennett</h3>
        <small className="text-white">2 days ago</small>


        </div>
        </div>
        </div>
        </div>


        <div className="column">
            <div className="mini-user-widget grey-button">
            <div className="media">
            <div className="media-left">
            <img src="images/avatar5.png" alt="Avatar"/>
            </div>
            <div className="media-body">
            <h3 className="text-white">Louis Bennett</h3>
        <small className="text-white">2 days ago</small>


        </div>
        </div>
        </div>
        </div>
        <div className="column">
            <div className="mini-user-widget grey-button">
            <div className="media">
            <div className="media-left">
            <img src="images/avatar5.png" alt="Avatar"/>
            </div>
            <div className="media-body">
            <h3 className="text-white">Louis Bennett</h3>
        <small className="text-white">2 days ago</small>


        </div>
        </div>
        </div>
        </div>
        <div className="column">
            <div className="mini-user-widget grey-button">
            <div className="media">
            <div className="media-left">
            <img src="images/avatar5.png" alt="Avatar"/>
            </div>
            <div className="media-body">
            <h3 className="text-white">Louis Bennett</h3>
        <small className="text-white">2 days ago</small>


        </div>
        </div>
        </div>
        </div>
        <div className="column">
            <div className="mini-user-widget m-xl-b grey-button">
            <div className="media">
            <div className="media-left">
            <img src="images/avatar5.png" alt="Avatar"/>
            </div>
            <div className="media-body">
            <h3 className="text-white">Louis Bennett</h3>
        <small className="text-white">2 days ago</small>

        </div>
        </div>
        </div>
        </div>
        <div className="ui middle aligned column centered grid">
            <button className=" btn btn-black w-175 p-sm text-uppercase fs-lg ls-xs fw-thk btn-rounded">VIEW ALL USERS
        </button>
        </div>
        </div>

        <div className="ui two column stackable grid">
            <div className="ten wide column z-ind-new">
            <div className="panel-x panel-transparent">

        <div className="panel-body">
            <p className="header text-uppercase">Locations
            </p>
        <div id="dashboard-map">
            <div id="map">
            </div>
            </div>
        </div>
        </div>

        </div>
        <div className="six wide column">
            <div className="panel-x panel-transparent">

        <div className="panel-body none-padding">


            <div className="pull-left header text-uppercase"><strong>Country</strong></div>
            <div className="header text-uppercase pull-right"><strong>Events Count</strong></div>
        </div>


        <div className="ui vertical menu">
            <div className="item">
            India <span className="ui label red">12</span>
            </div>
            <div className="item">
            USA <span className="ui label orange">5</span>
            </div>
            <div className="item">
            Australia <span className="ui label olive">3</span>
            </div>
            <div className="item">
            Brazil <span className="ui label green">4</span>
            </div>
            <div className="item">
            BTurkey<span className="ui label blue">8</span>
            </div>
            <div className="item">
            Canada <span className="ui label brown">9</span>
            </div>
            <div className="item">
            Argentina <span className="ui label teal">2</span>
            </div>
            </div>

            </div>

            </div>

            </div>


            </main>
            </div>
        );
    }
}
export default Main;