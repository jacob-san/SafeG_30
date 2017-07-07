/**
 * Created by sandeepj on 22/6/17.
 */
import React, {Component} from "react";
import LatestMember from './LatestMember';
class LatestMembers extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="ui four column stackable grid dis-table">
                    {this.props.latestUsers.map((memb, index)=>{
                        return(
                            <LatestMember key={index} name={memb.fullName} time={memb.userSince} img_src={'http://10.10.1.5:5050'+memb.profileImageURL}/>
                        );
                    })}
                <div className="ui right aligned container m-xl-b"><a href="javascript:void(0)" className="text-info">VIEW
                    ALL USERS</a></div>
            </div>
        );
    }
}
export default LatestMembers;