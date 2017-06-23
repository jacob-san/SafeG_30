/**
 * Created by sandeepj on 22/6/17.
 */
import React, {Component} from 'react';
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
                          <img src={this.props.img_src} alt="Avatar"/>
                      </div>
                      <div className="media-body">
                          <h3 className="text-white">{this.props.name}</h3>
                          <small className="text-white">{this.props.time}</small>
                      </div>
                  </div>
              </div>
            </div>
        );
    }
}
export default LatestMember;
