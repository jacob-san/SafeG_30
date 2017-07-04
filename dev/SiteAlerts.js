/**
 * Created by sandeepj on 3/7/17.
 */
import React, {Component} from 'react'
import AlertList from './SiteAlertsContents/AlertList'
import AlertListItem from './SiteAlertsContents/AlertListItem'
import AlertSearch from './SiteAlertsContents/AlertSearch'
import AlertTable from './SiteAlertsContents/AlertTable'


class SiteAlerts extends Component{
    constructor(props){
        super(props);
        this.state={
            alertItemClicked:'',
        }
        this.handleAlertClick=this.handleAlertClick.bind(this);
    }
    handleAlertClick(item){
        this.setState({
            alertItemClicked:item
        })
    }
    render(){
        return(
            <div id="page-content">

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
                                    <small>Site Alerts</small>
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


                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-12">
                        {/*<!--*/}
                            {/*Todo app container is the elements we've used to create it.*/}
                        
                            {/*It has contains two mail elements in this hierarchy*/}
                                {/*.todo-container*/}
                                    {/*.todo-header*/}
                                    {/*.todo-body*/}
                                        {/*.todo-aside*/}
                                        {/*.todo-project-content*/}
                        
                            {/*.todo-header contains the header part of the todo app.*/}
                            {/*.todo-body contains the main elements of the todo app with two other elements nested as shown above.*/}
                                {/*.todo-aside contains the navigation of each of the projects in the app*/}
                                {/*.todo-project-content contains the actuals tasks for each of the project*/}
                         {/*-->*/}

                        {/*<!-- Begin Todo Container -->*/}
                        <div className="todo-container bg-white">
                            {/*<!-- Begin Todo Header -->*/}
                            <div className="todo-header bg-primary text-white h-50 lh-50">
                                <div className="pull-left">
                                    <a href="javascript:void(0)" className="text-white hidden-md hidden-lg p-md"
                                       data-toggle-className="todo-aside-visible" data-target=".todo-aside"><i
                                        className="fa fa-bars fa-fw"></i></a>
                                    {/*<!-- Begin Todo Name -->*/}
                                    <a href="javascript:void(0)" className="text-white text-uppercase fw-thk p-md-r p-md-l m-xl-r">Alerts</a>
                                    {/*<!-- End Todo Name -->*/}
                                </div>


                                <div className="clearfix"></div>
                            </div>
                            {/*<!-- End Todo Header -->*/}

                            {/*<!-- Begin Todo Body -->*/}
                            <div className="todo-body">

                                <div className="clear"></div>
                                {/*<!-- Begin Todo Aside -->*/}
                                <div className="todo-aside">
                                    {/*<!-- Begin Todo Projects -->*/}
                                    <div className="todo-projects">
                                        <p className="text-uppercase header">Alert Details</p>
                                        {/*<div className="input-group panel-body">*/}

                                            {/*<input type="text" className="form-control input-sm" id="exampleInputAmount3"*/}
                                                   {/*placeholder="Search Alert"/>*/}
                                                {/*<div className="input-group-addon"><i className="fa fa-search"></i></div>*/}
                                        {/*</div>*/}
                                        <AlertSearch/>
                                        {/*<!-- Begin Projects List -->*/}
                                        <AlertList handleAlertClick={this.handleAlertClick}/>
                                        {/*<!-- End Projects List -->*/}
                                    </div>
                                    {/*<!-- End Todo Projects -->*/}
                                </div>
                                {/*<!-- End Todo Aside -->*/}

                                {/*<!-- Begin Todo Project Content -->*/}
                                <AlertTable alertTitle={this.state.alertItemClicked}/>
                                {/*<!-- End Todo Project Content -->*/}
                            </div>
                            {/*<!-- End Todo Body -->*/}
                        </div>
                        {/*<!-- End Todo Container -->*/}
                    </div>
                </div>

                {/*<!-- End Row -->*/}
    </div>
        )
    }
}
export default SiteAlerts;