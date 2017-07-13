/**
 * Created by sandeepj on 3/7/17.
 */
import React, {Component} from "react";
import BlacklistSearch from './BlackListContents/BlacklistSearch';
import Blacklist_listItem from './BlackListContents/Blacklist_listItem';
import Blacklist_list from './BlackListContents/Blacklist_list';
import BlackListTable from './BlackListContents/BlackListTable';
import blackListActions from './Actions/blackListActions'


class Blacklists extends Component{
    constructor(props){
        super(props);
        this.state={
            blacklistItemClicked:''
        }
        this.handleBlacklistItemClick=this.handleBlacklistItemClick.bind(this);
    }
    handleBlacklistItemClick(item){
        this.setState({
            blacklistItemClicked:item
        })
    }
    componentDidMount(){
        blackListActions.getBlacklist()
    }
    render(){
        return(
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
                                    <small>Blacklist</small>
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
                                    <a href="javascript:void(0)" className="text-white text-uppercase fw-thk p-md-r p-md-l m-xl-r">Blacklist</a>
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

                                        <BlacklistSearch/>
                                        {/*<!-- Begin Projects List -->*/}
                                        <Blacklist_list handleBlacklistItemClick={this.handleBlacklistItemClick}/>
                                        {/*<!-- End Projects List -->*/}
                                    </div>
                                    {/*<!-- End Todo Projects -->*/}
                                </div>
                                {/*<!-- End Todo Aside -->*/}
                                
                                {/*<!-- Begin Todo Project Content -->*/}
                                <BlackListTable blacklistItemTitle={this.state.blacklistItemClicked}/>
                                {/*<!-- End Todo Project Content -->*/}
                            </div>
                            {/*<!-- End Todo Body -->*/}
                        </div>
                        {/*<!-- End Todo Container -->*/}
                    </div>
                </div>

                {/*<!-- End Row -->*/}
                
    </main>
        )
    }
}
export default Blacklists;