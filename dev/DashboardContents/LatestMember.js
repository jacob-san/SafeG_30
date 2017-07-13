/**
 * Created by sandeepj on 22/6/17.
 */
import React, {Component} from 'react';
import {API_URL} from '../constants/APIconstants'
class LatestMember extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="column">
              <div className="mini-user-widget  grey-button">
                  <div className="media">
                      <div className="media-left">
                          {/*<img src={`${API_URL} ${this.props.memb.profileImageURL}`} alt="Avatar"/>*/}
                          <img src={`${API_URL}${this.props.memb.profileImageURL}`} alt="Avatar"/>
                      </div>
                      <div className="media-body">
                          <h3 className="text-white">{this.props.memb.fullName}</h3>
                          <small className="text-white">{this.props.memb.userSince}</small>
                      </div>
                  </div>
              </div>
            </div>
        );
    }
}
export default LatestMember;
