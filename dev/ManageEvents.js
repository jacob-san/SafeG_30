/**
 * Created by sandeepj on 30/6/17.
 */
import React, {Component} from "react";
import DatePicker from './ManageEventContents/DatePicker'
class ManageEvents extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedDay:new Date()
        }
    }

    render(){
        return(
            // <!-- Begin Page Content -->
            <main id="page-content">

                {/*<!--*/}
                  {/*Main content of the app is stored inside #page-content*/}
              {/*-->*/}
              
                {/*<!-- Begin Page Title -->*/}
              
                {/*<!-- End Page Title -->*/}
              
                {/*<!-- Begin Row -->*/}
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
                                    <small>Manage Events</small>
                                </a></li>
                            </ol>

                        </div>
                        {/*<!-- End Panel -->*/}
                    </div>
                    {/*<!-- End Panel -->*/}

                    {/*<!-- End Panel -->*/}
                </div>


                <div className="">
                    <div className="col-md-12">
                        {/*<!-- Begin Calendar -->*/}
                        <div>
                            {/*<!-- End Calendar -->*/}
                            <form id="eventForm" method="post" className="form-horizontal">

                                {/*<div className="col-md-3">*/}
                                    {/*<div className="form-group">*/}
                                        {/*<div className="date">*/}
                                            {/*<div className="input-group input-append date" id="datePicker">*/}
                                                {/*<input type="text" className="form-control" name="date"/>*/}
                                                {/*<span className="input-group-addon add-on"><span*/}
                                                    {/*className="fa fa-calendar"></span></span>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                <DatePicker className="col-md-3"/>
                                {/*<StartDate/>*/}
                                {/*<div className="col-md-3">*/}
                                    {/*<div className="form-group">*/}

                                        {/*<div className="date">*/}
                                            {/*<div className="input-group input-append date" id="datePicker2">*/}
                                                {/*<input type="text" className="form-control" name="date"/>*/}
                                                {/*<span className="input-group-addon add-on"><span*/}
                                                    {/*className="fa fa-calendar"></span></span>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}

                                <div className="col-md-2">

                                    <button className="ui btn btn-primary w-100 m-xs-t"> Submit <i className="fa fa-plus fa-fw"></i>
                                    </button>

                                </div>

                                <div className="col-md-1">
                                    <button className="btn btn-primary btn-circle"><i className="fa fa-refresh fa-fw"></i></button>
                                </div>

                                <div className="col-md-2">
                                    <div className="switch primary text-left m-md-t">
                                        <label>
                                            <span>Table</span>
                                            <input type="checkbox" checked=""/>
                                                <span className="lever"></span><span> Map</span>
                                        </label>
                                    </div>
                                </div>


                            </form>


                        </div>
                    </div>

                </div>


                {/*<!-- End Row -->*/}


            </main>
        )
    }
}
export default ManageEvents;
