/**
 * Created by sandeepj on 21/6/17.
 */
import React, {Component} from "react";
import LeftInfoButtonRow from './main-sub/leftInfoButtonRow'
import Table from './main-sub/table';
import LatestMember from './main-sub/latestMembers'

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns:[
                {number:"5484",textLight:"Registerd ",textBold:"users", type:"pink"},
                {number:"500",textLight:"Active ",textBold:"users", type:"green"},
                {number:"89",textLight:"Events",textBold:"", type:"blue"}
            ],
            latestmemb:[
                {name:"Louis Bennett", time: "2 days ago", img_src:"images/avatar5.png"},
                {name:"Louis Bennett", time: "2 days ago", img_src:"images/avatar5.png"},
                {name:"Louis Bennett", time: "2 days ago", img_src:"images/avatar5.png"},
                {name:"Louis Bennett", time: "2 days ago", img_src:"images/avatar5.png"},
                {name:"Louis Bennett", time: "2 days ago", img_src:"images/avatar5.png"},
                {name:"Louis Bennett", time: "2 days ago", img_src:"images/avatar5.png"},
                {name:"Louis Bennett", time: "2 days ago", img_src:"images/avatar5.png"},
                {name:"Louis Bennett", time: "2 days ago", img_src:"images/avatar5.png"},

            ]


        }
    }
    render() {
        return (
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


                                        Welcome to <strong className="text-uppercase">SAFEGUARD</strong> Admin Dashboard
                                    </h1>

                                </div>
                            </div>

                        </div>
                    </div>
                    <br/>

                    <div className="ui two column stackable grid">
                        <div className="five wide column">

                            {this.state.columns.map((col)=>{
                            return(<LeftInfoButtonRow number={col.number} textLight={col.textLight} textBold={col.textBold} type={col.type}/>);
                            })}


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
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                        tenetur. Quas.</p>
                                                </div>
                                                <div className="DTTT_container"></div>
                                                <div className="clear"></div>

                                                <div id="datatable-tools_filter"
                                                     className="dataTables_filter pull-right"><label>Search:<input
                                                    type="search" className="" placeholder=""
                                                    aria-controls="datatable-tools"/></label></div>


                                                <Table/>

                                                <div className="dataTables_info" id="datatable-tools_info" role="status"
                                                     aria-live="polite">Showing 1 to 10 of 57 entries
                                                </div>
                                                <div className="dataTables_paginate paging_simple_numbers"
                                                     id="datatable-tools_paginate"><a
                                                    className="paginate_button previous disabled"
                                                    aria-controls="datatable-tools"
                                                    data-dt-idx="0" tabIndex="0"
                                                    id="datatable-tools_previous">Previous</a><span><a
                                                    className="paginate_button current" aria-controls="datatable-tools"
                                                    data-dt-idx="1" tabIndex="0">1</a><a className="paginate_button "
                                                                                         aria-controls="datatable-tools"
                                                                                         data-dt-idx="2"
                                                                                         tabIndex="0">2</a><a
                                                    className="paginate_button " aria-controls="datatable-tools"
                                                    data-dt-idx="3"
                                                    tabIndex="0">3</a><a className="paginate_button "
                                                                         aria-controls="datatable-tools" data-dt-idx="4"
                                                                         tabIndex="0">4</a><a
                                                    className="paginate_button "
                                                    aria-controls="datatable-tools"
                                                    data-dt-idx="5" tabIndex="0">5</a><a
                                                    className="paginate_button " aria-controls="datatable-tools"
                                                    data-dt-idx="6"
                                                    tabIndex="0">6</a></span><a className="paginate_button next"
                                                                                aria-controls="datatable-tools"
                                                                                data-dt-idx="7"
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

                            {this.state.latestmemb.map((memb)=>{
                                return(
                                    <LatestMember name={memb.name} time={memb.time} img_src={memb.img_src}/>
                                );
                            })}

                        </div>



                        <div className="ui middle aligned column centered grid">
                            <button className=" btn btn-black w-175 p-sm text-uppercase fs-lg ls-xs fw-thk btn-rounded">
                                VIEW ALL USERS
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
                                    <div className="header text-uppercase pull-right"><strong>Events Count</strong>
                                    </div>
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