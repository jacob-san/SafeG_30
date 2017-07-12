/**
 * Created by sandeepj on 21/6/17.
 */
import React, {Component} from "react";
import authActions from './Utils/authActions'
import {API_URL} from './constants/APIconstants'
import {withRouter} from 'react-router-dom'
const LogoutButton = withRouter(({history})=>(
    <div className="text-center">
        <a href="javascript:void(0)" onClick={()=>{
            UserLogout.logout(()=>history.push('/login'))
        }}><i className="fa fa-power-off"></i></a>
    </div>
))
const UserLogout={
    logout(redirect){
        authActions.userLogout()
            .then((response)=>{
                console.log(response.data);
                // history.push('/')
                redirect();
            })
    }
}
class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            UserDropDownClicked:false,
            NotificationDropdownClicked:false
        }
        this.handleUserDropdownClick=this.handleUserDropdownClick.bind(this);
        // this.logout=this.logout.bind(this);
    }

    handleUserDropdownClick(){
        this.setState({
            UserDropDownClicked:!this.state.UserDropDownClicked
        })
    }
    handleNotificationDropdownClick(){
        this.setState({
            NotificationDropdownClicked:!this.state.NotificationDropdownClicked
        })
    }

    render() {
        return (
            <div id="page-header">
                <div className="navbar-content">
                    <ul className="nav navbar-nav">
                        <li className="hidden-sm hidden-xs"><a onClick={this.props.handleNavbarClick} className="text-default"
                                                               data-toggle-className="navbar-collapsed"
                                                               data-target="body">
                            <i className ="fa fa-bars fa-fw"></i></a></li>
                    </ul>
                    <ul className="nav navbar-nav pull-right hidden-sm hidden-xs">
                        <li className="hidden-xs hidden-sm" id="header-notifications-list">
                            <a onClick={this.handleNotificationDropdownClick} className="">
                                <div className='ui inline dropdown'>
                                    <div className="text">
                                        <i className="fa fa-bullhorn fa-fw"></i>

                                    </div>
                                    <div className="menu p-md">
                                        <p className="fw-thk text-center text-uppercase ls-xs text-black">
                                            Notifications</p>
                                        <div className="item">
                                            <img className="ui avatar image" src="images/jenny.jpg"/>
                                            Jenny Hess
                                        </div>
                                        <div className="item">
                                            <img className="ui avatar image" src="images/jenny.jpg"/>
                                            Elliot Fu
                                        </div>
                                        <div className="item">
                                            <img className="ui avatar image" src="images/jenny.jpg"/>
                                            Stevie Feliciano
                                        </div>
                                        <div className="item">
                                            <img className="ui avatar image" src="images/jenny.jpg"/>
                                            Christian
                                        </div>
                                        <div className="item">
                                            <img className="ui avatar image" src="images/jenny.jpg"/>
                                            Matt
                                        </div>
                                        <div className="item">
                                            <img className="ui avatar image" src="images/jenny.jpg"/>
                                            Justen Kitsune
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className={!this.state.UserDropDownClicked? 'dropdown':'dropdown open'}>
                            <a  className="text-default" data-toggle="dropdown" onClick={()=>{
                                this.setState({
                                    UserDropDownClicked:!this.state.UserDropDownClicked
                                })
                            }}>
                                <span className="m-sm-r">{this.props.profile.fullName}</span><i className="fa fa-angle-down"></i>
                            </a>
                            <ul className="profile-dropdown dropdown-menu dropdown-menu-right" role="menu">
                                <li role="presentation">

                                    <div className="profile-menu-container">
                                        <div className="media">
                                            <div className="profile-image pull-left">
                                                <img src={`${API_URL}${this.props.profile.profileImageURL}`} alt="Avatar" height="64" width="64"
                                                     className="img-circle"/>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="fw-thk m-n">{this.props.profile.fullName}</h4>
                                                <p className="fs-sm m-xs-t">Director at <strong><a
                                                    href="javascript:void(0)" className="text-info">Absolut
                                                    Pixels</a></strong></p>
                                                <button className="btn btn-success w-100 text-uppercase fs-sm">Connect
                                                    <i
                                                        className="fa fa-caret-down"></i></button>
                                            </div>
                                        </div>
                                        <div className="profile-options">
                                            <div className="text-center">
                                                <a href="javascript:void(0)"><i className="fa fa-user fa-fw"></i></a>
                                            </div>
                                            <div className="text-center">
                                                <a href="javascript:void(0)"><i className="fa fa-cog fa-fw"></i></a>
                                            </div>
                                            {/*<div className="text-center">*/}
                                                {/*<a href="javascript:void(0)"><i className="fa fa-power-off" onClick={this.logout}></i></a>*/}
                                            {/*</div>*/}
                                            <LogoutButton/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Header;